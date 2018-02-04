import React from 'react'

const HamburgerOpening = (props) => {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20" overflow=" visible">
    <g data-name="hamburger">
      <rect width="28" height="4" rx="2" ry="2"/>
      <rect y="8" width="28" height="4" rx="2" ry="2">
        <animate attributeType="XML" attributeName="x" to="-12" dur="0.5s" fill="freeze"/>
        <animate attributeType="XML" attributeName="y" to="12" dur="0.5s" fill="freeze"/>
        <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 0 0" to="-90 2 14" dur="0.5s" fill="freeze"/>
      </rect>

      <rect y="16" width="28" height="4" rx="2" ry="2">
        <animate attributeType="XML" attributeName="x" to="12" dur="0.5s" fill="freeze"/>
        <animate attributeType="XML" attributeName="y" to="12" dur="0.5s" fill="freeze"/>
        <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 0 0" to="90 26 14" dur="0.5s" fill="freeze"/>
      </rect>

    </g>
  </svg>)
}

export default HamburgerOpening
