import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getCatelistAction } from './store/actionCreator'
import emitter from '@/utilis/events'

import { DjRadio } from './style'
import CFCatelist from './childrenCpn/catelist'
import CFDjradioRecommend from './childrenCpn/recommend'
import CFDjradioRanking from './childrenCpn/ranking'
import CFDjradioRadioList from './childrenCpn/radioList'
import CFDjradioHeader from './childrenCpn/header'
import CFDNewDjradio from './childrenCpn/newDjradio'
import CFDjradioTopRanking from './childrenCpn/topRanking'

export default memo(function CFDjradio() {
  // state
  const [id, setId] = useState(0)

  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getCatelistAction())
  }, [dispatch])

  useEffect(() => {
    emitter.setMaxListeners(Infinity)
    emitter.addListener('selectDjType', (currentIndex) => {
      setId(currentIndex)
    })
  }, [id])

  return (
    <DjRadio className='wrap-v2'>
      <CFCatelist />
      {
        id === 0 ? (
          <>
            <div className='recommend-ranking'>
              <CFDjradioRecommend />
              <CFDjradioRanking />
            </div>
            <CFDjradioRadioList />
          </>
        )
          : (
            <>
              <div className='new'>
                <CFDjradioHeader title='优秀新电台' />
                <CFDNewDjradio id={id} />
              </div>
              <div className='top-ranking'>
                <CFDjradioHeader title='电台排行榜' />
                <CFDjradioTopRanking id={id} />
              </div>

            </>
          )
      }
    </DjRadio>
  )
})
