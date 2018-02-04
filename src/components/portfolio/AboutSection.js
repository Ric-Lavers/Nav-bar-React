import React from 'react'
import AboutTitle from './AboutTitle'
import AboutPara from './AboutPara'

import Ait from '../images/portfolio/AIT_LOGO.png'
import Uc from '../images/portfolio/uc_logo.png'
import Anu from '../images/portfolio/ANU-Logo.png'

import * as logos from '../images/portfolio/logos/index'

const About = () => {
  return (
    <div>
       <p>I'm a full stack Junior developer based in Sydney, Australia.</p>
       <p>When I'm not writing code I might be planning a Event, making some music, or reading sci-fi.</p>
       <p>My road to development has taken me through two degrees, three businesses, and a heap of stories but with development I've found something I really like.
       </p>
    </div>
  )
}
const Education = () => {
  return (
    <div className="about-education">
      <div className="education-logo-container">
        <img className="education-logo" src={Ait} alt="Ait"/>
      </div>
      <p>
        Dipolma of Infomation Technology - Academy of Information Technology (Coder Academy)
      </p>
      <div className="education-logo-container">
        <img className="education-logo" src={Uc} alt="Uc"/>
      </div>
      <p>
        BA Business (Major: Marketing & Management, Minor: Psychology) - University of Canberra
      </p>
      <div className="education-logo-container">
        <img className="education-logo" src={Anu} alt="Anu"/>
      </div>
      <p>
        Minor of Psychology - Australian National University
      </p>
    </div>
  )
}
const Skills = () => {
    const skillLogos = []
    const skills = Object.keys(logos)
    skills.forEach( ( logo ) =>{
      skillLogos.push (
        <img
          style={{height:40, width:40}}
        src={logos[logo]} alt={`${logo}`} title={`${logo}`}/>
      )
    })

  return(
    <div className="about-skills">
      {skillLogos}
    </div>
  )
}

const active = [<About/>, <Education/>, <Skills/>]



const AboutSection = (props) => {

  let array = []
  for (let i = 0; i < 4; i++) {
    if(props.partOpen === i){array[i]= true;}
    else{array[i]= false;}
  }

  return (
    <div className="about-section">
      <div>
        <AboutTitle
          handleClick={props.handleClick}
          title="about"/>
        <AboutTitle
          handleClick={props.handleClick}
          title="education"/>
        <AboutTitle
          handleClick={props.handleClick}
          title="skills"/>
        <AboutTitle
          handleClick={props.handleClick}
          title="contact"/>
      </div>
      <div>
        <AboutPara
          active= {array[1]}
          content={<About/>}/>
        <AboutPara
          active= {array[2]}
          content={<Education/>}/>
        <AboutPara
          active= {array[3]}
          content={<Skills/>}/>
        <AboutPara
          active= {array[4]}
          content="content"/>
      </div>

  </div>)
}

export default AboutSection
