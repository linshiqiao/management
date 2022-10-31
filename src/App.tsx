import { useState } from 'react'
import { Button } from 'antd';
import React from 'react';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { UpCircleOutlined } from '@ant-design/icons';
import { Link, Outlet, useRoutes } from 'react-router-dom';
import router from './router';

function App() {
  const [count, setCount] = useState(0)
  //   要用对象的形式引用需要用useRoutes
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      |
      <Link to="/about">About</Link>
      |
      <Link to="/user">User</Link> */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
