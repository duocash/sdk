# DuoCash SDK
The goal of this SDK is to make it easy for developers to integrate DuoCash into their website/app/dApp. 
Right now this SDK is just able to fetch info, we plan on adding support for creating new lockers and interacting with existing lockers.

Some features of this SDK:
- Multicall support
- Multiple chains (ETH, BSC, MATIC, AVAX and Testnets)
- UniswapV3 Helper

## Usage

### Uniswap V3
We have a special helper for Uniswap V3 to make integration even easier, 2 lines of additional code is all you need. This will fetch you information on the pool such as what percentage is locked, and all the lockers (with their positions)
```typescript
import {UniswapV3Helper} from "@DuoCash/sdk";

// You need a provider for the chain you want to fetch the data from
// This can be the users wallet 'window.ethereum' or supplied by you
const provider = new ethers.providers.InfuraProvider(
  4, // Rinkeby Testnet
  "YOUR_API_KEY"
);

// Initialize the helper by providing it the provider and the chainId
const uniV3 = new UniswapV3Helper(provider, 4);
const poolInfo = await uniV3.poolInfo("0xa9e93d50143d30fe51e2c83af0d3f721c3051475")

// That was all we really need, now we can display the data
console.log(`From this pool ${poolInfo.percentageLocked}% has been locked`)
console.log(`Liquidity has been locked in ${poolInfo.lockers.length} lockers`)
console.log(`Lockers:`)
for (var i = 0; i < poolInfo.lockers; i++) {
  console.log(`- ${poolInfo.lockers[i].locker.getDuoCashUri()}`)
}
```


### Generic usage (ex. UniswapV2/Pancakeswap)
Here we are going to check an array of addresses to see if any of them are lockers. Your application would fetch an array of addresses of whatever asset you want to check. This could be a UNIv2 LP token, a regular ERC20 token etc. All addresses are checked at the same time in a single RPC call.

```typescript
import {Lockers} from "@DuoCash/sdk";

// Your dApp fetches this from on-chain/etherscan/theGraph/BitQuery etc.
const lpHolders = [
  "0xCF9F06BaBfEE8c2486E7Ee274DAC3DDdF2d62F04",
  "0x153e4E66bB91FDa949351b9F8415bfeC5124C515"
  // ....
];

// You need a provider for the chain you want to fetch the data from
// This can be the users wallet 'window.ethereum' or supplied by you
const provider = new ethers.providers.InfuraProvider(
  4, // Rinkeby Testnet
  "YOUR_API_KEY"
);

// Initialize the DuoCash helper by providing it the provider and the chainId
const DuoCashLockers = new Lockers(provider, 4);
const lockers = await DuoCashLockers.fetchLockersByAddress(lpHolders);

// Output it to the user as a list
for (const [address, locker] of Object.entries(lockers)) {
    console.log(`${address} is a DuoCash locker, more info at ${locker.getDuoCashUri()}`)
}
```
