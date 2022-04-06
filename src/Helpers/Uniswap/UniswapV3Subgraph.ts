/* eslint-disable */

// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//
// Made by Victor Garcia ®
//
// https://github.com/victorgarciaesgi
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null

import { OperationDefinitionNode } from 'graphql'

const guessFragmentType = (fragment: string | DocumentNode) => {
  let isString = false
  let isFragment = false
  let fragmentName = ''
  if (typeof fragment === 'string') {
    isString = true
  } else if (typeof fragment === 'object' && fragment.definitions.length) {
    isFragment = true
    const definition = fragment.definitions[0]
    if (definition.kind === 'FragmentDefinition') {
      fragmentName = definition.name.value
    } else {
      throw new Error(
        `The argument passed is not a fragment definition, got ${definition.kind} instead`
      )
    }
  }
  return { isString, isFragment, fragmentName }
}

import { ApolloClient, execute, DocumentNode, gql } from '@apollo/client/core'

/** The block at which the query should be executed. */
export interface Block_height {
  /** Value containing a block hash*/
  hash?: undefined
  /** Value containing a block number*/
  number?: number
  /** Value containing the minimum block number.
   In the case of `number_gte`, the query will be executed on the latest block only if
   the subgraph has progressed to or past the minimum block number.
   Defaults to the latest block when omitted.
   */
  number_gte?: number
}

type _SubgraphErrorPolicy_ = 'allow' | 'deny';
// export enum _SubgraphErrorPolicy_ {
//   /** Data will be returned even if the subgraph has indexing errors */
//   Allow = 'allow',
//   /** If the subgraph has indexing errors, data will be omitted. The default. */
//   Deny = 'deny'
// }

export interface Bundle {
  id: string
  ethPriceUSD: undefined
}

export interface Bundle_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  ethPriceUSD?: undefined
  ethPriceUSD_not?: undefined
  ethPriceUSD_gt?: undefined
  ethPriceUSD_lt?: undefined
  ethPriceUSD_gte?: undefined
  ethPriceUSD_lte?: undefined
  ethPriceUSD_in?: undefined[]
  ethPriceUSD_not_in?: undefined[]
}

export enum Bundle_orderBy {
  Id = 'id',
  Ethpriceusd = 'ethPriceUSD',
}
export interface Burn {
  id: string
  transaction: Transaction
  pool: Pool
  token0: Token
  token1: Token
  timestamp: undefined
  owner: Maybe<undefined>
  origin: undefined
  amount: undefined
  amount0: undefined
  amount1: undefined
  amountUSD: Maybe<undefined>
  tickLower: undefined
  tickUpper: undefined
  logIndex: Maybe<undefined>
}

export interface Burn_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  transaction?: string
  transaction_not?: string
  transaction_gt?: string
  transaction_lt?: string
  transaction_gte?: string
  transaction_lte?: string
  transaction_in?: string[]
  transaction_not_in?: string[]
  transaction_contains?: string
  transaction_contains_nocase?: string
  transaction_not_contains?: string
  transaction_not_contains_nocase?: string
  transaction_starts_with?: string
  transaction_starts_with_nocase?: string
  transaction_not_starts_with?: string
  transaction_not_starts_with_nocase?: string
  transaction_ends_with?: string
  transaction_ends_with_nocase?: string
  transaction_not_ends_with?: string
  transaction_not_ends_with_nocase?: string
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  token0?: string
  token0_not?: string
  token0_gt?: string
  token0_lt?: string
  token0_gte?: string
  token0_lte?: string
  token0_in?: string[]
  token0_not_in?: string[]
  token0_contains?: string
  token0_contains_nocase?: string
  token0_not_contains?: string
  token0_not_contains_nocase?: string
  token0_starts_with?: string
  token0_starts_with_nocase?: string
  token0_not_starts_with?: string
  token0_not_starts_with_nocase?: string
  token0_ends_with?: string
  token0_ends_with_nocase?: string
  token0_not_ends_with?: string
  token0_not_ends_with_nocase?: string
  token1?: string
  token1_not?: string
  token1_gt?: string
  token1_lt?: string
  token1_gte?: string
  token1_lte?: string
  token1_in?: string[]
  token1_not_in?: string[]
  token1_contains?: string
  token1_contains_nocase?: string
  token1_not_contains?: string
  token1_not_contains_nocase?: string
  token1_starts_with?: string
  token1_starts_with_nocase?: string
  token1_not_starts_with?: string
  token1_not_starts_with_nocase?: string
  token1_ends_with?: string
  token1_ends_with_nocase?: string
  token1_not_ends_with?: string
  token1_not_ends_with_nocase?: string
  timestamp?: undefined
  timestamp_not?: undefined
  timestamp_gt?: undefined
  timestamp_lt?: undefined
  timestamp_gte?: undefined
  timestamp_lte?: undefined
  timestamp_in?: undefined[]
  timestamp_not_in?: undefined[]
  owner?: undefined
  owner_not?: undefined
  owner_in?: undefined[]
  owner_not_in?: undefined[]
  owner_contains?: undefined
  owner_not_contains?: undefined
  origin?: undefined
  origin_not?: undefined
  origin_in?: undefined[]
  origin_not_in?: undefined[]
  origin_contains?: undefined
  origin_not_contains?: undefined
  amount?: undefined
  amount_not?: undefined
  amount_gt?: undefined
  amount_lt?: undefined
  amount_gte?: undefined
  amount_lte?: undefined
  amount_in?: undefined[]
  amount_not_in?: undefined[]
  amount0?: undefined
  amount0_not?: undefined
  amount0_gt?: undefined
  amount0_lt?: undefined
  amount0_gte?: undefined
  amount0_lte?: undefined
  amount0_in?: undefined[]
  amount0_not_in?: undefined[]
  amount1?: undefined
  amount1_not?: undefined
  amount1_gt?: undefined
  amount1_lt?: undefined
  amount1_gte?: undefined
  amount1_lte?: undefined
  amount1_in?: undefined[]
  amount1_not_in?: undefined[]
  amountUSD?: undefined
  amountUSD_not?: undefined
  amountUSD_gt?: undefined
  amountUSD_lt?: undefined
  amountUSD_gte?: undefined
  amountUSD_lte?: undefined
  amountUSD_in?: undefined[]
  amountUSD_not_in?: undefined[]
  tickLower?: undefined
  tickLower_not?: undefined
  tickLower_gt?: undefined
  tickLower_lt?: undefined
  tickLower_gte?: undefined
  tickLower_lte?: undefined
  tickLower_in?: undefined[]
  tickLower_not_in?: undefined[]
  tickUpper?: undefined
  tickUpper_not?: undefined
  tickUpper_gt?: undefined
  tickUpper_lt?: undefined
  tickUpper_gte?: undefined
  tickUpper_lte?: undefined
  tickUpper_in?: undefined[]
  tickUpper_not_in?: undefined[]
  logIndex?: undefined
  logIndex_not?: undefined
  logIndex_gt?: undefined
  logIndex_lt?: undefined
  logIndex_gte?: undefined
  logIndex_lte?: undefined
  logIndex_in?: undefined[]
  logIndex_not_in?: undefined[]
}

export enum Burn_orderBy {
  Id = 'id',
  Transaction = 'transaction',
  Pool = 'pool',
  Token0 = 'token0',
  Token1 = 'token1',
  Timestamp = 'timestamp',
  Owner = 'owner',
  Origin = 'origin',
  Amount = 'amount',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  Amountusd = 'amountUSD',
  Ticklower = 'tickLower',
  Tickupper = 'tickUpper',
  Logindex = 'logIndex',
}

export interface Collect {
  id: string
  transaction: Transaction
  timestamp: undefined
  pool: Pool
  owner: Maybe<undefined>
  amount0: undefined
  amount1: undefined
  amountUSD: Maybe<undefined>
  tickLower: undefined
  tickUpper: undefined
  logIndex: Maybe<undefined>
}

export interface Collect_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  transaction?: string
  transaction_not?: string
  transaction_gt?: string
  transaction_lt?: string
  transaction_gte?: string
  transaction_lte?: string
  transaction_in?: string[]
  transaction_not_in?: string[]
  transaction_contains?: string
  transaction_contains_nocase?: string
  transaction_not_contains?: string
  transaction_not_contains_nocase?: string
  transaction_starts_with?: string
  transaction_starts_with_nocase?: string
  transaction_not_starts_with?: string
  transaction_not_starts_with_nocase?: string
  transaction_ends_with?: string
  transaction_ends_with_nocase?: string
  transaction_not_ends_with?: string
  transaction_not_ends_with_nocase?: string
  timestamp?: undefined
  timestamp_not?: undefined
  timestamp_gt?: undefined
  timestamp_lt?: undefined
  timestamp_gte?: undefined
  timestamp_lte?: undefined
  timestamp_in?: undefined[]
  timestamp_not_in?: undefined[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  owner?: undefined
  owner_not?: undefined
  owner_in?: undefined[]
  owner_not_in?: undefined[]
  owner_contains?: undefined
  owner_not_contains?: undefined
  amount0?: undefined
  amount0_not?: undefined
  amount0_gt?: undefined
  amount0_lt?: undefined
  amount0_gte?: undefined
  amount0_lte?: undefined
  amount0_in?: undefined[]
  amount0_not_in?: undefined[]
  amount1?: undefined
  amount1_not?: undefined
  amount1_gt?: undefined
  amount1_lt?: undefined
  amount1_gte?: undefined
  amount1_lte?: undefined
  amount1_in?: undefined[]
  amount1_not_in?: undefined[]
  amountUSD?: undefined
  amountUSD_not?: undefined
  amountUSD_gt?: undefined
  amountUSD_lt?: undefined
  amountUSD_gte?: undefined
  amountUSD_lte?: undefined
  amountUSD_in?: undefined[]
  amountUSD_not_in?: undefined[]
  tickLower?: undefined
  tickLower_not?: undefined
  tickLower_gt?: undefined
  tickLower_lt?: undefined
  tickLower_gte?: undefined
  tickLower_lte?: undefined
  tickLower_in?: undefined[]
  tickLower_not_in?: undefined[]
  tickUpper?: undefined
  tickUpper_not?: undefined
  tickUpper_gt?: undefined
  tickUpper_lt?: undefined
  tickUpper_gte?: undefined
  tickUpper_lte?: undefined
  tickUpper_in?: undefined[]
  tickUpper_not_in?: undefined[]
  logIndex?: undefined
  logIndex_not?: undefined
  logIndex_gt?: undefined
  logIndex_lt?: undefined
  logIndex_gte?: undefined
  logIndex_lte?: undefined
  logIndex_in?: undefined[]
  logIndex_not_in?: undefined[]
}

export enum Collect_orderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pool = 'pool',
  Owner = 'owner',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  Amountusd = 'amountUSD',
  Ticklower = 'tickLower',
  Tickupper = 'tickUpper',
  Logindex = 'logIndex',
}
export interface Factory {
  id: string
  poolCount: undefined
  txCount: undefined
  totalVolumeUSD: undefined
  totalVolumeETH: undefined
  totalFeesUSD: undefined
  totalFeesETH: undefined
  untrackedVolumeUSD: undefined
  totalValueLockedUSD: undefined
  totalValueLockedETH: undefined
  totalValueLockedUSDUntracked: undefined
  totalValueLockedETHUntracked: undefined
  owner: string
}

export interface Factory_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  poolCount?: undefined
  poolCount_not?: undefined
  poolCount_gt?: undefined
  poolCount_lt?: undefined
  poolCount_gte?: undefined
  poolCount_lte?: undefined
  poolCount_in?: undefined[]
  poolCount_not_in?: undefined[]
  txCount?: undefined
  txCount_not?: undefined
  txCount_gt?: undefined
  txCount_lt?: undefined
  txCount_gte?: undefined
  txCount_lte?: undefined
  txCount_in?: undefined[]
  txCount_not_in?: undefined[]
  totalVolumeUSD?: undefined
  totalVolumeUSD_not?: undefined
  totalVolumeUSD_gt?: undefined
  totalVolumeUSD_lt?: undefined
  totalVolumeUSD_gte?: undefined
  totalVolumeUSD_lte?: undefined
  totalVolumeUSD_in?: undefined[]
  totalVolumeUSD_not_in?: undefined[]
  totalVolumeETH?: undefined
  totalVolumeETH_not?: undefined
  totalVolumeETH_gt?: undefined
  totalVolumeETH_lt?: undefined
  totalVolumeETH_gte?: undefined
  totalVolumeETH_lte?: undefined
  totalVolumeETH_in?: undefined[]
  totalVolumeETH_not_in?: undefined[]
  totalFeesUSD?: undefined
  totalFeesUSD_not?: undefined
  totalFeesUSD_gt?: undefined
  totalFeesUSD_lt?: undefined
  totalFeesUSD_gte?: undefined
  totalFeesUSD_lte?: undefined
  totalFeesUSD_in?: undefined[]
  totalFeesUSD_not_in?: undefined[]
  totalFeesETH?: undefined
  totalFeesETH_not?: undefined
  totalFeesETH_gt?: undefined
  totalFeesETH_lt?: undefined
  totalFeesETH_gte?: undefined
  totalFeesETH_lte?: undefined
  totalFeesETH_in?: undefined[]
  totalFeesETH_not_in?: undefined[]
  untrackedVolumeUSD?: undefined
  untrackedVolumeUSD_not?: undefined
  untrackedVolumeUSD_gt?: undefined
  untrackedVolumeUSD_lt?: undefined
  untrackedVolumeUSD_gte?: undefined
  untrackedVolumeUSD_lte?: undefined
  untrackedVolumeUSD_in?: undefined[]
  untrackedVolumeUSD_not_in?: undefined[]
  totalValueLockedUSD?: undefined
  totalValueLockedUSD_not?: undefined
  totalValueLockedUSD_gt?: undefined
  totalValueLockedUSD_lt?: undefined
  totalValueLockedUSD_gte?: undefined
  totalValueLockedUSD_lte?: undefined
  totalValueLockedUSD_in?: undefined[]
  totalValueLockedUSD_not_in?: undefined[]
  totalValueLockedETH?: undefined
  totalValueLockedETH_not?: undefined
  totalValueLockedETH_gt?: undefined
  totalValueLockedETH_lt?: undefined
  totalValueLockedETH_gte?: undefined
  totalValueLockedETH_lte?: undefined
  totalValueLockedETH_in?: undefined[]
  totalValueLockedETH_not_in?: undefined[]
  totalValueLockedUSDUntracked?: undefined
  totalValueLockedUSDUntracked_not?: undefined
  totalValueLockedUSDUntracked_gt?: undefined
  totalValueLockedUSDUntracked_lt?: undefined
  totalValueLockedUSDUntracked_gte?: undefined
  totalValueLockedUSDUntracked_lte?: undefined
  totalValueLockedUSDUntracked_in?: undefined[]
  totalValueLockedUSDUntracked_not_in?: undefined[]
  totalValueLockedETHUntracked?: undefined
  totalValueLockedETHUntracked_not?: undefined
  totalValueLockedETHUntracked_gt?: undefined
  totalValueLockedETHUntracked_lt?: undefined
  totalValueLockedETHUntracked_gte?: undefined
  totalValueLockedETHUntracked_lte?: undefined
  totalValueLockedETHUntracked_in?: undefined[]
  totalValueLockedETHUntracked_not_in?: undefined[]
  owner?: string
  owner_not?: string
  owner_gt?: string
  owner_lt?: string
  owner_gte?: string
  owner_lte?: string
  owner_in?: string[]
  owner_not_in?: string[]
}

