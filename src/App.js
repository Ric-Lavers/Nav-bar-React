import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import mainLogo from './images/aa_LOGO.png';



class App extends Component {
  state = {};

 // build a NavBar that contains - Menu - Login - title
  render() {

    return (
      <div>
        <NavBar logo={mainLogo} />
      </div>
    )
  }
}

export default App;
