import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 426px;
  border-bottom: 2px solid #c20c0c;

  .title {
    font-size: 24px;
    color: #333;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .more {
    font-size: 12px;
    color: #666;
    line-height: 40px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

