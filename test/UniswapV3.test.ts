import {Lockers, UniswapV3Helper} from '../src'
import {ethers} from "ethers";

const provider = new ethers.providers.InfuraProvider(
  4,
  "d702cc38fd3d48ea90b7bf262672c00a"
);

test('Can fetch UNIv3 Locked liquidity', () => {
  // The pool is LINK/WETH on Rinkeby
  return new UniswapV3Helper(provider, 4).poolInfo("0xa9e93d50143d30fe51e2c83af0d3f721c3051475").then((info) => {
    // The team has 1 locker with LP available for testing at https://duo.cash/locker/4/4
    expect(info.percentageLocked).toBeGreaterThan(0)
    // Check that the locked and total have been set
    expect(info.lockedLiquidity.gt(0)).toBeTruthy()
    expect(info.totalLiquidity.gt(0)).toBeTruthy()
    // Make sure at least 1 locker (ours) was returned
    expect(info.lockers.length).toBeGreaterThanOrEqual(1)
  })
})
