import { Map } from 'immutable'

import {
  CHANGE_BANNERS
} from './constants'

const defaultState = Map({
  topBanners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return state.set('topBanners', action.topBanners)
    default:
      return state

  }
}

export default reducer
