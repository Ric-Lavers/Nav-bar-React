import React from 'react'

require('./portfolio.css')

const face = require("../images/portfolio/DP-noBG.png")

const Banner = (props) => {

  const MARGIN = props.titleMargin?["title make-room","_0" ]:["title","" ]


  return (
    <div className="opening">
      <div className= {MARGIN[0]}>
        <h1 className="name">Ric Lavers</h1>
        <div className="headline">
          <p className={`_30 ${MARGIN[1]}`} >Technology</p>
          <p className={`_60 ${MARGIN[1]}`} style={{marginLeft:60}}>Business</p>
          <p className={`_90 ${MARGIN[1]}`} style={{marginLeft:90}}>Event Management</p>
        </div>
      </div>

      <img id="face" src={face} alt=""/>
  </div>
  )
}

export default Banner
