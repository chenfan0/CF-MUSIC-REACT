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

function CFRecommend() {
  return (
    <Recommend>
      <CFTopBanner />
      <Content className='wrap-v2'>
        <ContentLeft>
          <CFHotRecommend />
          <CFNewAlbum></CFNewAlbum>
        </ContentLeft>
        <ContentRight />
      </Content>
    </Recommend>
  )
}

export default memo(CFRecommend)
