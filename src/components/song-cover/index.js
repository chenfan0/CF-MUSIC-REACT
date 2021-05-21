import React, { memo, useCallback } from 'react'


import { SongCoverWrapper } from './style'
import {
  getImgSize,
  formatPlayCount
} from '@/utilis/format'
// import emitter from '@/utilis/events'



export default memo(function CFSongCover(props) {
  const { item } = props
  const play = useCallback((id) => {
    // emitter.emit('play', id)
    console.log(id)
  }, [])
  return (
    <SongCoverWrapper>
      <img src={getImgSize(item.picUrl, 140)} alt={item.name} className='image' />
      <div className='img-cover  sprite_cover'>
        <div className='bottom sprite_cover'>
          <div className='left'>
            <i className='icon1 sprite_icon' />
            <span className='listen-count'>{formatPlayCount(item.playCount)}</span>
          </div>
          <i className='icon2 sprite_icon' onClick={() => { play(item) }}></i>
        </div>
      </div>
      <div className='content'>{item.name}</div>
    </SongCoverWrapper>
  )
})