export enum Factory_orderBy {
  Id = 'id',
  Poolcount = 'poolCount',
  Txcount = 'txCount',
  Totalvolumeusd = 'totalVolumeUSD',
  Totalvolumeeth = 'totalVolumeETH',
  Totalfeesusd = 'totalFeesUSD',
  Totalfeeseth = 'totalFeesETH',
  Untrackedvolumeusd = 'untrackedVolumeUSD',
  Totalvaluelockedusd = 'totalValueLockedUSD',
  Totalvaluelockedeth = 'totalValueLockedETH',
  Totalvaluelockedusduntracked = 'totalValueLockedUSDUntracked',
  Totalvaluelockedethuntracked = 'totalValueLockedETHUntracked',
  Owner = 'owner',
}
export interface Flash {
  id: string
  transaction: Transaction
  timestamp: undefined
  pool: Pool
  sender: undefined
  recipient: undefined
  amount0: undefined
  amount1: undefined
  amountUSD: undefined
  amount0Paid: undefined
  amount1Paid: undefined
  logIndex: Maybe<undefined>
}

export interface Flash_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  transaction?: string
  transaction_not?: string
  transaction_gt?: string
  transaction_lt?: string
  transaction_gte?: string
  transaction_lte?: string
  transaction_in?: string[]
  transaction_not_in?: string[]
  transaction_contains?: string
  transaction_contains_nocase?: string
  transaction_not_contains?: string
  transaction_not_contains_nocase?: string
  transaction_starts_with?: string
  transaction_starts_with_nocase?: string
  transaction_not_starts_with?: string
  transaction_not_starts_with_nocase?: string
  transaction_ends_with?: string
  transaction_ends_with_nocase?: string
  transaction_not_ends_with?: string
  transaction_not_ends_with_nocase?: string
  timestamp?: undefined
  timestamp_not?: undefined
  timestamp_gt?: undefined
  timestamp_lt?: undefined
  timestamp_gte?: undefined
  timestamp_lte?: undefined
  timestamp_in?: undefined[]
  timestamp_not_in?: undefined[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  sender?: undefined
  sender_not?: undefined
  sender_in?: undefined[]
  sender_not_in?: undefined[]
  sender_contains?: undefined
  sender_not_contains?: undefined
  recipient?: undefined
  recipient_not?: undefined
  recipient_in?: undefined[]
  recipient_not_in?: undefined[]
  recipient_contains?: undefined
  recipient_not_contains?: undefined
  amount0?: undefined
  amount0_not?: undefined
  amount0_gt?: undefined
  amount0_lt?: undefined
  amount0_gte?: undefined
  amount0_lte?: undefined
  amount0_in?: undefined[]
  amount0_not_in?: undefined[]
  amount1?: undefined
  amount1_not?: undefined
  amount1_gt?: undefined
  amount1_lt?: undefined
  amount1_gte?: undefined
  amount1_lte?: undefined
  amount1_in?: undefined[]
  amount1_not_in?: undefined[]
  amountUSD?: undefined
  amountUSD_not?: undefined
  amountUSD_gt?: undefined
  amountUSD_lt?: undefined
  amountUSD_gte?: undefined
  amountUSD_lte?: undefined
  amountUSD_in?: undefined[]
  amountUSD_not_in?: undefined[]
  amount0Paid?: undefined
  amount0Paid_not?: undefined
  amount0Paid_gt?: undefined
  amount0Paid_lt?: undefined
  amount0Paid_gte?: undefined
  amount0Paid_lte?: undefined
  amount0Paid_in?: undefined[]
  amount0Paid_not_in?: undefined[]
  amount1Paid?: undefined
  amount1Paid_not?: undefined
  amount1Paid_gt?: undefined
  amount1Paid_lt?: undefined
  amount1Paid_gte?: undefined
  amount1Paid_lte?: undefined
  amount1Paid_in?: undefined[]
  amount1Paid_not_in?: undefined[]
  logIndex?: undefined
  logIndex_not?: undefined
  logIndex_gt?: undefined
  logIndex_lt?: undefined
  logIndex_gte?: undefined
  logIndex_lte?: undefined
  logIndex_in?: undefined[]
  logIndex_not_in?: undefined[]
}

export enum Flash_orderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pool = 'pool',
  Sender = 'sender',
  Recipient = 'recipient',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  Amountusd = 'amountUSD',
  Amount0paid = 'amount0Paid',
  Amount1paid = 'amount1Paid',
  Logindex = 'logIndex',
}

export interface Mint {
  id: string
  transaction: Transaction
  timestamp: undefined
  pool: Pool
  token0: Token
  token1: Token
  owner: undefined
  sender: Maybe<undefined>
  origin: undefined
  amount: undefined
  amount0: undefined
  amount1: undefined
  amountUSD: Maybe<undefined>
  tickLower: undefined
  tickUpper: undefined
  logIndex: Maybe<undefined>
}

export interface Mint_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  transaction?: string
  transaction_not?: string
  transaction_gt?: string
  transaction_lt?: string
  transaction_gte?: string
  transaction_lte?: string
  transaction_in?: string[]
  transaction_not_in?: string[]
  transaction_contains?: string
  transaction_contains_nocase?: string
  transaction_not_contains?: string
  transaction_not_contains_nocase?: string
  transaction_starts_with?: string
  transaction_starts_with_nocase?: string
  transaction_not_starts_with?: string
  transaction_not_starts_with_nocase?: string
  transaction_ends_with?: string
  transaction_ends_with_nocase?: string
  transaction_not_ends_with?: string
  transaction_not_ends_with_nocase?: string
  timestamp?: undefined
  timestamp_not?: undefined
  timestamp_gt?: undefined
  timestamp_lt?: undefined
  timestamp_gte?: undefined
  timestamp_lte?: undefined
  timestamp_in?: undefined[]
  timestamp_not_in?: undefined[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  token0?: string
  token0_not?: string
  token0_gt?: string
  token0_lt?: string
  token0_gte?: string
  token0_lte?: string
  token0_in?: string[]
  token0_not_in?: string[]
  token0_contains?: string
  token0_contains_nocase?: string
  token0_not_contains?: string
  token0_not_contains_nocase?: string
  token0_starts_with?: string
  token0_starts_with_nocase?: string
  token0_not_starts_with?: string
  token0_not_starts_with_nocase?: string
  token0_ends_with?: string
  token0_ends_with_nocase?: string
  token0_not_ends_with?: string
  token0_not_ends_with_nocase?: string
  token1?: string
  token1_not?: string
  token1_gt?: string
  token1_lt?: string
  token1_gte?: string
  token1_lte?: string
  token1_in?: string[]
  token1_not_in?: string[]
  token1_contains?: string
  token1_contains_nocase?: string
  token1_not_contains?: string
  token1_not_contains_nocase?: string
  token1_starts_with?: string
  token1_starts_with_nocase?: string
  token1_not_starts_with?: string
  token1_not_starts_with_nocase?: string
  token1_ends_with?: string
  token1_ends_with_nocase?: string
  token1_not_ends_with?: string
  token1_not_ends_with_nocase?: string
  owner?: undefined
  owner_not?: undefined
  owner_in?: undefined[]
  owner_not_in?: undefined[]
  owner_contains?: undefined
  owner_not_contains?: undefined
  sender?: undefined
  sender_not?: undefined
  sender_in?: undefined[]
  sender_not_in?: undefined[]
  sender_contains?: undefined
  sender_not_contains?: undefined
  origin?: undefined
  origin_not?: undefined
  origin_in?: undefined[]
  origin_not_in?: undefined[]
  origin_contains?: undefined
  origin_not_contains?: undefined
  amount?: undefined
  amount_not?: undefined
  amount_gt?: undefined
  amount_lt?: undefined
  amount_gte?: undefined
  amount_lte?: undefined
  amount_in?: undefined[]
  amount_not_in?: undefined[]
  amount0?: undefined
  amount0_not?: undefined
  amount0_gt?: undefined
  amount0_lt?: undefined
  amount0_gte?: undefined
  amount0_lte?: undefined
  amount0_in?: undefined[]
  amount0_not_in?: undefined[]
  amount1?: undefined
  amount1_not?: undefined
  amount1_gt?: undefined
  amount1_lt?: undefined
  amount1_gte?: undefined
  amount1_lte?: undefined
  amount1_in?: undefined[]
  amount1_not_in?: undefined[]
  amountUSD?: undefined
  amountUSD_not?: undefined
  amountUSD_gt?: undefined
  amountUSD_lt?: undefined
  amountUSD_gte?: undefined
  amountUSD_lte?: undefined
  amountUSD_in?: undefined[]
  amountUSD_not_in?: undefined[]
  tickLower?: undefined
  tickLower_not?: undefined
  tickLower_gt?: undefined
  tickLower_lt?: undefined
  tickLower_gte?: undefined
  tickLower_lte?: undefined
  tickLower_in?: undefined[]
  tickLower_not_in?: undefined[]
  tickUpper?: undefined
  tickUpper_not?: undefined
  tickUpper_gt?: undefined
  tickUpper_lt?: undefined
  tickUpper_gte?: undefined
  tickUpper_lte?: undefined
  tickUpper_in?: undefined[]
  tickUpper_not_in?: undefined[]
  logIndex?: undefined
  logIndex_not?: undefined
  logIndex_gt?: undefined
  logIndex_lt?: undefined
  logIndex_gte?: undefined
  logIndex_lte?: undefined
  logIndex_in?: undefined[]
  logIndex_not_in?: undefined[]
}

export enum Mint_orderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pool = 'pool',
  Token0 = 'token0',
  Token1 = 'token1',
  Owner = 'owner',
  Sender = 'sender',
  Origin = 'origin',
  Amount = 'amount',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  Amountusd = 'amountUSD',
  Ticklower = 'tickLower',
  Tickupper = 'tickUpper',
  Logindex = 'logIndex',
}
/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}
export interface Pool {
  id: string
  createdAtTimestamp: undefined
  createdAtBlockNumber: undefined
  token0: Token
  token1: Token
  feeTier: undefined
  liquidity: undefined
  sqrtPrice: undefined
  feeGrowthGlobal0X128: undefined
  feeGrowthGlobal1X128: undefined
  token0Price: undefined
  token1Price: undefined
  tick: Maybe<undefined>
  observationIndex: undefined
  volumeToken0: undefined
  volumeToken1: undefined
  volumeUSD: undefined
  untrackedVolumeUSD: undefined
  feesUSD: undefined
  txCount: undefined
  collectedFeesToken0: undefined
  collectedFeesToken1: undefined
  collectedFeesUSD: undefined
  totalValueLockedToken0: undefined
  totalValueLockedToken1: undefined
  totalValueLockedETH: undefined
  totalValueLockedUSD: undefined
  totalValueLockedUSDUntracked: undefined
  liquidityProviderCount: undefined
  poolHourData: PoolHourData[]
  poolDayData: PoolDayData[]
  mints: Mint[]
  burns: Burn[]
  swaps: Swap[]
  collects: Collect[]
  ticks: Tick[]
}

export interface PoolDayData {
  id: string
  date: number
  pool: Pool
  liquidity: undefined
  sqrtPrice: undefined
  token0Price: undefined
  token1Price: undefined
  tick: Maybe<undefined>
  feeGrowthGlobal0X128: undefined
  feeGrowthGlobal1X128: undefined
  tvlUSD: undefined
  volumeToken0: undefined
  volumeToken1: undefined
  volumeUSD: undefined
  feesUSD: undefined
  txCount: undefined
  open: undefined
  high: undefined
  low: undefined
  close: undefined
}

export interface PoolDayData_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  date?: number
  date_not?: number
  date_gt?: number
  date_lt?: number
  date_gte?: number
  date_lte?: number
  date_in?: number[]
  date_not_in?: number[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  liquidity?: undefined
  liquidity_not?: undefined
  liquidity_gt?: undefined
  liquidity_lt?: undefined
  liquidity_gte?: undefined
  liquidity_lte?: undefined
  liquidity_in?: undefined[]
  liquidity_not_in?: undefined[]
  sqrtPrice?: undefined
  sqrtPrice_not?: undefined
  sqrtPrice_gt?: undefined
  sqrtPrice_lt?: undefined
  sqrtPrice_gte?: undefined
  sqrtPrice_lte?: undefined
  sqrtPrice_in?: undefined[]
  sqrtPrice_not_in?: undefined[]
  token0Price?: undefined
  token0Price_not?: undefined
  token0Price_gt?: undefined
  token0Price_lt?: undefined
  token0Price_gte?: undefined
  token0Price_lte?: undefined
  token0Price_in?: undefined[]
  token0Price_not_in?: undefined[]
  token1Price?: undefined
  token1Price_not?: undefined
  token1Price_gt?: undefined
  token1Price_lt?: undefined
  token1Price_gte?: undefined
  token1Price_lte?: undefined
  token1Price_in?: undefined[]
  token1Price_not_in?: undefined[]
  tick?: undefined
  tick_not?: undefined
  tick_gt?: undefined
  tick_lt?: undefined
  tick_gte?: undefined
  tick_lte?: undefined
  tick_in?: undefined[]
  tick_not_in?: undefined[]
  feeGrowthGlobal0X128?: undefined
  feeGrowthGlobal0X128_not?: undefined
  feeGrowthGlobal0X128_gt?: undefined
  feeGrowthGlobal0X128_lt?: undefined
  feeGrowthGlobal0X128_gte?: undefined
  feeGrowthGlobal0X128_lte?: undefined
  feeGrowthGlobal0X128_in?: undefined[]
  feeGrowthGlobal0X128_not_in?: undefined[]
  feeGrowthGlobal1X128?: undefined
  feeGrowthGlobal1X128_not?: undefined
  feeGrowthGlobal1X128_gt?: undefined
  feeGrowthGlobal1X128_lt?: undefined
  feeGrowthGlobal1X128_gte?: undefined
  feeGrowthGlobal1X128_lte?: undefined
  feeGrowthGlobal1X128_in?: undefined[]
  feeGrowthGlobal1X128_not_in?: undefined[]
  tvlUSD?: undefined
  tvlUSD_not?: undefined
  tvlUSD_gt?: undefined
  tvlUSD_lt?: undefined
  tvlUSD_gte?: undefined
  tvlUSD_lte?: undefined
  tvlUSD_in?: undefined[]
  tvlUSD_not_in?: undefined[]
  volumeToken0?: undefined
  volumeToken0_not?: undefined
  volumeToken0_gt?: undefined
  volumeToken0_lt?: undefined
  volumeToken0_gte?: undefined
  volumeToken0_lte?: undefined
  volumeToken0_in?: undefined[]
  volumeToken0_not_in?: undefined[]
  volumeToken1?: undefined
  volumeToken1_not?: undefined
  volumeToken1_gt?: undefined
  volumeToken1_lt?: undefined
  volumeToken1_gte?: undefined
  volumeToken1_lte?: undefined
  volumeToken1_in?: undefined[]
  volumeToken1_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  txCount?: undefined
  txCount_not?: undefined
  txCount_gt?: undefined
  txCount_lt?: undefined
  txCount_gte?: undefined
  txCount_lte?: undefined
  txCount_in?: undefined[]
  txCount_not_in?: undefined[]
  open?: undefined
  open_not?: undefined
  open_gt?: undefined
  open_lt?: undefined
  open_gte?: undefined
  open_lte?: undefined
  open_in?: undefined[]
  open_not_in?: undefined[]
  high?: undefined
  high_not?: undefined
  high_gt?: undefined
  high_lt?: undefined
  high_gte?: undefined
  high_lte?: undefined
  high_in?: undefined[]
  high_not_in?: undefined[]
  low?: undefined
  low_not?: undefined
  low_gt?: undefined
  low_lt?: undefined
  low_gte?: undefined
  low_lte?: undefined
  low_in?: undefined[]
  low_not_in?: undefined[]
  close?: undefined
  close_not?: undefined
  close_gt?: undefined
  close_lt?: undefined
  close_gte?: undefined
  close_lte?: undefined
  close_in?: undefined[]
  close_not_in?: undefined[]
}

