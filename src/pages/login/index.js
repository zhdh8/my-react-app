import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import styles from './index.module.scss'
import axios from '../../axios'

class Login extends React.Component {

  render () {

    const { getFieldDecorator } = this.props.form

    return (
      <div className={ styles.loginWrapper }>
        <Form onSubmit={ this.handleSubmit } className={ styles.loginForm }>
          <h3 className={ styles.loginTitle }>用户登录</h3>
          <Form.Item>
            { getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            { getFieldDecorator('password', {
              rules: [{ validator: this.checkPassword }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" className={ styles.loginBtn } onClick={ this.loginSubmit }>Login</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }

  checkPassword = (rule, value, callback) => {
    try {
      if (!value) {
        callback('Please input your password!')
      } else {
        callback()
      }
    } catch (err) {
      callback(err);
    }
  }

  loginSubmit = (e) => {
    // console.log(e)
    this.props.form.validateFieldsAndScroll(async (errors, values) => {
      if (!errors) {
        // console.log(values)
        // console.log(this.props.form.getFieldsValue())
        const { data } = await axios.post('login', {
          account: values.username,
          password: values.password
        })

        if (data.status) {
          sessionStorage.setItem('accessTokenGas', data.data.key)
          message.success('登陆成功')
          this.props.history.replace('/group')
        }
      }
    })
  }
}

Login = Form.create({})(Login)

export default Login