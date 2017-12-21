import React from 'react';
import Modal from 'react-modal';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';


const styles = {content:{
  // width: 150, height:250, backgroundColor: "powderblue",
  top:"50%",
  left                  : '50%',
  right                 : 'auto',
  bottom                : 'auto',
  marginRight           : '-50%',
  transform             : 'translate(-50%, -50%)',
  postion: 'relative'
  }
};

const signIn = () => {
  return 0.5 < Math.random()?true:false
  // return false
}

export default class LoginButton extends React.Component {
  constructor(props){
    super(props)
    signIn()?
      (this.state = { account: true, modalIsopen: false, password:"password"  }) :
      (this.state = { account:false, modalIsopen: false, password:"password"  });
  }

  openModal = () => {
   this.setState({modalIsOpen: true});
 }
  afterOpenModal = () => {
   // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#8290FA';
 }
  closeModal = () => {
    this.setState({modalIsOpen: false});
 }

  handleSubmit = (event) =>{
    console.log(event.target);
  }
  handleSignUp = (event) => {
    console.log("handleSignUp",event.target);
    this.setState({account: !this.state.account})
  }
  handleShowPassword =( event )=> {
    event.target.checked=== true?this.setState({password: "text"}):this.setState({password: "password"})
  }

  // handlePasswordDisplay =( event )=> {
    // event.target.checked=== true?( "text"):("password")
  // }

  render() {
    const signedIn = this.state.account;
    const passwordVisible = this.state.password;
    console.log(passwordVisible);
    // const passwordDisplay = this.handlePasswordDisplay

    return(
      <div>
        <button onClick={this.openModal} type="button" name="button"> {this.state.account?"Log In":"Sign Up"} </button>

        <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={styles}
         contentLabel="Example Modal"
       >
         <button className="close-button" onClick={this.closeModal}>X</button>
         <h2 className="log-in-h2" ref={subtitle => this.subtitle = subtitle}> {signedIn?"Log In":"Sign Up"} </h2>

         {this.state.account?
           <LogInForm
           handleShowPassword={this.handleShowPassword}
           passwordVisible={passwordVisible}
           handleSubmit={this.handleSubmit}
           handleSignUp={this.handleSignUp}
           />:
           <SignUpForm
           handleShowPassword={this.handleShowPassword}
           passwordVisible={passwordVisible}
           handleSubmit={this.handleSubmit}
           handleSignUp={this.handleSignUp}
           />}
       </Modal>

      </div>
    )
  }
};
