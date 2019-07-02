import React from "react"
import { connect } from "dva"
import styles from "./IndexPage.css"
import Login from "../components/Login"
import logo from '../assets/logo.svg'

class IndexPage extends React.Component {
  render() {
    return (
      <div className={ styles.App }>
      <header className={ styles.header }>
        <div className={ styles.slogan }>
          <img src={logo} className={ styles.logo } alt="logo" />
          <p>你以为躲在键盘后边</p>
        </div>
        <div className={ styles.login }>
          <Login />
        </div>
      </header>
      <footer>design by keith with ❤️</footer>
    </div>
    )
  }
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
