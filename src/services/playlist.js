import request from './index'

export function getPlaylistTotalCategory() {
  return request({
    url: '/playlist/catlist'
  })
}

