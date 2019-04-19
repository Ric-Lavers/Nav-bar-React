import React, { Component, Fragment } from 'react'

import { DrawModes, preventKeys, findIntervals } from './hanger'

import ControlTable from './components/ControlsTable'

const arrorKeys = [32, 37, 38, 39, 40];

let styles = {}

class FullScreenSVG extends Component {
  constructor(props){
    super(props)
    this.k = 0
    this.path = React.createRef()
    this.svgDraw = React.createRef()
  }
  state = {
    clientX: null,
    clientY: null,
    grid: 100,
    showBox: false,
    innerHeight:0, 
    innerWidth: 0,
    polylinePoints: [],
    polylinePointsString:[],
    lastPolylinePointsString:[],
    lastPolylinePoints: [],
    intervals:8,
    polyline: true,
    blackWhite: "white",
    fill:false,
    animationName: null,
    lazerMode: 1,
    drawing: false,
    showControls:false,
    animating: false,
  }
  toggleControls = (stateKey) => {
    this.setState( prev => {
      prev[stateKey] = !prev[stateKey]
      return prev
    })
  }

  selfDraw = (count, previous = 37) => {
    if( this.state.drawing && count <= 600 )
    setTimeout( async () => {
      count++
      const findArrowKey = () =>  Math.floor(Math.random() * Math.floor(4)) + 37;
      let arrowKey = findArrowKey()
      //dont let the direction go back wards
      while( arrowKey !== previous && ((arrowKey - previous) % 2 === 0) ) {
        arrowKey = findArrowKey()
      }
      //dont go off the edges
      const { innerHeight, innerWidth, clientX , clientY, grid } = this.state;
      if ( clientX <= 0 + grid  ) arrowKey = 39; //right
      if ( clientX >= innerWidth - grid ) arrowKey = 37; //left
      if ( clientY <= 0 + grid ) arrowKey = 40; //down
      if ( clientY >= innerHeight - grid ) arrowKey = 38; //up
      try {
        this.handleArrowPress({keyCode: arrowKey});
        this.selfDraw(count, arrowKey)
      } catch (error) {
        console.log("skip")
        this.selfDraw(count, arrowKey)
      }
    } , 15 )
    
  }

