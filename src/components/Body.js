import React from 'react';
import { SketchPicker, SliderPicker } from 'react-color';
import Polypoint from './models/polypointJSON'
import Controls from './svgControls';
import {TweenMax} from "gsap";

const roundTo = require('round-to');



export default class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sides:4,
      steps:4,
      width:400,
      height:400,
      layered:true,
      opacity:0.5,
      strokeWidth:4,
      fillColor:{r: 255, g: 210, b: 245, a: 0.2}
    };

  }
  componentDidMount(){
    // const poly = document.getElementById('polypoint');
    // TweenMax.to(poly, 1, {rotation:180}  ) ;
  }

  handleChangeComplete = (color, event) =>{
    this.setState({fillColor:color.rgb});
  }

  handleSize = (event, props) => {
    console.log(props);
    const size = props.stateTitle
    if (this.state[size] <= 500 && this.state[size] >= 50 ) {
      event.target.value==='+'?
      this.setState({[size]: this.state[size]+50}):
      this.setState({[size]: this.state[size]-50})
    }
    if (this.state[size] < 50) {
      this.setState({[size]: 500})
    }else if (this.state[size] > 500){
      this.setState({[size]: 50})
    }
  }

  handleSides = (event) => {
    if (this.state.sides < 16 && this.state.sides > 1 ) {
      event.target.value==='+'?
      this.setState({sides: this.state.sides+1}):
      this.setState({sides: this.state.sides-1})
    }
    if(this.state.sides < 1 && this.state.sides > 16) {
      event.target.value==='+'?
      this.setState({sides: this.state.sides+1}) :
      this.setState({sides: this.state.sides-1})
    }
    else if(event.target.value==='-' && this.state.sides >= 16) {
      this.setState({sides: this.state.sides-1})
    }else if (event.target.value==='+' &&this.state.sides <= 1) {
      this.setState({sides: this.state.sides+1})
    }
  }

  handleStrokeWidth = (event, props) => {
    console.log(props)
    const stateProp = props.stateTitle
    if (this.state[stateProp] >1) {
      event.target.value==='+'?
      this.setState({[stateProp]: this.state[stateProp]+1}):
      this.setState({[stateProp]: this.state[stateProp]-1})
    }else if (this.state[stateProp] ===1) {
      event.target.value==='+'?
      this.setState({[stateProp]: this.state[stateProp]+1}):
      this.setState({[stateProp]: this.state[stateProp]-0.25})
    }else if (this.state[stateProp] <=1 && this.state[stateProp] >0 ) {
      event.target.value==='+'?
      this.setState({[stateProp]: this.state[stateProp]+0.25}):
      this.setState({[stateProp]: this.state[stateProp]-0.25})
    }else if (this.state[stateProp] <=0 && event.target.value==='+') {
      this.setState({[stateProp]: this.state[stateProp]+0.25})
    }
  }
  handleSteps = (event) => {
    if (this.state.steps < 16 && this.state.steps > 1 ) {
      event.target.value==='+'?
      this.setState({steps: this.state.steps+1}):
      this.setState({steps: this.state.steps-1})
    }
    if(this.state.steps < 1 && this.state.steps > 16) {
      event.target.value==='+'?
      this.setState({steps: this.state.steps+1}) :
      this.setState({steps: this.state.steps-1})
    }
    else if(event.target.value==='-' && this.state.steps >= 16) {
      this.setState({steps: this.state.steps-1})
    }else if (event.target.value==='+' &&this.state.steps <= 1) {
      this.setState({steps: this.state.steps+1})
    }
  }

  handleOpacity = (event) => {
    if(this.state.opacity < 1 && this.state.opacity > 0) {
      event.target.value==='+'?
      this.setState({opacity: roundTo(this.state.opacity+0.1,3)}) :
      this.setState({opacity: roundTo(this.state.opacity-0.1,3)})
    }
    else if(event.target.value==='-' && this.state.opacity >= 1) {
      this.setState({opacity: roundTo(this.state.opacity-0.1,3)})
    }else if (event.target.value==='+' &&this.state.opacity <= 0) {
      this.setState({opacity: roundTo(this.state.opacity+0.1,3)})
    }
  }
  handleLayers =(event) =>{
     this.setState({layered: !this.state.layered})
  }
  makeSVG = () => {
    let x = Polypoint(this.state.width,this.state.height,this.state.sides,this.state.steps,this.state.layered);
    return (x)
  }

  render() {
    const sides = this.state.sides;
    const steps = this.state.steps;
    const width = this.state.width;
    const height = this.state.height;
    const opacity = this.state.opacity;
    const strokeWidth = this.state.strokeWidth;
    const strokeColor = this.state.strokeColor;

    const style =  {stroke:strokeColor ,strokeWidth:strokeWidth, fill:`rgba(${this.state.fillColor.r},${this.state.fillColor.g},${this.state.fillColor.b}, ${opacity})`}

    const layered = this.state.layered

    const svg = Polypoint(width,height,sides,steps,layered);
    return(
    <div>
      <div className = "controls" style={{maxWidth:300}}>

        <Controls
          state = {steps}
          title="steps"
          handleClick={this.handleSteps}/>

        <Controls
          title="sides"
          state= {sides}
          handleClick={this.handleSides}/>

        <Controls
          title= "width"
          stateTitle="width"
          state= {width}
          handleClick={this.handleSize}/>

        <Controls
          title= "height"
          stateTitle="height"
          state= {height}
          handleClick={this.handleSize}/>

        <Controls
          title= "opacity"
          state= {opacity}
          handleClick={this.handleOpacity}/>

        <Controls
          title="Stroke Width"
          stateTitle="strokeWidth"
          state= {strokeWidth}
          handleClick={this.handleStrokeWidth} />


        <div className="svg-control">
            <button className="toggle-button"
              onClick={this.handleLayers}>
               {layered?"singled":"layered"}
             </button>
            <p className="button-title">{layered?"layered polygon":"single polygon"}</p>
        </div>

        <div className="svg-control">
            <button className="toggle-button"
              onClick={this.toggleColor}>
               {layered?"singled":"layered"}
             </button>
            <p className="button-title">{strokeColor}</p>
        </div>


        <SliderPicker
          className="slider-picker"
          color={ this.state.fillColor }
          onChange={this.handleChangeComplete}
          />
      </div>
      <td
      id="polypoint"
      style={style}
      dangerouslySetInnerHTML={{__html: svg}} />
    </div>
    )
  }
}
