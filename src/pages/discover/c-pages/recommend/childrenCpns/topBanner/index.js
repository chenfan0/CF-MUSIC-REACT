import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
// shallowEqual 可以让useSelector进行浅层比较，而不是直接 === 比较
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

// 导入action
import {
  getTopBannersAction
} from '../../store/actionCreator'

import {
  TopBannerWrapper,
  BannerLeft,
  BannerRight
} from './style'
import { Carousel } from 'antd';


export default memo(function Swiper() {
  // 内部state
  const [currentIndex, setCurrentIndex] = useState(0)

  // redux hooks
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  const dispatch = useDispatch()

  // 其他hook
  const bannerRef = useRef()

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const changeBanner = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他逻辑
  let bgUrl = topBanners[currentIndex] && topBanners[currentIndex].imageUrl
  if (bgUrl) {
    if (bgUrl.indexOf() === -1) {
      bgUrl = bgUrl + '?imageView&blur=40x20'
    } else {
      bgUrl = bgUrl + '&blur=40x20'
    }
  }

  return (
    <TopBannerWrapper bgImgUrl={bgUrl}>
      <div className='banner wrap-v2' >
        <BannerLeft>
          <Carousel
            effect="fade" autoplay
            dots={{ className: 'dots' }}
            ref={bannerRef}
            beforeChange={changeBanner}
          >
            {
              topBanners.map((item) => {
                return (
                  <div key={item.scm} className='carousel-item'>
                    <a href={item.url} ><img src={item.imageUrl} alt={item.typeTitle} /> </a>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
      <button className='banner-left-btn banner-control-left' onClick={e => bannerRef.current.prev()}></button>
      <button className='banner-right-btn banner-control-right' onClick={e => bannerRef.current.next()}></button>
    </TopBannerWrapper>
  )
})
