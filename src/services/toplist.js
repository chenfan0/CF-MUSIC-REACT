import request from './index'

export function getTotalTopList() {
  return request({
    url: '/toplist'
  })
}

export function getToplistDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
