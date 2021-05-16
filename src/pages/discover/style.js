import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
`

export const DiscoverNav = styled.div`
  height: 35px;
  background-color: #C20C0C;
  line-height: 30px;
`

export const DiscoverMenu = styled.div`
  display: flex;
  padding-left: 122px;
  .menu-item {
    padding: 0 20px;
    cursor: pointer;
    a {
      color: #fff;
      padding: 0 10px;
      &:hover, &.active {
      background-color: #9b0909;
      border-radius: 10px;
    }
  }
    
}
`
