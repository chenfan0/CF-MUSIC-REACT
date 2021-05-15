import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'


import musicNavData from '@/common/music-nav-data'

// 导入antd组件
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
// 导入自定义组件
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'



export default memo(function CFAppHeader() {

  // 业务处理代码
  function handleMusicNavData(item, index) {
    if (index === 3 || index === 4) {
      return (
        <a href={item.link}>{item.title}</a>
      )
    } else {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className='icon sprite_01' />
        </NavLink>
      )
    }
  }

  // 返回的jsx代码
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='/' className='logo sprite_01 a_indent'>网易云音乐</a>
          {
            musicNavData.map((item, index) => {
              return (
                <div key={item.title} className='m-nav-item'>
                  { handleMusicNavData(item, index)}
                </div>
              )
            })
          }
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
          <div className='creator'>创造者中心</div>
          <div className='login'>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})
