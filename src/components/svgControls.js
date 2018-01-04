import React from 'react';

export default function Controls({title, handleClick}){

  return(
    <div className = "svg-control">
      <p className = "button-title">{title}</p>
      <input type='button' value='-' onClick={handleClick}></input>
      <input type='button' value='+' onClick={handleClick}></input>
    </div>
  )
};
