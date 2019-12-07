import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/login'
import Admin from './pages/admin'
// import Index from './pages/index'
import Demo from './pages/demo'
// import NotFound from './pages/404'


export default class basicRouter extends Component {

  constructor (props) {

    super(props)

    this.state = {
      islogin: null,
    }
  }

  componentDidMount () {
    this.setState({
      islogin: sessionStorage.getItem('accessTokenGas') ? true : false,
    })
  }

  render () {
    // if (!this.state.islogin) {
    //   return <Redirect to="/login"></Redirect>
    // }
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={ Login }></Route>
          <Route exact path="/" render={() => {
            return (<Admin>
              <Switch>
                <Route exact path="/demo" component={ Demo }></Route>
                <Redirect to="/"></Redirect>
                {/* <Route component={ NotFound }></Route> */}
              </Switch>
            </Admin>)
          }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}