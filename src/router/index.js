import CFDiscover from '@/pages/discover'
import CFMine from '@/pages/mine'
import CFFriends from '@/pages/friends'
import CFDownload from '@/pages/download'

const routes = [
  {
    path: '/',
    exact: true,
    component: CFDiscover
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

