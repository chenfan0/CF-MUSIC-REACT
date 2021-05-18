import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getRankingAction
} from '../../store/actionCreator'

import {
  RankingWrapper,
  RankingTable
} from './style'
import CFRecommendHeader from '@/components/recommend-header'
import CFTopRanking from '@/components/top-ranking'

export default memo(function CFRanking() {
  // redux hooks
  const { risingRanking, newRanking, originRanking } = useSelector((state) => ({
    risingRanking: state.getIn(['recommend', 'risingRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }))
  console.log(risingRanking, newRanking, originRanking);
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getRankingAction(0))
    dispatch(getRankingAction(2))
    dispatch(getRankingAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <CFRecommendHeader title={{ content: '榜单', link: '/discover/toplist' }} />
      <RankingTable className='recommend_bg_img '>
        <CFTopRanking />
      </RankingTable>
    </RankingWrapper>
  )
})
