import React from 'react';
import closed from '../images/hamburger.svg';
import closing from '../images/hamburger-closing.svg';
import opening from '../images/hamburger-opening.svg';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default class NavMenu extends React.Component{

  state = {
      menu: 'hide',
      icon: closed
    }

  componentDidMount(){
    // console.log("componentDidMount",this.state);
  }

  handleMouseEnter = (event)=>{
    this.setState({ menu: 'show',icon: opening });
    // console.log(this.state);

  }
  handleMouseLeave = (event)=>{
    this.setState({ menu: 'hide', icon: closing });
  }
  handleToggle =(event) => {
    // event.preventDefault();
    this.state.icon ===closing?this.setState({ menu: 'show',icon: opening }):this.setState({ menu: 'hide', icon: closing })
  }
  render(){
    return(
        <a href="#" onMouseLeave={this.handleMouseLeave} className="hamburger">
          <img
          className="ani"
          onClick={this.handleToggle}
          onMouseEnter={this.handleMouseEnter}
          src={this.state.icon}
          alt="hamburger icon"
          />
          <div className = {`dropdown-menu ${this.state.menu}`}>
            <ul className={`dropdown-list ${this.state.menu}`}>
              <li><Link to='/svg'>svg</Link></li>
              <li><Link to='/player'>player</Link></li>
              <li><Link to='/'>home</Link></li>
            </ul>
          </div>
        </a>
    )}
}
