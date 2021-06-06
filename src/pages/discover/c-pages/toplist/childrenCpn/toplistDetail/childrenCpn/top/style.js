import styled from 'styled-components'

export const ToplistDetailTopWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  .left {
    position: relative;
    width: 158px;
    height: 158px;
    margin-right: 30px;
    border: 1px solid #8ab2e2;
    padding: 3px;
    .cover {
      position: absolute;
      width: 150px;
      height: 150px;
      background-position: -230px -380px;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }

  .title {
    margin-top: 10px;
    font-size: 20px;
    color: #333;
  }

  .info {
    margin-top: 10px;
    margin-bottom: 20px;
    .icon {
      display: inline-block;
      width: 13px;
      height: 13px;
      margin-right: 5px;
      background-position: -18px -682px;
    }
    span {
      font-size: 12px;
      color: #666;
    }
  }
`
