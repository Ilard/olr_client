import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Login from './Login';
import WaitingRoom from './Waiting-room';
import './reset.css';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      isReady:false
    };
  }
  setUsername(username) {
    this.setState({username:username});
  }
  playerIsReady(status) {
    if (status) {
      this.setState({isReady:true});
    }
  }
  render() {
    const {username, isReady} = this.state;

    if (isReady) {
      return <Game app={this} />
    } else {
      if (username !== '') {
        return <WaitingRoom username={username} app={this}/>
      }
      return <Login app={this} />
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
