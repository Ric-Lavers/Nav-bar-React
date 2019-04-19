import React from "react";

import '../tables.css'
const controls = {
  mode:"m",
  direction:"arrows",
  click:"left click",
  intervals:"1-9",
  smaller_grid:"-",
  larger_grid:"=",
  show_grid:"g",
  black_white:"b",
  fill:"f",
  polygon_polyline:"p",
  spaz_out:"a",
}

let styles = {}

let controlTable = {
  position: 'fixed',
  // width:50,

  bottom:15,
  left:25,

  textAlign:"left",
  fontSize:'0.6em',

  backgroundColor: '#111',

  color: 'pink',
  cursor: 'pointer',
}

styles = {
  controlTable,
}

const ControlTable = ({toggleControls, showControls}) => {
  return(
    <table style={styles.controlTable} >
      <thead style={{ backgroundColor: '#000' }} onClick={()=>toggleControls("showControls")} >
        <tr><th>Control</th><th>Key</th></tr>
      </thead>
      <tbody>
        {
          showControls && Object.keys(controls).map( control =>
            <tr key={control} ><td>{control}</td><td>{controls[control]}</td></tr>
          )
        }
      </tbody>
    </table>
  )
}

export default ControlTable;
