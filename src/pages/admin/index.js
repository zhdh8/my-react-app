import React, { Component } from 'react'
import { Layout } from 'antd'
import styles from './index.module.scss'
import NavLeft from '../../components/NavLeft'
import Header from '../../components/Header'

const { Sider, Content } = Layout


class Admin extends Component {

  render () {
    return (
      <Layout>
        <Header></Header>
        <Layout>
          <Sider className={ styles.pageSideBar }>
            <NavLeft></NavLeft>
          </Sider>
          <Content className={ styles.pageContent }>{ this.props.children }</Content>
        </Layout>
      </Layout>
    )
  }

}

export default Admin