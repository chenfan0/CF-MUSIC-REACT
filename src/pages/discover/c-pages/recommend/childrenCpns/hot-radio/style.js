import styled from 'styled-components'

export const HotRadioWrapper = styled.div`
  margin-top: 30px;
   .header {
    display: flex;
    width: 210px;
    height: 24px;
    margin: 10px auto;
    /* line-height: 24px; */
    border-bottom: 1px solid #d4d4d4;
    h2 {
      flex: 1;
      font-size: 12px;
      font-weight: 700;
    }
    a {
      flex: 1;
      text-align: right;
      font-size: 12px;
    }
  }
`

export const HotRadioList = styled.div`
  margin-top: 20px;
  .hot-radio-list-item {
    display: flex;
    width: 210px;
    height: 50px;
    margin: 3px auto;
    .radio-img {
      width: 40px;
      height: 40px;
  }
  .radio-introduce {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 12px;
    .radio-name {
      color: #333;
    }
    .radio-position {
      width: 120px;
      margin-top: 3px;
      color: #666;
    }
  }
}

`

