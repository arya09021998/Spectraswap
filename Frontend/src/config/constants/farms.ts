// import PurpleWordHeading from 'views/Home/components/PurpleWordHeading'
import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SPC',
    lpAddresses: {
      97: '',
      56: '0x2013fe8529077c6c6177b80aCe8746F8f8A1EB4f',
    },
    token: tokens.cake,
    quoteToken: tokens.cake,
  },
  {
    pid: 1,
    lpSymbol: 'SPC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA7bbD1D7e1D8c95ea0d3bd5F8a5fECD947570CAf',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'SPC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x177366B6C35E85B52A4F64d4fE4416158b037FC9', /* This Pair address is wrong. Should be changed with correct one*/
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.busd,
  // },
  {
    pid: 3,
    lpSymbol: 'BABYBITC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9237Ae5ee1Be642bc70270305A432b770eDB2fF7',
    },
    token: tokens.babybitc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'HAPPY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x82AB370d2055e083747876885E3Ad0B829CFb524',
    },
    token: tokens.happy,
    quoteToken: tokens.wbnb,
  },
]

export default farms