export enum PoolDayData_orderBy {
  Id = 'id',
  Date = 'date',
  Pool = 'pool',
  Liquidity = 'liquidity',
  Sqrtprice = 'sqrtPrice',
  Token0price = 'token0Price',
  Token1price = 'token1Price',
  Tick = 'tick',
  Feegrowthglobal0x128 = 'feeGrowthGlobal0X128',
  Feegrowthglobal1x128 = 'feeGrowthGlobal1X128',
  Tvlusd = 'tvlUSD',
  Volumetoken0 = 'volumeToken0',
  Volumetoken1 = 'volumeToken1',
  Volumeusd = 'volumeUSD',
  Feesusd = 'feesUSD',
  Txcount = 'txCount',
  Open = 'open',
  High = 'high',
  Low = 'low',
  Close = 'close',
}
export interface PoolHourData {
  id: string
  periodStartUnix: number
  pool: Pool
  liquidity: undefined
  sqrtPrice: undefined
  token0Price: undefined
  token1Price: undefined
  tick: Maybe<undefined>
  feeGrowthGlobal0X128: undefined
  feeGrowthGlobal1X128: undefined
  tvlUSD: undefined
  volumeToken0: undefined
  volumeToken1: undefined
  volumeUSD: undefined
  feesUSD: undefined
  txCount: undefined
  open: undefined
  high: undefined
  low: undefined
  close: undefined
}

export interface PoolHourData_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  periodStartUnix?: number
  periodStartUnix_not?: number
  periodStartUnix_gt?: number
  periodStartUnix_lt?: number
  periodStartUnix_gte?: number
  periodStartUnix_lte?: number
  periodStartUnix_in?: number[]
  periodStartUnix_not_in?: number[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  liquidity?: undefined
  liquidity_not?: undefined
  liquidity_gt?: undefined
  liquidity_lt?: undefined
  liquidity_gte?: undefined
  liquidity_lte?: undefined
  liquidity_in?: undefined[]
  liquidity_not_in?: undefined[]
  sqrtPrice?: undefined
  sqrtPrice_not?: undefined
  sqrtPrice_gt?: undefined
  sqrtPrice_lt?: undefined
  sqrtPrice_gte?: undefined
  sqrtPrice_lte?: undefined
  sqrtPrice_in?: undefined[]
  sqrtPrice_not_in?: undefined[]
  token0Price?: undefined
  token0Price_not?: undefined
  token0Price_gt?: undefined
  token0Price_lt?: undefined
  token0Price_gte?: undefined
  token0Price_lte?: undefined
  token0Price_in?: undefined[]
  token0Price_not_in?: undefined[]
  token1Price?: undefined
  token1Price_not?: undefined
  token1Price_gt?: undefined
  token1Price_lt?: undefined
  token1Price_gte?: undefined
  token1Price_lte?: undefined
  token1Price_in?: undefined[]
  token1Price_not_in?: undefined[]
  tick?: undefined
  tick_not?: undefined
  tick_gt?: undefined
  tick_lt?: undefined
  tick_gte?: undefined
  tick_lte?: undefined
  tick_in?: undefined[]
  tick_not_in?: undefined[]
  feeGrowthGlobal0X128?: undefined
  feeGrowthGlobal0X128_not?: undefined
  feeGrowthGlobal0X128_gt?: undefined
  feeGrowthGlobal0X128_lt?: undefined
  feeGrowthGlobal0X128_gte?: undefined
  feeGrowthGlobal0X128_lte?: undefined
  feeGrowthGlobal0X128_in?: undefined[]
  feeGrowthGlobal0X128_not_in?: undefined[]
  feeGrowthGlobal1X128?: undefined
  feeGrowthGlobal1X128_not?: undefined
  feeGrowthGlobal1X128_gt?: undefined
  feeGrowthGlobal1X128_lt?: undefined
  feeGrowthGlobal1X128_gte?: undefined
  feeGrowthGlobal1X128_lte?: undefined
  feeGrowthGlobal1X128_in?: undefined[]
  feeGrowthGlobal1X128_not_in?: undefined[]
  tvlUSD?: undefined
  tvlUSD_not?: undefined
  tvlUSD_gt?: undefined
  tvlUSD_lt?: undefined
  tvlUSD_gte?: undefined
  tvlUSD_lte?: undefined
  tvlUSD_in?: undefined[]
  tvlUSD_not_in?: undefined[]
  volumeToken0?: undefined
  volumeToken0_not?: undefined
  volumeToken0_gt?: undefined
  volumeToken0_lt?: undefined
  volumeToken0_gte?: undefined
  volumeToken0_lte?: undefined
  volumeToken0_in?: undefined[]
  volumeToken0_not_in?: undefined[]
  volumeToken1?: undefined
  volumeToken1_not?: undefined
  volumeToken1_gt?: undefined
  volumeToken1_lt?: undefined
  volumeToken1_gte?: undefined
  volumeToken1_lte?: undefined
  volumeToken1_in?: undefined[]
  volumeToken1_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  txCount?: undefined
  txCount_not?: undefined
  txCount_gt?: undefined
  txCount_lt?: undefined
  txCount_gte?: undefined
  txCount_lte?: undefined
  txCount_in?: undefined[]
  txCount_not_in?: undefined[]
  open?: undefined
  open_not?: undefined
  open_gt?: undefined
  open_lt?: undefined
  open_gte?: undefined
  open_lte?: undefined
  open_in?: undefined[]
  open_not_in?: undefined[]
  high?: undefined
  high_not?: undefined
  high_gt?: undefined
  high_lt?: undefined
  high_gte?: undefined
  high_lte?: undefined
  high_in?: undefined[]
  high_not_in?: undefined[]
  low?: undefined
  low_not?: undefined
  low_gt?: undefined
  low_lt?: undefined
  low_gte?: undefined
  low_lte?: undefined
  low_in?: undefined[]
  low_not_in?: undefined[]
  close?: undefined
  close_not?: undefined
  close_gt?: undefined
  close_lt?: undefined
  close_gte?: undefined
  close_lte?: undefined
  close_in?: undefined[]
  close_not_in?: undefined[]
}

export enum PoolHourData_orderBy {
  Id = 'id',
  Periodstartunix = 'periodStartUnix',
  Pool = 'pool',
  Liquidity = 'liquidity',
  Sqrtprice = 'sqrtPrice',
  Token0price = 'token0Price',
  Token1price = 'token1Price',
  Tick = 'tick',
  Feegrowthglobal0x128 = 'feeGrowthGlobal0X128',
  Feegrowthglobal1x128 = 'feeGrowthGlobal1X128',
  Tvlusd = 'tvlUSD',
  Volumetoken0 = 'volumeToken0',
  Volumetoken1 = 'volumeToken1',
  Volumeusd = 'volumeUSD',
  Feesusd = 'feesUSD',
  Txcount = 'txCount',
  Open = 'open',
  High = 'high',
  Low = 'low',
  Close = 'close',
}
export interface Pool_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  createdAtTimestamp?: undefined
  createdAtTimestamp_not?: undefined
  createdAtTimestamp_gt?: undefined
  createdAtTimestamp_lt?: undefined
  createdAtTimestamp_gte?: undefined
  createdAtTimestamp_lte?: undefined
  createdAtTimestamp_in?: undefined[]
  createdAtTimestamp_not_in?: undefined[]
  createdAtBlockNumber?: undefined
  createdAtBlockNumber_not?: undefined
  createdAtBlockNumber_gt?: undefined
  createdAtBlockNumber_lt?: undefined
  createdAtBlockNumber_gte?: undefined
  createdAtBlockNumber_lte?: undefined
  createdAtBlockNumber_in?: undefined[]
  createdAtBlockNumber_not_in?: undefined[]
  token0?: string
  token0_not?: string
  token0_gt?: string
  token0_lt?: string
  token0_gte?: string
  token0_lte?: string
  token0_in?: string[]
  token0_not_in?: string[]
  token0_contains?: string
  token0_contains_nocase?: string
  token0_not_contains?: string
  token0_not_contains_nocase?: string
  token0_starts_with?: string
  token0_starts_with_nocase?: string
  token0_not_starts_with?: string
  token0_not_starts_with_nocase?: string
  token0_ends_with?: string
  token0_ends_with_nocase?: string
  token0_not_ends_with?: string
  token0_not_ends_with_nocase?: string
  token1?: string
  token1_not?: string
  token1_gt?: string
  token1_lt?: string
  token1_gte?: string
  token1_lte?: string
  token1_in?: string[]
  token1_not_in?: string[]
  token1_contains?: string
  token1_contains_nocase?: string
  token1_not_contains?: string
  token1_not_contains_nocase?: string
  token1_starts_with?: string
  token1_starts_with_nocase?: string
  token1_not_starts_with?: string
  token1_not_starts_with_nocase?: string
  token1_ends_with?: string
  token1_ends_with_nocase?: string
  token1_not_ends_with?: string
  token1_not_ends_with_nocase?: string
  feeTier?: undefined
  feeTier_not?: undefined
  feeTier_gt?: undefined
  feeTier_lt?: undefined
  feeTier_gte?: undefined
  feeTier_lte?: undefined
  feeTier_in?: undefined[]
  feeTier_not_in?: undefined[]
  liquidity?: undefined
  liquidity_not?: undefined
  liquidity_gt?: undefined
  liquidity_lt?: undefined
  liquidity_gte?: undefined
  liquidity_lte?: undefined
  liquidity_in?: undefined[]
  liquidity_not_in?: undefined[]
  sqrtPrice?: undefined
  sqrtPrice_not?: undefined
  sqrtPrice_gt?: undefined
  sqrtPrice_lt?: undefined
  sqrtPrice_gte?: undefined
  sqrtPrice_lte?: undefined
  sqrtPrice_in?: undefined[]
  sqrtPrice_not_in?: undefined[]
  feeGrowthGlobal0X128?: undefined
  feeGrowthGlobal0X128_not?: undefined
  feeGrowthGlobal0X128_gt?: undefined
  feeGrowthGlobal0X128_lt?: undefined
  feeGrowthGlobal0X128_gte?: undefined
  feeGrowthGlobal0X128_lte?: undefined
  feeGrowthGlobal0X128_in?: undefined[]
  feeGrowthGlobal0X128_not_in?: undefined[]
  feeGrowthGlobal1X128?: undefined
  feeGrowthGlobal1X128_not?: undefined
  feeGrowthGlobal1X128_gt?: undefined
  feeGrowthGlobal1X128_lt?: undefined
  feeGrowthGlobal1X128_gte?: undefined
  feeGrowthGlobal1X128_lte?: undefined
  feeGrowthGlobal1X128_in?: undefined[]
  feeGrowthGlobal1X128_not_in?: undefined[]
  token0Price?: undefined
  token0Price_not?: undefined
  token0Price_gt?: undefined
  token0Price_lt?: undefined
  token0Price_gte?: undefined
  token0Price_lte?: undefined
  token0Price_in?: undefined[]
  token0Price_not_in?: undefined[]
  token1Price?: undefined
  token1Price_not?: undefined
  token1Price_gt?: undefined
  token1Price_lt?: undefined
  token1Price_gte?: undefined
  token1Price_lte?: undefined
  token1Price_in?: undefined[]
  token1Price_not_in?: undefined[]
  tick?: undefined
  tick_not?: undefined
  tick_gt?: undefined
  tick_lt?: undefined
  tick_gte?: undefined
  tick_lte?: undefined
  tick_in?: undefined[]
  tick_not_in?: undefined[]
  observationIndex?: undefined
  observationIndex_not?: undefined
  observationIndex_gt?: undefined
  observationIndex_lt?: undefined
  observationIndex_gte?: undefined
  observationIndex_lte?: undefined
  observationIndex_in?: undefined[]
  observationIndex_not_in?: undefined[]
  volumeToken0?: undefined
  volumeToken0_not?: undefined
  volumeToken0_gt?: undefined
  volumeToken0_lt?: undefined
  volumeToken0_gte?: undefined
  volumeToken0_lte?: undefined
  volumeToken0_in?: undefined[]
  volumeToken0_not_in?: undefined[]
  volumeToken1?: undefined
  volumeToken1_not?: undefined
  volumeToken1_gt?: undefined
  volumeToken1_lt?: undefined
  volumeToken1_gte?: undefined
  volumeToken1_lte?: undefined
  volumeToken1_in?: undefined[]
  volumeToken1_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  untrackedVolumeUSD?: undefined
  untrackedVolumeUSD_not?: undefined
  untrackedVolumeUSD_gt?: undefined
  untrackedVolumeUSD_lt?: undefined
  untrackedVolumeUSD_gte?: undefined
  untrackedVolumeUSD_lte?: undefined
  untrackedVolumeUSD_in?: undefined[]
  untrackedVolumeUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  txCount?: undefined
  txCount_not?: undefined
  txCount_gt?: undefined
  txCount_lt?: undefined
  txCount_gte?: undefined
  txCount_lte?: undefined
  txCount_in?: undefined[]
  txCount_not_in?: undefined[]
  collectedFeesToken0?: undefined
  collectedFeesToken0_not?: undefined
  collectedFeesToken0_gt?: undefined
  collectedFeesToken0_lt?: undefined
  collectedFeesToken0_gte?: undefined
  collectedFeesToken0_lte?: undefined
  collectedFeesToken0_in?: undefined[]
  collectedFeesToken0_not_in?: undefined[]
  collectedFeesToken1?: undefined
  collectedFeesToken1_not?: undefined
  collectedFeesToken1_gt?: undefined
  collectedFeesToken1_lt?: undefined
  collectedFeesToken1_gte?: undefined
  collectedFeesToken1_lte?: undefined
  collectedFeesToken1_in?: undefined[]
  collectedFeesToken1_not_in?: undefined[]
  collectedFeesUSD?: undefined
  collectedFeesUSD_not?: undefined
  collectedFeesUSD_gt?: undefined
  collectedFeesUSD_lt?: undefined
  collectedFeesUSD_gte?: undefined
  collectedFeesUSD_lte?: undefined
  collectedFeesUSD_in?: undefined[]
  collectedFeesUSD_not_in?: undefined[]
  totalValueLockedToken0?: undefined
  totalValueLockedToken0_not?: undefined
  totalValueLockedToken0_gt?: undefined
  totalValueLockedToken0_lt?: undefined
  totalValueLockedToken0_gte?: undefined
  totalValueLockedToken0_lte?: undefined
  totalValueLockedToken0_in?: undefined[]
  totalValueLockedToken0_not_in?: undefined[]
  totalValueLockedToken1?: undefined
  totalValueLockedToken1_not?: undefined
  totalValueLockedToken1_gt?: undefined
  totalValueLockedToken1_lt?: undefined
  totalValueLockedToken1_gte?: undefined
  totalValueLockedToken1_lte?: undefined
  totalValueLockedToken1_in?: undefined[]
  totalValueLockedToken1_not_in?: undefined[]
  totalValueLockedETH?: undefined
  totalValueLockedETH_not?: undefined
  totalValueLockedETH_gt?: undefined
  totalValueLockedETH_lt?: undefined
  totalValueLockedETH_gte?: undefined
  totalValueLockedETH_lte?: undefined
  totalValueLockedETH_in?: undefined[]
  totalValueLockedETH_not_in?: undefined[]
  totalValueLockedUSD?: undefined
  totalValueLockedUSD_not?: undefined
  totalValueLockedUSD_gt?: undefined
  totalValueLockedUSD_lt?: undefined
  totalValueLockedUSD_gte?: undefined
  totalValueLockedUSD_lte?: undefined
  totalValueLockedUSD_in?: undefined[]
  totalValueLockedUSD_not_in?: undefined[]
  totalValueLockedUSDUntracked?: undefined
  totalValueLockedUSDUntracked_not?: undefined
  totalValueLockedUSDUntracked_gt?: undefined
  totalValueLockedUSDUntracked_lt?: undefined
  totalValueLockedUSDUntracked_gte?: undefined
  totalValueLockedUSDUntracked_lte?: undefined
  totalValueLockedUSDUntracked_in?: undefined[]
  totalValueLockedUSDUntracked_not_in?: undefined[]
  liquidityProviderCount?: undefined
  liquidityProviderCount_not?: undefined
  liquidityProviderCount_gt?: undefined
  liquidityProviderCount_lt?: undefined
  liquidityProviderCount_gte?: undefined
  liquidityProviderCount_lte?: undefined
  liquidityProviderCount_in?: undefined[]
  liquidityProviderCount_not_in?: undefined[]
}

