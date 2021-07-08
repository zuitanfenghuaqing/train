import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('../page/home.js')),
    isExact: true,
    meta:{
      title: '首页'
    }
  }
]