import React from 'react';
import logo from '../images/aa_LOGO.png';
import Menu from './NavMenu';
import LoginButton from './LoginButton'

export default class NavBar extends React.Component{

  render(){
    return(
      <div className="nav-bar">

        <Menu />
        
        <a href="#"><img src={logo} alt="company logo" className="main-logo"/> </a>
        <LoginButton />
      </div>
    )}
}