export enum Pool_orderBy {
  Id = 'id',
  Createdattimestamp = 'createdAtTimestamp',
  Createdatblocknumber = 'createdAtBlockNumber',
  Token0 = 'token0',
  Token1 = 'token1',
  Feetier = 'feeTier',
  Liquidity = 'liquidity',
  Sqrtprice = 'sqrtPrice',
  Feegrowthglobal0x128 = 'feeGrowthGlobal0X128',
  Feegrowthglobal1x128 = 'feeGrowthGlobal1X128',
  Token0price = 'token0Price',
  Token1price = 'token1Price',
  Tick = 'tick',
  Observationindex = 'observationIndex',
  Volumetoken0 = 'volumeToken0',
  Volumetoken1 = 'volumeToken1',
  Volumeusd = 'volumeUSD',
  Untrackedvolumeusd = 'untrackedVolumeUSD',
  Feesusd = 'feesUSD',
  Txcount = 'txCount',
  Collectedfeestoken0 = 'collectedFeesToken0',
  Collectedfeestoken1 = 'collectedFeesToken1',
  Collectedfeesusd = 'collectedFeesUSD',
  Totalvaluelockedtoken0 = 'totalValueLockedToken0',
  Totalvaluelockedtoken1 = 'totalValueLockedToken1',
  Totalvaluelockedeth = 'totalValueLockedETH',
  Totalvaluelockedusd = 'totalValueLockedUSD',
  Totalvaluelockedusduntracked = 'totalValueLockedUSDUntracked',
  Liquidityprovidercount = 'liquidityProviderCount',
  Poolhourdata = 'poolHourData',
  Pooldaydata = 'poolDayData',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps',
  Collects = 'collects',
  Ticks = 'ticks',
}
export interface Position {
  id: string
  owner: undefined
  pool: Pool
  token0: Token
  token1: Token
  tickLower: Tick
  tickUpper: Tick
  liquidity: undefined
  depositedToken0: undefined
  depositedToken1: undefined
  withdrawnToken0: undefined
  withdrawnToken1: undefined
  collectedFeesToken0: undefined
  collectedFeesToken1: undefined
  transaction: Transaction
  feeGrowthInside0LastX128: undefined
  feeGrowthInside1LastX128: undefined
}

export interface PositionSnapshot {
  id: string
  owner: undefined
  pool: Pool
  position: Position
  blockNumber: undefined
  timestamp: undefined
  liquidity: undefined
  depositedToken0: undefined
  depositedToken1: undefined
  withdrawnToken0: undefined
  withdrawnToken1: undefined
  collectedFeesToken0: undefined
  collectedFeesToken1: undefined
  transaction: Transaction
  feeGrowthInside0LastX128: undefined
  feeGrowthInside1LastX128: undefined
}

export interface PositionSnapshot_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  owner?: undefined
  owner_not?: undefined
  owner_in?: undefined[]
  owner_not_in?: undefined[]
  owner_contains?: undefined
  owner_not_contains?: undefined
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  position?: string
  position_not?: string
  position_gt?: string
  position_lt?: string
  position_gte?: string
  position_lte?: string
  position_in?: string[]
  position_not_in?: string[]
  position_contains?: string
  position_contains_nocase?: string
  position_not_contains?: string
  position_not_contains_nocase?: string
  position_starts_with?: string
  position_starts_with_nocase?: string
  position_not_starts_with?: string
  position_not_starts_with_nocase?: string
  position_ends_with?: string
  position_ends_with_nocase?: string
  position_not_ends_with?: string
  position_not_ends_with_nocase?: string
  blockNumber?: undefined
  blockNumber_not?: undefined
  blockNumber_gt?: undefined
  blockNumber_lt?: undefined
  blockNumber_gte?: undefined
  blockNumber_lte?: undefined
  blockNumber_in?: undefined[]
  blockNumber_not_in?: undefined[]
  timestamp?: undefined
  timestamp_not?: undefined
  timestamp_gt?: undefined
  timestamp_lt?: undefined
  timestamp_gte?: undefined
  timestamp_lte?: undefined
  timestamp_in?: undefined[]
  timestamp_not_in?: undefined[]
  liquidity?: undefined
  liquidity_not?: undefined
  liquidity_gt?: undefined
  liquidity_lt?: undefined
  liquidity_gte?: undefined
  liquidity_lte?: undefined
  liquidity_in?: undefined[]
  liquidity_not_in?: undefined[]
  depositedToken0?: undefined
  depositedToken0_not?: undefined
  depositedToken0_gt?: undefined
  depositedToken0_lt?: undefined
  depositedToken0_gte?: undefined
  depositedToken0_lte?: undefined
  depositedToken0_in?: undefined[]
  depositedToken0_not_in?: undefined[]
  depositedToken1?: undefined
  depositedToken1_not?: undefined
  depositedToken1_gt?: undefined
  depositedToken1_lt?: undefined
  depositedToken1_gte?: undefined
  depositedToken1_lte?: undefined
  depositedToken1_in?: undefined[]
  depositedToken1_not_in?: undefined[]
  withdrawnToken0?: undefined
  withdrawnToken0_not?: undefined
  withdrawnToken0_gt?: undefined
  withdrawnToken0_lt?: undefined
  withdrawnToken0_gte?: undefined
  withdrawnToken0_lte?: undefined
  withdrawnToken0_in?: undefined[]
  withdrawnToken0_not_in?: undefined[]
  withdrawnToken1?: undefined
  withdrawnToken1_not?: undefined
  withdrawnToken1_gt?: undefined
  withdrawnToken1_lt?: undefined
  withdrawnToken1_gte?: undefined
  withdrawnToken1_lte?: undefined
  withdrawnToken1_in?: undefined[]
  withdrawnToken1_not_in?: undefined[]
  collectedFeesToken0?: undefined
  collectedFeesToken0_not?: undefined
  collectedFeesToken0_gt?: undefined
  collectedFeesToken0_lt?: undefined
  collectedFeesToken0_gte?: undefined
  collectedFeesToken0_lte?: undefined
  collectedFeesToken0_in?: undefined[]
  collectedFeesToken0_not_in?: undefined[]
  collectedFeesToken1?: undefined
  collectedFeesToken1_not?: undefined
  collectedFeesToken1_gt?: undefined
  collectedFeesToken1_lt?: undefined
  collectedFeesToken1_gte?: undefined
  collectedFeesToken1_lte?: undefined
  collectedFeesToken1_in?: undefined[]
  collectedFeesToken1_not_in?: undefined[]
  transaction?: string
  transaction_not?: string
  transaction_gt?: string
  transaction_lt?: string
  transaction_gte?: string
  transaction_lte?: string
  transaction_in?: string[]
  transaction_not_in?: string[]
  transaction_contains?: string
  transaction_contains_nocase?: string
  transaction_not_contains?: string
  transaction_not_contains_nocase?: string
  transaction_starts_with?: string
  transaction_starts_with_nocase?: string
  transaction_not_starts_with?: string
  transaction_not_starts_with_nocase?: string
  transaction_ends_with?: string
  transaction_ends_with_nocase?: string
  transaction_not_ends_with?: string
  transaction_not_ends_with_nocase?: string
  feeGrowthInside0LastX128?: undefined
  feeGrowthInside0LastX128_not?: undefined
  feeGrowthInside0LastX128_gt?: undefined
  feeGrowthInside0LastX128_lt?: undefined
  feeGrowthInside0LastX128_gte?: undefined
  feeGrowthInside0LastX128_lte?: undefined
  feeGrowthInside0LastX128_in?: undefined[]
  feeGrowthInside0LastX128_not_in?: undefined[]
  feeGrowthInside1LastX128?: undefined
  feeGrowthInside1LastX128_not?: undefined
  feeGrowthInside1LastX128_gt?: undefined
  feeGrowthInside1LastX128_lt?: undefined
  feeGrowthInside1LastX128_gte?: undefined
  feeGrowthInside1LastX128_lte?: undefined
  feeGrowthInside1LastX128_in?: undefined[]
  feeGrowthInside1LastX128_not_in?: undefined[]
}

