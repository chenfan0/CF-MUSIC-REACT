import styled from 'styled-components'

export const RadioListWrapper = styled.div`
  .radio-list {
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 60px;
      .radio-list-item {
        display: flex;
        width: 48%;
        padding: 15px 0;
        border-bottom: 1px solid #e7e7e7;
        img {
          &:hover {
            cursor: pointer;
          }
        }
        .text {
          margin: 15px 0 0 10px;
          .name {
            color: #333;
            font-size: 18px;
            font-weight: 700;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
          .describe {
            margin-top: 20px;
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
`

