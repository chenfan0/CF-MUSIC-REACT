import React, { memo } from 'react'


import TopBanner from './childrenCpns/topBanner'

function CFRecommend() {
  return (
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(CFRecommend)
