import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewRadioAction } from '../../store/actionCreator'
import { getImgSize } from '@/utilis/format'

import { NewDjradioWrapper } from './style'

export default memo(function CFNewDjradio(props) {
  // state and props
  const { id } = props

  // redux hooks
  const { newDjradio } = useSelector(state => ({
    newDjradio: state.getIn(['djradio', 'newDjradio'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getNewRadioAction(id))
  }, [dispatch, id])

  return (
    <NewDjradioWrapper>
      {
        newDjradio && newDjradio.map((item, index) => {
          if (index < 5) {
            return (
              <div className='new-radio-item' key={item.id}>
                <img src={getImgSize(item.picUrl, 150)} alt={item.desc} />
                <p className='name text-nowrap'>{item.name}</p>
                <p className='text text-nowrap'>{item.rcmdtext}</p>
              </div>
            )
          } else {
            return ''
          }
        })
      }
    </NewDjradioWrapper>
  )
})
