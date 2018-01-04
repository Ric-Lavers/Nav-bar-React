import React from 'react';
import Polypoint from './models/polypointJSON'
import Controls from './svgControls';
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
      opacity:0.5
    };

  }
  componentDidMount(){

  }
  handleWidth = (event) => {
        console.log(event.target);
    if (this.state.width <= 500 && this.state.width >= 50 ) {
      event.target.value==='+'?
      this.setState({width: this.state.width+50}):
      this.setState({width: this.state.width-50})
    }
    if (this.state.width < 50) {
      this.setState({width: 500})
    }else if (this.state.width > 500){
      this.setState({width: 50})
    }
  }

  handleHeight = (event) => {

    if (this.state.height <= 500 && this.state.height >= 50 ) {
      event.target.value==='+'?
      this.setState({height: this.state.height+50}):
      this.setState({height: this.state.height-50})
    }
    if (this.state.height < 50) {
      this.setState({height: 500})
    }else if (this.state.height > 500){
      this.setState({height: 50})
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
  handleClick = (event) => {
    if (this.state.clicks <16) {
      const newClick = this.state.clicks+=1
      this.setState(
        {clicks:  this.state.clicks+1}
      )
    }else{
      this.setState(
        {clicks: 1}
      )
    }
  }
  handleLayers =(event) =>{
     this.setState({layered: !this.state.layered})
  }

  render() {
    const sides = this.state.sides;
    const steps = this.state.steps;
    const width = this.state.width;
    const height = this.state.height;
    const opacity = this.state.opacity;

    const style =  {fill:`rgba(255, 210,245, ${opacity})`}
    const layered = this.state.layered
    console.log("_2",this.state.height);
    const svg = Polypoint(height,width,sides,steps,layered)
    return(
      <div>


      <div className = "controls" style={{maxWidth:300}}>


        <Controls title="steps"  handleClick={this.handleSteps}/>
        <Controls title="sides"  handleClick={this.handleSides}/>
        <Controls title="width"  handleClick={this.handleWidth}/>
        <Controls title="height" handleClick={this.handleHeight}/>
        <Controls title="opacity" handleClick={this.handleOpacity}/>

        <button onClick={this.handleLayers}> layers </button>

        <p>{steps}</p>
        <p>{sides}</p>
        <p>{width}</p>
        <p>{height}</p>
        <p>{opacity}</p>
        <p>{layered?"layered polygon":"single polygon"}</p>
      </div>
      <td
      style={style}
      dangerouslySetInnerHTML={{__html: svg}} />
      </div>
    )
  }
}
