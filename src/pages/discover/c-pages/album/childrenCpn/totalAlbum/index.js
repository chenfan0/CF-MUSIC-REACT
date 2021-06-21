import React, { memo } from 'react'

import emitter from '@/utilis/events'

import { TotalWrapper } from './style'
import CFAlbumItem from '../albumItem'
// import CFPagination from '@/components/pagination'

export default memo(function CFTotalAlbums(props) {
  // state
  const { totalAlbums } = props
  // redux hooks

  // other hooks

  const type = [
    { title: '全部', area: 'ALL' },
    { title: '华语', area: 'ZH' },
    { title: '欧美', area: 'EA' },
    { title: '韩国', area: 'KR' },
    { title: '日本', area: 'JP' },
  ]

  function typeClick(area) {
    // dispatch(getTotalAlbumsAction(currentPage - 1, area))
    emitter.emit('albumType', area)
  }


  return (
    <TotalWrapper>
      <div className='header' >
        <h2 className='title'>全部新碟</h2>
        <div className='type'>
          {
            type && type.map(item => {
              return (
                <span key={item.title} onClick={e => typeClick(item.area)}>
                  {item.title}
                </span>
              )
            })
          }
        </div>
      </div>
      <div className='newAlbums'>
        {
          totalAlbums && totalAlbums.map(item => {
            return (
              <CFAlbumItem item={item} key={item.name} />
            )
          })
        }
      </div>
    </TotalWrapper>
  )
})


