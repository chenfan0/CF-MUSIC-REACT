import React, { memo } from 'react'

import { BtnsWrapper } from './style'

export default memo(function CFBtns(props) {
  const { collect } = props

  return (
    <BtnsWrapper>
      <div className='play'>
        <div className='play-left button_01'>
          <span>播放</span>
        </div>
        <div className='play-right button_01'>
          <i className='icon' />
        </div>
      </div>
      {
        collect ?
          (<div className='collect btns'>
            <div className='collect-left btns-left button_01'>
              <span>收藏</span>
            </div>
            <div className='collect-right btns-right button_01'></div>
          </div>)
          : ''
      }
      <div className='share btns'>
        <div className='share-left btns-left button_01'>
          <span>分享</span>
        </div>
        <div className='share-right btns-right button_01'></div>
      </div>
      <div className='download btns'>
        <div className='download-left btns-left button_01'>
          <span>下载</span>
        </div>
        <div className='download-right btns-right button_01'></div>
      </div>
      <div className='comment btns'>
        <div className='comment-left btns-left button_01'>
          <span>(666)</span>
        </div>
        <div className='comment-right btns-right button_01'></div>
      </div>
    </BtnsWrapper>
  )
})
