import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:''};
  }
  editUsername = (event) => {
    this.setState({username:event.target.value});
  }
  handlerKeyPress = (event) => {
    if (event.charCode === 13) {
      this.props.app.setUsername(event.target.value);
    }
  }
  handlerClick = (event) => {
    this.props.app.setUsername(event.target.value);
  }
  render() {
    return (
      <div className='login-container'>
        <form className='login-form'>
          <input className='login-field' type='text' onChange={this.editUsername} onKeyPress={this.handlerKeyPress} value={this.state.username} />
          <input className='button' type='submit' onClick={this.handlerClick} value='JOUER !'/>
        </form>
      </div>
    );
  }
}

export default Login;
