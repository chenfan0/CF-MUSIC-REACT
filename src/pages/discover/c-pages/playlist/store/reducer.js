import { Map } from 'immutable'

import { CHANGE_TOTAL_CATEGORY } from './constants'

const defaultState = Map({
  categories: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOTAL_CATEGORY:
      return state.set('categories', action.categories)
    default:
      return state
  }
}

