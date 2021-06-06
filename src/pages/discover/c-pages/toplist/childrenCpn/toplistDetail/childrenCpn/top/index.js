import React, { memo } from 'react'

import {
  getImgSize,
  formatDate,
} from '@/utilis/format'

import { ToplistDetailTopWrapper } from './style'
import CFBtns from '@/components/btns'

export default memo(function CFToplistDetailTop(props) {
  // state and props
  const { name, imgUrl, updateTime } = props


  return (
    <ToplistDetailTopWrapper>
      <div className='left'>
        <div className='cover sprite_cover'></div>
        <img src={getImgSize(imgUrl, 150)} alt='榜单图片' />
      </div>
      <div className='right'>
        <h2 className='title'>{name}</h2>
        <div className='info'>
          <i className='icon sprite_icon_02' />
          <span>最近更新：{formatDate(updateTime, 'MM月dd日')}</span>
        </div>
        <CFBtns />
      </div>
    </ToplistDetailTopWrapper>
  )
})
