import React from 'react';
import logo from '../images/aa_LOGO.png';
import NavMenu from './NavMenu';
import LoginButton from './LoginButton'
import {TweenMax, Power2, TimelineLite, SlowMo, TimelineMax} from "gsap";

// function countdown(time, steps) {//time is total seconds taken and interval is percent per step
// let i = 1;
// let interval = steps/time;
// let percent = 1/steps;
// setInterval( () => {
//   while (i >0) {
//     logo.style.opacity = `${i}`;
//     i-=steps
//     console.log("i: "+ i);
//   }
// },Math.floor(interval*1000) )
// }

/* practive animations
<div className="ani" style={{width:50,height:50, backgroundColor:"red"}}></div>
<div className="ani" style={{width:50,height:50, backgroundColor:"red"}}></div>
<div className="ani" style={{width:50,height:50, backgroundColor:"red"}}></div>
*/
export default class NavBar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
    console.log("ANYTHING");
  }

  componentDidMount(){
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

    // TweenMax.staggerFrom( ".ani", 1, {opacity:0.2,x:200, backgroundColor:"blue", ease: SlowMo.ease.config(0.7, 0.7, false)} );
    
    // _flyUp(".ani", 3)

    console.log("componentDidMount");

    const tl = new TimelineMax({ repeat:-1, yoyo:true, repeatDelay:0.5});
    tl.to(".green", 1, {borderRadius:"40%",rotation:525,y:300});
    tl.add("burst");
    tl.fromTo(".red", 2, { scale:1.2} ,{y:300,x:100, scale:0.5, ease: SlowMo.ease.config(0.7, 0.7, false)}, "burst");
    tl.to(".powderblue", 2, {y:300, ease: TweenMax.SlowMo.ease.config(0.7, 0.7, false)}, "burst-=1");

    tl.timeScale(.90);
// ____________https://www.youtube.com/watch?v=qaxG4-b_VyI

navigator.geolocation.getCurrentPosition(position => {
  console.log(`These are you coords: `, position.coords.latitude,  position.coords.longitude);
});
// ____________

const battery = navigator.getBattery().then(battery => {
  console.log(battery.level, battery.dischargingTime);
  return battery.level, battery.dischargingTime
})
// ____________
Notification.requestPermission(permission => {

  if(permission === 'granted'){
    navigator.getBattery().then(battery => {
      function checkplug(battery) {
        return battery.dischargingTime == "Infinity"?(`full in ${battery.chargingTime/60} mins`):( `empty in ${battery.dischargingTime/60} mins`)
      }
      const notification = new Notification("hello NEO", {body: `Battery is ${battery.level*100} % and will be ${checkplug(battery)}`}  )
    })

  }
})
// ____________
const ac = new AudioContext();
const oscillator = ac.createOscillator();

oscillator.frequency.value = 200;
oscillator.type = 'sine';
oscillator.start(ac.currentTime);
// oscillator.connect(ac.destination)
oscillator.stop(ac.currentTime + 1);



// ____________
// navigator.mediaDevices.getUserMedia({
//   video:true,
//   audio:true
// }).then( stream => {
//   videoElement,srcObject = strem;
//   const recorder = new MediaRecorder(stream);
// });

}//componentDidMount


  render(){
    return(
        <div className="nav-bar">

          <NavMenu id="nav-menu" />

          <a href="#"><img id="almost-anything" onClick={this.handleClick}src={logo} alt="company logo" className= "ani main-logo"/> </a>
          <div className="green animate" style={{width:50,height:50, backgroundColor:"green"}}></div>
          <div className="red animate" style={{width:50,height:50, backgroundColor:"red"}}></div>
          <div className="powderblue animate" style={{width:50,height:50, backgroundColor:"powderblue"}}></div>
          <LoginButton className="login-button"/>

        </div>
    )}
}
