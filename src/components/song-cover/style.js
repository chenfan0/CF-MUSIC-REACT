import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 203px;
  margin-bottom: 30px;
  .image {
    width: 140px;
    height: 140px;
  }
  .img-cover {
    position: absolute;
    top: 0;
    width: 140px;
    height: 140px;
    background-position: 0 0;
    .bottom {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      width: 140px;
      height: 27px;
      color: #ccc;
      background-position: 0 -537px;
      .left {
        display: flex;
        line-height: 27px;
        .listen-count {
          font-size: 7px;
        }
        .icon1 {
          width: 14px;
          height: 11px;
          margin: 8px 5px 0;
          background-position: 0 -24px;
        }
      }
      .icon2 {
        width: 16px;
        height: 17px;
        margin: 5px 8px 0;
        background-position: 0 0;
      }
    }
  }
  .content {
    width: 140px;
    height: 38px;
    font-size: 14px;
  }
`

