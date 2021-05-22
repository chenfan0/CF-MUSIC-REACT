import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongDetailAction } from './store/actionCreator'
import { getImgSize } from '@/utilis/format'

import {
  SongsWrapper,
  SongsLeft,
  SongRight
} from './style'

export default memo(function CFSongs(props) {
  const id = props.location.search.slice(4)
  // redux hooks
  const { songDetail } = useSelector(state => ({
    songDetail: state.getIn(['songs', 'songDetail'])
  }), shallowEqual)
  const dispatch = useDispatch()


  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(id))
  }, [dispatch, id])


  // other handle
  const imgUrl = songDetail.al && songDetail.al.picUrl


  return (
    <SongsWrapper className='wrap-v2'>
      <SongsLeft>
        <div className='song-detail'>
          <div className='left'>
            <img src={getImgSize(imgUrl, 130)} />
            <div className='img-cover sprite_cover'></div>
          </div>
          <div className='right'></div>
        </div>
      </SongsLeft>
      <SongRight></SongRight>
    </SongsWrapper>
  )
})
