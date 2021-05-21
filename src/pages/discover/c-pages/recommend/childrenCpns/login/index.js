import React, { memo } from 'react'


import { CFLoginWrapper } from './style'

export default memo(function CFLogin() {
  return (
    <CFLoginWrapper>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a className='login sprite_02' href='#/'>用户登录</a>
    </CFLoginWrapper >
  )
})


