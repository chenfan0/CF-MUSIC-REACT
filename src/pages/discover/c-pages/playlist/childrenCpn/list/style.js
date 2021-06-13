import styled from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  .cover {
    margin-right: 40px;
    &:nth-of-type(5n) {
      margin-right: 0;
    }
  }
`

