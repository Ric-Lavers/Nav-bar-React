import React from 'react'
import Banner from './Banner'
import Body from './Body'

class Portfolio extends React.Component {

  render (){

    return(
      <div className='Portfolio'>
        <Banner titleMargin={this.props.titleMargin}/>
        <Body/>
      </div>
    )
  }
}

export default Portfolio;
