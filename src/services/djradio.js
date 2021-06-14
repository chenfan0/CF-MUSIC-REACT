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

export function getRadioList() {
  return request({
    url: '/dj/category/recommend'
  })
}

export function getNewDjradio(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

export function getDjRadioRanking(cateId, limit, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}
