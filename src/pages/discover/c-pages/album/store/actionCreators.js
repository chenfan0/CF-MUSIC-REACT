import {
  CHANGE_HOT_ALBUM,
  CHANGE_TOTAL_ALBUMS
} from './constants'

import {
  getNewAlbums
} from '@/services/recommend'
import {
  getTotalAlbums
} from '@/services/album'

export const changeHotAlbumsAction = (res) => ({
  type: CHANGE_HOT_ALBUM,
  hotAlbums: res.albums
})

export const changeTotalAlbumsAction = (res) => ({
  type: CHANGE_TOTAL_ALBUMS,
  totalAlbums: res.data
})


export const getHotAlbumsAction = () => {
  return dispatch => {
    getNewAlbums().then(res => {
      dispatch(changeHotAlbumsAction(res))
    })
  }
}

export const getTotalAlbumsAction = (offset, area) => {
  return dispatch => {
    getTotalAlbums(offset, area).then(res => {
      dispatch(changeTotalAlbumsAction(res))
    })
  }
}
