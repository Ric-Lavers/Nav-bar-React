import React from 'react'
import ReactDOM from 'react-dom';

import {TweenMax, TimelineMax} from "gsap";

import SearchIcon from '../svg/SearchIcon'

const style ={
  width:"100%",
  display:"flex",
  justifyContent:"spaceAround"
}

class ScratchPage extends React.Component {

  handleClick = () =>{
      const tl = new TimelineMax({});
      // console.log("WORKING");
      const node = ReactDOM.findDOMNode(this);
      let cirG = node.querySelector('#'+"circleBlue")
      let cirW = node.querySelector('#'+"circleWhite")
      tl.to(cirG,0.3,{attr:{rx:120, ry:120} } );
      tl.to(cirW,0.3,{attr:{rx:120, ry:120} } );

      TweenMax.set(cirG,{attr:{rx:0, ry:0} , delay:0.6} );
      TweenMax.set(cirW,{attr:{rx:0, ry:0} , delay:0.6} );
  }

  render (){

    return(
      <div style={style} className='ScratchPage'>
        <SearchIcon />
        <button onClick={this.handleClick}> SEARCH </button>

        {/*  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <defs>
              <mask id="cut-off-bottom">
                 <circle id="#test" cx="100" cy="100" r="10"   style={{fill:"green"}}/>
              </mask>
            </defs>

            <circle cx="100" cy="100" r="50"
              style={{fill:"blue"}}
               mask="url(#cut-off-bottom)" />
           </svg>
*/}
      </div>
    )
  }
}

export default ScratchPage;
