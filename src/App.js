import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import mainLogo from './images/aa_LOGO.png';
import Audio from 'react-audioplayer';
import playlist from './playlist.json'
// import AudioPlayer from './AudioPlayer'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Whoops404} from './components/Whoops404';
import Body from './components/Body'

class App extends Component {
  state = {};
  componentDidMount(){
    console.log("navigator: ", navigator.userAgent)
  }


 // build a NavBar that contains - Menu - Login - title
  render() {

    return (
      <div>
        <NavBar logo={mainLogo} />
        <Body/>
        <Router>
          <Route  path="/audio" render={
            () =>(
            <div>
            <Audio
            width={600}
            height={400}
            autoPlay={true}
            playlist={playlist.playlist}
            color = {"red"}
            fullPlayer={true}
            />
            </div>
          )
          }/>
        </Router>
      </div>
    )
  }
}

export default App;
