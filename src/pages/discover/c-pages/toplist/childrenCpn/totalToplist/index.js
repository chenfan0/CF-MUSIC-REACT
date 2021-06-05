import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTotalToplistAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'

import {
  TotalToplistWrapper,
  CloundList,
  GlobalList
} from './style'

export default memo(function CFTotalToplist(props) {
  //  state and props
  const { id } = props
  // redux hooks
  const { totalToplist } = useSelector((state) => ({
    totalToplist: state.getIn(['toplist', 'totalToplist'])
  }), shallowEqual)
  const dispatch = useDispatch()


  // other hooks
  useEffect(() => {
    dispatch(getTotalToplistAction())
  }, [dispatch])

  // // other handle
  const toplist = totalToplist || []

  return (
    <TotalToplistWrapper>
      <CloundList >
        <h2>云音乐特色榜</h2>
        {
          toplist.map((item, index) => {
            if (index <= 3) {
              return (
                <Link
                  to={`/discover/toplist?id=${item.id}`}
                  className={`${Number(id) === item.id ? 'active toplist-item' : 'toplist-item'}`}
                  key={item.name}
                >
                  <img src={getImgSize(item.coverImgUrl, 40)} alt={item.name}></img>
                  <div>
                    <p className='list-name'>{item.name}</p>
                    <p className='update-time'>{item.updateFrequency}</p>
                  </div>
                </Link>
              )
            } else {
              return ''
            }
          })
        }
      </CloundList>
      <GlobalList >
        <h2>全球媒体榜</h2>
        {
          toplist.map((item, index) => {
            if (index > 3) {
              return (
                <Link
                  to={`/discover/toplist?id=${item.id}`}
                  className={`${Number(id) === item.id ? 'active toplist-item' : 'toplist-item'}`}
                  key={item.name}
                >
                  <img src={getImgSize(item.coverImgUrl, 40)} alt={item.name}></img>
                  <div>
                    <p className='list-name'>{item.name}</p>
                    <p className='update-time'>{item.updateFrequency}</p>
                  </div>
                </Link>
              )
            } else {
              return ''
            }
          })
        }
      </GlobalList>
    </TotalToplistWrapper>
  )
})
