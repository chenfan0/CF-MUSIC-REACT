//  redux-immutable 里面的combineReducers 可以帮助我们将对象转成immutable对象
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'

const totalReducer = combineReducers({
  recommend: recommendReducer
})

export default totalReducer
