import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getHotRecommendsAction
} from '../../store/actionCreator'
import { recommendHeaderListFormat } from '@/utilis/format'

import CFRecommendHeader from '@/components/recommend-header'
import { HotRecommendWrapper } from './style'
import CFSongCover from '@/components/song-cover'

export default memo(function CFHotRecommend() {
  //  内部数据和state
  const list = [
    { content: '华语', link: recommendHeaderListFormat('华语') },
    { content: '流行', link: recommendHeaderListFormat('流行') },
    { content: '摇滚', link: recommendHeaderListFormat('摇滚') },
    { content: '民谣', link: recommendHeaderListFormat('民谣') },
    { content: '电子', link: recommendHeaderListFormat('电子') }
  ]
  //  redux-hooks
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)

  const dispatch = useDispatch()

  // 其他hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction())
  }, [dispatch])


  return (
    <HotRecommendWrapper>
      <CFRecommendHeader title={{ content: '热门推荐', link: '/discover/playlist' }} list={list} />
      {
        hotRecommends.map(item => {
          return <CFSongCover key={item.id} item={item} />
        })
      }
    </HotRecommendWrapper>
  )
})
