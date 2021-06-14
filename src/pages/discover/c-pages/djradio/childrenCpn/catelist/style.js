import styled from 'styled-components'

export const CatelistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 25px;
  .select {
    color: #db5e5e;
    border: 2px solid #db5e5e;
    border-radius: 4px;
    .icon {
      background-position: -48px 0!important;
    }
  }
`

export const CatelistItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin: 0 15px 25px 15px;
  font-size: 12px;
  color: #888;
  &:hover {
    cursor: pointer;
    background-color: #f6f7f7;
  }
  .icon {
    width: 48px;
    height: 48px;
    margin: 0 auto;
    background: url(${props => props.url});
  }
  .content {
    text-align: center;
  }
`

