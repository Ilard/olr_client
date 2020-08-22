import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <form className="login-form">
          <input className="login-field" type="name" placeholder="NOM" />
          <input className="button" type="submit" value="JOUER !"/>
        </form>
      </div>
    );
  }
}

export default Login;
