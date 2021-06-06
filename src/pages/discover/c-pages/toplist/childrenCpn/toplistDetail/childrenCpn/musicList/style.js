import styled from 'styled-components'

export const PlaylistWrapper = styled.div`
  .info {
    display: flex;
    justify-content: space-between;
    height: 33px;
    line-height: 33px;
    border-bottom: 2px solid #c20c0c;
    .info-left {
      display: flex;
      .title {
        font-size: 20px;
        color: #333;
        line-height: 26px;
      }
      span {
        margin-left: 25px;
        font-size: 12px;
        color: #666;
      }
    }

    .info-right {
      font-size: 12px;
      color: #666;
      span {
      color: #c20c0c;
      font-weight: 700;
    }
    }
    
  }

  .music-list {
    width: 670px;
    border: 1px solid #eeeeee;
    font-size: 12px;
      color: #666;
    .head {
      display: flex;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px solid #cccccc;
      background-color: #fbfbfb;
    }
    .rank {
        width: 77px;
        border-right: 1px solid #dddddd;
        text-align: center;
      }
      .title {
        width: 326px;
        padding-left: 8px;
      }
      .time {
        width: 91px;
        padding-left: 8px;
        border-right: 1px solid #dddddd;
        border-left: 1px solid #dddddd;
      }
      .singer {
        padding-left: 8px;
      }

    .content {
      width: 670px;
      .music-list-item {
        display: flex;
        height: 31px;
        line-height: 31px;
        &:hover {
          .time {
            span {
              display: none;
            }
            .icons {
              display: block;
            }
          }
        }
        .title {
          position: relative;
          padding-left: 40px;
          .icon {
            position: absolute;
            top: 7px;
            left: 11px;
            width: 17px;
            height: 17px;
            margin-right: 8px;
            background-position: 0 -103px;
            &:hover {
              cursor: pointer;
              background-position: 0 -128px;
            }
          }
          a {
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }

        .time {
          position: relative;
          .icons {
            display: none;
            position: absolute;
            i {
              display: inline-block;
              width: 18px;
              height: 14px;
              margin-right: 3px;
              cursor: pointer;
            }
            .add {
              width: 13px;
              height: 14px;
              background-position: 0 -700px;
            }
            .collect {
              background-position: 0 -174px;
            }
            .share {
              background-position: 0 -195px;
            }
            .download {
              background-position: -81px -174px;
            }
          }
        }

        .singer {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
      .odd {
        background-color: #f7f7f7;
      }
    }
  }
`

