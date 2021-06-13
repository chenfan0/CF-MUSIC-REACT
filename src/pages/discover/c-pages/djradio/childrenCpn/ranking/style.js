import styled from 'styled-components'

export const RankingWrapper = styled.div`
  .ranking-item {
    display: flex;
    position: relative;
    height: 60px;
    padding: 10px 20px;
    border-left: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    &:nth-of-type(2n-1) {
      background-color: #f7f7f7;
    }
    &:hover {
      background-color: #eeeeee;
      .icon {
        display: block;
      }
    }

    .rank {
      margin-right: 18px;
      line-height: 40px;
    }

    .icon {
      display: none;
      position: absolute;
      top: 19px;
      left: 55px;
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
    }

    img {
      width: 40px;
      height: 40px;
      &:hover {
        cursor: pointer;
      }
    }

    .descripe {
      width: 254px;
      font-size: 12px;
      margin-left: 8px;
      margin-right: 15px;
      p {
        color: #333;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      span {
        display: block;
        color: #999;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`

