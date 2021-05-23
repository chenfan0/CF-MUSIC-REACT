import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { getImgSize } from '@/utilis/format'

import { SongImgWrapper } from './style'

export default memo(function CFSongImg(props) {
  const { imgUrl, name } = props
  return (
    <SongImgWrapper>
      <div className='left'>
        <img src={getImgSize(imgUrl, 130)} alt={name} />
        <div className='img-cover sprite_cover'></div>
        <div className='outer-play'>
          <i className='icon sprite_icon_02'></i>
          <NavLink className='link' to={''}>生成外链播放器</NavLink>
        </div>
      </div>
    </SongImgWrapper>
  )
})
