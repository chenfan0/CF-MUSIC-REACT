import styled from 'styled-components'

export const ArtistDetailWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #fff;

  .artist-item {
    position: relative;
    width: 20%;
    margin-bottom: 25px;

    .cover {
      position: absolute;
      top: 0;
      width: 130px;
      height: 130px;
      background-position: 0 -680px;
      &:hover {
        cursor: pointer;
      }
    }

    img {
      width: 130px;
      height: 130px;
      
    }

    .name {
      padding-top: 5px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`

