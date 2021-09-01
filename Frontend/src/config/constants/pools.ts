import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 3,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0x0E414C2A5B3319347e6D7280A4d31Aa750C8FF9f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
  },
  {
    sousId: 1,
    stakingToken: tokens.cake,
    earningToken: tokens.happy,
    contractAddress: {
      97: '',
      56: '0x364ee953c8544Fe3750057D4A0A0B51f6DD20FdE',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1',
  },
  {
    sousId: 2,
    stakingToken: tokens.cake,
    earningToken: tokens.babybitc,
    contractAddress: {
      97: '',
      56: '0xB67a9c60ABb53af73415732DF34cA57d1f204D83',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1',
  }
]

export default pools