export enum PositionSnapshot_orderBy {
  Id = 'id',
  Owner = 'owner',
  Pool = 'pool',
  Position = 'position',
  Blocknumber = 'blockNumber',
  Timestamp = 'timestamp',
  Liquidity = 'liquidity',
  Depositedtoken0 = 'depositedToken0',
  Depositedtoken1 = 'depositedToken1',
  Withdrawntoken0 = 'withdrawnToken0',
  Withdrawntoken1 = 'withdrawnToken1',
  Collectedfeestoken0 = 'collectedFeesToken0',
  Collectedfeestoken1 = 'collectedFeesToken1',
  Transaction = 'transaction',
  Feegrowthinside0lastx128 = 'feeGrowthInside0LastX128',
  Feegrowthinside1lastx128 = 'feeGrowthInside1LastX128',
}
export interface Position_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  owner?: undefined
  owner_not?: undefined
  owner_in?: undefined[]
  owner_not_in?: undefined[]
  owner_contains?: undefined
  owner_not_contains?: undefined
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  token0?: string
  token0_not?: string
  token0_gt?: string
  token0_lt?: string
  token0_gte?: string
  token0_lte?: string
  token0_in?: string[]
  token0_not_in?: string[]
  token0_contains?: string
  token0_contains_nocase?: string
  token0_not_contains?: string
  token0_not_contains_nocase?: string
  token0_starts_with?: string
  token0_starts_with_nocase?: string
  token0_not_starts_with?: string
  token0_not_starts_with_nocase?: string
  token0_ends_with?: string
  token0_ends_with_nocase?: string
  token0_not_ends_with?: string
  token0_not_ends_with_nocase?: string
  token1?: string
  token1_not?: string
  token1_gt?: string
  token1_lt?: string
  token1_gte?: string
  token1_lte?: string
  token1_in?: string[]
  token1_not_in?: string[]
  token1_contains?: string
  token1_contains_nocase?: string
  token1_not_contains?: string
  token1_not_contains_nocase?: string
  token1_starts_with?: string
  token1_starts_with_nocase?: string
  token1_not_starts_with?: string
  token1_not_starts_with_nocase?: string
  token1_ends_with?: string
  token1_ends_with_nocase?: string
  token1_not_ends_with?: string
  token1_not_ends_with_nocase?: string
  tickLower?: string
  tickLower_not?: string
  tickLower_gt?: string
  tickLower_lt?: string
  tickLower_gte?: string
  tickLower_lte?: string
  tickLower_in?: string[]
  tickLower_not_in?: string[]
  tickLower_contains?: string
  tickLower_contains_nocase?: string
  tickLower_not_contains?: string
  tickLower_not_contains_nocase?: string
  tickLower_starts_with?: string
  tickLower_starts_with_nocase?: string
  tickLower_not_starts_with?: string
  tickLower_not_starts_with_nocase?: string
  tickLower_ends_with?: string
  tickLower_ends_with_nocase?: string
  tickLower_not_ends_with?: string
  tickLower_not_ends_with_nocase?: string
  tickUpper?: string
  tickUpper_not?: string
  tickUpper_gt?: string
  tickUpper_lt?: string
  tickUpper_gte?: string
  tickUpper_lte?: string
  tickUpper_in?: string[]
  tickUpper_not_in?: string[]
  tickUpper_contains?: string
  tickUpper_contains_nocase?: string
  tickUpper_not_contains?: string
  tickUpper_not_contains_nocase?: string
  tickUpper_starts_with?: string
  tickUpper_starts_with_nocase?: string
  tickUpper_not_starts_with?: string
  tickUpper_not_starts_with_nocase?: string
  tickUpper_ends_with?: string
  tickUpper_ends_with_nocase?: string
  tickUpper_not_ends_with?: string
  tickUpper_not_ends_with_nocase?: string
  liquidity?: undefined
  liquidity_not?: undefined
  liquidity_gt?: undefined
  liquidity_lt?: undefined
  liquidity_gte?: undefined
  liquidity_lte?: undefined
  liquidity_in?: undefined[]
  liquidity_not_in?: undefined[]
  depositedToken0?: undefined
  depositedToken0_not?: undefined
  depositedToken0_gt?: undefined
  depositedToken0_lt?: undefined
  depositedToken0_gte?: undefined
  depositedToken0_lte?: undefined
  depositedToken0_in?: undefined[]
  depositedToken0_not_in?: undefined[]
  depositedToken1?: undefined
  depositedToken1_not?: undefined
  depositedToken1_gt?: undefined
  depositedToken1_lt?: undefined
  depositedToken1_gte?: undefined
  depositedToken1_lte?: undefined
  depositedToken1_in?: undefined[]
  depositedToken1_not_in?: undefined[]
  withdrawnToken0?: undefined
  withdrawnToken0_not?: undefined
  withdrawnToken0_gt?: undefined
  withdrawnToken0_lt?: undefined
  withdrawnToken0_gte?: undefined
  withdrawnToken0_lte?: undefined
  withdrawnToken0_in?: undefined[]
  withdrawnToken0_not_in?: undefined[]
  withdrawnToken1?: undefined
  withdrawnToken1_not?: undefined
  withdrawnToken1_gt?: undefined
  withdrawnToken1_lt?: undefined
  withdrawnToken1_gte?: undefined
  withdrawnToken1_lte?: undefined
  withdrawnToken1_in?: undefined[]
  withdrawnToken1_not_in?: undefined[]
  collectedFeesToken0?: undefined
  collectedFeesToken0_not?: undefined
  collectedFeesToken0_gt?: undefined
  collectedFeesToken0_lt?: undefined
  collectedFeesToken0_gte?: undefined
  collectedFeesToken0_lte?: undefined
  collectedFeesToken0_in?: undefined[]
  collectedFeesToken0_not_in?: undefined[]
  collectedFeesToken1?: undefined
  collectedFeesToken1_not?: undefined
  collectedFeesToken1_gt?: undefined
  collectedFeesToken1_lt?: undefined
  collectedFeesToken1_gte?: undefined
  collectedFeesToken1_lte?: undefined
  collectedFeesToken1_in?: undefined[]
  collectedFeesToken1_not_in?: undefined[]
  transaction?: string
  transaction_not?: string
  transaction_gt?: string
  transaction_lt?: string
  transaction_gte?: string
  transaction_lte?: string
  transaction_in?: string[]
  transaction_not_in?: string[]
  transaction_contains?: string
  transaction_contains_nocase?: string
  transaction_not_contains?: string
  transaction_not_contains_nocase?: string
  transaction_starts_with?: string
  transaction_starts_with_nocase?: string
  transaction_not_starts_with?: string
  transaction_not_starts_with_nocase?: string
  transaction_ends_with?: string
  transaction_ends_with_nocase?: string
  transaction_not_ends_with?: string
  transaction_not_ends_with_nocase?: string
  feeGrowthInside0LastX128?: undefined
  feeGrowthInside0LastX128_not?: undefined
  feeGrowthInside0LastX128_gt?: undefined
  feeGrowthInside0LastX128_lt?: undefined
  feeGrowthInside0LastX128_gte?: undefined
  feeGrowthInside0LastX128_lte?: undefined
  feeGrowthInside0LastX128_in?: undefined[]
  feeGrowthInside0LastX128_not_in?: undefined[]
  feeGrowthInside1LastX128?: undefined
  feeGrowthInside1LastX128_not?: undefined
  feeGrowthInside1LastX128_gt?: undefined
  feeGrowthInside1LastX128_lt?: undefined
  feeGrowthInside1LastX128_gte?: undefined
  feeGrowthInside1LastX128_lte?: undefined
  feeGrowthInside1LastX128_in?: undefined[]
  feeGrowthInside1LastX128_not_in?: undefined[]
}

export enum Position_orderBy {
  Id = 'id',
  Owner = 'owner',
  Pool = 'pool',
  Token0 = 'token0',
  Token1 = 'token1',
  Ticklower = 'tickLower',
  Tickupper = 'tickUpper',
  Liquidity = 'liquidity',
  Depositedtoken0 = 'depositedToken0',
  Depositedtoken1 = 'depositedToken1',
  Withdrawntoken0 = 'withdrawnToken0',
  Withdrawntoken1 = 'withdrawnToken1',
  Collectedfeestoken0 = 'collectedFeesToken0',
  Collectedfeestoken1 = 'collectedFeesToken1',
  Transaction = 'transaction',
  Feegrowthinside0lastx128 = 'feeGrowthInside0LastX128',
  Feegrowthinside1lastx128 = 'feeGrowthInside1LastX128',
}

export interface Swap {
  id: string
  transaction: Transaction
  timestamp: undefined
  pool: Pool
  token0: Token
  token1: Token
  sender: undefined
  recipient: undefined
  origin: undefined
  amount0: undefined
  amount1: undefined
  amountUSD: undefined
  sqrtPriceX96: undefined
  tick: undefined
  logIndex: Maybe<undefined>
}

export interface Swap_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  transaction?: string
  transaction_not?: string
  transaction_gt?: string
  transaction_lt?: string
  transaction_gte?: string
  transaction_lte?: string
  transaction_in?: string[]
  transaction_not_in?: string[]
  transaction_contains?: string
  transaction_contains_nocase?: string
  transaction_not_contains?: string
  transaction_not_contains_nocase?: string
  transaction_starts_with?: string
  transaction_starts_with_nocase?: string
  transaction_not_starts_with?: string
  transaction_not_starts_with_nocase?: string
  transaction_ends_with?: string
  transaction_ends_with_nocase?: string
  transaction_not_ends_with?: string
  transaction_not_ends_with_nocase?: string
  timestamp?: undefined
  timestamp_not?: undefined
  timestamp_gt?: undefined
  timestamp_lt?: undefined
  timestamp_gte?: undefined
  timestamp_lte?: undefined
  timestamp_in?: undefined[]
  timestamp_not_in?: undefined[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  token0?: string
  token0_not?: string
  token0_gt?: string
  token0_lt?: string
  token0_gte?: string
  token0_lte?: string
  token0_in?: string[]
  token0_not_in?: string[]
  token0_contains?: string
  token0_contains_nocase?: string
  token0_not_contains?: string
  token0_not_contains_nocase?: string
  token0_starts_with?: string
  token0_starts_with_nocase?: string
  token0_not_starts_with?: string
  token0_not_starts_with_nocase?: string
  token0_ends_with?: string
  token0_ends_with_nocase?: string
  token0_not_ends_with?: string
  token0_not_ends_with_nocase?: string
  token1?: string
  token1_not?: string
  token1_gt?: string
  token1_lt?: string
  token1_gte?: string
  token1_lte?: string
  token1_in?: string[]
  token1_not_in?: string[]
  token1_contains?: string
  token1_contains_nocase?: string
  token1_not_contains?: string
  token1_not_contains_nocase?: string
  token1_starts_with?: string
  token1_starts_with_nocase?: string
  token1_not_starts_with?: string
  token1_not_starts_with_nocase?: string
  token1_ends_with?: string
  token1_ends_with_nocase?: string
  token1_not_ends_with?: string
  token1_not_ends_with_nocase?: string
  sender?: undefined
  sender_not?: undefined
  sender_in?: undefined[]
  sender_not_in?: undefined[]
  sender_contains?: undefined
  sender_not_contains?: undefined
  recipient?: undefined
  recipient_not?: undefined
  recipient_in?: undefined[]
  recipient_not_in?: undefined[]
  recipient_contains?: undefined
  recipient_not_contains?: undefined
  origin?: undefined
  origin_not?: undefined
  origin_in?: undefined[]
  origin_not_in?: undefined[]
  origin_contains?: undefined
  origin_not_contains?: undefined
  amount0?: undefined
  amount0_not?: undefined
  amount0_gt?: undefined
  amount0_lt?: undefined
  amount0_gte?: undefined
  amount0_lte?: undefined
  amount0_in?: undefined[]
  amount0_not_in?: undefined[]
  amount1?: undefined
  amount1_not?: undefined
  amount1_gt?: undefined
  amount1_lt?: undefined
  amount1_gte?: undefined
  amount1_lte?: undefined
  amount1_in?: undefined[]
  amount1_not_in?: undefined[]
  amountUSD?: undefined
  amountUSD_not?: undefined
  amountUSD_gt?: undefined
  amountUSD_lt?: undefined
  amountUSD_gte?: undefined
  amountUSD_lte?: undefined
  amountUSD_in?: undefined[]
  amountUSD_not_in?: undefined[]
  sqrtPriceX96?: undefined
  sqrtPriceX96_not?: undefined
  sqrtPriceX96_gt?: undefined
  sqrtPriceX96_lt?: undefined
  sqrtPriceX96_gte?: undefined
  sqrtPriceX96_lte?: undefined
  sqrtPriceX96_in?: undefined[]
  sqrtPriceX96_not_in?: undefined[]
  tick?: undefined
  tick_not?: undefined
  tick_gt?: undefined
  tick_lt?: undefined
  tick_gte?: undefined
  tick_lte?: undefined
  tick_in?: undefined[]
  tick_not_in?: undefined[]
  logIndex?: undefined
  logIndex_not?: undefined
  logIndex_gt?: undefined
  logIndex_lt?: undefined
  logIndex_gte?: undefined
  logIndex_lte?: undefined
  logIndex_in?: undefined[]
  logIndex_not_in?: undefined[]
}

export enum Swap_orderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pool = 'pool',
  Token0 = 'token0',
  Token1 = 'token1',
  Sender = 'sender',
  Recipient = 'recipient',
  Origin = 'origin',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  Amountusd = 'amountUSD',
  Sqrtpricex96 = 'sqrtPriceX96',
  Tick = 'tick',
  Logindex = 'logIndex',
}
export interface Tick {
  id: string
  poolAddress: Maybe<string>
  tickIdx: undefined
  pool: Pool
  liquidityGross: undefined
  liquidityNet: undefined
  price0: undefined
  price1: undefined
  volumeToken0: undefined
  volumeToken1: undefined
  volumeUSD: undefined
  untrackedVolumeUSD: undefined
  feesUSD: undefined
  collectedFeesToken0: undefined
  collectedFeesToken1: undefined
  collectedFeesUSD: undefined
  createdAtTimestamp: undefined
  createdAtBlockNumber: undefined
  liquidityProviderCount: undefined
  feeGrowthOutside0X128: undefined
  feeGrowthOutside1X128: undefined
}

export interface TickDayData {
  id: string
  date: number
  pool: Pool
  tick: Tick
  liquidityGross: undefined
  liquidityNet: undefined
  volumeToken0: undefined
  volumeToken1: undefined
  volumeUSD: undefined
  feesUSD: undefined
  feeGrowthOutside0X128: undefined
  feeGrowthOutside1X128: undefined
}

export interface TickDayData_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  date?: number
  date_not?: number
  date_gt?: number
  date_lt?: number
  date_gte?: number
  date_lte?: number
  date_in?: number[]
  date_not_in?: number[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  tick?: string
  tick_not?: string
  tick_gt?: string
  tick_lt?: string
  tick_gte?: string
  tick_lte?: string
  tick_in?: string[]
  tick_not_in?: string[]
  tick_contains?: string
  tick_contains_nocase?: string
  tick_not_contains?: string
  tick_not_contains_nocase?: string
  tick_starts_with?: string
  tick_starts_with_nocase?: string
  tick_not_starts_with?: string
  tick_not_starts_with_nocase?: string
  tick_ends_with?: string
  tick_ends_with_nocase?: string
  tick_not_ends_with?: string
  tick_not_ends_with_nocase?: string
  liquidityGross?: undefined
  liquidityGross_not?: undefined
  liquidityGross_gt?: undefined
  liquidityGross_lt?: undefined
  liquidityGross_gte?: undefined
  liquidityGross_lte?: undefined
  liquidityGross_in?: undefined[]
  liquidityGross_not_in?: undefined[]
  liquidityNet?: undefined
  liquidityNet_not?: undefined
  liquidityNet_gt?: undefined
  liquidityNet_lt?: undefined
  liquidityNet_gte?: undefined
  liquidityNet_lte?: undefined
  liquidityNet_in?: undefined[]
  liquidityNet_not_in?: undefined[]
  volumeToken0?: undefined
  volumeToken0_not?: undefined
  volumeToken0_gt?: undefined
  volumeToken0_lt?: undefined
  volumeToken0_gte?: undefined
  volumeToken0_lte?: undefined
  volumeToken0_in?: undefined[]
  volumeToken0_not_in?: undefined[]
  volumeToken1?: undefined
  volumeToken1_not?: undefined
  volumeToken1_gt?: undefined
  volumeToken1_lt?: undefined
  volumeToken1_gte?: undefined
  volumeToken1_lte?: undefined
  volumeToken1_in?: undefined[]
  volumeToken1_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  feeGrowthOutside0X128?: undefined
  feeGrowthOutside0X128_not?: undefined
  feeGrowthOutside0X128_gt?: undefined
  feeGrowthOutside0X128_lt?: undefined
  feeGrowthOutside0X128_gte?: undefined
  feeGrowthOutside0X128_lte?: undefined
  feeGrowthOutside0X128_in?: undefined[]
  feeGrowthOutside0X128_not_in?: undefined[]
  feeGrowthOutside1X128?: undefined
  feeGrowthOutside1X128_not?: undefined
  feeGrowthOutside1X128_gt?: undefined
  feeGrowthOutside1X128_lt?: undefined
  feeGrowthOutside1X128_gte?: undefined
  feeGrowthOutside1X128_lte?: undefined
  feeGrowthOutside1X128_in?: undefined[]
  feeGrowthOutside1X128_not_in?: undefined[]
}

