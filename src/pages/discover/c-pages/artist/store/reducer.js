import { Map } from 'immutable'

import { CHAGNE_ARTIST_LIST } from './constants'

const defaultState = Map({
  artistList: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHAGNE_ARTIST_LIST:
      return state.set('artistList', action.artistList)
    default:
      return state
  }
}

