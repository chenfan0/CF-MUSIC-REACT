import {
  getSongDetail,
  getLyric
} from '@/services/songs'

import {
  CHANGE_CURRENT_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_MODE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX,
  CHANGE_SONG_DETAIL
} from './constants'

import { getRandom } from '@/utilis/math'
import { parseLyric } from '@/utilis/parseLyric'

export const changeCurrentSongAction = (res) => ({
  type: CHANGE_CURRENT_SONG,
  currentSong: res
})

export const changePlayListAction = (res) => ({
  type: CHANGE_PLAY_LIST,
  playList: res
})

export const changeCurrentPlaySongIndexAction = (index) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  currentPlaySongIndex: index
})

export const changePlayModeAction = (playMode) => ({
  type: CHANGE_PLAY_MODE,
  playMode
})

export const changeCurrentAndCurrentIndexAction = (tag) => {
  return (dispatch, getState) => {
    const currentPlaySongIndex = getState().getIn(['songs', 'currentPlaySongIndex'])
    const playList = getState().getIn(['songs', 'playList'])
    const playMode = getState().getIn(['songs', 'playMode'])
    // 判断播放列表是否为空，如果为空播放完该歌曲后暂停
    if (playList.length === 0) return
    // 判断当前播放模式是否为随机播放
    if (playMode === 1) {
      let randomIndex = getRandom(playList.length)
      while (currentPlaySongIndex === randomIndex) {
        randomIndex = getRandom(playList.length)
      }
      dispatch(changeCurrentPlaySongIndexAction(randomIndex))
      dispatch(changeCurrentSongAction(playList[randomIndex]))
      // 获取歌词
      dispatch(getLyricListAction(playList[randomIndex].id))
    } else {
      if (tag === 1) { // 用户点击的是下一首
        if (currentPlaySongIndex + 1 >= playList.length) {
          dispatch(changeCurrentPlaySongIndexAction(0))
          dispatch(changeCurrentSongAction(playList[0]))
          dispatch(getLyricListAction(playList[0].id))
        } else {
          dispatch(changeCurrentPlaySongIndexAction(currentPlaySongIndex + 1))
          dispatch(changeCurrentSongAction(playList[currentPlaySongIndex + 1]))
          dispatch(getLyricListAction(playList[currentPlaySongIndex + 1].id))
        }
      } else if (tag === -1) { //用户点击的上一首
        if (currentPlaySongIndex - 1 < 0) {
          dispatch(changeCurrentPlaySongIndexAction(playList.length - 1))
          dispatch(changeCurrentSongAction(playList[playList.length - 1]))
          dispatch(getLyricListAction(playList[playList.length - 1].id))
        } else {
          dispatch(changeCurrentPlaySongIndexAction(currentPlaySongIndex - 1))
          dispatch(changeCurrentSongAction(playList[currentPlaySongIndex - 1]))
          dispatch(getLyricListAction(playList[currentPlaySongIndex - 1].id))
        }
      } else { // 歌曲播放完毕，播放下一首
        if (currentPlaySongIndex === playList.length - 1) {// 播放列表最后一首播放结束，跳到第一条
          dispatch(changeCurrentPlaySongIndexAction(0))
          dispatch(changeCurrentSongAction(playList[0]))
          dispatch(getLyricListAction(playList[0].id))
        } else {
          dispatch(changeCurrentPlaySongIndexAction(currentPlaySongIndex + 1))
          dispatch(changeCurrentSongAction(playList[currentPlaySongIndex + 1]))
          dispatch(getLyricListAction(playList[currentPlaySongIndex + 1].id))
        }
      }
    }

  }
}

export const changeLyricListAction = (res) => ({
  type: CHANGE_LYRIC_LIST,
  lyricList: res
})

export const changeCurrentLyricIndexAction = (index) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex: index
})

export const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['songs', 'playList'])
    const currentPlaySongIndex = playList.findIndex(item => {
      return item.id === ids
    })
    if (currentPlaySongIndex === -1) {
      // 在播放列表没有找到该歌曲

      // 获取要播放的歌曲
      getSongDetail(ids).then(res => {
        dispatch(changeCurrentSongAction(res.songs[0]))
        const newPlayList = [...playList, res.songs[0]]
        // 改变播放列表
        dispatch(changePlayListAction(newPlayList))
        // 改变当前播放歌曲下标
        dispatch(changeCurrentPlaySongIndexAction(newPlayList.length - 1))
        dispatch(getLyricListAction(ids))
      })
    } else {
      // 在播放列表找到了该歌曲
      dispatch(changeCurrentPlaySongIndexAction(currentPlaySongIndex))
      dispatch(changeCurrentSongAction(playList[currentPlaySongIndex]))
      // 获取歌词
      dispatch(getLyricListAction(ids))
    }
  }
}

export const changeSongDetailAction = res => ({
  type: CHANGE_SONG_DETAIL,
  songDetail: res.songs[0]
})

export const getLyricListAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      // 防止有些音乐没有歌词，如果没有歌词，手动给lyric添加数据
      const lyric = res.lrc ? res.lrc.lyric : [{ time: 9999999999, content: '暂无歌词' }]
      if (lyric.length === 1) { // 获取到的歌曲是没有歌词的
        dispatch(changeLyricListAction(lyric))
      }
      else {
        const lyricList = parseLyric(lyric);
        dispatch(changeLyricListAction(lyricList))
      }
    })
  }
}

export const getSongDetailAction = id => {
  return dispatch => {
    getSongDetail(id).then(res => {
      dispatch(changeSongDetailAction(res))
    })
  }
}
