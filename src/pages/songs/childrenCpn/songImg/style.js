import styled from 'styled-components'

export const SongImgWrapper = styled.div`
  margin-right: 20px;
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
        .outer-play {
          display: flex;
          margin-top: 50px;
          margin-left: 50px;
          .icon {
            display: block;
            width: 16px;
            height: 16px;
            margin-top: 1px;
            background-position: -34px -863px;
          }
          .link {
            color: #0c73c2;
            font-size: 12px;
            text-decoration: underline;
          }
        }
      }
`
