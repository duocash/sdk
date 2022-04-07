import {BigNumber} from "@ethersproject/bignumber";

const zeroAddress = "0x0000000000000000000000000000000000000000"

enum LockerState {
  Locked,
  Unlockable,
  Unlocked
}

export class Locker {
  chainId: number;
  id: number;
  address: string;
  unlockedBy: string;
  unlockAt: Date;
  createdAt: Date;

  constructor(
    chainId: number,
    id: BigNumber,

    address: string,
    unlockedBy: string,
    unlockAt: BigNumber,
    createdAt: BigNumber
  ) {
    this.chainId = chainId;
    this.id = id.toNumber();
    this.address = address;
    this.unlockedBy = unlockedBy;

    // Unlocks at is a Unix timestamp, we will need to * 1000 it so make sure we can do that safely
    if (unlockAt.lt(Math.floor(Number.MAX_SAFE_INTEGER / 1000))){
      this.unlockAt = new Date(unlockAt.toNumber() * 1000);
    }else{
      this.unlockAt = new Date(Number.MAX_SAFE_INTEGER);
    }

    // This is timestamp from a date in the past, so we can always safely parse it
    this.createdAt = new Date(createdAt.toNumber() * 1000);
  }

  /**
   * The state that the locker is in
   */
  getState(): LockerState {
    if (this.unlockedBy !== zeroAddress){
      return LockerState.Unlocked;
    }

    if (+this.unlockAt === 0 || +this.unlockAt < +Date.now()){
      return LockerState.Unlockable
    }

    return LockerState.Locked
  }

  /**
   * a URI to the info page of this locker
   */
  getDuoCashUri(): string{
    return `https://duo.cash/locker/${this.chainId}/${this.address}`;
  }

  /**
   * If the locker is locked at this moment or not
   */
  isLocked(): boolean {
    return (this.getState() === LockerState.Locked)
  }
}
