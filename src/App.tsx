import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from '@/router'
import { message } from 'antd'

function ToLogin() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/login')
    message.warning("您还没有登录，请登录后访问！")
  }, [])
  return <></>
}
function ToHome() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/page1')
  }, [])
  return <></>
}
function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  const location = useLocation()
  const token = localStorage.getItem("react-management-token")
  if (location.pathname === "/login" && token) {
    return <ToHome />
  }
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />
  }
  return outlet
}
function App() {
  return (
    <div className="App">
      <BeforeRouterEnter />
    </div>
  )
}

export default App
