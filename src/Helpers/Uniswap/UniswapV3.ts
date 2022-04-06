import {apiProvider, OrderDirection, Position_orderBy} from './UniswapV3Subgraph';
import {Provider as EthersProvider} from "@ethersproject/abstract-provider";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client/core";
import fetch from 'cross-fetch';
import {Lockers} from "../../Lockers";
import {BigNumber} from "ethers";
import {Locker} from "../../Locker";

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

  apolloClient: ApolloClient<any>
  lockers: Lockers

  constructor(provider: EthersProvider, chainId: number) {
    this.lockers = new Lockers(provider, chainId)

    this.apolloClient = new ApolloClient<any>({
      link: new HttpLink({uri: subgraphsUris[chainId], fetch}),
      cache: new InMemoryCache()
    })
  }

  /**
   * Will fetch the amount of liquidity that is in the pool and what amount of it is locked and in which lockers
   *
   * @param poolAddress a UniswapV3 pool address
   */
  async poolInfo(poolAddress: string): Promise<PoolInfo> {
    const api = apiProvider(
      this.apolloClient
    )

    // Uni subgraphs index all addresses lowercase
    poolAddress = poolAddress.toLowerCase()

    // Fetch the top (max 100) LP positions of the pool
    const positionQuery = api.positions(`
        id
        liquidity
        owner
    `).$args({
      where: {
        pool: poolAddress,
        // @ts-ignore
        liquidity_gt: 0,
      },
      orderBy: Position_orderBy.Liquidity,
      orderDirection: OrderDirection.Desc,
      subgraphError: 'allow'
    }).$fetch()

    // Fetch the total amount of liquidity in the pool
    const poolQuery = api.pools(`
      liquidity
    `).$args({where: {id: poolAddress}, subgraphError: 'allow'}).$fetch()

    const positionsResponse = await positionQuery;

    // Loop over each position to collect a mapping of owner -> positions
    let positions: {[owner: string]: [{liquidity: BigNumber, id: string}]} = {}
    for (let i = 0; i < positionsResponse.length; i++) {
      const position = positionsResponse[i]

      // @ts-ignore
      if (!positions[position.owner]){
        // @ts-ignore
        positions[position.owner] = []
      }

      // @ts-ignore
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
      for (let i = 0; i < positions[address].length; i++) {
        poolInfo.lockedLiquidity = poolInfo.lockedLiquidity.add(positions[address][i].liquidity)
      }

      poolInfo.lockers.push({
        locker: locker,
        positions: positions[address]
      })
    }

    // Can only return 1 result since its based on address
    poolInfo.totalLiquidity = BigNumber.from((await poolQuery)[0].liquidity)
    // We do / 10,000 (and then / 100) to increase precision
    poolInfo.percentageLocked = poolInfo.lockedLiquidity.div(poolInfo.totalLiquidity.div(10000)).toNumber() / 100

    return poolInfo
  }
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
