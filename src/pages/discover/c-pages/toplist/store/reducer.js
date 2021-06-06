import { Map } from 'immutable'

import {
  CHANGE_TOTAL_TOPLIST,
  CHANGE_TOPLIST_DETAIL
} from './constant'


const defaultState = Map({
  totalToplist: [],
  toplistDetail: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOTAL_TOPLIST:
      return state.set('totalToplist', action.totalToplist)
    case CHANGE_TOPLIST_DETAIL:
      return state.set('toplistDetail', action.toplistDetail)
    default:
      return state
  }
}

