import React from 'react'

const AboutTitle = (props) => {
  
  let active = props.active?" active":""
  return (
    <label
      href="mailto:ric_lavers@outlook.com"
      onClick={props.handleClick} >
      <div
        className={`about-title ${active}`}
        title={ props.title }
        >
        <span
          onClick={props.handleClick}
          title={ props.title }
          style={{ userSelect:'none' }}>
          { props.title }
        </span>
      </div>
    </label>
  )
}

export default AboutTitle
