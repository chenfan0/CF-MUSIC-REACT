import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRecommendAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'

import { DjradioRecommendWrapper } from './style'
import CFHeader from '../header'

export default memo(function CFDjradioRecommend() {
  // redux hooks
  const { recommend } = useSelector(state => ({
    recommend: state.getIn(['djradio', 'recommend'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getRecommendAction())
  }, [dispatch])

  return (
    <DjradioRecommendWrapper>
      <CFHeader title='推荐节目' />
      {
        recommend && recommend.map(item => {
          return (
            <div className='recommend-item' key={item.mainSong.name}>
              <i className='icon sprite_icon' />
              <img src={getImgSize(item.radio.picUrl, 40)} alt={item.mainSong.name} />
              <div className='descripe'>
                <p className='text-nowrap'>{item.mainSong.name}</p>
                <span className='text-nowrap'>{item.radio.name}</span>
              </div>
              <div className='tag'>{item.radio.category}</div>
            </div>
          )
        })
      }
    </DjradioRecommendWrapper>
  )
})
