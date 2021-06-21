import styled from 'styled-components'

export const TotalWrapper = styled.div`
  .header {
    display: flex;
    height: 42px;
    margin-bottom: 20px;
    border-bottom: 2px solid #c20c0c;
    .title {
      font-size: 24px;
      color: #333;
      margin-right: 20px;
    }
  }
  .type {
    display: flex;
    margin-top: 14px;
    span {
      height: 15px;
      padding: 0 7px 0 7px;
      border-right: 1px solid #c7c7c7;
      font-size: 12px;
      color: #666;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    & span:last-of-type {
      border-right: none;
    }
  }

  .newAlbums {
    display: flex;
    flex-wrap: wrap;
    .album-item {
      width: 20%;
      margin-bottom: 20px;
    }
  }
`