export enum TickDayData_orderBy {
  Id = 'id',
  Date = 'date',
  Pool = 'pool',
  Tick = 'tick',
  Liquiditygross = 'liquidityGross',
  Liquiditynet = 'liquidityNet',
  Volumetoken0 = 'volumeToken0',
  Volumetoken1 = 'volumeToken1',
  Volumeusd = 'volumeUSD',
  Feesusd = 'feesUSD',
  Feegrowthoutside0x128 = 'feeGrowthOutside0X128',
  Feegrowthoutside1x128 = 'feeGrowthOutside1X128',
}
export interface TickHourData {
  id: string
  periodStartUnix: number
  pool: Pool
  tick: Tick
  liquidityGross: undefined
  liquidityNet: undefined
  volumeToken0: undefined
  volumeToken1: undefined
  volumeUSD: undefined
  feesUSD: undefined
}

export interface TickHourData_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  periodStartUnix?: number
  periodStartUnix_not?: number
  periodStartUnix_gt?: number
  periodStartUnix_lt?: number
  periodStartUnix_gte?: number
  periodStartUnix_lte?: number
  periodStartUnix_in?: number[]
  periodStartUnix_not_in?: number[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  tick?: string
  tick_not?: string
  tick_gt?: string
  tick_lt?: string
  tick_gte?: string
  tick_lte?: string
  tick_in?: string[]
  tick_not_in?: string[]
  tick_contains?: string
  tick_contains_nocase?: string
  tick_not_contains?: string
  tick_not_contains_nocase?: string
  tick_starts_with?: string
  tick_starts_with_nocase?: string
  tick_not_starts_with?: string
  tick_not_starts_with_nocase?: string
  tick_ends_with?: string
  tick_ends_with_nocase?: string
  tick_not_ends_with?: string
  tick_not_ends_with_nocase?: string
  liquidityGross?: undefined
  liquidityGross_not?: undefined
  liquidityGross_gt?: undefined
  liquidityGross_lt?: undefined
  liquidityGross_gte?: undefined
  liquidityGross_lte?: undefined
  liquidityGross_in?: undefined[]
  liquidityGross_not_in?: undefined[]
  liquidityNet?: undefined
  liquidityNet_not?: undefined
  liquidityNet_gt?: undefined
  liquidityNet_lt?: undefined
  liquidityNet_gte?: undefined
  liquidityNet_lte?: undefined
  liquidityNet_in?: undefined[]
  liquidityNet_not_in?: undefined[]
  volumeToken0?: undefined
  volumeToken0_not?: undefined
  volumeToken0_gt?: undefined
  volumeToken0_lt?: undefined
  volumeToken0_gte?: undefined
  volumeToken0_lte?: undefined
  volumeToken0_in?: undefined[]
  volumeToken0_not_in?: undefined[]
  volumeToken1?: undefined
  volumeToken1_not?: undefined
  volumeToken1_gt?: undefined
  volumeToken1_lt?: undefined
  volumeToken1_gte?: undefined
  volumeToken1_lte?: undefined
  volumeToken1_in?: undefined[]
  volumeToken1_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
}

export enum TickHourData_orderBy {
  Id = 'id',
  Periodstartunix = 'periodStartUnix',
  Pool = 'pool',
  Tick = 'tick',
  Liquiditygross = 'liquidityGross',
  Liquiditynet = 'liquidityNet',
  Volumetoken0 = 'volumeToken0',
  Volumetoken1 = 'volumeToken1',
  Volumeusd = 'volumeUSD',
  Feesusd = 'feesUSD',
}
export interface Tick_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  poolAddress?: string
  poolAddress_not?: string
  poolAddress_gt?: string
  poolAddress_lt?: string
  poolAddress_gte?: string
  poolAddress_lte?: string
  poolAddress_in?: string[]
  poolAddress_not_in?: string[]
  poolAddress_contains?: string
  poolAddress_contains_nocase?: string
  poolAddress_not_contains?: string
  poolAddress_not_contains_nocase?: string
  poolAddress_starts_with?: string
  poolAddress_starts_with_nocase?: string
  poolAddress_not_starts_with?: string
  poolAddress_not_starts_with_nocase?: string
  poolAddress_ends_with?: string
  poolAddress_ends_with_nocase?: string
  poolAddress_not_ends_with?: string
  poolAddress_not_ends_with_nocase?: string
  tickIdx?: undefined
  tickIdx_not?: undefined
  tickIdx_gt?: undefined
  tickIdx_lt?: undefined
  tickIdx_gte?: undefined
  tickIdx_lte?: undefined
  tickIdx_in?: undefined[]
  tickIdx_not_in?: undefined[]
  pool?: string
  pool_not?: string
  pool_gt?: string
  pool_lt?: string
  pool_gte?: string
  pool_lte?: string
  pool_in?: string[]
  pool_not_in?: string[]
  pool_contains?: string
  pool_contains_nocase?: string
  pool_not_contains?: string
  pool_not_contains_nocase?: string
  pool_starts_with?: string
  pool_starts_with_nocase?: string
  pool_not_starts_with?: string
  pool_not_starts_with_nocase?: string
  pool_ends_with?: string
  pool_ends_with_nocase?: string
  pool_not_ends_with?: string
  pool_not_ends_with_nocase?: string
  liquidityGross?: undefined
  liquidityGross_not?: undefined
  liquidityGross_gt?: undefined
  liquidityGross_lt?: undefined
  liquidityGross_gte?: undefined
  liquidityGross_lte?: undefined
  liquidityGross_in?: undefined[]
  liquidityGross_not_in?: undefined[]
  liquidityNet?: undefined
  liquidityNet_not?: undefined
  liquidityNet_gt?: undefined
  liquidityNet_lt?: undefined
  liquidityNet_gte?: undefined
  liquidityNet_lte?: undefined
  liquidityNet_in?: undefined[]
  liquidityNet_not_in?: undefined[]
  price0?: undefined
  price0_not?: undefined
  price0_gt?: undefined
  price0_lt?: undefined
  price0_gte?: undefined
  price0_lte?: undefined
  price0_in?: undefined[]
  price0_not_in?: undefined[]
  price1?: undefined
  price1_not?: undefined
  price1_gt?: undefined
  price1_lt?: undefined
  price1_gte?: undefined
  price1_lte?: undefined
  price1_in?: undefined[]
  price1_not_in?: undefined[]
  volumeToken0?: undefined
  volumeToken0_not?: undefined
  volumeToken0_gt?: undefined
  volumeToken0_lt?: undefined
  volumeToken0_gte?: undefined
  volumeToken0_lte?: undefined
  volumeToken0_in?: undefined[]
  volumeToken0_not_in?: undefined[]
  volumeToken1?: undefined
  volumeToken1_not?: undefined
  volumeToken1_gt?: undefined
  volumeToken1_lt?: undefined
  volumeToken1_gte?: undefined
  volumeToken1_lte?: undefined
  volumeToken1_in?: undefined[]
  volumeToken1_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  untrackedVolumeUSD?: undefined
  untrackedVolumeUSD_not?: undefined
  untrackedVolumeUSD_gt?: undefined
  untrackedVolumeUSD_lt?: undefined
  untrackedVolumeUSD_gte?: undefined
  untrackedVolumeUSD_lte?: undefined
  untrackedVolumeUSD_in?: undefined[]
  untrackedVolumeUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  collectedFeesToken0?: undefined
  collectedFeesToken0_not?: undefined
  collectedFeesToken0_gt?: undefined
  collectedFeesToken0_lt?: undefined
  collectedFeesToken0_gte?: undefined
  collectedFeesToken0_lte?: undefined
  collectedFeesToken0_in?: undefined[]
  collectedFeesToken0_not_in?: undefined[]
  collectedFeesToken1?: undefined
  collectedFeesToken1_not?: undefined
  collectedFeesToken1_gt?: undefined
  collectedFeesToken1_lt?: undefined
  collectedFeesToken1_gte?: undefined
  collectedFeesToken1_lte?: undefined
  collectedFeesToken1_in?: undefined[]
  collectedFeesToken1_not_in?: undefined[]
  collectedFeesUSD?: undefined
  collectedFeesUSD_not?: undefined
  collectedFeesUSD_gt?: undefined
  collectedFeesUSD_lt?: undefined
  collectedFeesUSD_gte?: undefined
  collectedFeesUSD_lte?: undefined
  collectedFeesUSD_in?: undefined[]
  collectedFeesUSD_not_in?: undefined[]
  createdAtTimestamp?: undefined
  createdAtTimestamp_not?: undefined
  createdAtTimestamp_gt?: undefined
  createdAtTimestamp_lt?: undefined
  createdAtTimestamp_gte?: undefined
  createdAtTimestamp_lte?: undefined
  createdAtTimestamp_in?: undefined[]
  createdAtTimestamp_not_in?: undefined[]
  createdAtBlockNumber?: undefined
  createdAtBlockNumber_not?: undefined
  createdAtBlockNumber_gt?: undefined
  createdAtBlockNumber_lt?: undefined
  createdAtBlockNumber_gte?: undefined
  createdAtBlockNumber_lte?: undefined
  createdAtBlockNumber_in?: undefined[]
  createdAtBlockNumber_not_in?: undefined[]
  liquidityProviderCount?: undefined
  liquidityProviderCount_not?: undefined
  liquidityProviderCount_gt?: undefined
  liquidityProviderCount_lt?: undefined
  liquidityProviderCount_gte?: undefined
  liquidityProviderCount_lte?: undefined
  liquidityProviderCount_in?: undefined[]
  liquidityProviderCount_not_in?: undefined[]
  feeGrowthOutside0X128?: undefined
  feeGrowthOutside0X128_not?: undefined
  feeGrowthOutside0X128_gt?: undefined
  feeGrowthOutside0X128_lt?: undefined
  feeGrowthOutside0X128_gte?: undefined
  feeGrowthOutside0X128_lte?: undefined
  feeGrowthOutside0X128_in?: undefined[]
  feeGrowthOutside0X128_not_in?: undefined[]
  feeGrowthOutside1X128?: undefined
  feeGrowthOutside1X128_not?: undefined
  feeGrowthOutside1X128_gt?: undefined
  feeGrowthOutside1X128_lt?: undefined
  feeGrowthOutside1X128_gte?: undefined
  feeGrowthOutside1X128_lte?: undefined
  feeGrowthOutside1X128_in?: undefined[]
  feeGrowthOutside1X128_not_in?: undefined[]
}

export enum Tick_orderBy {
  Id = 'id',
  Pooladdress = 'poolAddress',
  Tickidx = 'tickIdx',
  Pool = 'pool',
  Liquiditygross = 'liquidityGross',
  Liquiditynet = 'liquidityNet',
  Price0 = 'price0',
  Price1 = 'price1',
  Volumetoken0 = 'volumeToken0',
  Volumetoken1 = 'volumeToken1',
  Volumeusd = 'volumeUSD',
  Untrackedvolumeusd = 'untrackedVolumeUSD',
  Feesusd = 'feesUSD',
  Collectedfeestoken0 = 'collectedFeesToken0',
  Collectedfeestoken1 = 'collectedFeesToken1',
  Collectedfeesusd = 'collectedFeesUSD',
  Createdattimestamp = 'createdAtTimestamp',
  Createdatblocknumber = 'createdAtBlockNumber',
  Liquidityprovidercount = 'liquidityProviderCount',
  Feegrowthoutside0x128 = 'feeGrowthOutside0X128',
  Feegrowthoutside1x128 = 'feeGrowthOutside1X128',
}
export interface Token {
  id: string
  symbol: string
  name: string
  decimals: undefined
  totalSupply: undefined
  volume: undefined
  volumeUSD: undefined
  untrackedVolumeUSD: undefined
  feesUSD: undefined
  txCount: undefined
  poolCount: undefined
  totalValueLocked: undefined
  totalValueLockedUSD: undefined
  totalValueLockedUSDUntracked: undefined
  derivedETH: undefined
  whitelistPools: Pool[]
  tokenDayData: TokenDayData[]
}

export interface TokenDayData {
  id: string
  date: number
  token: Token
  volume: undefined
  volumeUSD: undefined
  untrackedVolumeUSD: undefined
  totalValueLocked: undefined
  totalValueLockedUSD: undefined
  priceUSD: undefined
  feesUSD: undefined
  open: undefined
  high: undefined
  low: undefined
  close: undefined
}

export interface TokenDayData_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  date?: number
  date_not?: number
  date_gt?: number
  date_lt?: number
  date_gte?: number
  date_lte?: number
  date_in?: number[]
  date_not_in?: number[]
  token?: string
  token_not?: string
  token_gt?: string
  token_lt?: string
  token_gte?: string
  token_lte?: string
  token_in?: string[]
  token_not_in?: string[]
  token_contains?: string
  token_contains_nocase?: string
  token_not_contains?: string
  token_not_contains_nocase?: string
  token_starts_with?: string
  token_starts_with_nocase?: string
  token_not_starts_with?: string
  token_not_starts_with_nocase?: string
  token_ends_with?: string
  token_ends_with_nocase?: string
  token_not_ends_with?: string
  token_not_ends_with_nocase?: string
  volume?: undefined
  volume_not?: undefined
  volume_gt?: undefined
  volume_lt?: undefined
  volume_gte?: undefined
  volume_lte?: undefined
  volume_in?: undefined[]
  volume_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  untrackedVolumeUSD?: undefined
  untrackedVolumeUSD_not?: undefined
  untrackedVolumeUSD_gt?: undefined
  untrackedVolumeUSD_lt?: undefined
  untrackedVolumeUSD_gte?: undefined
  untrackedVolumeUSD_lte?: undefined
  untrackedVolumeUSD_in?: undefined[]
  untrackedVolumeUSD_not_in?: undefined[]
  totalValueLocked?: undefined
  totalValueLocked_not?: undefined
  totalValueLocked_gt?: undefined
  totalValueLocked_lt?: undefined
  totalValueLocked_gte?: undefined
  totalValueLocked_lte?: undefined
  totalValueLocked_in?: undefined[]
  totalValueLocked_not_in?: undefined[]
  totalValueLockedUSD?: undefined
  totalValueLockedUSD_not?: undefined
  totalValueLockedUSD_gt?: undefined
  totalValueLockedUSD_lt?: undefined
  totalValueLockedUSD_gte?: undefined
  totalValueLockedUSD_lte?: undefined
  totalValueLockedUSD_in?: undefined[]
  totalValueLockedUSD_not_in?: undefined[]
  priceUSD?: undefined
  priceUSD_not?: undefined
  priceUSD_gt?: undefined
  priceUSD_lt?: undefined
  priceUSD_gte?: undefined
  priceUSD_lte?: undefined
  priceUSD_in?: undefined[]
  priceUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  open?: undefined
  open_not?: undefined
  open_gt?: undefined
  open_lt?: undefined
  open_gte?: undefined
  open_lte?: undefined
  open_in?: undefined[]
  open_not_in?: undefined[]
  high?: undefined
  high_not?: undefined
  high_gt?: undefined
  high_lt?: undefined
  high_gte?: undefined
  high_lte?: undefined
  high_in?: undefined[]
  high_not_in?: undefined[]
  low?: undefined
  low_not?: undefined
  low_gt?: undefined
  low_lt?: undefined
  low_gte?: undefined
  low_lte?: undefined
  low_in?: undefined[]
  low_not_in?: undefined[]
  close?: undefined
  close_not?: undefined
  close_gt?: undefined
  close_lt?: undefined
  close_gte?: undefined
  close_lte?: undefined
  close_in?: undefined[]
  close_not_in?: undefined[]
}

