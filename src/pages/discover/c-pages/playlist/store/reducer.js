import { Map } from 'immutable'

import {
  CHANGE_TOTAL_CATEGORY,
  CHANGE_CATEGORY_LIST
} from './constants'

const defaultState = Map({
  categories: [],
  categoryList: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOTAL_CATEGORY:
      return state.set('categories', action.categories)
    case CHANGE_CATEGORY_LIST:
      return state.set('categoryList', action.categoryList)
    default:
      return state
  }
}

