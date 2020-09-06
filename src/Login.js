import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      list:'',
      loginError:false,
    };

    this._isMounted = false;
  }
  editUser = (event) => {
    this.setState({
      name:event.target.value
    });
  }
  updateUser = () => {
    const name = this.state.name;
    if (name !== '') {
      this.logUser();
      this.props.app.setUser(name, this.state.list);
    } else {
      this.setState({loginError:true});
    }
  }
  logUser = () => {
    fetch(process.env.REACT_APP_API_URL + '/game/login/' + this.state.name)
    .then((response) => {
      return response.json();
    })
    .then(
      (result) => {
        if (this._isMounted) {
          this.setState(result);
        }
      },
      (error) => {
        console.error(error);
      })
  }
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div className='login-container'>
        <input className={this.state.loginError ? 'login-field login-field-error' : 'login-field'} type='text' onChange={this.editUser} placeholder='Pseudo' value={this.state.username} />
        <button className='button' onClick={this.updateUser}>Jouer</button>
      </div>
    );
  }
}

export default Login;
