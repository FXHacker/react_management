import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'; // 样式初始化
// UI框架的样式

// 全局样式
import '@/assets/styles/global.scss' // @ 绝对路径代表src
// 组件的样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'

//状态管理
import { Provider } from 'react-redux'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
