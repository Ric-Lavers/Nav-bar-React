import React from 'react'

require('./portfolio.css')

const face = require("../images/portfolio/DP-noBG.png")

const Banner = (props) => {
  return (
    <div class="opening">
      <div class="title">
        <h1 class="name">Ric Lavers</h1>
        <div class="headline">
          <p style={{marginLeft:30}}>Technology</p>
          <p style={{marginLeft:60}}>Business</p>
          <p style={{marginLeft:90}}>Sociology</p>
        </div>
      </div>

      <img id="face" src={face} alt=""/>
  </div>
  )
}

export default Banner
