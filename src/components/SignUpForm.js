import React from 'react';
//
// export default class SignUpForm extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.handleSubmit = props.handleSubmit;
//     this.state = {
//       password: "password"
//     };
//   }
//
//   handleMouseDown =( event )=> {
//     event.target.checked=== true?this.setState({password: "text"}):this.setState({password: "password"})
//   }
//
//   render() {
//     const password = this.state.password
//     return(
//       <form onSubmit = {this.handleSubmit}>
//        <label>  <input type="text" placeholder="firstName"/> </label><br/>
//        <label> <input type="text" placeholder="lastName"/> </label><br/>
//        <label>  <input type="email" placeholder="email"/> </label><br/>
//        <label> <input type={password} placeholder="password"/> </label><br/>
//        <label> <input type={password} placeholder="re-enter"/> </label><br/>
//        <input type="checkbox" onChange={this.handleMouseDown}/>show password <br/>
//        <button type="submit">login</button>
//       </form>
//
//     )
//   }
// }

export default function SignUpForm(
  {passwordVisible,
    handleSignUp,
    handleSubmit,
    handleShowPassword}
  ) {

  return(
    <div>
      <form onSubmit = {handleSubmit}>
        <label>  <input type="text" placeholder="firstName"/> </label><br/>
        <label> <input type="text" placeholder="lastName"/> </label><br/>
        <label>  <input type="email" placeholder="email"/> </label><br/>
        <label> <input type={passwordVisible} placeholder="password"/> </label><br/>
        <label> <input type={passwordVisible} placeholder="re-enter"/> </label>
        <h6><input type="checkbox" onChange={handleShowPassword}/>show password</h6> <br/>
        <button type="submit">login</button>
      </form>

      <form onSubmit={handleSignUp} >
        <button type="submit" > Log In</button>
      </form>
    </div>
  )
};
