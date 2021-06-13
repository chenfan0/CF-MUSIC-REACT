import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getPlaylistTotalCategoryAction } from '../../store/actionCreator'

import { PlaylistHeaderWrapper } from './style'
import CFDropdown from '../dropdown'

export default memo(function CFPlaylistHeader() {
  // redux hooks
  // const { categories } = useSelector(state => ({
  //   categories: state.getIn(['playlist', 'categories'])
  // }))
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getPlaylistTotalCategoryAction())
  }, [dispatch])

  return (
    <PlaylistHeaderWrapper>
      <CFDropdown />
    </PlaylistHeaderWrapper>
  )
})
