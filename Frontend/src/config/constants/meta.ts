import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SpectraDex',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SpectraDex), NFTs, and more, on a platform you can trust.',
  image: 'https://SpectraDex/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SpectraDex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SpectraDex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SpectraDex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SpectraDex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SpectraDex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SpectraDex')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('SpectraDex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SpectraDex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SpectraDex')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('SpectraDex')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('SpectraDex')}`,
      }
    default:
      return null
  }
}
