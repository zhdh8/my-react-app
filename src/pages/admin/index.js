import React, { Component } from 'react'
import { Layout } from 'antd'
import styles from './index.module.scss'
import NavLeft from '../../components/navLeft'

const { Header, Sider, Content } = Layout


class Admin extends Component {

  render () {
    return (
      <Layout>
        <Header className={ styles.pageHeader }>Header</Header>
        <Layout>
          <Sider className={ styles.pageSideBar }>
            <NavLeft></NavLeft>
          </Sider>
          <Content className={ styles.pageContent }>{ this.props.children.props.children }</Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    )
  }

}

export default Admin