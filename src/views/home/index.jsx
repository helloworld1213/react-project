import React, { memo, useEffect } from 'react'
import instanceRequest from '@/services/index'

const Home = memo(() => {
  useEffect(() => {
    instanceRequest.get({url: '/home/highscore'}).then(res => {
      // console.log(res)
    })
  })
  return (
    <div>Home page</div>
  )
})

export default Home