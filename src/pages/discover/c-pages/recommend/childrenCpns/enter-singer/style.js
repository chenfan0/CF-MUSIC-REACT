import styled from 'styled-components'

export const EnterSingerWrapper = styled.div`
  width: 250px;
  height: 455px;
  border: 1px solid #d4d4d4;
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
  .apply {
    display: block;
    width: 205px;
    height: 32px;
    margin: 0 auto;
    color: #333;
    background-position: right -223px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    line-height: 32px;
    text-align: center;
    :hover{
      background: none;
    }
  }
`

export const EnterSingerList = styled.div`
   margin: 20px 0;
  .enter-singer-item {
    display: flex;
    width: 210px;
    height: 62px;
    margin: 10px auto;
    background-color: #fafafa;
    border: 1px solid #d4d4d4;
    cursor: pointer;
    :hover {
      background-color: #f4f4f4;
    }
    .singer-img {
      width: 62px;
      height: 62px;
    }
    .singer-content {
      .singer-name {
        margin: 10px 0 3px 10px;
        color: #333;
        font-size: 14px;
        font-weight: 700;
      }
      .singer-introduce {
        margin-left: 10px;
        color: #666;
        font-size: 12px;
      }
    }
  }
  
`

