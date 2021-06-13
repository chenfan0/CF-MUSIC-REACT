import { Map } from 'immutable'

import {
  CHANGE_CATELIST,
  CHANGE_RECOMMEND,
  CHANGE_RANKING
} from './constants'

const defaultState = Map({
  catelist: [],
  recommend: [],
  ranking: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CATELIST:
      return state.set('catelist', action.catelist)
    case CHANGE_RECOMMEND:
      return state.set('recommend', action.recommend)
    case CHANGE_RANKING:
      return state.set('ranking', action.ranking)
    default:
      return state
  }
}
