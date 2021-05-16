import request from './index'

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}
