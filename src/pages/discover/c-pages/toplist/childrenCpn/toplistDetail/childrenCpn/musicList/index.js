import React, { memo, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

import { formatDate } from '@/utilis/format'
import emitter from '@/utilis/events'

import { PlaylistWrapper } from './style'

export default memo(function CFPlaylist(props) {
  // state and props
  const { playCount, trackCount, musicList } = props

  // other handle
  const play = useCallback((id) => {
    emitter.emit('play', id)
  }, [])

  return (
    <PlaylistWrapper>
      <div className='info'>
        <div className='info-left'>
          <h2 className='title'>歌曲列表</h2>
          <span>{trackCount}首歌</span>
        </div>
        <div className='info-right'>
          播放:
          <span>{playCount}</span>
          次
        </div>
      </div>
      <div className='music-list'>
        <div className='head'>
          <div className='rank'></div>
          <div className='title'>标题</div>
          <div className='time'>时长</div>
          <div className='singer'>歌手</div>
        </div>
        <div className='content'>
          {
            musicList.map((item, index) => {
              return (
                <div className={`${(index + 1) % 2 === 0 ? 'music-list-item' : 'odd music-list-item'}`} key={item.id}>
                  <div className='rank'>{index + 1}</div>
                  <div className='title'>
                    <i className='icon sprite_table' onClick={e => play(item.id)} />
                    <NavLink to={`/discover/songs?id=${item.id}`}>{item.al.name}</NavLink>
                  </div>
                  <div className='time'>
                    <span>{formatDate(item.dt, 'mm:ss')}</span>
                    <div className='icons'>
                      <i className='add sprite_icon_02' />
                      <i className='collect sprite_table' />
                      <i className='share sprite_table' />
                      <i className='download sprite_table' />
                    </div>
                  </div>
                  <div className='singer'>{item.ar[0].name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </PlaylistWrapper>
  )
})
