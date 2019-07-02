import React from "react"
import { Form, Icon, Input, Button, Card } from "antd"
import styles from "./Login.css"

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }
  handleRegister = e => {
    console.log(e)
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Card>
        <Form onSubmit={this.handleSubmit} className={styles.form}>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <a className={styles.forgot} href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Log in
            </Button>
            Or <a onClick={this.handleRegister}>register now!</a>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}
const Login = Form.create({ name: "login" })(NormalLoginForm)
export default Login
