import React, { memo } from 'react'

import {
  Content,
  Recommend,
  ContentLeft,
  ContentRight
} from './style'
import CFTopBanner from './childrenCpns/topBanner'
import CFHotRecommend from './childrenCpns/hotRecomment'
import CFNewAlbum from './childrenCpns/newAlbum'
import CFRanking from './childrenCpns/ranking'
import CFLogin from './childrenCpns/login'
import CFEnterSinger from './childrenCpns/enter-singer'
import CFHotRadio from './childrenCpns/hot-radio'

function CFRecommend() {
  return (
    <Recommend>
      <CFTopBanner />
      <Content className='wrap-v2'>
        <ContentLeft>
          <CFHotRecommend />
          <CFNewAlbum />
          <CFRanking />
        </ContentLeft>
        <ContentRight>
          <CFLogin />
          <CFEnterSinger />
          <CFHotRadio />
        </ContentRight>
      </Content>
    </Recommend>
  )
}

export default memo(CFRecommend)
