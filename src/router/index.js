import React, { lazy } from 'react'
import { Redirect } from 'react-router'

// 路由懒加载
const CFDiscover = lazy(() => import('@/pages/discover'))
const CFMine = lazy(() => import('@/pages/mine'))
const CFFriends = lazy(() => import('@/pages/friends'))
const CFDownload = lazy(() => import('@/pages/download'))
const CFSong = lazy(() => import('@/pages/songs'))

// 路由普通加载
// import CFDiscover from '@/pages/discover'
// import CFMine from '@/pages/mine'
// import CFFriends from '@/pages/friends'
// import CFDownload from '@/pages/download'
// import CFSong from '@/pages/songs'

// 导入discover子路由
const CFRecommend = lazy(() => import('@/pages/discover/c-pages/recommend'))
const CFToplist = lazy(() => import('@/pages/discover/c-pages/toplist'))
const CFPlaylist = lazy(() => import('@/pages/discover/c-pages/playlist'))
const CFDjradio = lazy(() => import('@/pages/discover/c-pages/djradio'))
const CFArtist = lazy(() => import('@/pages/discover/c-pages/artist'))
const CFAlbum = lazy(() => import('@/pages/discover/c-pages/album'))

// import CFRecommend from '@/pages/discover/c-pages/recommend'
// import CFToplist from '@/pages/discover/c-pages/toplist'
// import CFPlaylist from '@/pages/discover/c-pages/playlist'
// import CFDjradio from '@/pages/discover/c-pages/djradio'
// import CFArtist from '@/pages/discover/c-pages/artist'
// import CFAlbum from '@/pages/discover/c-pages/album'


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
      {
        path: '/discover/songs',
        component: CFSong
      }
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
  },
]

export default routes

