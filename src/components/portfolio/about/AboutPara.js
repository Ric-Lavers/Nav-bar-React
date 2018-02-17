import React from 'react'

class AboutPara extends React.Component {
// const AboutPara = (props) => {
  state={
    content:null
  }

  render(){
    let cls1 =this.props.active? "about-para":"about-para hide"
    let cls2 =this.props.active? "about-content":"about-content hide"
      return (
        <div className={cls1} >
          <div className={cls2}>
            {this.props.content}
          </div>
        </div>
      )
  }
}

export default AboutPara
