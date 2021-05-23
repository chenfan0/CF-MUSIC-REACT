import styled from 'styled-components'

export const ShowSongDetailWrapper = styled.div`
  flex: 1;
  .title {
    display: flex;
    height: 31px;
    .icon {
      width: 54px;
      height: 24px;
      margin-top: 7px;
      margin-right: 5px;
      background-position: 0 -463px;
    }
    .music-name {
      color: #333;
      font-size: 24px;
      font-weight: 400;
    }
  }
  .singer {
    margin: 18px 0;
    color: #999;
    font-size: 12px;
    .singer-name {
      color: #0c73c2;
      margin-left: 5px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .album {
    font-size: 12px;
    color: #999;
    a {
      color: #0c73c2;
      :hover {
        text-decoration: underline;
      }
    }
  }
  
`