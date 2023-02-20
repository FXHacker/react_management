import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css' // 样式初始化
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
