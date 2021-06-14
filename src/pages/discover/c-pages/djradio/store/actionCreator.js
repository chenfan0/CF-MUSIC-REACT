import {
  CHANGE_CATELIST,
  CHANGE_RECOMMEND,
  CHANGE_RANKING,
  CHANGE_RADIO_LIST,
  CHANGE_NEW_DJRADIO,
  CHANGE_DJRADIO_TOP_RANKING
} from './constants'

import {
  getCatelist,
  getRecommend,
  getRanking,
  getRadioList,
  getNewDjradio,
  getDjRadioRanking
} from '@/services/djradio'

export const changeCatelistAction = (res) => ({
  type: CHANGE_CATELIST,
  catelist: res.categories
})

export const changeRecommendAction = (res) => ({
  type: CHANGE_RECOMMEND,
  recommend: res.programs
})

export const changeRankingAction = res => ({
  type: CHANGE_RANKING,
  ranking: res.toplist
})

export const changeRadioListAction = res => ({
  type: CHANGE_RADIO_LIST,
  radioList: res.data
})

export const changeNewDjradioAction = res => ({
  type: CHANGE_NEW_DJRADIO,
  newDjradio: res.djRadios
})

export const changeDjradioRankingAction = res => ({
  type: CHANGE_DJRADIO_TOP_RANKING,
  djradioRanking: res
})


export const getCatelistAction = () => {
  return dispatch => {
    getCatelist().then(res => {
      dispatch(changeCatelistAction(res))
    })
  }
}

export const getRecommendAction = () => {
  return dispatch => {
    getRecommend().then(res => {
      dispatch(changeRecommendAction(res))
    })
  }
}

export const getRankingAction = () => {
  return dispatch => {
    getRanking().then(res => {
      dispatch(changeRankingAction(res))
    })
  }
}

export const getRadioListAction = () => {
  return dispatch => {
    getRadioList().then(res => {
      dispatch(changeRadioListAction(res))
    })
  }
}

export const getNewRadioAction = (type) => {
  return dispatch => {
    getNewDjradio(type).then(res => {
      dispatch(changeNewDjradioAction(res))
    })
  }
}

export const getDjradioRankingAction = (cateId, limit, offset) => {
  return dispatch => {
    getDjRadioRanking(cateId, limit, offset).then(res => {
      dispatch(changeDjradioRankingAction(res))
    })
  }
}

