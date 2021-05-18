import request from './index'

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbums() {
  return request({
    url: '/album/newest'
  })
}

export function getRanking(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}
