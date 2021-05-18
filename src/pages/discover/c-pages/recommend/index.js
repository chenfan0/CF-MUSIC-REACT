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
        <ContentRight />
      </Content>
    </Recommend>
  )
}

export default memo(CFRecommend)
