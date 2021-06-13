import {
  CHANGE_CATELIST,
  CHANGE_RECOMMEND,
  CHANGE_RANKING
} from './constants'

import {
  getCatelist,
  getRecommend,
  getRanking
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

