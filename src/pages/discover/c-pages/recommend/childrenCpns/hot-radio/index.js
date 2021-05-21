import React, { memo } from 'react'

import { hotRadios } from '@/services/recommend'
import { getImgSize } from '@/utilis/format'

import {
  HotRadioWrapper,
  HotRadioList
} from './style'

export default memo(function CFHotRadio() {
  return (
    <HotRadioWrapper>
      <div className='header'>
        <h2>热门主播</h2>
        <a href='/discover/artist'>查看全部{'>'}</a>
      </div>
      <HotRadioList>
        {
          hotRadios.map(item => {
            return (
              <div className='hot-radio-list-item' key={item.name}>
                <img className='radio-img' src={getImgSize(item.picUrl, 40)} alt={item.name} />
                <div className='radio-introduce'>
                  <p className='radio-name'>{item.name}</p>
                  <p className='radio-position text-nowrap'>{item.position}</p>
                </div>
              </div>
            )
          })
        }
      </HotRadioList>
    </HotRadioWrapper>
  )
})
