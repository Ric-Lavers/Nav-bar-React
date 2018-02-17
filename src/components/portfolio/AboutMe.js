import React from 'react'
import AboutSection from './AboutSection'

const PartsEnum = {
  NONE:0,
  ABOUT:1,
  EDUCATION:2,
  SKILLS:3,
  CONTACT:4
}


class AboutMe extends React.Component {
  state={
    partActive: PartsEnum.NONE,
  }

  handlePartButtonClick = (event) => {
    let clickedButton = event.target.title.toUpperCase();

    PartsEnum[clickedButton] !== this.state.partActive?
      this.setState({ partActive: PartsEnum[clickedButton] }):
      this.setState({ partActive: PartsEnum[ "NONE"] })
      
  }

  render (){
    console.log(this.state.partActive)
    return(
      <div className='AboutMe'>
        <AboutSection
          partOpen ={this.state.partActive}
          handleClick = {this.handlePartButtonClick}
          title="about"
        />
      </div>
    )
  }
}

export default AboutMe;
