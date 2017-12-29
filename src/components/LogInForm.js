import React from 'react';

export default function LogInForm({passwordVisible,handleSignUp,handleSubmit,handleShowPassword}) {

  return(
    <div>
      <form onSubmit = {handleSubmit}>
        <label> <input type="text" placeholder="email"/> </label><br/>
        <label> <input style={{letterSpacing: "1px"}}type={passwordVisible} /> </label>
        <h6><input type="checkbox" onChange={handleShowPassword}/>show password</h6> <br/>
        <button type="submit">login</button>
      </form>

      <form onSubmit={handleSignUp} >
        <button type="submit" >Create Account</button>
      </form>
    </div>
  )
};
