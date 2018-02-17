import React from 'react'
import ReactDOM from 'react-dom';


import {TweenMax, SlowMo, TimelineMax} from "gsap";



class SearchIcon extends React.Component {

  componentWillRecieveProps(){
    this.handleClick()
    console.log("componentWillRecieveProps")
    console.log(this.props)
  }

  handleClick = () =>{
      const node = ReactDOM.findDOMNode(this);
      let cirG = node.getElementById("circleBlue")
      let cirW = node.getElementById("circleWhite")
      console.log("cirW: ",cirW)
      TweenMax.to(cirG,0.3,{attr:{rx:120, ry:120} } );
      TweenMax.to(cirW,0.3,{attr:{rx:120, ry:120} , delay:0.3} );
  }


  render() {
    console.log("render",this.props)
    return (
      <svg
        onClick={this.handleClick}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446 446" height="7%" width="7%">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor:"rgb(255,255,255)",
            stopOpacity:0}} />
          <stop offset="100%" style={{stopColor:"#A9C9E1",stopOpacity:1}} />
          </radialGradient>
        </defs>

        <ellipse id="circleBlue"
          cx="165" cy="165" rx="0" ry="0"
          style={{fill:"url(#grad1)",stroke:"lime",strokeWidth:2}} >
        </ellipse>
        <ellipse id="circleWhite"
          cx="165" cy="165" rx="0" ry="0"
          style={{fill:"#F4F4F4",stroke:"white "}} >

        </ellipse>


        <path d="M318.75 280.5h-20.4l-7.649-7.65c25.5-28.05 40.8-66.3 40.8-107.1C331.5 73.95 257.55 0 165.75 0S0 73.95 0 165.75 73.95 331.5 165.75 331.5c40.8 0 79.05-15.3 107.1-40.8l7.65 7.649v20.4L408 446.25 446.25 408l-127.5-127.5zm-153 0C102 280.5 51 229.5 51 165.75S102 51 165.75 51 280.5 102 280.5 165.75s-51 114.75-114.75 114.75z"/>

      </svg>)
  }
}

export default SearchIcon;



{/*  <animate id="green" attributeType="XML" attributeName="rx"  to="120"
    dur="0.3s" fill="freeze"/>
  <animate  attributeType="XML" attributeName="ry"  to="120"
    dur="0.3s" fill="freeze"/>*/}
