import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongCategoryListAction } from '../../store/actionCreator'
import emitter from '@/utilis/events'

import { ListWrapper } from './style'
import CFSongCover from '@/components/song-cover'

export default memo(function CFList(props) {
  // state
  const [type, setType] = useState('全部')

  // redux hooks
  const { categoryList } = useSelector(state => ({
    categoryList: state.getIn(['playlist', 'categoryList'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  function eventEmitter(type) {
    setType(type)
  }

  useEffect(() => {
    emitter.addListener('select', eventEmitter)
    dispatch(getSongCategoryListAction(type))
    return () => {
      emitter.removeListener('select', eventEmitter)
    }
  }, [type, dispatch])


  return (
    <ListWrapper>
      {
        categoryList.playlists && categoryList.playlists.map(item => {
          return (
            <div className='cover' key={item.id} >
              <CFSongCover item={item} />
            </div>
          )
        })
      }
    </ListWrapper>
  )
})
