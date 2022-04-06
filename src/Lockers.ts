import {Provider as EthersProvider} from "@ethersproject/providers";
import LockerFactoryAbi from "./abi/LockerFactoryAbi";
import {Contract, Provider} from "ethers-multicall";
import {Locker} from "./Locker";
import {BigNumber, BigNumberish} from "ethers";

const zeroAddress = "0x0000000000000000000000000000000000000000"

export class Lockers {
  supportedChains = [
    /** Mainnets **/
    1, // Ethereum
    56, // BSC
    137, // Polygon
    43114, // Avalanche

    /** Testnets **/
    4, // Rinkeby
    97, // BSC Testnet
    80001, // Polygon Mumbai
    43113, // Avalanche Fuji
  ];

  chainId: number
  provider: Provider;
  factory: Contract;

  /**
   *
   * @param provider
   * @param chainId
   */
  constructor(provider: EthersProvider, chainId: number) {
    this.chainId = chainId;
    this.provider = new Provider(provider, chainId);
    this.factory = new Contract("0x00D3216403eD04C57038c5aABc839728D27061D8", LockerFactoryAbi);

    if (this.supportedChains.indexOf(chainId) === -1){
      throw "ChainId is not a supported chain"
    }
  }

  /**
   * Fetches a single locker by address
   * @param address
   */
  async fetchLockerByAddress(address: string): Promise<Locker | false> {
    const locker = await this.fetchLockersByAddress([address]);
    return locker[address]
  }

  /**
   * Returns a map where the keys are the addresses of the lockers, if an address is not a locker it is not included
   * @param addresses
   */
  async fetchLockersByAddress(addresses: string[]): Promise<{[address: string]: Locker}>{
    // Build all the calls
    let calls: any[] = []
    for (let i = 0; i < addresses.length; i++) {
      calls.push(
        this.factory.lockers(addresses[i])
      )
    }

    // Wait for the multicall to complete
    const lockerResults = await this.provider.all(calls);

    let lockersMap: {[address: string]: Locker} = {};
    for (let i = 0; i < lockerResults.length; i++) {
      const locker = lockerResults[i]

      // If ID is 0 no locker exists for this address
      if (locker.latestId.isZero()){
        continue
      }

      lockersMap[addresses[i]] = new Locker(
        this.chainId,
        locker.latestId,
        addresses[i],
        locker.unlockedBy,
        locker.unlockAt,
        locker.createdAt
      )
    }

    return lockersMap;
  }

  /**
   * Fetches a single locker by id
   * @param id
   */
  async fetchLockerById(id: BigNumberish): Promise<Locker | false> {
    const locker = await this.fetchLockersById([id]);
    return locker[BigNumber.from(id).toNumber()]
  }

  /**
   * Fetches multiple lockers by ID
   *
   * @param ids
   */
  async fetchLockersById(ids: BigNumberish[]): Promise<{[id: number]: Locker}> {
    let lockersMap: {[address: string]: Locker} = {};

    // Build all the calls
    let calls: any[] = []
    for (let i = 0; i < ids.length; i++) {
      calls.push(
        this.factory.getLockerById(BigNumber.from(ids[i]))
      )
    }

    // Wait for the multicall to complete
    const lockerResults = await this.provider.all(calls);

    for (let i = 0; i < ids.length; i++) {
      const lockerAddress = lockerResults[i][0];
      const locker = lockerResults[i][1];

      if (lockerAddress === zeroAddress){
        continue
      }

      lockersMap[BigNumber.from(ids[i]).toNumber()] = new Locker(
        this.chainId,
        locker.latestId,
        locker[0],
        locker.unlockedBy,
        locker.unlockAt,
        locker.createdAt
      )
    }

    return lockersMap
  }
}
