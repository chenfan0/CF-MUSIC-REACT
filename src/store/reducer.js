//  redux-immutable 里面的combineReducers 可以帮助我们合并对象并将对象转成immutable对象
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as songsReducer } from '../pages/songs/store'
import { reducer as toplistReducer } from '../pages/discover/c-pages/toplist/store'
import { reducer as playlistReducer } from '../pages/discover/c-pages/playlist/store'

const totalReducer = combineReducers({
  recommend: recommendReducer,
  songs: songsReducer,
  toplist: toplistReducer,
  playlist: playlistReducer
})

export default totalReducer
