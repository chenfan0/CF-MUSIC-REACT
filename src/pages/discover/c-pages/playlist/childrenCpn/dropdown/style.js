import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 8px;
  .select {
    display: flex;
    width: 91px;
    height: 31px;
    line-height: 31px;
    cursor: pointer;
    .select-left {
      width: 86px;
      height: 31px;
      background-position: 0 -59px;
      text-align: center;
      span {
        color: #0c73c2;
        font-size: 12px;
      }
      .icon {
        display: inline-block;
        width: 8px;
        height: 5px;
        margin-left: 5px;
        margin-bottom: 2px;
        background-position: -70px -543px;
      }
    }
    .select-right {
      width: 5px;
      height: 31px;
      background-position: right -1020px;
    }
  }
  /* .ant-dropdown-open {
    width: 720px;
    height: 392px;
  } */
`

