import { Map } from 'immutable'

import {
  CHANGE_CATELIST,
  CHANGE_RECOMMEND,
  CHANGE_RANKING,
  CHANGE_RADIO_LIST,
  CHANGE_NEW_DJRADIO,
  CHANGE_DJRADIO_TOP_RANKING
} from './constants'

const defaultState = Map({
  catelist: [],
  recommend: [],
  ranking: [],
  radioList: [],
  newDjradio: [],
  djradioRanking: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CATELIST:
      return state.set('catelist', action.catelist)
    case CHANGE_RECOMMEND:
      return state.set('recommend', action.recommend)
    case CHANGE_RANKING:
      return state.set('ranking', action.ranking)
    case CHANGE_RADIO_LIST:
      return state.set('radioList', action.radioList)
    case CHANGE_NEW_DJRADIO:
      return state.set('newDjradio', action.newDjradio)
    case CHANGE_DJRADIO_TOP_RANKING:
      return state.set('djradioRanking', action.djradioRanking)
    default:
      return state
  }
}
