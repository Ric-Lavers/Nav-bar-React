import React from 'react';
import closed from '../images/hamburger.svg';
import closing from '../images/hamburger-closing.svg';
import opening from '../images/hamburger-opening.svg';
// import HamburgerOpen from './menu/HamburgerOpen'
// import HamburgerOpening from './menu/HamburgerOpening'
// import HamburgerClosing from './menu/HamburgerClosing'
import { Link} from 'react-router-dom';


export default class NavMenu extends React.Component{

  state = {
      menu: 'hide',
      icon: closed
    }

  componentDidMount(){
    // console.log("componentDidMount",this.state);
  }
  checkState = () => {
    this.state.menu ==='hide'?
    this.props.handleMenuOpen(false):
    this.props.handleMenuOpen(true)
  }
  // changeToNone = () =>{
  //   setTimeout( ()=>{
  //     this.setState( {menu: 'none'} )
  //   } ,1000)
  // }
  handleMouseEnter = (event)=>{
    this.setState({ menu: 'show',icon: opening });
    this.checkState()
    // console.log(this.state);

  }
  handleMouseLeave = (event)=>{
    this.setState({ menu: 'hide', icon: closing });
    if( this.state.menu === 'show' ){ this.checkState() }
  }
  handleToggle =(event) => {
    // event.preventDefault();
    this.state.icon ===closing?
     this.setState({ menu: 'show',icon: opening }):
     this.setState({ menu: 'hide', icon: closing })
    this.checkState()

  }
  render(){
    const hamburger =  this.state.menu === 'show'?opening:closing
    const icon = this.state.icon
    return(
        <div className="hamburger" onMouseLeave={this.handleMouseLeave}>
        <img
          className="ani"
          onClick={this.handleToggle}
          onMouseEnter={this.handleMouseEnter}
          src= {icon}
          alt="hamburger icon"
          />
          <div className = {`dropdown-menu ${this.state.menu}`}>
            <ul className={`dropdown-list ${this.state.menu}`}>
              <li><Link to='/svg'>svg</Link></li>
              <li><Link to='/'>home</Link></li>
            </ul>
          </div>
        </div>
    )}
}
