import React, { memo, useState } from 'react'

import { artistCategory } from '@/common/artist-category'
import emitter from '@/utilis/events'

import { ArtistCategory } from './style'

export default memo(function CFArtistCategory() {
  // state
  const [currentType, setCurrentType] = useState('推荐歌手')

  // other handle
  function selectArtist(title, type, area) {
    setCurrentType(title)
    emitter.emit('selectArtist', type, area)
  }


  return (
    <ArtistCategory>
      {
        artistCategory.map(item => {
          return (
            <div className='category-item' key={item.type}>
              <h2 className='title'>{item.type}</h2>
              {
                item.detail.map(iten => {
                  return (
                    <p
                      className={`${iten.title === currentType ? 'active' : ''}`}
                      key={iten.title}
                      onClick={e => selectArtist(iten.title, iten.type, iten.area)}
                    >
                      {iten.title}
                    </p>
                  )
                })
              }
            </div>
          )
        })
      }
    </ArtistCategory>
  )
})


