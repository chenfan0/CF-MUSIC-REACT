import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 8px;
  font-size: 12px;
  color: #333;

  h2 {
    font-size: 24px;
    color: #333;
    margin-right: 10px;
  }

  .select {
    display: flex;
    position: relative;
    height: 31px;
    margin-top: 3px;
    line-height: 31px;
    .select-left {
      width: 86px;
      height: 31px;
      background-position: 0 -59px;
      cursor: pointer;
      text-align: center;
      span {
        color: #0c73c2;
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
      cursor: pointer;
    }

    .menu {
      display: none;
      position: absolute;
      top: 50px;
      left: -58px;
      width: 720px;
      border: 1px solid #bebebe;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: -3px 2px 5px rgba(0,0,0,0.3);
      z-index: 9999;
      .icon {
        position: absolute;
        top: -11px;
        left: 88px;
        width: 24px;
        height: 11px;
        background-position: -48px 0;
      }
      .total {
        height: 60px;
        border-bottom: 1px solid #e6e6e6;
        padding-left: 25px;
        padding-top: 20px;
        p {
          width: 75px;
          height: 26px;
          border: 1px solid #bebebe;
          line-height: 26px;
          text-align: center;
          background-color: #fbfbfb;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }

      .category {
          display: flex;
          .category-left {
            width: 80px;
            padding-left: 25px;
            font-weight: 700;
          }
          .divider {
            border: 1px solid #e6e6e6;
          }
          .category-right {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            span {
              padding: 0 8px;
              border-right: 1px solid #e6e6e6;
              &:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
          }
      }
    }
  }
`

