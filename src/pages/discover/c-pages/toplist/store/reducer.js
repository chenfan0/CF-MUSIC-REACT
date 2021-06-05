import { Map } from 'immutable'

import {
  CHANGE_TOTAL_TOPLIST
} from './constant'


const defaultState = Map({
  totalToplist: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOTAL_TOPLIST:
      return state.set('totalToplist', action.totalToplist)
    default:
      return state
  }
}

