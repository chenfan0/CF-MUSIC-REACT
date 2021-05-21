import React, { memo } from 'react'


import {
  SongsWrapper,
  SongsLeft,
  SongRight
} from './style'

export default memo(function CFSongs(props) {
  const id = props.location.search.slice(4)
  return (
    <SongsWrapper className='wrap-v2'>
      <SongsLeft></SongsLeft>
      <SongRight></SongRight>
    </SongsWrapper>
  )
})
