export function recommendHeaderListFormat(postfix) {
  return `/discover/playlist/?cat=${postfix}`
}

export function getImgSize(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`
}

export function formatPlayCount(playCount) {
  if (playCount < 10000) return
  if (playCount / 10000 < 10000) {
    return Math.ceil(playCount / 1000) / 10 + '万'
  } else {
    return Math.ceil(playCount / 1000) / 10 + '亿'
  }
}
