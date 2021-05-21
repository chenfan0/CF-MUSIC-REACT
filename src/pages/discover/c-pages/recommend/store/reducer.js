import { Map } from 'immutable'

import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_RISING_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_ENTER_SINGERS
} from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  risingRanking: {},
  newRanking: {},
  originRanking: {},
  enterSingers: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return state.set('topBanners', action.topBanners)
    case CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    case CHANGE_RISING_RANKING:
      return state.set('risingRanking', action.risingRanking)
    case CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    case CHANGE_ENTER_SINGERS:
      return state.set('enterSingers', action.enterSingers)
    default:
      return state

  }
}

export default reducer
