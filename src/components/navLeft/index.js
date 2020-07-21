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
        title: '集团管理',
        key: '/group',
        auth: true,
      },
      {
        title: 'hook',
        key: '/hook',
      },
    ]
  }
]

export default class NavLeft extends Component {

  constructor (props) {

    super(props)

    this.state = {
      menu: null,
      selectedKeys: null,
    }
  }

  componentDidMount () {

    console.log(this.props.pathConfig)

    this.setState({
      menu: this.renderMenu(menuConfig),
      selectedKeys: this.props.pathConfig.path,
      openKeys: this.props.pathConfig.subMenu || []
    })
  }

  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={ item.title } key={ item.key }>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={ item.title } key={ item.key }>
          <NavLink to={ item.key }>{ item.title }</NavLink>
        </Menu.Item>
      )
    })
  }

  handleMenuClick = ({item, key}) => {

    if (key === this.state.selectedKeys) return false
    this.setState({
      selectedKeys: key
    })
  }

  handleOpenChange = (e) => {

    this.setState({
      openKeys: e,
    })
  }

  render () {

    const { selectedKeys, openKeys } = this.state

    return (
      <div>
        <Menu mode="inline" onClick={ this.handleMenuClick } selectedKeys={ selectedKeys } openKeys={ openKeys } onOpenChange={ this.handleOpenChange }>
          {/* { this.renderMenu(menuConfig) } */}
          { this.state.menu }
        </Menu>
      </div>
    )
  }
}