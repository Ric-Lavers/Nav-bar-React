
import React from 'react'
import Polypoint from './models/polypointJSON'
import Controls from './svgControls'

import {TweenMax} from "gsap";
import {TwitterPicker, SketchPicker, SliderPicker } from 'react-color';

const roundTo = require('round-to');

export default class ControlManager extends React.Component {
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
      fillColor:{r: 255, g: 210, b: 245, a: 0.2},
      strokeColor:{r: 0, g: 0, b: 245, a: 1},
      toggleColor:true,
      rotate:0,
      backgroundColor:{r: 100, g: 100, b: 245, a: 1}
    };

  }
  componentDidMount(){
    // const poly = document.getElementById('polypoint');
    // TweenMax.to(poly, 1, {rotation:180}  ) ;
  }
  handleToggleColor = (event)=>{
    event.preventDefault();
    const toggle = this.state.toggleColor?false:true
    this.setState({toggleColor:toggle})
  }

  handleRotate =(event) => {
    event.preventDefault();
    this.setState({rotate:event.target.value})
  }

  handleChangeComplete = (color, event) =>{
    this.state.toggleColor?
    this.setState({fillColor:color.rgb}):
    this.setState({strokeColor:color.rgb});
  }
  handleChangeBackgroundColor = (color, event ) => {
    console.log(color.rgb);
    this.setState({backgroundColor:color.rgb})
  }

  handleSize = (event, props) => {
    const direction = event.target.value==='+'? 1:-1
    const size = props.stateTitle

    if (this.state[size] <= 500 && this.state[size] >= 50 ) {
      this.setState( {[size]: this.state[size]+(50*direction)} )
    }
    if (this.state[size] < 50) {
      this.setState({[size]: 500})
    }else if (this.state[size] > 500){
      this.setState({[size]: 50})
    }
  }

  handleSides = (event) => {
    const direction = event.target.value==='+'? 1:-1
    if (this.state.sides < 16 && this.state.sides > 1 ) {
      this.setState( {sides: this.state.sides+(1*direction)} )
    }
    if(this.state.sides < 1 && this.state.sides > 16) {
      this.setState( {sides: this.state.sides+(1*direction)} )
    }
    else if(event.target.value==='-' && this.state.sides >= 16) {
      this.setState({sides: this.state.sides-1})
    }else if (event.target.value==='+' &&this.state.sides <= 1) {
      this.setState({sides: this.state.sides+1})
    }
  }
  handleSteps = (event, props) => {
    const direction = event.target.value==='+'? 1:-1
    if (this.state.steps < 16 && this.state.steps > 1 ) {
      this.setState({steps: this.state.steps+(1*direction)})
    }
    if(this.state.steps < 1 && this.state.steps > 16) {
      this.setState({steps: this.state.steps+(1*direction)})
    }
    else if(event.target.value==='-' && this.state.steps >= 16) {
      this.setState({steps: this.state.steps-1})
    }else if (event.target.value==='+' &&this.state.steps <= 1) {
      this.setState({steps: this.state.steps+1})
    }
  }

  handleStrokeWidth = (event, props) => {
    const direction = event.target.value==='+'? 1:-1
    const stateProp = props.stateTitle
    if (this.state[stateProp] >1) {
      this.setState({[stateProp]: this.state[stateProp]+(1*direction)})
    }else if (this.state[stateProp] ===1) {
      event.target.value==='+'?
      this.setState({[stateProp]: this.state[stateProp]+1}):
      this.setState({[stateProp]: this.state[stateProp]-0.25})
    }else if (this.state[stateProp] <=1 && this.state[stateProp] >0 ) {
      this.setState({[stateProp]: this.state[stateProp]+(0.25*direction)})
    }else if (this.state[stateProp] <=0 && event.target.value==='+') {
      this.setState({[stateProp]: this.state[stateProp]+0.25})
    }
  }


  handleOpacity = (event) => {
    const direction = event.target.value==='+'?1:-1
    const opacity   = this.state.opacity

    if(opacity < 1 && opacity > 0.1) {//genera;
      this.setState({opacity: roundTo(opacity+(0.1*direction),3)})
    }else if(event.target.value==='-' && opacity === 1) {// max
      this.setState({opacity: roundTo(opacity-0.1,3)})
    }else if(direction === 1 && opacity === 0.1) {//min
      this.setState( {opacity: opacity+0.1} )
    }
    //finer selection
    else if (opacity <0.1 && direction === 1 && opacity > 0 ) {//general
      this.setState( {opacity: roundTo(opacity+0.02,3)} )
    }else if (opacity <=0.1 && opacity >0 && direction ===-1 ) {//max
      this.setState( {opacity: roundTo(opacity-0.02,3)} )
    }else if (opacity <=0 && direction === 1 ) {//min
      this.setState( {opacity: roundTo(opacity+0.02,3)} )
    }

  }
  handleLayers =(event) =>{
     this.setState({layered: !this.state.layered})
  }

  foo = (event) =>{
    console.log(event);
    this.props.handleStringArt(event)
  }

  render () {
    this.foo(this.state)
    const {sides, steps,width,height,layered,
      opacity,strokeWidth,strokeColor,rotate,fillColor,backgroundColor} = this.state;

    const stylen ={
     transform:`rotate(${rotate}deg)`,
     strokeWidth:strokeWidth,
     stroke:`rgba(${strokeColor.r},${strokeColor.g},${strokeColor.b}, 1)` ,
     fill:`rgba(${fillColor.r},${fillColor.g},${fillColor.b}, ${opacity})`}

    const style = {
      backgroundColor:`rgba(${this.state.backgroundColor.r},${this.state.backgroundColor.g},${this.state.backgroundColor.b}, 1 )`,
      borderWidth: 2
      }
      let xcv = style.backgroundColor
      console.log("____",this.state.backgroundColor);
      console.log("backgroundSVG",style.backgroundColor);
      console.log("fill",style.fill);


    const svg = Polypoint(width,height,sides,steps,layered);
    // ____________
    return(
    <div >
      <div className = "controls" style={{maxWidth:300}}>

        <Controls
          state = {steps}
          title="steps"
          stateTitle="steps"
          handleClick={this.handleSteps}/>

        <Controls
          state= {sides}
          title="sides"
          stateTitle="sides"
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

        <div className="rotate-contol-container" >
          <form onChange={this.handleRotate}>
            <input className="rotate-control" type="range" min="0" max="360" step="1" list="tickmarks" />

            <input className="rotate-input button-title "type="number" placeholder= {rotate}/>
          </form>
        </div>

        <div className="rotate-contol-container" >


        <TwitterPicker
          className="slider-picker"
          color={
            this.state.toggleColor?
            this.state.fillColor:
            this.state.strokeColor  }
          onChange={ this.handleChangeBackgroundColor }
          />

        </div>


        <SliderPicker
          className="slider-picker"
          color={ this.state.toggleColor?this.state.fillColor:this.state.strokeColor  }
          onChange={ this.handleChangeComplete }
          />

          <div className="svg-control">
              <button className="toggle-button"
                onClick={this.handleToggleColor}>
                 {this.state.toggleColor?"fill":"stroke"}
               </button>

              <p style={{fontSize:9}}
               className="button-title">
               {this.state.toggleColor?`
                 rgba(${fillColor.r},${fillColor.g},${fillColor.b}, ${opacity})`:
                `rgba(${strokeColor.r},${strokeColor.g},${strokeColor.b}, 1)`
               }
             </p>
          </div>
      </div>
      <div  style={ {backgroundColor:xcv} } class="polypoint">
        <td
        style={stylen}
        dangerouslySetInnerHTML={{__html: svg}} />
        <td
        style={stylen}
        dangerouslySetInnerHTML={{__html: svg}} /><td
        style={stylen}
        dangerouslySetInnerHTML={{__html: svg}} />
      </div>
    </div>
  )
  }
}
