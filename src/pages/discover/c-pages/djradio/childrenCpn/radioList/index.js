import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRadioListAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'

import { RadioListWrapper } from './style'
import CFHeader from '../header'

export default memo(function CFRadioList() {
  // redux hook
  const { radioList } = useSelector(state => ({
    radioList: state.getIn(['djradio', 'radioList'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getRadioListAction())
  }, [dispatch])


  return (
    <RadioListWrapper>
      {
        radioList && radioList.map(item => {
          return (
            <div className='radio-list' key={item.categoryId}>
              <CFHeader title={item.categoryName} />
              <div className='content'>
                {
                  item.radios && item.radios.map(iten => {
                    return (
                      <div className='radio-list-item' key={iten.id}>
                        <img src={getImgSize(iten.picUrl, 120)} alt={iten.name} />
                        <div className='text'>
                          <h2 className='name'>{iten.name}</h2>
                          <p className='describe'>{iten.rcmdText}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </RadioListWrapper>
  )
})
