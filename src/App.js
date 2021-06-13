// 导入第三方库区域
import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

// 导入其他功能区域
import routes from './router'
import store from './store'

// 导入组件区域
import CFAppHeader from '@/components/app-header'
import CFAppFooter from '@/components/app-footer'
import CFPlayer from '@/pages/songs/player'

export default memo(function APP() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <CFAppHeader />
        {/* 当路由用懒加载方式进行导入时，要用Suspense进行占位，该标签是当页面还没渲染出来时会渲染fallback里的东西*/}
        <Suspense fallback={<div>page loadding</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <CFAppFooter />
        <CFPlayer />
      </BrowserRouter>
    </Provider>
  )
})

