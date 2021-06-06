import styled from 'styled-components'

export const BtnsWrapper = styled.div`
  display: flex;
  line-height: 31px;
  font-size: 12px;
  span {
        margin-left: 27px;
      }
  .play {
    display: flex;
    overflow: hidden;
    width: 92px;
    height: 31px;
    border-radius: 5px;
    cursor: pointer;
    .play-left {
      width: 61px;
      background-position: -8px -718px;
      color: #fff;
      
    }
    .play-right {
      width: 31px;
      background-position: 0 -1587px;
    }
  }
  .btns {
    display: flex;
    width: 59px;
    height: 31px;
    margin-left: 5px;
    cursor: pointer;
    .btns-left {
      width: 54px;     
      background-position: 0 -1225px;
    }
    .btns-right {
      width: 5px;
      background-position: right -1020px;
    }

    .collect-left {
      background-position: 0 -977px;
    }

    .download-left {
      background-position: 0 -2761px;
    }

    .comment-left {
      background-position: 0 -1465px;
    }

  }
`

