import styled from 'styled-components'

export const RecommendHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 689px;
  height: 35px;
  margin-bottom: 20px;
  border-bottom: 2px solid #C10D0C;
`

export const RecommendHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .icon {
    width: 34px;
    height: 34px;
    background-position: -225px -152px;
  }
  .title {
    font-size: 20px;
    color: #333;
  }
  .list {
    display: flex;
    width: 236px;
    height: 17px;
    margin-top: 3px;
    line-height: 17px;
    text-align: center;
    .list-item {
      flex: 1;
      border-right: 1px solid #ccc;
      font-size: 12px;
      &:last-child {
        border-right: none;
      }
    }
  }
`

export const RecommendHeaderRight = styled.div`
  display: flex;
  justify-content: center;
  line-height: 25px;
  .get-more {
    margin-top: 3px;
    font-size: 12px;
  }
  .icon {
    width: 12px;
    height: 12px;
    margin-top: 12px;
    background-position: 0 -240px;
  }
`
