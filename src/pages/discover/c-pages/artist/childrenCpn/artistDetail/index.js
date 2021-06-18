import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getArtistListAction } from '../../store/actionCreators'
import emitter from '@/utilis/events'
import { getImgSize } from '@/utilis/format'

import { ArtistDetailWrapper } from './style'

export default memo(function CFArtistDetail() {
  // redux hooks
  const { artistList } = useSelector(state => ({
    artistList: state.getIn(['artist', 'artistList'])
  }), shallowEqual)
  console.log(artistList);
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    emitter.addListener('selectArtist', (type, area) => {
      dispatch(getArtistListAction(type, area))
    })
  }, [dispatch])

  useEffect(() => {
    dispatch(getArtistListAction())
  }, [dispatch])

  return (
    <ArtistDetailWrapper>
      {
        artistList && artistList.map(item => {
          return (
            <div className='artist-item' key={item.name}>
              <i className='cover sprite_cover' />
              <img src={getImgSize(item.picUrl, 130)} alt={item.name} />
              <p className='name'>{item.name}</p>
            </div>
          )
        })
      }
    </ArtistDetailWrapper>
  )
})
