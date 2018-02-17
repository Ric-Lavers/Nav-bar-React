import React from 'react'

import AboutTitle from './AboutTitle'
// import AboutPara from './AboutPara'

import Ait from '../images/portfolio/AIT_LOGO.png'
import Uc from '../images/portfolio/uc_logo.png'
import Anu from '../images/portfolio/ANU-Logo.png'

import * as logos from '../images/portfolio/logos/index'

const About = () => {
  return (
    <div className="about-bio">
       <p>Today I'm a full stack Junior developer based in Sydney, Australia.</p>
       <p>When I'm not writing code I might be planning a Event, making electronic music, or reading sci-fi at the beach.</p>
       <p>My road to development has taken me through two degrees, three businesses, and a heap of stories but with development I've found something challenging and satisfying.
       </p>
       <p>If your looking for a resume please send  me a email, but whilst your here have play with my svg generator!
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
      <div className="skills" key = {`skills_${logo}`}className="tooltip">
        <img
          style={{height:50, width:50}}
          src={logos[logo]} alt={`${logo}`}
        />
      <span className="tooltiptext">{`${logo}`}</span>
      </div>
      )
    })

  return(
    <div className="about-skills">
      {skillLogos}
    </div>
  )
}

const Content = [<div/>,<About/>, <Education/>, <Skills/>,<div/>]


const AboutSection = (props) => {
  const titles = ["about","education","skills","contact"]
  let aboutTitles = []
  let array = []
  for (let i = 0; i < 4; i++) {
    if(props.partOpen === i){array[i]= true;}
    else{array[i]= false;}

    aboutTitles.push( <AboutTitle
      key = {i}
      active= {array[i+1]}
      handleClick={props.handleClick}
      title={titles[i]}
      />)
    
  }

  return (
    <div className="about-section">
      <div>

        <AboutTitle
          active= {array[1]}
          handleClick={props.handleClick}
          title="about"/>
        <AboutTitle
          active= {array[2]}
          handleClick={props.handleClick}
          title="education"/>
        <AboutTitle
          active= {array[3]}
          handleClick={props.handleClick}
          title="skills"/>
        <a style={{textDecoration:"none"}} href="mailto:ric_lavers@outlook.com?&body=Hello Ric, ">
          <label onClick={props.handleClick} >  
              <div
              className={`about-title ${array[4]}`}
              title="contact">
                <span
                onClick={props.handleClick}
                title="contact"
                style={{ userSelect:'none' }}>
                contact
                </span>
              </div>
          </label>
        </a>
        {/*<AboutTitle
          active= {array[4]}
          handleClick={props.handleClick}
        title="contact"/>*/}
      </div>
      <div>
        {<div className={`about-para ${props.partOpen === 4||props.partOpen === 0?"hide":""}`}>
          <div className={`about-content ${props.partOpen === 0?"hide":""}`}>
            {Content[props.partOpen]}
          </div>
        </div>}
      </div>

  </div>)
}

export default AboutSection
