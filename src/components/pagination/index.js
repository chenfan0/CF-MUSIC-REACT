import React, { memo } from 'react'

import { PaginationWrapper } from './style'
import { Pagination } from 'antd';

export default memo(function CFPagination(props) {
  // props
  const { total, onChange, currentPage, pageSize } = props

  // other handle
  function itemRender(page, type, originalElement) {
    if (type === 'prev') {
      return (
        <button className='btn'> &lt; 上一页</button>
      )
    }
    if (type === 'next') {
      return (
        <button className='btn'>下一页 &gt;</button>
      )
    }
    return originalElement

  }

  return (
    <PaginationWrapper>
      <Pagination className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onChange} />
    </PaginationWrapper>
  )
})


