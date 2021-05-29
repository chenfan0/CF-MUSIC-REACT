import styled from 'styled-components'

export const ShowLyricWrapper = styled.div`
  position: relative;
  width: 414px;
  margin-top: 30px;
  border: 1px solid #f5f5f5;
  .lyric {
    overflow: hidden;
    height: 210px;
    margin-bottom: 25px;
  }
  p {
    margin-top: 3px;
    font-size: 12px;
    color: #333; 
  }
  .show-more {
    position: absolute;
    bottom: 1px;
    :hover {
      cursor: pointer;
    }
    span {
      color: #0c73c2;
      :hover {
        text-decoration: underline;
      }
    }
    .icon {
      display: inline-block;
      width: 11px;
      height: 8px;
      background-position: ${props => !props.isHidden ? ('-65px -520px') : ('-45px -520px')};
    }
  }
`

