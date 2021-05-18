import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
 
`

export const NewAlbumRoller = styled.div`
  position: relative;
  overflow: hidden;
  width: 687px;
  height: 186px;
  margin-top: 30px;
  background-color: #f5f5f5;
  font-size: 12px;
    .roller-list-wrapper {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translate(0, -40%);
      overflow: hidden;
      width: 645px;
      height: 150px;
      /* background-color: red; */
      .roller-list {
        display: flex;
        position: absolute;
        /* transition: all 0.8s; */
        /* width: 645px; */
        height: 180px;
          div {
          height: 150px;
          background-position: -250px 100px;
          .cover {
            width: 118px;
            height: 100px;
            margin-left: 11px;
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
