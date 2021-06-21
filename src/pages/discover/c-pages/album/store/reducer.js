import { Map } from 'immutable'

import {
  CHANGE_HOT_ALBUM,
  CHANGE_TOTAL_ALBUMS
} from './constants'

const defaultState = Map({
  hotAlbums: [],
  totalAlbums: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_HOT_ALBUM:
      return state.set('hotAlbums', action.hotAlbums)
    case CHANGE_TOTAL_ALBUMS:
      return state.set('totalAlbums', action.totalAlbums)
    default:
      return state
  }
}