  downloadSVG = () => {
    const XMLS = new XMLSerializer(); 
    const svgDraw = XMLS.serializeToString(this.svgDraw.current)
    const el = document.createElement('a')
    el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(svgDraw) );
    el.setAttribute('download', 'stringart.svg');
    el.click()// this only works once! then you need to give permission to download multiple files
  }

  componentDidMount(){
    this.setHW()
    document.addEventListener('keypress', (event) => {
      preventKeys( event, arrorKeys )
      this.handleKeyPress(event)
    })
    document.addEventListener('keydown', (event) => {
      preventKeys( event, arrorKeys )
      this.handleArrowPress(event)
    })
    window.addEventListener("resize", (event) => {
      this.setHW()
    })
  }
  componentWillUnmount(){
    document.removeEventListener('keypress', (event) => {
      this.handleKeyPress(event)
    })
    document.removeEventListener('keydown', (event) => {
      this.handleArrowPress(event)
    })
    window.removeEventListener("resize", (event) => {
      this.setHW()
    })
  }
  setHW = () => {
    let { innerHeight, innerWidth } = window
    this.setState({ innerHeight, innerWidth })
  }

  handleArrowPress = async (event) => {

    if( event.key === 32) event.altKey && event.preventDefault();

    const move = (keyCode, clientX, clientY, grid) => {
      switch(keyCode) {
        case 37://left
          return {clientX:clientX-grid, clientY}
        case 38://up
          return {clientX, clientY:clientY-grid}
        case 39://right
          return {clientX:clientX+grid, clientY}
        case 40://down
          return {clientX, clientY:clientY+grid}
        default:
          return {clientX, clientY}
      }
    }

    if(this.state.polylinePoints.length > 0 
      && event.keyCode >=37 
      && event.keyCode <=40 
      ){
      event.altKey && event.preventDefault()

      let { clientX, clientY, grid } = this.state
      let newEvent = move(event.keyCode, clientX, clientY, grid)
      return this.handleClick(newEvent)
      
      const dontRepeat = () => {
        // dont repeat //todo
        let clickIt = 0
        const { polylinePoints } = this.state;
        let left, up, right, down;
        let {clientX: x, clientY: y} = newEvent;

        left = move(37, x, y, grid)
        up = move( 38, x, y, grid )
        right = move( 39, x, y, grid )
        down = move( 40, x, y, grid )

        const checkIt = (newEvent, x, y, foo) => {
          newEvent.used = (newEvent.clientX === x && newEvent.clientY === y)
            ? true
            : false;
          return newEvent.clientX === x && newEvent.clientY === y
        }

        for( let i = 0; /* (clickIt) && */ (i < polylinePoints.length); i=i+2 ) {
          let xP = polylinePoints[i]
          let yP = polylinePoints[i+1]

          
          if ( checkIt(newEvent, xP, yP ) ) {
            // check for a un touched cordinate to move to
            if (!left.used) checkIt( left, xP, yP );
            if (!up.used) checkIt( up, xP, yP );
            if (!right.used) checkIt( right, xP, yP );
            if (!down.used) checkIt( down, xP, yP );

            clickIt++
          }
        }
        return clickIt
      }

      const clickIt = dontRepeat()
      clickIt <= 4 
        ? this.handleClick(newEvent)
        : this.pushPoints( newEvent.clientX, newEvent.clientY, this.state.polylinePoints )
      
    }
  }

  handleClick = (event) => {
    let { clientX, clientY } = event
    const { lazerMode, intervals, polylinePoints: points } = this.state

    if(points.length > 5){

      let last = {
        x: points[points.length-2],
        y: points[points.length-1],
        secondLast: {
          x: points[points.length-4],
          y: points[points.length-3]
        }
      }

      const intervalArray = {
        x: findIntervals( last.secondLast.x, last.x, intervals).array,
        y: findIntervals( last.secondLast.y, last.y, intervals).array
      }
      const pos = {
        x: clientX,
        y: clientY
      }
      const next = {
        x: findIntervals(last.x, clientX, intervals).array,
        y: findIntervals(last.y, clientY, intervals).array
      }
      const settings = {
        interval: {
          x: findIntervals(last.x, clientX, intervals).interval,
          y: findIntervals(last.y, clientY, intervals).interval
        }
      }

      let pattern = DrawModes(
          lazerMode,
          intervalArray,
          pos,
          next,
          settings
        );
      this.setState(prev => {
        prev.polylinePointsString.push(pattern) // doubling it in interesting
        prev.clientX = clientX
        prev.clientY = clientY
        return prev
      })
    }

    this.pushPoints( clientX, clientY, this.state.polylinePoints )
  }

  pushPoints = (clientX, clientY, points) => {
    points.push(clientX, clientY)
    this.setState({ polylinePoints: points })
  }

  stringArt = (x, m, c)=>{
    let y = m * x + c
  }

  getPathLength = () => {
    let { animating } = this.state;
    this.setState({ animating: !animating }, () =>{ 
      if (!animating) {
        return
      }
    })
    
    let length = this.path.current.getTotalLength()
    
    let styleSheet = document.styleSheets[0];
    let animationName = `draw`;
    let keyframes =
    `@-webkit-keyframes ${animationName} {
       from{
        stroke-dashoffset: ${0/* length */};
       }
       to {
        stroke-dashoffset: ${length};
       }
    }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    this.setState({ animationName, pathLength: length })
    let styleSheet2 = document.styleSheets[0];
  }

  handleKeyPress = (event) => {
    event.key === "p" && this.setState({ polyline: !this.state.polyline })
    event.key === "f" && this.setState({ fill: !this.state.fill })
    event.key === "b" && this.setState((prev)=> ({
      blackWhite: prev.blackWhite === "black"
        ?"white"
        :"black"
      }))

    event.key === "a" && this.getPathLength()
    event.key === "m" && this.setState((prev) => (
      prev.lazerMode === 4
        ? {lazerMode: 0}
        : {lazerMode: prev.lazerMode+1}
    ))
    event.key === "-" && this.setState({ grid: this.state.grid-50 })
    event.key === "=" && this.setState({ grid: this.state.grid+50 }) 
    event.key === "g" && this.setState({ showBox: !this.state.showBox })
    event.key === 'z' && event.ctrlKey && this.back()
    
    let intervals  = parseInt(event.key, 10 );
    [1,2,3,4,5,6,7,8,9].includes(intervals) && this.setState({ intervals })
  }
  back = () => this.setState({ polylinePointsString: this.state.polylinePointsString.slice(0,-1) })

  render (){
    let { pathLength, animationName, fill, blackWhite, polyline, innerHeight, innerWidth, polylinePoints ,polylinePointsString, animating, 
    grid, showBox, clientX , clientY 
    } = this.state
    // let pathLength = this.findPathLength()
    let fillColor = fill ? '#111':'none'
    let drawPath = animating
      ?{
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        animation: `${animationName} 4s ease-out alternate infinite`,
        fill:fillColor, stroke:blackWhite, strokeWidth:2
      }:{fill:fillColor, stroke:blackWhite, strokeWidth:2}
    

    return( 
      <div style={{ position: 'relative' }}> 
        <div onClick={this.handleClick} >

          <svg key={this.k++} ref={this.svgDraw}
            style={{backgroundColor:'#222', width:'100%', height:'100%'}} 
            viewBox={`0 0 ${innerWidth} ${innerHeight-30}`}
          >
            {polyline
              ? <polyline id="drawPolyline" style={drawPath} points={polylinePointsString} ref={this.path} />
              : <polygon points={polylinePointsString} style={{fill:fillColor, stroke:blackWhite, strokeWidth:2, fillRule:'evenodd'}} />
          }

          {clientX && showBox && <rect x={clientX-grid} y={clientY-grid} width={grid*2} height={grid*2} style={{fill:'none',stroke:'#ccc'}}/>}
          </svg>

          <div style={{position: 'fixed', width:50, bottom:0, right:75, color: blackWhite, textAlign:"left", fontSize:'0.6em'}} >
            <table>
              <thead>
               
              </thead>
              <tbody>
              {Object.keys(this.state).map((key => {
                let value = key.includes('polylinePoint') ? this.state[key].length : String(this.state[key])
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                )}
              ))}
              </tbody>  
            </table>

          </div>
          <ControlTable 
            toggleControls={this.toggleControls}
            showControls={this.state.showControls}
          />
        </div>


        <div style={{ position: 'absolute' }} >

          <button 
            onClick={() =>{
            this.setState({drawing: !this.state.drawing}
            , () => this.selfDraw(0)
            )}}
          >
            {this.state.drawing ? "stop drawing" : "draw"} something random
          </button>

          <button onClick={this.downloadSVG}>
            Download SVG
          </button>

          <button onClick={this.back}>
            back
          </button>

        </div>


      </div>
    )
  }
}


export default FullScreenSVG

styles = {
  // controlTable 
}