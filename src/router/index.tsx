// import About from '@/Views/About'
// import User from '@/Views/User'

import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../Views/Home'
const About = lazy(() => import('@/Views/About'))
const User = lazy(() => import('@/Views/User'))
const Page1 = lazy(() => import('@/Views/Page1'))
const Page2 =  lazy(() => import('@/Views/Page2'))
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>
    {comp}
  </React.Suspense>
)
const routes = [
  // 嵌套路由 开始------------
  {
    path: "/",
    element: <Navigate to="/page1" />
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        //懒加载模式需要外面套一层Loading的提示加载组件
        element: withLoadingComponent(<Page1 />)
      },
      {
        path: "/page2",
        //懒加载模式需要外面套一层Loading的提示加载组件
        element: withLoadingComponent(<Page2 />)
      }
    ]
  }
  // {
  //   path: "/home",
  //   element: <Home />
  // },
  // {
  //   path: "/about",
  //   element: withLoadingComponent(<About />)
  // },
  // {
  //   path: "/user",
  //   //懒加载模式需要外面套一层Loading的提示加载组件
  //   element: withLoadingComponent(<User />)
  // }
]

export default routes
