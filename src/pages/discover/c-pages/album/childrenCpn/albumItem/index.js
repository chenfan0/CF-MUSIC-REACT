import React, { memo } from 'react'

import { getImgSize } from '@/utilis/format'

import { AlbumItemWrapper } from './style'

export default memo(function CFAlbumItem(props) {
  const { item } = props

  return (
    <AlbumItemWrapper className='album-item'>
      <div className='sprite_02' key={item.id} >
        <div className='cover sprite_cover'  >
          <div className='image-cover sprite_cover' />
          <img src={getImgSize(item.picUrl, 130)} alt={item.name} className='img' ></img>
          <p className='music-name text-nowrap'>{item.name}</p>
          <p className='artist-name text-nowrap'>{item.artist.name}</p>
        </div>
      </div>
    </AlbumItemWrapper>
  )
})


