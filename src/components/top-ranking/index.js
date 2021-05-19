import React, { memo } from 'react'

import { getImgSize } from '@/utilis/format'

import { TopRankingWrapper } from './style'

export default memo(function CFTopRaning(props) {
  const { ranking } = props
  return (
    <TopRankingWrapper>
      <header>
        <div className='top'>
          <div className='cover sprite_cover' />
          <img className='top-img' alt={ranking.name} src={getImgSize(ranking.coverImgUrl, 80)} />
          <span className='top-name'>{ranking.name}</span>
          <div className='icon'>
            <a className='play sprite_02' href='#/'> </a>
            <a className='collect sprite_02' href='#/'> </a>
          </div>
        </div>
        {
          ranking.tracks && ranking.tracks.map((item, index) => {
            if (index >= 10) return null
            return (
              <div className='content' key={item.id}>
                <div className='rank-list text-nowrap' >
                  <span className={'no' + index}>{index + 1}</span>
                  <a href={`/song?${item.id}`} className='text-nowrap music-name'>
                    {item.name}
                  </a>
                  <div className='icon'>
                    <a className='play sprite_02' href='#/'> </a>
                    <a className='add sprite_icon_02' href='#/'> </a>
                    <a className='collect sprite_02' href='#/'> </a>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className='rank-list get-more'>
          <a href={`/discover/toplist?${ranking.id}`}>查看全部></a>
        </div>
      </header>
    </TopRankingWrapper>
  )
})
