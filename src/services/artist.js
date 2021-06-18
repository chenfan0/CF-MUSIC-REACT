import request from './index'

export function getArtistList(type, area, initial, limit) {
  return request({
    url: '/artist/list',
    params: {
      type,
      area,
      initial,
      limit,
    }
  })
}

