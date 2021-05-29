import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import { ShowSongDetailWrapper } from './style'
import CFSongOperationBar from '@/components/song-operation-bar'
import CFShowLyric from '../showLyric'

export default memo(function CFShowSongDetail(props) {
  // props and state
  const { songDetail } = props
  console.log(songDetail);

  // other handle
  const musicName = songDetail && songDetail.name
  const artists = songDetail.ar || []
  const al = songDetail.al && songDetail.al.name

  return (
    <ShowSongDetailWrapper>
      <div className='title'>
        <i className='icon sprite_icon_02'></i>
        <h2 className='music-name'>{musicName}</h2>
      </div>
      <div className='singer'>
        <span>歌手：</span>
        {
          artists.map(item => {
            return <NavLink to={'/discover/artist'} className='singer-name' key={item.id}>{item.name}</NavLink>
          })
        }
      </div>
      <div className='album'>
        <span>所属专辑：</span>
        <NavLink to={'/discover/album'} >{al}</NavLink>
      </div>
      <CFSongOperationBar
        favorTitle="收藏"
        shareTitle="分享"
        downloadTitle="下载"
        commentTitle="(167366)" />
      <CFShowLyric /> 
    </ShowSongDetailWrapper>


  )
})
