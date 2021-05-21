import styled from 'styled-components'

import controlIcon from '@/assets/img/sprite_icon.png'

export const PlayerWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-color: #2e2e2e;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
  .volume-btn {
    display: none;
    position: absolute;
    bottom: 37px;
    right: 73px;
    width: 32px;
    height: 113px;
    padding: 0 14px;
    background-color: #292929;
    .ant-slider-rail {
      background-color: #191919;
    }
    .ant-slider-track {
      background-color: #ba0b0b;
    }
    .ant-slider-handle {
      background: url(${controlIcon});
      background-position: -43px -253px;
      /* border: ; */
      border: solid 1px #808080;
    }
  }
`

export const PlayerContent = styled.div`
  display: flex;
  height: 53px;
`

export const PlayeContentLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 42px;
  margin-top: 5px;
  .prev, .next {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .prev {
    background-position: 0 -130px;
  }
  .pause {
    width: 36px;
    height: 36px;
    margin: 0 5px;
    background-position: ${props => props.isPlaying ? ('0 -165px') : ('0 -204px')};
    /* background-position: 0 -204px; */
    cursor: pointer;
  }
  .next {
    background-position: -80px -130px;
  }
`

export const PlayContentCenter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  color: #fff;
  .song-img {
    position: relative;
    img {
      width: 34px;
      height: 34px;
      border-radius: 5px;
    }
    a {
      position: absolute;
      left: 0;
      width: 35px;
      height: 35px;
      background-position: 0 -80px;
    }
  }
  .center {
    position: relative;
    flex: 1;
    padding-top: 10px;
    margin-left: 10px;
    .music-name {
      margin: 0 10px;
      font-size: 12px;
    }
    .artist {
      color: #9b9b9b;
      font-size: 12px;
    }
    .slider {
      margin-top: -2px;
      width: 520px;
      .ant-slider-track {
        background-color: #c70c0c;
      }
      .ant-slider-handle {
        width: 20px;
        height: 20px;
        margin-top: -7px;
        background: url(${controlIcon});
        background-position: -3px -283px;
        border: none;
      }
    }
    .time {
      position: absolute;
      top: 28px;
      right: 15px;
      font-size: 12px;
      color: #666;
    }
  }
`

export const PlayContentRight = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 186px;
  height: 36px;
  margin-top: 7px;
  .add, .share, .volume, .play-mode {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .add {
    background-position: -88px -163px;
  }
  .share {
    background-position: -114px -163px;
  }
  .divider {
    width: 10px;
    height: 20px;
    margin: 0 8px;
    background-position: -147px -300px;
  }
  .volume {
    background-position: -2px -248px;
  }
  .play-mode {
    background-position: -3px -344px;
  }
  .play-list-control {
    width: 59px;
    height: 25px;
    background-position: -42px -68px;
    cursor: pointer;
  }
  .play-list-num {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 12px;
    color: #666;
  }
  .play-list {
    display: none;
    position: absolute;
    bottom: 43px;
    right: 0%;
    width: 986px;
    height: 301px;
    background-color: rgba(21, 21, 21, 0.95);
    border-radius: 5px;
  }

`
