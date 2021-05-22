import { Map } from 'immutable'


import {
  CHANGE_CURRENT_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_MODE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX,
  CHANGE_SONG_DETAIL
} from './constants'

const defaultState = Map({
  playList: [],
  currentPlaySongIndex: 0,
  currentSong: {},
  playMode: 0, // 0 顺序播放 1 随机播放 2 单曲播放
  lyricList: [],
  currentLyricIndex: 0,
  songDetail: []
})


function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentPlaySongIndex', action.currentPlaySongIndex)
    case CHANGE_PLAY_MODE:
      return state.set('playMode', action.playMode)
    case CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.currentLyricIndex)
    case CHANGE_SONG_DETAIL:
      return state.set('songDetail', action.songDetail)
    default:
      return state
  }
}

export default reducer
