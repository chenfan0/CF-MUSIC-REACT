import styled from 'styled-components'

export const PlayListWrapper = styled.div`
    display: none;
    position: absolute;
    overflow: hidden;
    bottom: 43px;
    right: 0%;
    width: 986px;
    height: 301px;
    background-color: rgba(21, 21, 21, 0.85);
    border-radius: 5px;
    header {
      display: flex;
      width: 981px;
      height: 41px;
      padding: 8px 25px;
      line-height: 20px;
      background-color: rgba(24, 24, 24, 0.9);
      .title {
        flex: 1;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
      }
      span {
        color: #ccc;
        font-size: 12px;
        cursor: pointer;
        :hover {
          text-decoration: underline;
          color: #fff;
        }
      }
      .collect {
        display: flex;
        margin-left: -130px;
        .collect-icon {
          width: 16px;
          height: 16px;
          margin-right: 4px;
          background-position: -93px -166px;
        }
      }
      .delete {
        display: flex;
        margin-left: 10px;
        margin-right: 70px;
        .delete-icon {
          width: 16px;
          height: 16px;
          margin-right: 4px;
          background-position: -51px 2px;
        }
      }
      .music-name {
        width: 346px;
        color: #fff;
        font-size: 14px;
        text-align: center;
      }
    }
`

export const PlayListContentLeft = styled.div`
  overflow-y: scroll;
  width: 553px;
  height: 260px;
  color: #666;
  font-size: 12px;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(21, 21, 21, 0.85);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #868686;
    border-radius: 3px;
  }
  .play-list {
    .play-list-item {
      display: flex;
      position: relative;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      &:hover {
        background-color: rgba(24, 24, 24, 0.9);
        color: #fff;
        .song-name {
          color: #fff;
        }
      }
      i {
        display: none;
        position: absolute;
        width: 10px;
        height: 13px;
        top: 8px;
        left: 12px;
        background-position: -182px 0;
      }
      .icon {
        display: block;
      }
      .song-name {
        width: 350px;
        color: #ccc;
        margin-left: 30px;
      }
      .artist {
        width: 80px;
      }
      .time {
        margin-left: 15px;
      }
    }
    .active {
      background-color: rgba(24, 24, 24, 0.9);
      .song-name {
          color: #fff;
      }
    }
    .close {
      position: absolute;
      top: 0;
      right: 35px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
  }
`

export const PlayListContentRight = styled.div`

`
