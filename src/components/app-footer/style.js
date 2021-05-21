import styled from 'styled-components'

import policeLogo from '@/assets/img/police.png'

export const FooterWrapper = styled.div`
  height: 173px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  .center {
    display: flex;
    height: 115px;
    padding: 20px;
  }
`
export const FooterLeft = styled.div`
  height: 115px;
  color: #666;
  font-size: 12px;
  a {
      &:hover {
        text-decoration: underline;
      }
    }
  .link {
    width: 520px;
    height: 24px;
    .link-item {
    padding: 0 8px;
    color: #999;
    border-right: 1px solid #999;
    &:hover {
      text-decoration: underline;
    }
  }
}

  .second {
    padding: 3px 8px;
    span {
      &:first-child {
        margin: 0 14px 0 0;
      }
    } 
}

  .third {
    padding: 3px 8px;
  }
  .last {
    padding: 3px 8px;
    a {
      &:first-child {
        margin-right: 8px;
      }
    }
    .police {
      &::before {
        display: inline-block;
        content: '';
        width: 14px;
        height: 14px;
        background: url(${policeLogo});
        background-size: 100% 100%;
        vertical-align: sub;
      }
    }
  }
 
`

export const FooterRight = styled.div`
  display: flex;
  width: 420px;
  height: 70px;
  margin-top: 33px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    height: 70px;
    margin: 0 18px;
    a {
      width: 50px;
      height: 45px;
    }
    span {
      width: 72px;
      height: 14px;
      margin-left: 5px;
    }
  }
  .first {
    .f-logo {
      background-position: -60px -456px;
    }
    span {
      background-position: 0px -104px;
    }
  }

  .second {
    .s-logo {
      background-position: -60px -101px;
    }
    span {
      margin-left: 22px;
      background-position: 0px -87px;
    }
  }

  .third {
    .t-logo {
      background-position: 0 0;
    }
    span {
      margin-top: 4px;
      margin-left: 22px;
      background-position: 0 0;
    }
  }

  .four {
    .four-logo {
      background-position: -60px -50px;
    }
    span {
      margin-top: 4px;
      margin-left: 22px;
      background-position: 0 -54px;
    }
  }

  .last {
    .l-logo {
      background-position: 0 -101px;
    }
    span {
      margin-top: 4px;
      margin-left: 22px;
      background-position: -1px -72px;
    }
  }
`
