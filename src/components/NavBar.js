import React from 'react';
import logo from '../images/aa_LOGO.png';
import NavMenu from './NavMenu';
import LoginButton from './LoginButton'
// import {TweenMax, SlowMo, TimelineMax} from "gsap";
import {Link} from 'react-router-dom';
import Battery from './svg/Battery'
import KeyContacts from './portfolio/KeyContacts'

export default class NavBar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      battery:null,
      moreBattery:{display:'none'}
    };
  }

  componentDidMount(){
    window.addEventListener("resize", function(){
        console.log( "resize" )
    });
    /*
    let logo = document.getElementById("almost-anything");
    let burger = document.getElementById("nav-menu");
    function _flyDown(element,amount) {
      TweenMax.to(element,amount,{
        x:"180%", rotation:360
      })
    }
    function _flyUp(element,amount) {
      TweenMax.to(element,amount,{
        y:500, rotation:360, onComplete: _flyDown, onCompleteParams:[element,amount]
      })
    }

    // _flyUp(".ani", 3)

   TweenMax.staggerFrom( ".ani", 1, {opacity:0.2,x:200, backgroundColor:"blue", ease: SlowMo.ease.config(0.7, 0.7, false)} );
    console.log("componentDidMount");

    const tl = new TimelineMax({ repeat:-1, yoyo:true, repeatDelay:0.5});
    tl.to(".green", 1, {borderRadius:"40%",rotation:525,y:300});
    tl.add("burst");
    tl.fromTo(".red", 2, { scale:1.2} ,{y:300,x:100, scale:0.5, ease: SlowMo.ease.config(0.7, 0.7, false)}, "burst");
    tl.to(".powderblue", 2, {y:300, ease: TweenMax.SlowMo.ease.config(0.7, 0.7, false)}, "burst-=1");

    tl.timeScale(.90);*/
// ____________https://www.youtube.com/watch?v=qaxG4-b_VyI

// navigator.geolocation.getCurrentPosition(position => {
//   console.log(`These are you coords: `, position.coords.latitude,  position.coords.longitude);
// });
/*
  navigator.getBattery().then(function(battery) {

  const newBat =  battery.addEventListener('levelchange', ()=>{
      alert(battery);
      console.log( "battery", battery )
      battery.level = battery.level
      battery.dischargingTime = battery.dischargingTime
      return battery
    })
  console.log( "newBat", newBat )
  // this.setState( {battery: newBat} )

  //   battery.onlevelchange = function() {
  //     this.setState({battery:{level:this.level,dischargingTime:this.dischargingTime} } );
  //   };
  });*/
// ____________
// Only works on chrome, used to work in firefox but they removed it at version 52
if(navigator.userAgent.indexOf("Chrome") != -1){
    const battery = navigator.getBattery().then(battery => {
      this.setState({battery:{level:battery.level,dischargingTime:battery.dischargingTime} } );
    })
    navigator.getBattery().then( (battery) =>{
    battery.onlevelchange = () => {
      this.setState( {battery: {level:battery.level,dischargingTime:battery.dischargingTime} } );
    };
  });
} 
// ____________
  // Notification.requestPermission(permission => {
  //   if(permission === 'granted'){
  //     navigator.getBattery().then(battery => {
  //       function checkplug(battery) {
  //         return battery.dischargingTime == "Infinity"?(`full in ${battery.chargingTime/60} mins`):( `empty in ${battery.dischargingTime/60} mins`)
  //       }
  //       const notification = new Notification("hello NEO", {body: `Battery is ${battery.level*100} % and will be ${checkplug(battery)}`}  )
  //     })
  //   }
  // })
}//componentDidMount

showBatteryTime = ()=>{
  const temp = this.state.battery
  temp.showTime = !this.state.battery.showTime
  this.setState( {temp} )
}
  handleMoreInfo =() => {
    console.log("this.state.battery.moreBattery");
    this.state.battery.moreBattery === {display:'none'} ?
    this.setState( {moreBattery:{display:'block'}} ):
    this.setState( {moreBattery:{display:'none'}} )
  }
  onBatteryClick = ()=>{
    window.location.reload()
  }

  render(){
  const level = () => {if (this.state.battery) {return this.state.battery.level}else{return "pending"}}
    return(
        <div className="nav-bar">
          <NavMenu id="nav-menu" handleMenuOpen={this.props.handleMenuOpen}/>
          <div style={{ height:40, width:80 }}>
           {this.state.battery && <Battery
              onClick= {this.onBatteryClick}
              charge = {level()}
              battery={this.state.battery}
              moreInfo={this.state.moreBattery}
              />}
          </div>
          <KeyContacts/>
          <Link className="main-logo" to="/">
            <img id="almost-anything" onClick={this.handleClick}src={logo} alt="company logo" className= "ani"/>
          </Link>
          {/*<div className="green animate" style={{width:50,height:50, backgroundColor:"green"}}></div>
          <div className="red animate" style={{width:50,height:50, backgroundColor:"red"}}></div>
          <div className="powderblue animate" style={{width:50,height:50, backgroundColor:"powderblue"}}></div>*/}
          <LoginButton className="login-button"/>
        </div>
    )}
}
