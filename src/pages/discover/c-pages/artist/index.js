import React, { memo } from 'react'

import { ArtistWrapper } from './style'
import CFArtistCategory from './childrenCpn/artistCategory'
import CFArtistDetail from './childrenCpn/artistDetail'

export default memo(function CFArtist() {
  return (
    <ArtistWrapper className='wrap-v2'>
      <CFArtistCategory />
      <CFArtistDetail />
    </ArtistWrapper>
  )
})


