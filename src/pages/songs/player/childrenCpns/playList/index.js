import React, { forwardRef, memo, useImperativeHandle, useRef, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { formatDate } from '@/utilis/format'
import {
  changeCurrentSongAction,
  changeCurrentPlaySongIndexAction,
  getLyricListAction,
  changePlayListAction
} from '../../../store/actionCreator'

import {
  PlayListWrapper,
  PlayListContent,
  PlayListContentLeft,
  PlayListContentRight
} from './style'

export default memo(forwardRef((props, ref) => {
  // redux hooks
  const {
    playList,
    currentSong,
    currentPlaySongIndex,
    lyricList,
    currentLyricIndex
  } = useSelector((state) => ({
    playList: state.getIn(['songs', 'playList']),
    currentSong: state.getIn(['songs', 'currentSong']),
    currentPlaySongIndex: state.getIn(['songs', 'currentPlaySongIndex']),
    lyricList: state.getIn(['songs', 'lyricList']),
    currentLyricIndex: state.getIn(['songs', 'currentLyricIndex'])
  }), shallowEqual)

  const dispatch = useDispatch()


  // other hooks
  const playListWrapperRef = useRef()
  const lyricRef = useRef()

  useImperativeHandle(ref, () => ({
    toggle: () => {
      // 切换播放列表的显示与隐藏
      if (playListWrapperRef.current.style.display === '' || playListWrapperRef.current.style.display === 'none') {
        playListWrapperRef.current.style.display = 'block'
      } else {
        playListWrapperRef.current.style.display = 'none'
      }
    }
  }), [])
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    lyricRef.current.scrollTop = currentLyricIndex * 32 - 96
  }, [currentLyricIndex]);


  // other handle
  function changeMusic(index) {
    // 改变当前播放歌曲
    dispatch(changeCurrentSongAction(playList[index]))
    // 改变当前播放歌曲下标
    dispatch(changeCurrentPlaySongIndexAction(index))
    // 获取当前播放歌曲的歌词
    dispatch(getLyricListAction(playList[index].id))
  }

  function closePlayList() {
    playListWrapperRef.current.style.display = 'none'
  }


  return (
    <PlayListWrapper ref={playListWrapperRef}  >
      <header>
        <h2 className='title'>播放列表({playList.length})</h2>
        <div className='collect'>
          <i className='collect-icon playbar' />
          <span>收藏全部</span>
        </div>
        <div className='delete'>
          <i className='delete-icon play_list_sprite' />
          <span onClick={e => dispatch(changePlayListAction([]))}>清除</span>
        </div>
        <h2 className='music-name'>{currentSong.name}</h2>
      </header>
      <PlayListContent>
        <PlayListContentLeft>
          <div className='play-list'>
            {
              playList.map((item, index) => {
                return (
                  <div className={`play-list-item${currentPlaySongIndex === index ? ' active' : ''}`} key={item.name} onClick={e => { changeMusic(index) }}>
                    <i className={`play_list_sprite ${currentPlaySongIndex === index ? ' icon' : ''}`}></i>
                    <span className='song-name text-nowrap'>{item.name}</span>
                    <span className='artist text-nowrap'>{item.ar[0].name}</span>
                    <span className='time text-nowrap'>{formatDate(item.dt, 'mm:ss')}</span>
                  </div>
                )
              })
            }
            <div className='close' onClick={closePlayList}>x</div>
          </div>
        </PlayListContentLeft>
        <PlayListContentRight ref={lyricRef}>
          {
            lyricList.map((item, index) => {
              return (
                <div className='lyric' key={index}>
                  <p className={`${currentLyricIndex === index ? 'active' : ' '}`}>{item.content}</p>
                </div>
              )
            })
          }
        </PlayListContentRight>
      </PlayListContent>
    </PlayListWrapper >
  )

})
)
