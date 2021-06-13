import React, { memo } from 'react'

import { HeaderWrapper } from './style'

export default memo(function CFDjradioHeader(props) {
  // props
  const { title } = props
  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      <span className='more'>更多 &gt;</span>
    </HeaderWrapper>
  )
})
