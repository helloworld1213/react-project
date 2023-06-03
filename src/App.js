import React, { memo } from 'react'
import '@/assets/css/index.less'
import routes from '@/router'
import { useRoutes } from 'react-router-dom'

const App = memo(() => {
  return (
    <div>
      <div className='header'>header</div>
      <div className="page">
        {/* 放置路由映射关系 */}
        {useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App
