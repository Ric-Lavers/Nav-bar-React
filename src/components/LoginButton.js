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
}

export default class LoginButton extends React.Component {
  state = {
    login: false,
    modalIsopen:false
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

  showPassword =(event) => {

  }

  render() {
    const signedIn = signIn();
    console.log(signedIn);
    return(
      <div>
        <button onClick={this.openModal} type="button" name="button"> {this.state.login?"Log out":"Log in"} </button>
        <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={styles}
         contentLabel="Example Modal"
       >
         <button className="close-button" onClick={this.closeModal}>close</button>
         <h2 ref={subtitle => this.subtitle = subtitle}> {signedIn?"Log In":"Sign Up"} </h2>

         {signedIn?<LogInForm showPassword = {this.showPassword} handleSubmit={this.handleSubmit}/>:<SignUpForm handleSubmit={this.handleSubmit}/>}



       </Modal>

      </div>
    )
  }
};
