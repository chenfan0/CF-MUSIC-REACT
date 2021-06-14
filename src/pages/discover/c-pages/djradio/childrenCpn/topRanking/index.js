import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getDjradioRankingAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'

import { TopRankingWrapper } from './style'
import CFPagination from '@/components/pagination'

export default memo(function CFDjradioTopRanking(props) {
  // state and props
  const { id } = props
  const [currentPage, setCurrentpage] = useState(1)

  // redux hooks
  const { djradioRanking } = useSelector(state => ({
    djradioRanking: state.getIn(['djradio', 'djradioRanking'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getDjradioRankingAction(id, 30, 0))
  }, [dispatch, id])

  // other handle
  function onChange(page) {
    dispatch(getDjradioRankingAction(id, 30, (page - 1) * 30))
    setCurrentpage(page)
  }


  return (
    <TopRankingWrapper>
      <div className='top-ranking'>
        {
          djradioRanking.djRadios && djradioRanking.djRadios.map((item, index) => {
            if (index < 30) {
              return (
                <div className='top-ranking-item' key={item.id}>
                  <img src={getImgSize(item.picUrl, 120)} alt={item.name} />
                  <div className='content'>
                    <p className='name'>{item.name}</p>
                    <div className='detail'>
                      <div className='singer'>
                        <i className='icon sprite_icon_02' />
                        <span className='nickname'>{item.dj.nickname}</span>
                      </div>
                      <div className='others'>
                        <span className='programCount'>共{item.programCount}期</span>
                        <span className='subCount'>订阅{item.subCount}次</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            } else {
              return ''
            }
          })
        }
      </div>
      <CFPagination
        total={djradioRanking.count}
        onChange={onChange}
        currentPage={currentPage}
        pageSize={30}
      />
    </TopRankingWrapper>
  )
})
