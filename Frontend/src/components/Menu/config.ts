import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Referral'),
  //   icon: 'GroupsIcon',
  //   href: '/referral',
  // },
  // {
  //   label: t('Features'),
  //   icon: 'PredictionsIcon',
  //   items: [
  //     {
  //       label: t('Anti Bot'),
  //       href: 'https://docs.inspeerdefi.finance/tokenomics/anti-bot',
  //     },
  //     {
  //       label: t('Anti Whale'),
  //       href: 'https://docs.inspeerdefi.finance/tokenomics/automatic-whale',
  //     },
  //     {
  //       label: t('Harvest Lockup'),
  //       href: 'https://docs.inspeerdefi.finance/tokenomics/harvest-lockup',
  //     },
  //     {
  //       label: t('Transfer Tax'),
  //       href: 'https://docs.inspeerdefi.finance/tokenomics/transfer-tax',
  //     },
  //     {
  //       label: t('Automatic Liquidity'),
  //       href: 'https://docs.inspeerdefi.finance/tokenomics/automatic-liquidity',
  //     },
  //     {
  //       label: t('Automatic Burning'),
  //       href: 'https://docs.inspeerdefi.finance/tokenomics/automatic-burning-mechanism',
  //     }
  //   ],
  // },
  {
    label: t('Charts'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('DexGuru'),
        href: 'https://dex.guru/token/0x2013fe8529077c6c6177b80aCe8746F8f8A1EB4f-bsc',
      },
      {
        label: t('PooCoin'),
        href: 'https://poocoin.app/tokens/0x2013fe8529077c6c6177b80aCe8746F8f8A1EB4f',
      }
    ],
  },
  // {
  //   label: t('Listings'),
  //   icon: 'HamburgerIcon',
  //   items: [
  //     {
  //       label: t('CoinMarketCap(Coming Soon)'),
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       label: t('DappRadar'),
  //       href: 'https://dappradar.com/binance-smart-chain/defi/inspeerdefi',
  //     },
  //     {
  //       label: t('BSCscan'),
  //       href: 'https://bscscan.com/token/0xeB09843abc3e237824Ae40a93fa7F6F2fEB82798',
  //     },
  //     {
  //       label: t('Vfat'),
  //       href: 'https://vfat.tools/bsc/inspeerdefi/',
  //     }
  //   ],
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/SpectraToken',
      },
      // {
      //   label: t('Docs'),
      //   href: 'https://docs.spectradex',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://spectradex.medium.com',
      // },
    ],
  },
  {
    label: t('Audit'),
    icon: 'IfoIcon',
    href: '/report',
  }
]

export default config
