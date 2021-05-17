import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums
} from '@/services/recommend'
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS
} from './constants'
import { HOT_RECOMMEND_LIMIT } from '@/common/constant'

export const changeTopBanners = (res) => ({
  type: CHANGE_BANNERS,
  topBanners: res.banners
})

export const changeHotRecommends = (res) => ({
  type: CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

export const changeNewAlbums = (res) => ({
  type: CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}

export const getHotRecommendsAction = () => {
  return dispatch => {
    getHotRecommends(HOT_RECOMMEND_LIMIT).then(res => {
      dispatch(changeHotRecommends(res))
    })
  }
}


export const getNewAlbumsAction = () => {
  return dispatch => {
    getNewAlbums().then(res => {
      dispatch(changeNewAlbums(res))
    })
  }
}
