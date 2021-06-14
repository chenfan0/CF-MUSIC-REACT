import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongCategoryListAction } from './store/actionCreator'
import emitter from '@/utilis/events'

import { PlaylistWrapper } from './style'
import CFPlaylistHeader from './childrenCpn/header'
import CFList from './childrenCpn/list'
import CFPagination from '@/components/pagination'

export default memo(function CFPlaylist(props) {
  // state
  const [currentPage, setCurrentPage] = useState(1)

  // redux hooks
  const { categoryList } = useSelector((state) => ({
    categoryList: state.getIn(['playlist', 'categoryList'])
  }), shallowEqual)

  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    emitter.addListener('select', () => { setCurrentPage(1) })
  }, [])

  function onChange(page) {
    dispatch(getSongCategoryListAction(categoryList.cat, (page - 1) * 35))
    setCurrentPage(page)
  }

  return (
    <PlaylistWrapper className='wrap-v2'>
      <CFPlaylistHeader />
      <CFList />
      <CFPagination total={categoryList.total} onChange={onChange} currentPage={currentPage} pageSize={35} />
    </PlaylistWrapper>
  )
})
