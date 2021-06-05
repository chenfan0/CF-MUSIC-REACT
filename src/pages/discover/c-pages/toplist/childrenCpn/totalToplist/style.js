import styled from 'styled-components'

export const TotalToplistWrapper = styled.div`
  width: 240px;
  padding-top: 40px;
  /* padding-left: 10px; */
  background-color: #f9f9f9;
  border-left: 1px solid #d3d3d3;
  h2 {
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 700;
  }
  .active {
    background-color: #e6e6e6;
  }
`

export const CloundList = styled.div`
  .toplist-item {
    display: flex;
    height: 62px;
    padding: 10px 0 0 15px ;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
    .list-name {
      font-size: 12px;

    }
    .update-time {
      font-size: 12px;
      color: #999;
    }
    &:hover {
      background-color: #f4f2f2;
    }
  }
`

export const GlobalList = styled.div`
  margin-top: 20px;
 .toplist-item {
    display: flex;
    height: 62px;
    padding: 10px 0 0 15px ;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
    .list-name {
      font-size: 12px;

    }
    .update-time {
      font-size: 12px;
      color: #999;
    }
    &:hover {
      background-color: #f4f2f2;
    }
  }
`