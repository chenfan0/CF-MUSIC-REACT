import { Map } from 'immutable'

import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS
} from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return state.set('topBanners', action.topBanners)
    case CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    default:
      return state

  }
}

export default reducer
