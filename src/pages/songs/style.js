import styled from 'styled-components'


export const SongsWrapper = styled.div`
  display: flex;
  border: 1px solid #d3d3d3;
`

export const SongsLeft = styled.div`
  width: 719px;
  padding: 40px 30px 40px 39px;
  border-right: 1px solid #d3d3d3;
  .song-detail {
    display: flex;
    width: 640px;
    height: 507px;
    .left {
      position: relative;
      width: 206px;
      img {
        width: 130px;
        height: 130px;
        margin-left: 38px;
        margin-top: 38px;
        border-radius: 50%;
      }
      .img-cover {
        position: absolute;
        top: 0;
        width: 206px;
        height: 206px;
        background-position: -140px -580px;
      }
    }
  }
`

export const SongRight = styled.div`
  flex: 1;
`
