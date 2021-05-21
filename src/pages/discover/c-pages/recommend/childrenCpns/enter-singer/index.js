import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'

import { getEnterSingersAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'
import {
  EnterSingerWrapper,
  EnterSingerList
} from './style'

export default memo(function CFEnterSinger() {
  // redux hooks
  const { enterSingers } = useSelector(state => ({
    enterSingers: state.getIn(['recommend', 'enterSingers'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getEnterSingersAction(5001, 5))
  }, [dispatch])

  return (
    <EnterSingerWrapper>
      <div className='header'>
        <h2>入驻歌手</h2>
        <NavLink to='/discover/artist'>查看全部{'>'}</NavLink>
      </div>
      <EnterSingerList>
        {
          enterSingers.map(item => {
            return (
              <div className='enter-singer-item' key={item.name}>
                <img className='singer-img' src={getImgSize(item.picUrl, 62)} alt={item.name} />
                <div className='singer-content'>
                  <h2 className='singer-name'>{item.name}</h2>
                  <p className='singer-introduce'>{item.alias[0]}</p>
                </div>
              </div>
            )
          })
        }
        <a href='https://music.163.com/st/musician' rel="noreferrer" target='_blank' className='button_01 apply'>申请成为网易音乐人</a>
      </EnterSingerList>
    </EnterSingerWrapper>
  )
})
