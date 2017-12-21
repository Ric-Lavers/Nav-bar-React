import React from 'react';

export default class LogInForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = props.handleSubmit;
    this.state = {
      password: "password"
    };
  }

  handleMouseDown =( event )=> {
    event.target.checked=== true?this.setState({password: "text"}):this.setState({password: "password"})
  }

  render() {
    const password = this.state.password
    return(
      <form onSubmit = {this.handleSubmit}>
       <label> <input type="text" placeholder="email"/> </label><br/>
       <label> <input style={{letterSpacing: "1px"}}type={password} placeholder="password"/> </label><br/>
       <input type="checkbox" onChange={this.handleMouseDown}/>show password <br/>
       <button type="submit">login</button>
         <button>Sign up</button>
      </form>

    )
  }
}

// export default function LogInForm({showPassword,handleSubmit}) {
//
// };
