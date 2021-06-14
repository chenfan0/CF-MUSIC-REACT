import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  .top-ranking {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
    .top-ranking-item {
      display: flex;
      width: 48%;
      border-bottom: 1px solid #e7e7e7;
      padding: 15px 0;

      img {
        &:hover {
          cursor: pointer;
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        margin-left: 18px;
        .name {
          flex: 1;
          margin-top: 10px;
          color: #333;
          font-size: 18px;
          font-weight: 700;
          &:hover {
                cursor: pointer;
                text-decoration: underline;
          }
        }

        .detail {
          flex: 1;
          .singer {
            margin-top: 5px;
            font-size: 12px;
            color: #333;

            .icon {
              display: inline-block;
              width: 15px;
              height: 15px;
              margin-right: 8px;
              vertical-align: middle;
              background-position: -50px -300px;
            }

            .nickname {
              &:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
        }

        .others {
          margin-top: 5px;
          font-size: 12px;
          color: #999;
          .programCount{
            margin-right: 10px;
          }
        }
      }
    }
  }
}
.pagination {
    display: flex;
    justify-content: center;
}
`

