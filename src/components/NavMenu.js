import React from 'react';
import closed from '../images/hamburger.svg';
import closing from '../images/hamburger-closing.svg';
import opening from '../images/hamburger-opening.svg';


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
              <a><li>account</li></a>
              <a><li>messages</li></a>
              <a><li>help</li></a>
            </ul>
          </div>
        </a>
    )}
}
