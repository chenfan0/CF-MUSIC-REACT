import React, { memo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { ShowLyricWrapper } from './style'

export default memo(function CFShowLyric() {
  // state
  const [isHidden, setIsHidden] = useState(false)

  // redux hook
  const { lyricList } = useSelector(state => ({
    lyricList: state.getIn(['songs', 'lyricList'])
  }))

  // other hook
  const lyricRef = useRef()
  const showModeRef = useRef()

  // other handle
  // 控制展开与收起函数
  function showMore() {
    if (isHidden === false) {
      lyricRef.current.style.overflow = 'none'
      lyricRef.current.style.height = 'auto'
      showModeRef.current.innerHTML = '收起'
      setIsHidden(true)
    } else {
      lyricRef.current.style.overflow = 'hidden'
      lyricRef.current.style.height = '210px'
      showModeRef.current.innerHTML = '展开'
      setIsHidden(false)
    }
  }

  return (
    <ShowLyricWrapper isHidden={isHidden}>
      <div className='lyric' ref={lyricRef}>
        {
          lyricList.map((item, index) => {
            return (
              <p key={index}>{item.content}</p>
            )
          })
        }
      </div>
      <p className='show-more' onClick={showMore}>
        <span ref={showModeRef}>展开</span>
        <i className='icon sprite_icon_02' />
      </p>
    </ShowLyricWrapper>
  )
})
