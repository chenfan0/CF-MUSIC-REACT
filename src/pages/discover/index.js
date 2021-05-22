import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import {
  discoverNavLink
} from '@/common/music-nav-data'

import {
  DiscoverWrapper,
  DiscoverNav,
  DiscoverMenu
} from './style'
import { renderRoutes } from 'react-router-config'

export default memo(function CFDiscover(props) {
  const { route } = props
  useEffect(() => {
  })
  return (
    <DiscoverWrapper>
      <DiscoverNav>
        <DiscoverMenu className='wrap-v2'>
          {
            discoverNavLink.map((item) => {
              return (<div className='menu-item' key={item.title}>
                <NavLink to={item.path} >{item.title}</NavLink>
              </div>)
            })
          }
        </DiscoverMenu>
      </DiscoverNav>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
