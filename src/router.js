import React, { Component } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { routerConfig } from './routerConfig'
import FrontendAuth from './components/FrontendAuth'
export default class basicRouter extends Component {

  render () {
    return (
      <HashRouter>
        <Switch>
          <FrontendAuth config={ routerConfig }></FrontendAuth>
        </Switch>
      </HashRouter>
    )
  }
}