import React from 'react'
import * as logos from './images/portfolio/logos/index'
const github = require("./images/portfolio/logos/GitHub-Mark.svg")

const Footer = (props) => {
  return (
    <div className="footer">
      <a href="https://github.com/Ric-Lavers/Nav-bar-React" target="_blank">
          <img style={{ height:38,width:38 }}  src={github} alt="github"/>
      </a>
      <img style={{ height:38,width:38 }} src={logos.react} alt=""/>
      <p>this site was made with react.js</p>

    </div>
  )
}

export default Footer
