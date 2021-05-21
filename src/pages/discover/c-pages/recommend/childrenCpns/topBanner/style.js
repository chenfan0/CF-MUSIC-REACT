import styled from 'styled-components'

import download from '@/assets/img/download.png'

export const CFTopBannerWrapper = styled.div`
  position: relative;
  background: url(${props => props.bgImgUrl}) center center/6000px;
  .banner {
    display: flex;
    height: 285px;
  }
  .banner-left-btn, .banner-right-btn {
    position: absolute;
    top: 50%;
    transform:translate(0, -50%);
    width: 37px;
    height: 63px;
    &:hover {
      background-color: #333;
      cursor: pointer;
    }
  }
  .banner-left-btn {
    left: 20%;
  }
  .banner-right-btn {
    right: 20%;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  .dots {
    li {
      overflow: hidden;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      button {
        width: 100%;
        height: 100%;
      }
      &.slick-active {
        width: 8px;
        background: #ae0a0a;
        button {
          opacity: 0;
        }
      }
    }
}
  .carousel-item {
    img {
      width: 730px;
      height: 285px;
    }
  };
`

export const BannerRight = styled.div`
  width: 100%;
  height: 100%;
  background: url(${download}) no-repeat;
`
