import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPlaylistTotalCategoryAction } from '../../store/actionCreator'

import { PlaylistHeaderWrapper } from './style'
import CFDropdown from '../dropdown'

export default memo(function CFPlaylistHeader() {
  // redux hooks
  const { categories } = useSelector(state => ({
    categories: state.getIn(['playlist', 'categories'])
  }))
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getPlaylistTotalCategoryAction())
  }, [])

  return (
    <PlaylistHeaderWrapper>
      <CFDropdown />
    </PlaylistHeaderWrapper>
  )
})
