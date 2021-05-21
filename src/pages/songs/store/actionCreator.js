import {
  getSongDetail
} from '@/services/songs'

import {
  CHANGE_CURRENT_SONG
} from './constants'


export const changeCurrentSong = (res) => ({
  type: CHANGE_CURRENT_SONG,
  currentSong: res.songs[0]
})




export const getCurrentSongAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSong(res))
    })
  }
}
