import React from 'react'

const AboutTitle = (props) => {
  return (
    <div
      onClick={props.handleClick}
      className={`about-title`}
      title={ props.title }
      >
      <span>{ props.title }</span>
    </div>
  )
}

export default AboutTitle
