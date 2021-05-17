import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
 
`

export const NewAlbumRoller = styled.div`
  position: relative;
  width: 687px;
  height: 186px;
  margin-top: 30px;
  background-color: #f5f5f5;
  font-size: 12px;
  .roller-list {
    display: flex;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 25px;
    right: 30px;
    transform: translate(0, -40%);
    width: 645px;
    height: 180px;
    div {
      height: 150px;
      background-position: -260px 100px;
      .cover {
        width: 118px;
        height: 100px;
        margin-right: 12px;
        background-position: 0 -570px;
        .image-cover {
          position: absolute;
          width: 100px;
          height: 100px;
          background-position: -10px -45px;
        }
        .img {
          width: 100px;
          height: 100px;
          background-color: blue;
        }
        .music-name {
          margin-top: 5px;
        }
        .artist-name {
          color: #666;
        }
      }  
    }
  }
  .left-control, .right-control {
    position: absolute;
    top: 50%;
    transform: translate(0 , -50%);
    width: 17px;
    height: 17px;
    &:hover {
      height: 20px;
      cursor: pointer;
    }
  }
  .left-control {
    left: 3px;
    background-position: -260px -75px;
  }
  .right-control {
    right: 3px;
    background-position: -300px -75px;
  }
`
