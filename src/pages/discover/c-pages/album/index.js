import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getTotalAlbumsAction } from './store/actionCreators'
import emitter from '@/utilis/events'

import { AlbumWrapper } from './style'
import CFHotAlbum from './childrenCpn/hotAlbum'
import CFTotalAlbums from './childrenCpn/totalAlbum'
import CFPagination from '@/components/pagination'


export default memo(function CFAlbum() {
  // state
  const [currentPage, setCurrentPage] = useState(1)
  const [area, setArea] = useState('ALL')

  // redux hooks
  const { totalAlbums } = useSelector(state => ({
    totalAlbums: state.getIn(['album', 'totalAlbums'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotalAlbumsAction(0, 'ALL'))
  }, [dispatch])

  useEffect(() => {
    emitter.addListener('albumType', (area) => {
      setCurrentPage(1)
      setArea(area)
      dispatch(getTotalAlbumsAction(0, area))
    })
  }, [dispatch])

  function onChange(page) {
    setCurrentPage(page)
    dispatch(getTotalAlbumsAction((page - 1) * 35, area))
  }
  return (
    <AlbumWrapper className='wrap-v2'>
      <CFHotAlbum />
      <CFTotalAlbums totalAlbums={totalAlbums.albums} />
      <CFPagination
        className='pagination'
        total={totalAlbums.total}
        onChange={onChange}
        currentPage={currentPage}
        pageSize={35} />
    </AlbumWrapper>
  )
})


