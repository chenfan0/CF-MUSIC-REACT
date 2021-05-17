import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'

import {
  NewAlbumWrapper,
  NewAlbumRoller
} from './style'
import CFRecommendHeader from '@/components/recommend-header'

export default memo(function CFNewAlbum() {
  // redux hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  console.log(newAlbums);
  const dispatch = useDispatch()

  // 其他hooks
  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <CFRecommendHeader title={{ content: '新碟上架', link: '/discover/album' }} />
      <NewAlbumRoller>
        <div className='roller-list'>
          {
            newAlbums.map((item, index) => {
              if (index >= 10) {
                return null
              } else {
                return (
                  <div className='sprite_02' key={item.id}>
                    <div className='cover sprite_cover' >
                      <div className='image-cover sprite_cover' />
                      <img src={getImgSize(item.picUrl, 100)} alt={item.name} className='img'></img>
                      <p className='music-name text-nowrap'>{item.name}</p>
                      <p className='artist-name'>{item.artist.name}</p>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
        <button className='left-control sprite_02'></button>
        <button className='right-control sprite_02'></button>
      </NewAlbumRoller>

    </NewAlbumWrapper>
  )
})
