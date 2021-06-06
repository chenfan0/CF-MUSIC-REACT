import React, { memo } from 'react'

import { TopListWrapper } from './style'
import CFTotalToplist from './childrenCpn/totalToplist'
import CFToplistDetail from './childrenCpn/toplistDetail'

export default memo(function CFToplist(props) {
  // props and state

  // other handler
  const id = props.location.search.slice(4)

  return (
    <TopListWrapper className='wrap-v2'>
      <CFTotalToplist id={id} />
      <CFToplistDetail id={id} />
    </TopListWrapper>
  )
})
