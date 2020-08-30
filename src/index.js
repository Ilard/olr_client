import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import WaitingRoom from './Waiting-room';
import './reset.css';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:''};
  }
  setUsername(username) {
    this.setState({username:username});
  }
  render() {
    if (this.state.username !== '') {
      return <WaitingRoom username={this.state.username} />
    }
    return <Login app={this} />
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
