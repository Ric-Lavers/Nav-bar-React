import React from 'react';
import {TweenMax} from "gsap";


import Controls from './svgControls';
import ControlManager from './ControlsManager'

export default class StringArtGenerator extends React.Component {



  render() {
    return(
      <div style={{display:'flex'}}>
        <ControlManager/>
      </div>
    )
  }
}
