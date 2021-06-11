import React, { memo } from 'react'


import { PlaylistWrapper } from './style'
import CFPlaylistHeader from './childrenCpn/header'

export default memo(function CFPlaylist() {
  return (
    <PlaylistWrapper className='wrap-v1'>
      <CFPlaylistHeader />
    </PlaylistWrapper>
  )
})
