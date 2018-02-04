import React from 'react'

const HamburgerClosing = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20">
      <g data-name="hamburger">
        <rect width="28" height="4" rx="2" ry="2"/>

        <rect x="-12" y="12" width="28" height="4" rx="2" ry="2" transform="rotate(-90 2 14)">
          <animate attributeType="XML" attributeName="x"  to="0"
          dur="0.3s" fill="freeze"/>
          <animate attributeType="XML" attributeName="y"  to="8"
          dur="0.3s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate"  to="0 0 0"
          dur="0.3s" fill="freeze"/>
        </rect>
        <rect x="12" y="12" width="28" height="4" rx="2" ry="2" transform="rotate(90 26 14)">
          <animate attributeType="XML" attributeName="x"  to="0"
          dur="0.3s" fill="freeze"/>
          <animate attributeType="XML" attributeName="y"  to="16"
          dur="0.3s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate"  to="0 0 0"
          dur="0.3s" fill="freeze"/>
        </rect>

      </g>
    </svg>
  )
}

export default HamburgerClosing
