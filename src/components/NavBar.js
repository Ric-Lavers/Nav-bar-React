import React from 'react';
import logo from '../images/aa_LOGO.png';
import NavMenu from './NavMenu';
import LoginButton from './LoginButton'
import {TweenMax, Power2, TimelineLite} from "gsap";

export default class NavBar extends React.Component{



  render(){
    return(
        <div className="nav-bar">

          <NavMenu />
{  TweenMax.to("main-logo", 2, {left:600}) }
          <a href="#"><img onClick={this.handleClick}src={logo} alt="company logo" className= "main-logo"/> </a>

          <LoginButton className="login-button"/>

        </div>
    )}
}
