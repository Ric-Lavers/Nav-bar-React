import React from 'react';

export default function Controls({state,stateTitle, title, handleClick}){

  const clickIt = (event) =>{
    handleClick(event, {state, stateTitle })
  }

  return(
    <div className = "svg-control">
      <p className = "button-title">{title}</p>
      <input type='button' value='-' onClick={clickIt}></input>
      <input type='button' value='+' onClick={clickIt}></input>
      <p className = "button-title">{state}</p>
    </div>
  )
};
