import React from 'react'

const Battery = (props) => {

  const height =props.height || "100%"
  const width  = props.width || "100%"

  const charge = () => {
    if ( isNaN(props.charge) ) {

      return {size:81, color:"grey", charge:"?"}
    }else{
      let obj = {}
      obj.charge = `${Math.round(props.charge *100)}%`
      obj.width  = props.charge * 81
      if (props.charge > 0.2) {
        obj.color = "#B0F566"
      }else{
        obj.color = "#C70010"
      }
      return obj
    }
  }

  const battery = charge()
// console.table(props);

  return (
    <svg title="tooltip" className="battery" xmlns="http://www.w3.org/2000/svg" height='40px' width='80px' viewBox="0 0 120 60">
      <g>
        {/* outside*/}
        <rect x="5" y="5" width="95" height="50" rx="2.19" ry="2.19" fill="white" stroke="black" strokeMiterlimit="10" strokeWidth="10"/>
        {/* charge amount*/}
        <rect fill={battery.color} x="12" y="12" width={battery.width} height="36"/>
        <text x="35" y="36" fill="blue" fontFamily="Verdana" fontSize="16"> {battery.charge} </text>
        {/* tip */}
        <path d="M109,15h4.07A5.93,5.93,0,0,1,119,20.93V39.26A5.74,5.74,0,0,1,113.26,45H109a0,0,0,0,1,0,0V15A0,0,0,0,1,109,15Z"/>
        <text style={props.moreInfo} x="35" y="50" fill="blue" fontFamily="Verdana" fontSize="30"> {battery.charge} </text>
      </g>
    </svg>
  )
}

export default Battery
