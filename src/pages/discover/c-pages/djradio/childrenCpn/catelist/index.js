import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import emitter from '@/utilis/events'

import {
  CatelistWrapper,
  CatelistItemWrapper
} from './style'

export default memo(function CFCatelist() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // redux hooks
  const { catelist } = useSelector(state => ({
    catelist: state.getIn(['djradio', 'catelist'])
  }), shallowEqual)

  // other hooks
  useEffect(() => {
    emitter.emit('selectDjType', currentIndex)
  }, [currentIndex])
  // other handle
  function selectCatelist(id) {
    setCurrentIndex(id)
  }

  return (
    <CatelistWrapper>
      {
        catelist && catelist.map(item => {
          return (
            <CatelistItemWrapper
              className={`catelist-item ${currentIndex === item.id ? 'select' : ''}`}
              url={item.picWebUrl}
              key={item.name}
              onClick={e => selectCatelist(item.id)}
            >
              <i className='icon' />
              <span className='content'>{item.name}</span>
            </CatelistItemWrapper>
          )
        })
      }
    </CatelistWrapper >
  )
})


