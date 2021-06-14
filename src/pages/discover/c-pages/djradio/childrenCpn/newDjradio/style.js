import styled from 'styled-components'

export const NewDjradioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  .new-radio-item {
    margin-top: 15px;
    img {
      &:hover {
        cursor: pointer;
      }
    }
    .name {
      width: 150px;
      margin-top: 8px;
      font-size: 14px;
      color: #333;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .text {
      width: 150px;
      font-size: 12px;
      color: #999;
    }
  }
`


