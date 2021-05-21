import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getRanking,
  getEnterSingers
} from '@/services/recommend'
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_RISING_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_ENTER_SINGERS
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

export const changeRisingRanking = (res) => ({
  type: CHANGE_RISING_RANKING,
  risingRanking: res.playlist
})

export const changeNewRanking = (res) => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

export const changeOriginRanking = (res) => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const changeEnterSingers = (res) => ({
  type: CHANGE_ENTER_SINGERS,
  enterSingers: res.artists
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

export const getRankingAction = (idx) => {
  return dispatch => {
    getRanking(idx).then(res => {
      // console.log(res);
      switch (idx) {
        case 0:
          dispatch(changeNewRanking(res))
          break
        case 2:
          dispatch(changeOriginRanking(res))
          break
        case 3:
          dispatch(changeRisingRanking(res))
          break
        default:
      }
    })
  }
}

export const getEnterSingersAction = (cat, limit) => {
  return dispatch => {
    getEnterSingers(cat, limit).then((res) => {
      dispatch(changeEnterSingers(res))
    })
  }
}
