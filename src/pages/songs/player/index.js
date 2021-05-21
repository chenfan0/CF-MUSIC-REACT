import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  getCurrentSongAction
} from '../store/actionCreator'
import {
  getImgSize,
  formatDate,
  getPlaySong
} from '@/utilis/format'
import emitter from '@/utilis/events'


import { Slider } from 'antd';
import {
  PlayerWrapper,
  PlayerContent,
  PlayeContentLeft,
  PlayContentCenter,
  PlayContentRight
} from './style'

export default memo(function CFPlayer() {
  // state
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // redux hook
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['songs', 'currentSong'])
  }), shallowEqual)
  const dispatch = useDispatch()
  // other hook
  useEffect(() => {
    dispatch(getCurrentSongAction(1830564209))
  }, [dispatch])
  const eventEmitter = useCallback((id) => {
    dispatch(getCurrentSongAction(id))
    setIsPlaying(true)
    setTimeout(() => {
      audioRef.current.play()
    }, 1000);
  }, [dispatch])

  useEffect(() => {
    emitter.addListener('play', eventEmitter)
    return () => {
      emitter.removeListener('play', eventEmitter)
    }
  }, [dispatch, eventEmitter])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])
  const audioRef = useRef()
  const volumeBtn = useRef()

  // other

  // 防止currentSong 没有值时报错
  const id = currentSong && currentSong.id
  const imgUrl = currentSong.al && currentSong.al.picUrl
  const imgAlt = currentSong.al && currentSong.al.name
  const musicName = currentSong && currentSong.name
  const artist = currentSong.ar && currentSong.ar[0].name
  const totalTime = currentSong && currentSong.dt
  const showCurrentTime = formatDate(currentTime, 'mm:ss')
  let progress = currentTime / totalTime * 1000

  // handele function
  const playMusic = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [isPlaying])

  function timeUpdata(e) {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
    } else {
      return
    }
  }

  const musicSliderChange = useCallback((value) => {
    setIsChanging(true)
    setCurrentTime(value / 1000 * totalTime)
  }, [totalTime])

  const musicSliderAfterChange = useCallback((value) => {
    audioRef.current.currentTime = value / 1000 * totalTime / 1000
    setIsChanging(false)
    audioRef.current.play()
    setIsPlaying(true)
  }, [totalTime])

  const showVolume = useCallback(() => {
    if (volumeBtn.current.sliderRef.style.display === 'none' || volumeBtn.current.sliderRef.style.display === '') {
      volumeBtn.current.sliderRef.style.display = 'block'
    } else {
      volumeBtn.current.sliderRef.style.display = 'none'
    }
  }, [volumeBtn])

  const volumeSliderChange = useCallback((value) => {
    audioRef.current.volume = value / 100
  }, [])


  return (
    <PlayerWrapper>
      <PlayerContent className='wrap-v2'>
        <PlayeContentLeft isPlaying={isPlaying}>
          <span className='prev playbar' />
          <span className='pause playbar' onClick={playMusic} />
          <span className='next playbar' />
        </PlayeContentLeft>
        <PlayContentCenter>
          <div className='song-img'>
            <img src={getImgSize(imgUrl, 35)} alt={imgAlt} />
            <NavLink to={`/discover/songs?id=${id}`} className='playbar'> </NavLink>
          </div>
          <div className='center'>
            <span className='music-name'>{musicName}</span>
            <span className='artist'>{artist}</span>
            <span className='from-song-list'></span>
            <Slider className='slider'
              defaultValue={0} value={progress}
              max={1000}
              tipFormatter={null}
              onChange={musicSliderChange}
              onAfterChange={musicSliderAfterChange}
            />
            <div className='time'>
              <span className='current-time'>{showCurrentTime}</span>
              <span> / </span>
              <span className='total-time'>{formatDate(totalTime, 'mm:ss')}</span>
            </div>
          </div>
        </PlayContentCenter>
        <PlayContentRight>
          <span className='add playbar' />
          <span className='share playbar' />
          <span className='divider playbar' />
          <span className='volume playbar' onClick={showVolume} />
          <Slider
            className='volume-btn'
            vertical defaultValue={100}
            ref={volumeBtn}
            tipFormatter={null}
            onChange={volumeSliderChange}
          />
          <span className='play-mode playbar' />
          <span className='play-list-control playbar' />
          <span className='play-list-num'>11</span>
          <div className='play-list'></div>
        </PlayContentRight>
      </PlayerContent>
      <audio ref={audioRef} onTimeUpdate={timeUpdata} />
    </PlayerWrapper>
  )
})
