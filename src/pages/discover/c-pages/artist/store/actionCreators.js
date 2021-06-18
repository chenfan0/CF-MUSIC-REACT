import { getArtistList } from '@/services/artist'

import { CHAGNE_ARTIST_LIST } from './constants'

export const changeArtistListAction = (res) => ({
  type: CHAGNE_ARTIST_LIST,
  artistList: res.artists
})

export const getArtistListAction = (type = -1, area = -1, initial = -1, limit = 100) => {
  return dispatch => {
    getArtistList(type, area, initial, limit).then(res => {
      dispatch(changeArtistListAction(res))
    })
  }
}


