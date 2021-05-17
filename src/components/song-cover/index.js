import React, { memo } from 'react'


import { SongCoverWrapper } from './style'
import {
  getImgSize,
  formatPlayCount
} from '@/utilis/format'

export default memo(function CFSongCover(props) {
  const { item } = props
  return (
    <SongCoverWrapper>
      <img src={getImgSize(item.picUrl, 140)} alt={item.name} className='image' />
      <div className='img-cover  sprite_cover'>
        <div className='bottom sprite_cover'>
          <div className='left'>
            <i className='icon1 sprite_icon' />
            <span className='listen-count'>{formatPlayCount(item.playCount)}</span>
          </div>
          <i className='icon2 sprite_icon'></i>
        </div>
      </div>
      <div className='content'>{item.name}</div>
    </SongCoverWrapper>
  )
})
