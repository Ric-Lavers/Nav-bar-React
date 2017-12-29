import React from 'react';
import logo from '../images/aa_LOGO.png';
import Menu from './NavMenu';
import LoginButton from './LoginButton'
import AudioPlayer from './AudioPlayer'

export default class NavBar extends React.Component{

  render(){
    return(
      <div className="container">
        <div className="nav-bar">

          <Menu />

          <a href="#"><img onClick={this.handleClick}src={logo} alt="company logo" className= "main-logo"/> </a>

          <LoginButton className="login-button"/>

        </div>
        <AudioPlayer/>
      </div>
    )}
}
