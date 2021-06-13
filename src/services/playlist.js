import request from './index'

export function getPlaylistTotalCategory() {
  return request({
    url: '/playlist/catlist'
  })
}

export function getSongCategoryList(cat = "全部", offset = 0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}

