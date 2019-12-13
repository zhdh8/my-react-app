import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Common from '../../components/Common'
import Admin from '../../pages/admin'

export default class FrontendAuth extends React.Component {

  render () {
    const isLogin = sessionStorage.getItem('accessTokenGas')
    const { config, location } = this.props
    const targetRouterConfig = config.find((item) => item.path === location.pathname)

    // 未定义路由
    if (!targetRouterConfig) return <Redirect to="/404"></Redirect>

    // 无需登录路由
    if (!targetRouterConfig.auth && !isLogin) {

      return (
        // <Route path="/common" render={() =>
          <Common>
            <Route exact path={ targetRouterConfig.path } component={ targetRouterConfig.component }></Route>
          </Common>
        // }>
        // </Route>
      )

    }

    // 未登录
    if (!isLogin) {
      return <Redirect to="/login"></Redirect>
    } else {

      // 已登陆
      if (targetRouterConfig.path === '/login') {
        return <Redirect to="/"></Redirect>
      } else {

        return (
          <Route path="/" render={() =>
            <Admin>
              <Route exact path={ targetRouterConfig.path } component={ targetRouterConfig.component } />
            </Admin>
          }></Route>
        )
      }
    }
  }
}