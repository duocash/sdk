import {Provider as EthersProvider} from "@ethersproject/abstract-provider";
import {BigNumber} from "@ethersproject/bignumber";

import fetch from 'cross-fetch';
import {Lockers} from "../Lockers";
import {Locker} from "../Locker";

const subgraphsUris: { [chainId: number]: string } = {
  // Mainnet
  1: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
  // Rinkeby
  4: "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-rinkeby",
  // Polygon
  137: "https://api.thegraph.com/subgraphs/name/muranox/uniswap-v3-matic"
}

export class UniswapV3Helper {
  supportedChains = [
    /** Mainnets **/
    1, // Ethereum
    137, // Polygon

    /** Testnets **/
    4, // Rinkeby
  ];

  lockers: Lockers
  uri: string

  constructor(provider: EthersProvider, chainId: number) {
    this.uri = subgraphsUris[chainId];
    this.lockers = new Lockers(provider, chainId)
  }

  /**
   * Will fetch the amount of liquidity that is in the pool and what amount of it is locked and in which lockers
   *
   * @param poolAddress a UniswapV3 pool address
   * @param options
   */
  async poolInfo(poolAddress: string, options?: PoolInfoOptions): Promise<PoolInfo> {
    // Uni subgraphs index all addresses lowercase
    poolAddress = poolAddress.toLowerCase()

    const poolQuery = await fetch(this.uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query FetchPoolAndTopPositions($pool: String, $count: Int) {
          pool(id: $pool){
            liquidity
          },
          positions(where: {pool: $pool, liquidity_gt: 0}, orderBy: "liquidity", orderDirection: "desc", first: $count) {
            id,
            liquidity,
            owner
          }
        }
      `,
        variables: {
          pool: poolAddress,
          count: options && options.nOfPositions ? options.nOfPositions : 30
        },
      }),
    }).then((res) => res.json() as unknown as PoolQueryResponse)

    // Loop over each position to collect a mapping of owner -> positions
    let positions: {[owner: string]: {liquidity: BigNumber, id: string}[]} = {}
    for (let i = 0; i < poolQuery.data.positions.length; i++) {
      const position = poolQuery.data.positions[i]

      if (!positions[position.owner]){
        positions[position.owner] = []
      }

      positions[position.owner].push({
        id: position.id,
        liquidity: BigNumber.from(position.liquidity)
      })
    }

    // Check for all the owners if any of them are lockers
    const owners = Object.keys(positions);
    const lockers = await this.lockers.fetchLockersByAddress(owners)

    // Build the PoolInfo response object
    let poolInfo: PoolInfo = {
      totalLiquidity: BigNumber.from(0),
      lockedLiquidity: BigNumber.from(0),
      percentageLocked: 0,

      lockers: [],
    };

    // Loop over all the lockers collecting info from them
    for (const [address, locker] of Object.entries(lockers)) {
      // If the locker is locked we add its positions to the locked lp total
      if (locker.isLocked()){
        for (let i = 0; i < positions[address].length; i++) {
          poolInfo.lockedLiquidity = poolInfo.lockedLiquidity.add(positions[address][i].liquidity)
        }
      }

      poolInfo.lockers.push({
        locker: locker,
        positions: positions[address]
      })
    }

    // Can only return 1 result since its based on address
    poolInfo.totalLiquidity = BigNumber.from(poolQuery.data.pool.liquidity)
    // We do / 10,000 (and then / 100) to increase precision
    poolInfo.percentageLocked = poolInfo.lockedLiquidity.div(poolInfo.totalLiquidity.div(10000)).toNumber() / 100

    return poolInfo
  }
}

interface PoolQueryResponse{
  data: {
    pool: {
      liquidity: string
    },
    positions: {
      id: string,
      liquidity: string,
      owner: string,
    }[],
  }
}

interface PoolInfoOptions {
  // How many of the top positions should we check (default: 30)
  nOfPositions?: number
}

interface PoolInfo {
  // These are not a token amount but shares
  totalLiquidity: BigNumber
  lockedLiquidity: BigNumber
  // The percentage of liquidity that is locked
  percentageLocked: number
  // Array of lockers with their position(s) in the requested pool
  lockers: {locker: Locker, positions: {liquidity: BigNumber, id: string}[]}[]
}
