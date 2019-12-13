import React from 'react'
import Header from '../Header'
import { Layout } from 'antd'
import styles from './index.module.scss'

const { Content } = Layout

class Common extends React.Component {

  render () {
    return (
      <Layout>
        <Header></Header>
        <Content className={ styles.commonWrap }>{ this.props.children }</Content>
      </Layout>
    )
  }
}

export default Common