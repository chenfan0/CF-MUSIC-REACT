import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getCatelistAction } from './store/actionCreator'

import { DjRadio } from './style'
import CFCatelist from './childrenCpn/catelist'
import CFDjradioRecommend from './childrenCpn/recommend'
import CFDjradioRanking from './childrenCpn/ranking'

export default memo(function CFDjradio() {
  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getCatelistAction())
  }, [dispatch])

  return (
    <DjRadio className='wrap-v2'>
      <CFCatelist />
      <div className='recommend-ranking'>
        <CFDjradioRecommend />
        <CFDjradioRanking />
      </div>
    </DjRadio>
  )
})
