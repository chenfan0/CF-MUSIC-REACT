import styled from 'styled-components'

// 导入精灵图
import sprite_01 from '@/assets/img/sprite_01.png'


export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  font-size: 14px;
  .logo {
    width: 176px;
    height: 70px;
    background-position: 0 0;
}
  
  .m-nav-item {
    display: flex;
    position: relative;
    line-height: 70px;
    text-align: center;
    &:hover, a.active {
      background-color: #000;
      cursor: pointer;
    }
    a {
      padding: 0 20px;
      text-align: center;
      color: #fff;
    }
    a.active {
      .icon {
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%,0);
        width: 12px;
        height: 7px;
        background-position: -226px 0;
      }
    }
    &:last-of-type {
      &:after {
        display: block;
        position: absolute;
        top: 21px;
        left: 100px;
        content: '';
        width: 28px;
        height: 19px;
        background-image: url(${sprite_01});
        background-position: -192px 0;
      }
    }
}
  
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 20px;
    outline: none;
    input::placeholder {
      font-size: 12px;
    }
  }
  .creator {
    width: 90px;
    height: 30px;
    margin-left: 12px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      border: 1px solid #cccccc;
    }
  }
  .login {
    margin-left: 20px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
