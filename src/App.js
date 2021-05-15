// 导入第三方库区域
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

// 导入其他功能区域
import routes from './router'

// 导入组件区域
import CFAppHeader from '@/components/app-header'
import CFAppFooter from '@/components/app-footer'

export default memo(function APP() {
  return (
    <BrowserRouter>
      <CFAppHeader />
      {renderRoutes(routes)}
      <CFAppFooter />
    </BrowserRouter>
  )
})