export enum TokenDayData_orderBy {
  Id = 'id',
  Date = 'date',
  Token = 'token',
  Volume = 'volume',
  Volumeusd = 'volumeUSD',
  Untrackedvolumeusd = 'untrackedVolumeUSD',
  Totalvaluelocked = 'totalValueLocked',
  Totalvaluelockedusd = 'totalValueLockedUSD',
  Priceusd = 'priceUSD',
  Feesusd = 'feesUSD',
  Open = 'open',
  High = 'high',
  Low = 'low',
  Close = 'close',
}
export interface TokenHourData {
  id: string
  periodStartUnix: number
  token: Token
  volume: undefined
  volumeUSD: undefined
  untrackedVolumeUSD: undefined
  totalValueLocked: undefined
  totalValueLockedUSD: undefined
  priceUSD: undefined
  feesUSD: undefined
  open: undefined
  high: undefined
  low: undefined
  close: undefined
}

export interface TokenHourData_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  periodStartUnix?: number
  periodStartUnix_not?: number
  periodStartUnix_gt?: number
  periodStartUnix_lt?: number
  periodStartUnix_gte?: number
  periodStartUnix_lte?: number
  periodStartUnix_in?: number[]
  periodStartUnix_not_in?: number[]
  token?: string
  token_not?: string
  token_gt?: string
  token_lt?: string
  token_gte?: string
  token_lte?: string
  token_in?: string[]
  token_not_in?: string[]
  token_contains?: string
  token_contains_nocase?: string
  token_not_contains?: string
  token_not_contains_nocase?: string
  token_starts_with?: string
  token_starts_with_nocase?: string
  token_not_starts_with?: string
  token_not_starts_with_nocase?: string
  token_ends_with?: string
  token_ends_with_nocase?: string
  token_not_ends_with?: string
  token_not_ends_with_nocase?: string
  volume?: undefined
  volume_not?: undefined
  volume_gt?: undefined
  volume_lt?: undefined
  volume_gte?: undefined
  volume_lte?: undefined
  volume_in?: undefined[]
  volume_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  untrackedVolumeUSD?: undefined
  untrackedVolumeUSD_not?: undefined
  untrackedVolumeUSD_gt?: undefined
  untrackedVolumeUSD_lt?: undefined
  untrackedVolumeUSD_gte?: undefined
  untrackedVolumeUSD_lte?: undefined
  untrackedVolumeUSD_in?: undefined[]
  untrackedVolumeUSD_not_in?: undefined[]
  totalValueLocked?: undefined
  totalValueLocked_not?: undefined
  totalValueLocked_gt?: undefined
  totalValueLocked_lt?: undefined
  totalValueLocked_gte?: undefined
  totalValueLocked_lte?: undefined
  totalValueLocked_in?: undefined[]
  totalValueLocked_not_in?: undefined[]
  totalValueLockedUSD?: undefined
  totalValueLockedUSD_not?: undefined
  totalValueLockedUSD_gt?: undefined
  totalValueLockedUSD_lt?: undefined
  totalValueLockedUSD_gte?: undefined
  totalValueLockedUSD_lte?: undefined
  totalValueLockedUSD_in?: undefined[]
  totalValueLockedUSD_not_in?: undefined[]
  priceUSD?: undefined
  priceUSD_not?: undefined
  priceUSD_gt?: undefined
  priceUSD_lt?: undefined
  priceUSD_gte?: undefined
  priceUSD_lte?: undefined
  priceUSD_in?: undefined[]
  priceUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  open?: undefined
  open_not?: undefined
  open_gt?: undefined
  open_lt?: undefined
  open_gte?: undefined
  open_lte?: undefined
  open_in?: undefined[]
  open_not_in?: undefined[]
  high?: undefined
  high_not?: undefined
  high_gt?: undefined
  high_lt?: undefined
  high_gte?: undefined
  high_lte?: undefined
  high_in?: undefined[]
  high_not_in?: undefined[]
  low?: undefined
  low_not?: undefined
  low_gt?: undefined
  low_lt?: undefined
  low_gte?: undefined
  low_lte?: undefined
  low_in?: undefined[]
  low_not_in?: undefined[]
  close?: undefined
  close_not?: undefined
  close_gt?: undefined
  close_lt?: undefined
  close_gte?: undefined
  close_lte?: undefined
  close_in?: undefined[]
  close_not_in?: undefined[]
}

export enum TokenHourData_orderBy {
  Id = 'id',
  Periodstartunix = 'periodStartUnix',
  Token = 'token',
  Volume = 'volume',
  Volumeusd = 'volumeUSD',
  Untrackedvolumeusd = 'untrackedVolumeUSD',
  Totalvaluelocked = 'totalValueLocked',
  Totalvaluelockedusd = 'totalValueLockedUSD',
  Priceusd = 'priceUSD',
  Feesusd = 'feesUSD',
  Open = 'open',
  High = 'high',
  Low = 'low',
  Close = 'close',
}
export interface Token_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  symbol?: string
  symbol_not?: string
  symbol_gt?: string
  symbol_lt?: string
  symbol_gte?: string
  symbol_lte?: string
  symbol_in?: string[]
  symbol_not_in?: string[]
  symbol_contains?: string
  symbol_contains_nocase?: string
  symbol_not_contains?: string
  symbol_not_contains_nocase?: string
  symbol_starts_with?: string
  symbol_starts_with_nocase?: string
  symbol_not_starts_with?: string
  symbol_not_starts_with_nocase?: string
  symbol_ends_with?: string
  symbol_ends_with_nocase?: string
  symbol_not_ends_with?: string
  symbol_not_ends_with_nocase?: string
  name?: string
  name_not?: string
  name_gt?: string
  name_lt?: string
  name_gte?: string
  name_lte?: string
  name_in?: string[]
  name_not_in?: string[]
  name_contains?: string
  name_contains_nocase?: string
  name_not_contains?: string
  name_not_contains_nocase?: string
  name_starts_with?: string
  name_starts_with_nocase?: string
  name_not_starts_with?: string
  name_not_starts_with_nocase?: string
  name_ends_with?: string
  name_ends_with_nocase?: string
  name_not_ends_with?: string
  name_not_ends_with_nocase?: string
  decimals?: undefined
  decimals_not?: undefined
  decimals_gt?: undefined
  decimals_lt?: undefined
  decimals_gte?: undefined
  decimals_lte?: undefined
  decimals_in?: undefined[]
  decimals_not_in?: undefined[]
  totalSupply?: undefined
  totalSupply_not?: undefined
  totalSupply_gt?: undefined
  totalSupply_lt?: undefined
  totalSupply_gte?: undefined
  totalSupply_lte?: undefined
  totalSupply_in?: undefined[]
  totalSupply_not_in?: undefined[]
  volume?: undefined
  volume_not?: undefined
  volume_gt?: undefined
  volume_lt?: undefined
  volume_gte?: undefined
  volume_lte?: undefined
  volume_in?: undefined[]
  volume_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  untrackedVolumeUSD?: undefined
  untrackedVolumeUSD_not?: undefined
  untrackedVolumeUSD_gt?: undefined
  untrackedVolumeUSD_lt?: undefined
  untrackedVolumeUSD_gte?: undefined
  untrackedVolumeUSD_lte?: undefined
  untrackedVolumeUSD_in?: undefined[]
  untrackedVolumeUSD_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  txCount?: undefined
  txCount_not?: undefined
  txCount_gt?: undefined
  txCount_lt?: undefined
  txCount_gte?: undefined
  txCount_lte?: undefined
  txCount_in?: undefined[]
  txCount_not_in?: undefined[]
  poolCount?: undefined
  poolCount_not?: undefined
  poolCount_gt?: undefined
  poolCount_lt?: undefined
  poolCount_gte?: undefined
  poolCount_lte?: undefined
  poolCount_in?: undefined[]
  poolCount_not_in?: undefined[]
  totalValueLocked?: undefined
  totalValueLocked_not?: undefined
  totalValueLocked_gt?: undefined
  totalValueLocked_lt?: undefined
  totalValueLocked_gte?: undefined
  totalValueLocked_lte?: undefined
  totalValueLocked_in?: undefined[]
  totalValueLocked_not_in?: undefined[]
  totalValueLockedUSD?: undefined
  totalValueLockedUSD_not?: undefined
  totalValueLockedUSD_gt?: undefined
  totalValueLockedUSD_lt?: undefined
  totalValueLockedUSD_gte?: undefined
  totalValueLockedUSD_lte?: undefined
  totalValueLockedUSD_in?: undefined[]
  totalValueLockedUSD_not_in?: undefined[]
  totalValueLockedUSDUntracked?: undefined
  totalValueLockedUSDUntracked_not?: undefined
  totalValueLockedUSDUntracked_gt?: undefined
  totalValueLockedUSDUntracked_lt?: undefined
  totalValueLockedUSDUntracked_gte?: undefined
  totalValueLockedUSDUntracked_lte?: undefined
  totalValueLockedUSDUntracked_in?: undefined[]
  totalValueLockedUSDUntracked_not_in?: undefined[]
  derivedETH?: undefined
  derivedETH_not?: undefined
  derivedETH_gt?: undefined
  derivedETH_lt?: undefined
  derivedETH_gte?: undefined
  derivedETH_lte?: undefined
  derivedETH_in?: undefined[]
  derivedETH_not_in?: undefined[]
  whitelistPools?: string[]
  whitelistPools_not?: string[]
  whitelistPools_contains?: string[]
  whitelistPools_contains_nocase?: string[]
  whitelistPools_not_contains?: string[]
  whitelistPools_not_contains_nocase?: string[]
}

export enum Token_orderBy {
  Id = 'id',
  Symbol = 'symbol',
  Name = 'name',
  Decimals = 'decimals',
  Totalsupply = 'totalSupply',
  Volume = 'volume',
  Volumeusd = 'volumeUSD',
  Untrackedvolumeusd = 'untrackedVolumeUSD',
  Feesusd = 'feesUSD',
  Txcount = 'txCount',
  Poolcount = 'poolCount',
  Totalvaluelocked = 'totalValueLocked',
  Totalvaluelockedusd = 'totalValueLockedUSD',
  Totalvaluelockedusduntracked = 'totalValueLockedUSDUntracked',
  Derivedeth = 'derivedETH',
  Whitelistpools = 'whitelistPools',
  Tokendaydata = 'tokenDayData',
}
export interface Transaction {
  id: string
  blockNumber: undefined
  timestamp: undefined
  gasUsed: undefined
  gasPrice: undefined
  mints: Mint[]
  burns: Burn[]
  swaps: Swap[]
  flashed: Flash[]
  collects: Collect[]
}

export interface Transaction_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  blockNumber?: undefined
  blockNumber_not?: undefined
  blockNumber_gt?: undefined
  blockNumber_lt?: undefined
  blockNumber_gte?: undefined
  blockNumber_lte?: undefined
  blockNumber_in?: undefined[]
  blockNumber_not_in?: undefined[]
  timestamp?: undefined
  timestamp_not?: undefined
  timestamp_gt?: undefined
  timestamp_lt?: undefined
  timestamp_gte?: undefined
  timestamp_lte?: undefined
  timestamp_in?: undefined[]
  timestamp_not_in?: undefined[]
  gasUsed?: undefined
  gasUsed_not?: undefined
  gasUsed_gt?: undefined
  gasUsed_lt?: undefined
  gasUsed_gte?: undefined
  gasUsed_lte?: undefined
  gasUsed_in?: undefined[]
  gasUsed_not_in?: undefined[]
  gasPrice?: undefined
  gasPrice_not?: undefined
  gasPrice_gt?: undefined
  gasPrice_lt?: undefined
  gasPrice_gte?: undefined
  gasPrice_lte?: undefined
  gasPrice_in?: undefined[]
  gasPrice_not_in?: undefined[]
}

export enum Transaction_orderBy {
  Id = 'id',
  Blocknumber = 'blockNumber',
  Timestamp = 'timestamp',
  Gasused = 'gasUsed',
  Gasprice = 'gasPrice',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps',
  Flashed = 'flashed',
  Collects = 'collects',
}
export interface UniswapDayData {
  id: string
  date: number
  volumeETH: undefined
  volumeUSD: undefined
  volumeUSDUntracked: undefined
  feesUSD: undefined
  txCount: undefined
  tvlUSD: undefined
}

export interface UniswapDayData_filter {
  id?: string
  id_not?: string
  id_gt?: string
  id_lt?: string
  id_gte?: string
  id_lte?: string
  id_in?: string[]
  id_not_in?: string[]
  date?: number
  date_not?: number
  date_gt?: number
  date_lt?: number
  date_gte?: number
  date_lte?: number
  date_in?: number[]
  date_not_in?: number[]
  volumeETH?: undefined
  volumeETH_not?: undefined
  volumeETH_gt?: undefined
  volumeETH_lt?: undefined
  volumeETH_gte?: undefined
  volumeETH_lte?: undefined
  volumeETH_in?: undefined[]
  volumeETH_not_in?: undefined[]
  volumeUSD?: undefined
  volumeUSD_not?: undefined
  volumeUSD_gt?: undefined
  volumeUSD_lt?: undefined
  volumeUSD_gte?: undefined
  volumeUSD_lte?: undefined
  volumeUSD_in?: undefined[]
  volumeUSD_not_in?: undefined[]
  volumeUSDUntracked?: undefined
  volumeUSDUntracked_not?: undefined
  volumeUSDUntracked_gt?: undefined
  volumeUSDUntracked_lt?: undefined
  volumeUSDUntracked_gte?: undefined
  volumeUSDUntracked_lte?: undefined
  volumeUSDUntracked_in?: undefined[]
  volumeUSDUntracked_not_in?: undefined[]
  feesUSD?: undefined
  feesUSD_not?: undefined
  feesUSD_gt?: undefined
  feesUSD_lt?: undefined
  feesUSD_gte?: undefined
  feesUSD_lte?: undefined
  feesUSD_in?: undefined[]
  feesUSD_not_in?: undefined[]
  txCount?: undefined
  txCount_not?: undefined
  txCount_gt?: undefined
  txCount_lt?: undefined
  txCount_gte?: undefined
  txCount_lte?: undefined
  txCount_in?: undefined[]
  txCount_not_in?: undefined[]
  tvlUSD?: undefined
  tvlUSD_not?: undefined
  tvlUSD_gt?: undefined
  tvlUSD_lt?: undefined
  tvlUSD_gte?: undefined
  tvlUSD_lte?: undefined
  tvlUSD_in?: undefined[]
  tvlUSD_not_in?: undefined[]
}

