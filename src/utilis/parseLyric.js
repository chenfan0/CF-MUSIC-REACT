const lyricExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export const parseLyric = (lyric) => {
  const lineString = lyric.split('\n')
  const lyricList = []
  for (let i of lineString) {
    if (i) {
      const result = lyricExp.exec(i)
      const time = result[1] * 60000 + result[2] * 1000 + (result[3].length === 3 ? result[3] * 1 : result[3] * 10)
      if (!result) continue
      const content = i.replace(lyricExp, '').trim()
      lyricList.push({ time, content })
    }
  }
  return lyricList
}

