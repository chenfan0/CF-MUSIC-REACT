import styled from 'styled-components'

export const ArtistCategory = styled.div`
  width: 180px;
  padding: 40px 10px 0 10px;
  border-right: 1px solid #d3d3d3;
  border-left: 1px solid #d3d3d3;
  background-color: #f9f9f9;

  .category-item {
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #d3d3d3;
    &:last-of-type {
      border-bottom: none;
    }
    .title {
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }

  p {
    height: 29px;
    padding-left: 8px;
    line-height: 29px;
    font-size: 12px;
    color: #333;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      &::before {
         border: 2px solid #c20c0c;
      }
    }
    &::before {
      display: inline-block;
      margin: 0 5px 3px 0;
      border: 2px solid #afafaf;
      content: '';
      :hover {

      }
    }
  }
}

.active {
  border: 1px solid #e2e2e2;
  color: #c20c0c!important;
  &::before {
    border-color: #c20c0c!important;
  }
}
`

