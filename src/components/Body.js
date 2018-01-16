import React from 'react';
import {TweenMax} from "gsap";
import Polypoint from './models/polypointJSON'

import Controls from './svgControls';
import ControlManager from './ControlsManager'

export default class StringArtGenerator extends React.Component {
  state = {svg:""}


  handleStringArt = (event) => {
    let e = event
     // const svgy = Polypoint(e.steps, e.sides, e.width, e.height, e.layered);
     // this.setState({svg: svgy})
  }


  render() {
    return(
      <div style={{display:'flex'}}>
        <ControlManager handleStringArt={(event)=>this.handleStringArt(event)}/>

      </div>
    )
  }
}
