import Login from './pages/login'
import Index from './pages/index'
import Demo from './pages/demo'
import Hook from './pages/hook'
import Group from './pages/group'
import NotMatch from './pages/404'

export const routerConfig = [
  {
    title: '首页',
    path: '/',
    component: Index,
    auth: true,
  },
  {
    title: 'demo',
    path: '/demo',
    component: Demo,
    auth: true,
    subMenu: 'settings',
  },
  {
    title: 'hook',
    path: '/hook',
    component: Hook,
    auth: true,
    subMenu: 'settings',
  },
  {
    title: 'group',
    path: '/group',
    component: Group,
    auth: true,
    subMenu: 'settings',
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