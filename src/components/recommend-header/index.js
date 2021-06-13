import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'


import {
  RecommendHeaderWrapper,
  RecommendHeaderLeft,
  RecommendHeaderRight
} from './style'

export default memo(function CFRecommendHeader(props) {
  const { title, list = [] } = props
  return (
    <RecommendHeaderWrapper>
      <RecommendHeaderLeft>
        <i className='icon sprite_02'></i>
        <h3 className='title'><NavLink to={title.link}>{title.content}</NavLink></h3>
        <div className='list'>
          {
            list.map((item) => {
              return (
                <div key={item.content} className='list-item'>
                  <NavLink to={item.link}>{item.content}</NavLink>
                </div>
              )
            })
          }
        </div>
      </RecommendHeaderLeft>
      <RecommendHeaderRight>
        <a className='get-more' href={title.link}>更多</a>
        <i className='icon sprite_02'></i>
      </RecommendHeaderRight>
    </RecommendHeaderWrapper>
  )
})
