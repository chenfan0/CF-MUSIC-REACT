import axios from 'axios'

export function getTotalAlbums(offset, area, limit = 35) {
  const instance = axios.create({
    baseURL: 'http://121.40.18.63:9000',
    timeout: 10000
  })
  return instance({
    url: '/album/new',
    params: {
      offset,
      area,
      limit,
    }
  })
}

