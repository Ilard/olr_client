import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:false,
      username:''
    };
  }
  editUsername = (event) => {
    this.setState({username:event.target.value});
  }
  updateUsername = () => {
    const username = this.state.username;
    if (username !== '') {
      this.props.app.setUsername(username);
    } else {
      this.setState({error:true});
    }
  }
  render() {
    return (
      <div className='login-container'>
        <input className={this.state.error ? 'login-field login-field-error' : 'login-field'} type='text' onChange={this.editUsername} placeholder='Pseudo' value={this.state.username} />
        <button className='button' onClick={this.updateUsername}>Jouer</button>
      </div>
    );
  }
}

export default Login;
