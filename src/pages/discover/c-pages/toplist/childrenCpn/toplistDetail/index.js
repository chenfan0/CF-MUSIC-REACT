import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getToplistDetailAction } from '../../store/actionCreator'

import { ToplistDetailWrapper } from './style'
import CFToplistDetailTop from './childrenCpn/top'
import CFPlaylist from './childrenCpn/musicList'

export default memo(function CFToplistDetail(props) {
  // props and state
  const { id } = props

  // redux hooks
  const { toplistDetail } = useSelector((state) => ({
    toplistDetail: state.getIn(['toplist', 'toplistDetail'])
  }), shallowEqual)
  const dispatch = useDispatch()


  // other hooks
  useEffect(() => {
    dispatch(getToplistDetailAction(id))
  }, [dispatch, id])

  // other handle
  const name = toplistDetail.name || ''
  const imgUrl = toplistDetail.coverImgUrl || ''
  const updateTime = toplistDetail.updateTime || 0
  const playCount = toplistDetail.playCount || 666
  const trackCount = toplistDetail.trackCount || 100
  const musicList = toplistDetail.tracks || []

  return (
    <ToplistDetailWrapper>
      <CFToplistDetailTop name={name} imgUrl={imgUrl} updateTime={updateTime} />
      <CFPlaylist playCount={playCount} trackCount={trackCount} musicList={musicList} />
    </ToplistDetailWrapper>
  )
})

