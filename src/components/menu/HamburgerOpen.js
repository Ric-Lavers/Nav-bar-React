import React from 'react'

const HamburgerOpen = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
      <g data-name="hamburger-open">
          <rect width="28" height="4" rx="2" ry="2"/>
          <rect x="-12" y="12" width="28" height="4" rx="2" ry="2" transform="rotate(-90 2 14)"/>
          <rect x="12" y="12" width="28" height="4" rx="2" ry="2" transform="rotate(90 26 14)"/>
      </g>
    </svg>
  )
}

export default HamburgerOpen
