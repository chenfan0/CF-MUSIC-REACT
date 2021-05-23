import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongDetailAction } from './store/actionCreator'


import {
  SongsWrapper,
  SongsLeft,
  SongRight
} from './style'
import CFSongImg from './childrenCpn/songImg'
import CFShowSongDetail from './childrenCpn/showSongDetail'


export default memo(function CFSongs(props) {
  // 从路由中获取id
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
  // 防止出现取不到值报错的情况
  const imgUrl = songDetail.al && songDetail.al.picUrl
  const name = songDetail && songDetail.name
  const musicDetail = [] && songDetail


  return (
    <SongsWrapper className='wrap-v2'>
      <SongsLeft>
        <div className='song-detail'>
          <CFSongImg imgUrl={imgUrl} name={name} />
          <CFShowSongDetail songDetail={musicDetail} />
        </div>
      </SongsLeft>
      <SongRight>

      </SongRight>
    </SongsWrapper>
  )
})
