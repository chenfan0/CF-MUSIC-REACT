import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  width: 100%;
  .btn {
    height: 25px;
    /* margin-right: 8px; */
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    line-height: 25px;
    &:hover {
      border: 1px solid #ccc;
    }
  }

  .btn[disabled] {
    color: #999999;
  }

  .ant-pagination-item {
    font-size: 12px;
    margin-right: 8px!important;
    border: 1px solid #ccc;
    border-color: #ccc!important;
    a {
      color: #000;
    }
  }

  .ant-pagination-item-1 {
    margin-left: 8px!important;
  }

  .ant-pagination-item-active {
    background-color: #cb1213;
    a {
      color: #fff;
      font-weight: 400;
    }
  }

`

