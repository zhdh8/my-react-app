import Login from './pages/login'
import Index from './pages/index'
import Demo from './pages/demo'
import NotMatch from './pages/404'

export const routerConfig = [
  {
    title: '首页',
    path: '/',
    component: Index,
  },
  {
    title: 'demo',
    path: '/demo',
    component: Demo,
    auth: true,
  },
  {
    title: '登录',
    path: '/login',
    component: Login,
  },
  {
    title: '404',
    path: '/404',
    component: NotMatch,
  }
]