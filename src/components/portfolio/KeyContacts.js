import React from 'react'

const github = require("../images/portfolio/logos/GitHub-Mark.svg")
const linkedin = require("../images/portfolio/logos/linkedin-logo-sq.svg")

const KeyContacts = (props) => {
  return (
    <div class="key-contacts">
      <a className="icon-link" href="https://github.com/ric-lavers" target="_blank" rel='noreferrer noopener'>
          <img className="icon" src={github} alt="github"/>
      </a>
      <a className="icon-link" href="https://www.linkedin.com/in/ric-lavers/" target="_blank" rel='noreferrer noopener'>
           <img src={linkedin} className="icon" alt="linkedin"/>
      </a>
    </div>
  )
}

export default KeyContacts
