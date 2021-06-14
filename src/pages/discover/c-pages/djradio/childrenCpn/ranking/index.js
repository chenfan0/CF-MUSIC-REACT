import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getRankingAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'

import {
  RankingWrapper,
  Progress
} from './style'
import CFHeader from '../header'

export default memo(function CFDjradioRanking() {
  // redux hooks
  const { ranking } = useSelector(state => ({
    ranking: state.getIn(['djradio', 'ranking'])
  }))
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getRankingAction())
  }, [dispatch])

  // other handle

  return (
    <RankingWrapper>
      <CFHeader title='节目排行榜' />
      {
        ranking && ranking.map((item) => {
          return (
            <div className='ranking-item' key={item.rank}>
              <div className='rank'>{item.rank >= 10 ? item.rank : '0' + item.rank}</div>
              <i className='icon sprite_icon' />
              <img src={getImgSize(item.program.radio.picUrl, 40)} alt={item.program.mainSong.name} />
              <div className='descripe'>
                <p className='text-nowrap'>{item.program.mainSong.name}</p>
                <span className='text-nowrap'>{item.program.radio.name}</span>
              </div>
              <Progress score={item.score}>
                <div className='progress-rate' />
              </Progress>
            </div>
          )
        })
      }
    </RankingWrapper>
  )
})
