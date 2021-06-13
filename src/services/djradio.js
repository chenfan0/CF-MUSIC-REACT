import request from './index'

export function getCatelist() {
  return request({
    url: '/dj/catelist'
  })
}

export function getRecommend() {
  return request({
    url: '/program/recommend'
  })
}

export function getRanking(limit = 10) {
  return request({
    url: '/dj/program/toplist',
    params: {
      limit
    }
  })
}
