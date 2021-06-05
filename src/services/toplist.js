import request  from './index'

export function getTotalTopList() {
  return request({
    url: '/toplist'
  })
}
