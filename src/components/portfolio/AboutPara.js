import React from 'react'

const AboutPara = (props) => {
  if (props.active){
  return (
    <div className="about-para">
      {props.content}
    </div>
  )
  }else{
    return(null)
  }
}

export default AboutPara
