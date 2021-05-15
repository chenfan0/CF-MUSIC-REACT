import React, { memo } from 'react'


import {
  MineWrapper
} from './style'

export default memo(function CFMine() {
  return (
    <MineWrapper className='wrap-v2 '>
      <div className='mine_bgc_img'></div>
    </MineWrapper>
  )
})