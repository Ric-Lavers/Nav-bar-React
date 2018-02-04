import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Portfolio from './components/portfolio/Portfolio'
import mainLogo from './images/aa_LOGO.png';
import Audio from 'react-audioplayer';
import playlist from './playlist.json'
// import AudioPlayer from './AudioPlayer'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StringArtGenerator from './components/Body'


class App extends Component {
  state = {
    menuOpen:false
  };
  componentDidMount(){
    console.log("navigator: ", navigator.userAgent)
  }

  handleMenuOpen = (bool) =>{
    bool?this.setState({menuOpen: false} ):this.setState({menuOpen: true} )
    console.log(this.state.menuOpen);
  }

 // build a NavBar that contains - Menu - Login - title
  render() {

    return (
      <Router>
         <div>
         <NavBar logo={mainLogo} handleMenuOpen={this.handleMenuOpen}/>
         <Route  exact path="/" render={()=>
             <Portfolio titleMargin={this.state.menuOpen}/>
           }/>
         <Route  path="/svg" component={StringArtGenerator} />
         <Route  path="/svg" component={StringArtGenerator} />
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


      </div>
    </Router>
    )
  }
}

export default App;
