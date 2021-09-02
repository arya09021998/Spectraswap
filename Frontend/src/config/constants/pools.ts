import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0x2bF1Ce2f155c728E12B8f2f4b8cF80CC183d4F86',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.001',
    sortOrder: 1,
  },
  {
    sousId: 2,
    stakingToken: tokens.cake,
    earningToken: tokens.happy,
    contractAddress: {
      97: '',
      56: '0x78A7F2d277e2112268bf06F531A1e2eeEA9Bfee0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.001',
  },
  {
    sousId: 3,
    stakingToken: tokens.cake,
    earningToken: tokens.babybitc,
    contractAddress: {
      97: '',
      56: '0x37B49dcc25bb5C1A58736522Bc2Fe281251f707f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.001',
  }
]

export default pools
