import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'


import {
  CatelistWrapper,
  CatelistItemWrapper
} from './style'

export default memo(function CFCatelist() {
  // redux hooks
  const { catelist } = useSelector(state => ({
    catelist: state.getIn(['djradio', 'catelist'])
  }), shallowEqual)
  console.log(catelist);

  return (
    <CatelistWrapper>
      {
        catelist && catelist.map(item => {
          return (
            <CatelistItemWrapper url={item.picWebUrl} key={item.name} className='catelist-item'>
              <i className='icon' />
              <span className='content'>{item.name}</span>
            </CatelistItemWrapper>
          )
        })
      }
    </CatelistWrapper>
  )
})