export enum UniswapDayData_orderBy {
  Id = 'id',
  Date = 'date',
  Volumeeth = 'volumeETH',
  Volumeusd = 'volumeUSD',
  Volumeusduntracked = 'volumeUSDUntracked',
  Feesusd = 'feesUSD',
  Txcount = 'txCount',
  Tvlusd = 'tvlUSD',
}
export interface factoryArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface factoriesArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Factory_orderBy
  orderDirection?: OrderDirection
  where?: Factory_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface bundleArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface bundlesArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Bundle_orderBy
  orderDirection?: OrderDirection
  where?: Bundle_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokensArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Token_orderBy
  orderDirection?: OrderDirection
  where?: Token_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Pool_orderBy
  orderDirection?: OrderDirection
  where?: Pool_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface ticksArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Tick_orderBy
  orderDirection?: OrderDirection
  where?: Tick_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Position_orderBy
  orderDirection?: OrderDirection
  where?: Position_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionSnapshotArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionSnapshotsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: PositionSnapshot_orderBy
  orderDirection?: OrderDirection
  where?: PositionSnapshot_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface transactionArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface transactionsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Transaction_orderBy
  orderDirection?: OrderDirection
  where?: Transaction_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface mintArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface mintsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Mint_orderBy
  orderDirection?: OrderDirection
  where?: Mint_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface burnArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface burnsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Burn_orderBy
  orderDirection?: OrderDirection
  where?: Burn_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface swapArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface swapsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Swap_orderBy
  orderDirection?: OrderDirection
  where?: Swap_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface collectArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface collectsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Collect_orderBy
  orderDirection?: OrderDirection
  where?: Collect_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface flashArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface flashesArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Flash_orderBy
  orderDirection?: OrderDirection
  where?: Flash_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface uniswapDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface uniswapDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: UniswapDayData_orderBy
  orderDirection?: OrderDirection
  where?: UniswapDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: PoolDayData_orderBy
  orderDirection?: OrderDirection
  where?: PoolDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolHourDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolHourDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: PoolHourData_orderBy
  orderDirection?: OrderDirection
  where?: PoolHourData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickHourDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickHourDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TickHourData_orderBy
  orderDirection?: OrderDirection
  where?: TickHourData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TickDayData_orderBy
  orderDirection?: OrderDirection
  where?: TickDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TokenDayData_orderBy
  orderDirection?: OrderDirection
  where?: TokenDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenHourDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenHourDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TokenHourData_orderBy
  orderDirection?: OrderDirection
  where?: TokenHourData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface factoryArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface factoriesArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Factory_orderBy
  orderDirection?: OrderDirection
  where?: Factory_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface bundleArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface bundlesArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Bundle_orderBy
  orderDirection?: OrderDirection
  where?: Bundle_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokensArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Token_orderBy
  orderDirection?: OrderDirection
  where?: Token_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Pool_orderBy
  orderDirection?: OrderDirection
  where?: Pool_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface ticksArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Tick_orderBy
  orderDirection?: OrderDirection
  where?: Tick_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Position_orderBy
  orderDirection?: OrderDirection
  where?: Position_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionSnapshotArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface positionSnapshotsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: PositionSnapshot_orderBy
  orderDirection?: OrderDirection
  where?: PositionSnapshot_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface transactionArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface transactionsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Transaction_orderBy
  orderDirection?: OrderDirection
  where?: Transaction_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface mintArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface mintsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Mint_orderBy
  orderDirection?: OrderDirection
  where?: Mint_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface burnArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface burnsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Burn_orderBy
  orderDirection?: OrderDirection
  where?: Burn_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface swapArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface swapsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Swap_orderBy
  orderDirection?: OrderDirection
  where?: Swap_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface collectArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface collectsArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Collect_orderBy
  orderDirection?: OrderDirection
  where?: Collect_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface flashArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface flashesArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: Flash_orderBy
  orderDirection?: OrderDirection
  where?: Flash_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface uniswapDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface uniswapDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: UniswapDayData_orderBy
  orderDirection?: OrderDirection
  where?: UniswapDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: PoolDayData_orderBy
  orderDirection?: OrderDirection
  where?: PoolDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolHourDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface poolHourDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: PoolHourData_orderBy
  orderDirection?: OrderDirection
  where?: PoolHourData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickHourDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickHourDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TickHourData_orderBy
  orderDirection?: OrderDirection
  where?: TickHourData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tickDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TickDayData_orderBy
  orderDirection?: OrderDirection
  where?: TickDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenDayDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenDayDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TokenDayData_orderBy
  orderDirection?: OrderDirection
  where?: TokenDayData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenHourDataArgs {
  id: string
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

export interface tokenHourDatasArgs {
  /** @default 0*/
  skip?: number
  /** @default 100*/
  first?: number
  orderBy?: TokenHourData_orderBy
  orderDirection?: OrderDirection
  where?: TokenHourData_filter
  /** The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.*/
  block?: Block_height
  /** @default denySet to `allow` to receive data even if the subgraph has skipped over errors while syncing.*/
  subgraphError: _SubgraphErrorPolicy_
}

interface Abortable {
  $abort(): void
}
interface WithArgs<T, A> {
  $args(args: A): ExecutableQuery<T>
}
interface Pendable {
  pending: boolean
}
interface Executable<T> {
  $fetch(): Promise<T>
}
interface Nameble {
  __name: string
}

export interface QueryWithArgs<T, A>
  extends WithArgs<T, A>,
    Abortable,
    Pendable,
    Nameble {}
export interface QueryWithOptionalArgs<T, A>
  extends QueryWithArgs<T, A>,
    Executable<T> {}

export interface ExecutableQuery<T>
  extends Abortable,
    Pendable,
    Nameble,
    Executable<T> {}
export type ExecutableQueryWithArgs<T, A> = QueryWithArgs<T, A>
export interface ExecutableQueryWithOptionalArgs<T, A>
  extends QueryWithOptionalArgs<T, A>,
    Executable<T> {}

export const apiProvider = (apolloClient: ApolloClient<any>) => {
  const abortableQuery = <T, A = null>(
    query: DocumentNode,
    args: boolean,
    optionalArgs: boolean
  ) => {
    let observableQuery: ZenObservable.Subscription
    const parsedQuery = query.definitions[0] as OperationDefinitionNode
    const queryName = parsedQuery?.name?.value
    if (queryName) {
      let variables: { [x: string]: any } = {}
      let pending = false

      const $abort = () => {
        if (observableQuery && !observableQuery.closed) {
          observableQuery.unsubscribe()
        }
      }
      const $fetch = async () => {
        pending = true
        return new Promise<T>((resolve, reject) => {
          observableQuery = execute(apolloClient.link, {
            query,
            variables,
          }).subscribe({
            next: ({ data, errors }) => {
              if (data && queryName) {
                resolve(data[queryName])
              } else {
                reject({ gqlErrors: errors, variables, query: queryName })
              }
            },
            error: (error) =>
              reject({ gqlErrors: [error], variables, query: queryName }),
            complete: () => {
              pending = false
            },
          })
        })
      }
      const $args = (args: Record<string, any>) => {
        variables = args
        return {
          $abort,
          $fetch,
          pending,
          __name: queryName,
        }
      }
      if (args && !optionalArgs) {
        return {
          $abort,
          $args,
          pending,
          __name: queryName,
        } as any
      } else if (optionalArgs) {
        return {
          $abort,
          $args,
          $fetch,
          pending,
          __name: queryName,
        } as any
      } else {
        return {
          $abort,
          $fetch,
          pending,
          __name: queryName,
        } as any
      }
    } else {
      throw new Error('query argument is not a GraphQL definition')
    }
  }

  return {
    factory(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Factory, factoryArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query factory ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        factory(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    factories(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Factory[], factoriesArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query factories ($skip: Int,$first: Int,$orderBy: Factory_orderBy,$orderDirection: OrderDirection,$where: Factory_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        factories(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    bundle(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Bundle, bundleArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query bundle ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        bundle(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    bundles(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Bundle[], bundlesArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query bundles ($skip: Int,$first: Int,$orderBy: Bundle_orderBy,$orderDirection: OrderDirection,$where: Bundle_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        bundles(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    token(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Token, tokenArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query token ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        token(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tokens(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Token[], tokensArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tokens ($skip: Int,$first: Int,$orderBy: Token_orderBy,$orderDirection: OrderDirection,$where: Token_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tokens(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    pool(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Pool, poolArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query pool ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        pool(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    pools(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Pool[], poolsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query pools ($skip: Int,$first: Int,$orderBy: Pool_orderBy,$orderDirection: OrderDirection,$where: Pool_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        pools(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tick(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Tick, tickArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tick ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tick(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    ticks(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Tick[], ticksArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query ticks ($skip: Int,$first: Int,$orderBy: Tick_orderBy,$orderDirection: OrderDirection,$where: Tick_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        ticks(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    position(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Position, positionArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query position ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        position(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    positions(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Position[], positionsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query positions ($skip: Int,$first: Int,$orderBy: Position_orderBy,$orderDirection: OrderDirection,$where: Position_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        positions(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    positionSnapshot(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<PositionSnapshot, positionSnapshotArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query positionSnapshot ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        positionSnapshot(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    positionSnapshots(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<PositionSnapshot[], positionSnapshotsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query positionSnapshots ($skip: Int,$first: Int,$orderBy: PositionSnapshot_orderBy,$orderDirection: OrderDirection,$where: PositionSnapshot_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        positionSnapshots(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    transaction(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Transaction, transactionArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query transaction ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        transaction(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    transactions(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Transaction[], transactionsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query transactions ($skip: Int,$first: Int,$orderBy: Transaction_orderBy,$orderDirection: OrderDirection,$where: Transaction_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        transactions(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    mint(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Mint, mintArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query mint ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        mint(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    mints(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Mint[], mintsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query mints ($skip: Int,$first: Int,$orderBy: Mint_orderBy,$orderDirection: OrderDirection,$where: Mint_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        mints(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    burn(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Burn, burnArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query burn ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        burn(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    burns(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Burn[], burnsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query burns ($skip: Int,$first: Int,$orderBy: Burn_orderBy,$orderDirection: OrderDirection,$where: Burn_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        burns(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    swap(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Swap, swapArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query swap ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        swap(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    swaps(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Swap[], swapsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query swaps ($skip: Int,$first: Int,$orderBy: Swap_orderBy,$orderDirection: OrderDirection,$where: Swap_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        swaps(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    collect(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Collect, collectArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query collect ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        collect(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    collects(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Collect[], collectsArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query collects ($skip: Int,$first: Int,$orderBy: Collect_orderBy,$orderDirection: OrderDirection,$where: Collect_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        collects(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    flash(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Flash, flashArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query flash ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        flash(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    flashes(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<Flash[], flashesArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query flashes ($skip: Int,$first: Int,$orderBy: Flash_orderBy,$orderDirection: OrderDirection,$where: Flash_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        flashes(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    uniswapDayData(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<UniswapDayData, uniswapDayDataArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query uniswapDayData ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        uniswapDayData(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    uniswapDayDatas(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<UniswapDayData[], uniswapDayDatasArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query uniswapDayDatas ($skip: Int,$first: Int,$orderBy: UniswapDayData_orderBy,$orderDirection: OrderDirection,$where: UniswapDayData_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        uniswapDayDatas(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    poolDayData(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<PoolDayData, poolDayDataArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query poolDayData ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        poolDayData(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    poolDayDatas(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<PoolDayData[], poolDayDatasArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query poolDayDatas ($skip: Int,$first: Int,$orderBy: PoolDayData_orderBy,$orderDirection: OrderDirection,$where: PoolDayData_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        poolDayDatas(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    poolHourData(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<PoolHourData, poolHourDataArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query poolHourData ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        poolHourData(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    poolHourDatas(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<PoolHourData[], poolHourDatasArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query poolHourDatas ($skip: Int,$first: Int,$orderBy: PoolHourData_orderBy,$orderDirection: OrderDirection,$where: PoolHourData_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        poolHourDatas(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tickHourData(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TickHourData, tickHourDataArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tickHourData ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tickHourData(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tickHourDatas(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TickHourData[], tickHourDatasArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tickHourDatas ($skip: Int,$first: Int,$orderBy: TickHourData_orderBy,$orderDirection: OrderDirection,$where: TickHourData_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tickHourDatas(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tickDayData(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TickDayData, tickDayDataArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tickDayData ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tickDayData(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tickDayDatas(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TickDayData[], tickDayDatasArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tickDayDatas ($skip: Int,$first: Int,$orderBy: TickDayData_orderBy,$orderDirection: OrderDirection,$where: TickDayData_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tickDayDatas(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tokenDayData(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TokenDayData, tokenDayDataArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tokenDayData ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tokenDayData(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tokenDayDatas(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TokenDayData[], tokenDayDatasArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tokenDayDatas ($skip: Int,$first: Int,$orderBy: TokenDayData_orderBy,$orderDirection: OrderDirection,$where: TokenDayData_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tokenDayDatas(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tokenHourData(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TokenHourData, tokenHourDataArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tokenHourData ($id: ID!,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tokenHourData(id: $id,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
    tokenHourDatas(
      fragment: string | DocumentNode
    ): ExecutableQueryWithArgs<TokenHourData[], tokenHourDatasArgs> {
      let isString = false
      let isFragment = false
      let fragmentName = ''
      if (fragment)
        ({ isString, isFragment, fragmentName } = guessFragmentType(fragment))

      const queryTemplate = gql`
      query tokenHourDatas ($skip: Int,$first: Int,$orderBy: TokenHourData_orderBy,$orderDirection: OrderDirection,$where: TokenHourData_filter,$block: Block_height,$subgraphError: _SubgraphErrorPolicy_!) {
        tokenHourDatas(skip: $skip,first: $first,orderBy: $orderBy,orderDirection: $orderDirection,where: $where,block: $block,subgraphError: $subgraphError) {
          ${isString ? fragment : '...' + fragmentName}
        }
      } ${isFragment ? fragment : ''}
      `

      return abortableQuery(queryTemplate, true, false)
    },
  }
}
