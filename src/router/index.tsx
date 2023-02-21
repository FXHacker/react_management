import React, { Children, lazy } from 'react'
// 登录
import Login from '../views/Login'
import Home from '../views/Home' // 首页展示home 所以没必要懒加载
// 懒加载组件
const Page1 = lazy(() => import("../views/Page1"))
const Page1301 = lazy(() => import("../views/Page1301"))

const Page2 = lazy(() => import("../views/Page2"))

const User = lazy(() => import("../views/User"))
const About = lazy(() => import("../views/About"))

// Navigate重定向组件
import { Navigate } from 'react-router-dom'

const withLoadingComponent = (component: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {component}
    </React.Suspense>
)

const routes = [
    {
        path: "/login",
        element: withLoadingComponent(<Login />)
    },
    {
        path: "/",
        element: <Navigate to="/page1" />
    }, {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />),
            }, {
                path: "/page2",
                element: withLoadingComponent(<Page2 />),
            }, {
                path: "/page3/page301",
                element: withLoadingComponent(<Page1301 />),
            }
        ]
    },
    // 嵌套路由结束
    {
        path: "/user",
        element: withLoadingComponent(<User />)
    }, {
        path: "/about",
        element: withLoadingComponent(<About />)
    },
    // 访问其他路由跳转到首页，可以设置为404
    {
        path: "*",
        element: <Navigate to="/page1" />
    }
]

export default routes