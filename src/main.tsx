import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入
//样式初始化,一般放在最前
import "reset-css"
import App from './App'
//UI框架的样式

//全局样式
import "@/assets/styles/global.scss"
import Router from './router'
import { BrowserRouter } from 'react-router-dom'

//组件的样式

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router /> */}
    {/* 要用对象的形式引用需要加BrowserRouter*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
