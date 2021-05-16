import React from 'react'
import { Redirect } from 'react-router'

import CFDiscover from '@/pages/discover'
import CFMine from '@/pages/mine'
import CFFriends from '@/pages/friends'
import CFDownload from '@/pages/download'

// 导入discover子路由
import CFRecommend from '@/pages/discover/c-pages/recommend'
import CFToplist from '@/pages/discover/c-pages/toplist'
import CFPlaylist from '@/pages/discover/c-pages/playlist'
import CFDjradio from '@/pages/discover/c-pages/djradio'
import CFArtist from '@/pages/discover/c-pages/artist'
import CFAlbum from '@/pages/discover/c-pages/album'


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover' />
    )
  },
  {
    path: '/discover',
    component: CFDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: CFRecommend
      },
      {
        path: '/discover/toplist',
        component: CFToplist
      },
      {
        path: '/discover/playlist',
        component: CFPlaylist
      },
      {
        path: '/discover/djradio',
        component: CFDjradio
      },
      {
        path: '/discover/artist',
        component: CFArtist
      },
      {
        path: '/discover/album',
        component: CFAlbum
      },
    ]
  },
  {
    path: '/mine',
    component: CFMine
  },
  {
    path: '/friends',
    component: CFFriends
  },
  {
    path: '/download',
    component: CFDownload
  }
]

export default routes

