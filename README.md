# react_management
Vite + React + TS后台管理系统模版
# 一.创建项目并运行
npm init vite

Project name: 项目名称
Select a framwork: react
Select a variant: react-ts
打开package.json,参考以下各模块版本:

"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^7.2.8",
    "react-router-dom": "^6.3.0",
    "redux": "^4.1.2"
},
运行npm i

# 二.样式目录初始化
npm i reset-css -S

在main.tsx第三行引入 import 'reset-css' // 样式初始化  Ant Design默认引入了 reset-css

import 'antd/dist/reset.css'; // 样式初始化

# 三.sass安装和使用
npm i sass -D

在src/assets新建文件夹styles，新建文件global.scss文件

# 四.路径别名的配置和提示
import path from 'path'
在 vite.config.ts中
resolve:{
    alias: {
      "@": path.resolve(__dirname, '/src')
    }
  }

npm i -D @types/node 安装nodets环境

需要在tsconfig.json中：添加配置

"compilerOptions": {
    ...
    "baseUrl": "./",
    "paths": {
        "@/*": [
            "src/*"
        ]
    }
}

# 五.Antd Design初步引入
安装Antd Design
npm i antd -S
安装Antd Design图标库
npm i -S @ant-design/icons