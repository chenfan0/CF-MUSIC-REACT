import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotAlbumsAction } from '../../store/actionCreators'

import { HotAlbumWrapper } from './style'
import CFAlbumItem from '../albumItem'

export default memo(function CFHotAlbum() {
  // redux hooks
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(['album', 'hotAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotAlbumsAction())
  }, [dispatch])


  return (
    <HotAlbumWrapper>
      <div className='header'>
        <h2>热门新碟</h2>
      </div>
      {
        hotAlbums && hotAlbums.map((item, index) => {
          if (index >= 10) {
            return ''
          } else {
            return <CFAlbumItem item={item} key={item.name} />
          }

        })
      }
    </HotAlbumWrapper>
  )
})


