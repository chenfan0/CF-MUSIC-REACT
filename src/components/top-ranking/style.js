import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 230px;
  height: 472px;
  padding: 20px 0 0 19px;
  header {
    width: 230px;
    height: 120px;
    .top {
      display: flex;
      position: relative;
      .cover {
        position: absolute;
        width: 80px;
        height: 80px;
        background-position: -145px -57px;
      }
      .top-img {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
      }
      .top-name {
        margin-top: 5px;
        margin-left: 5px;
        font-size: 14px;
        font-weight: 700;
      }
      .icon {
        display: flex;
        position: absolute;
        top: 35px;
        left: 85px;
        justify-content: space-around;
        .play {
          width: 22px;
          height: 20px;
          margin-right: 5px;
          background-position: -267px -268px;
        }
        .collect {
          width: 22px;
          height: 22px;
          background-position: -297px -268px;
        }
      }
    }
    .content {
      .rank-list {
        display: flex;
        position: relative;
        height: 32px;
        font-size: 12px;
        line-height: 32px;
        &:hover{
          .music-name {
            text-decoration: underline;
            width: 85px;
          }
          .icon {
            a {
              display: block;
            }
          }
        }
        .music-name {
          width: 170px;
        }
        .icon {
            position: absolute;
            display: flex;
            justify-content: space-around;
            left: 120px;
            width: 82px;
            height: 19px;
            margin-top: 5px;
            a {
              display: none;
              width: 17px;
              height: 17px;
            }
            .play {
              background-position: -267px -268px;
            }
            .add {
              margin-top: 2px;
              background-position: 0 -700px;
            }
            .collect {
              background-position: -297px -268px;
            }
          }
        span {
          width: 35px;
          text-align: center;
          font-size: 16px;
        }
        .no0, .no1, .no2 {
          color: #c10d0c;
        }
    }
  }
    .get-more {
      margin-top: 5px;
      a {
        margin-left: 120px;
        color: #000;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
