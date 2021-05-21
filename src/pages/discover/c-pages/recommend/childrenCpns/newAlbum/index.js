import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'
// import emitter from '@/utilis/events'

import {
  NewAlbumWrapper,
  NewAlbumRoller
} from './style'
import CFRecommendHeader from '@/components/recommend-header'
import { useRef } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

export default memo(function CFNewAlbum() {
  // state
  const [rollerListLeft, setRollerListLeft] = useState(-1290)

  // redux hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()

  const changeNewAlbumLeft = useCallback(() => {
    if (rollerList.current.style.left === '-1935px') {
      rollerList.current.style.transition = 'none'
      rollerList.current.style.left = -1290 + 'px'
      setRollerListLeft(() => -1290)

    } if (rollerList.current.style.left === '0px') {
      rollerList.current.style.left = -645 + 'px'
      setRollerListLeft(() => -645)
      rollerList.current.style.left = rollerListLeft + 'px'
    }
    rollerList.current.style.left = rollerListLeft + 'px'

  }, [rollerListLeft])

  // 其他hooks
  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch])
  useEffect(() => {
    changeNewAlbumLeft()
  }, [changeNewAlbumLeft])

  const rollerList = useRef()

  // 其他逻辑
  const play = useCallback((id) => {
    console.log(id)
    // emitter.emit('play', id)
  }, [])


  return (
    <NewAlbumWrapper>
      <CFRecommendHeader title={{ content: '新碟上架', link: '/discover/album' }} />
      <NewAlbumRoller>
        <div className='roller-list-wrapper'>
          <div className='roller-list' ref={rollerList}>
            {
              newAlbums.map((item, index) => {
                if (index >= 10) {
                  return null
                } else {
                  return (
                    <div className='sprite_02' key={item.id} >
                      <div className='cover sprite_cover'  >
                        <div className='image-cover sprite_cover' />
                        <img src={getImgSize(item.picUrl, 100)} alt={item.name} className='img' ></img>
                        <p className='music-name text-nowrap' onClick={() => { play(item.id) }}>{item.name}</p>
                        <p className='artist-name'>{item.artist.name}</p>
                      </div>
                    </div>
                  )
                }
              })
            }
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
        </div>
        <button className='left-control sprite_02' onClick={() => setRollerListLeft(prevRollerListLeft => prevRollerListLeft - 645)}></button>
        <button className='right-control sprite_02' onClick={() => setRollerListLeft(prevRollerListLeft => prevRollerListLeft + 645)}></button>
      </NewAlbumRoller>

    </NewAlbumWrapper>
  )
})
