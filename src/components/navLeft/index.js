import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu

const menuConfig = [
  {
    title: '首页',
    key: '/',
    auth: false,
  },
  {
    title: '设置',
    key: 'settings',
    children: [
      {
        title: 'demo',
        key: '/demo',
        auth: true,
      },
      {
        title: '活动',
        key: '/demo1'
      },
    ]
  }
]

export default class NavLeft extends Component {

  constructor (props) {

    super(props)

    this.state = {
      menu: null,
      currKey: null,
    }
  }

  render () {

    return (
      <div>
        <Menu mode="inline" onClick={ this.handleMenuClick }>
          {/* { this.renderMenu(menuConfig) } */}
          { this.state.menu }
        </Menu>
      </div>
    )
  }

  componentDidMount () {

    this.setState({
      menu: this.renderMenu(menuConfig)
    })
  }

  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={ item.title } key={ item.key }>
            <Menu.Item key={ item.key }>
              { this.renderMenu(item.children) }
            </Menu.Item>
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={ item.key }>{ item.title }</NavLink>
        </Menu.Item>
      )
    })
  }

  handleMenuClick = ({item, key}) => {

    if (key === this.state.currKey) return false
    this.setState({
      currKey: key
    })
  }
}