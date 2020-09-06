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
      name:'',
      list:'',
      isReady:false
    };
  }
  setUser(name, list) {
    this.setState({
      name:name,
      list:list
    });
  }
  playerIsReady(status) {
    if (status) {
      this.setState({isReady:true});
    }
  }
  render() {
    const {name, isReady} = this.state;

    if (isReady) {
      return <Game app={this} />
    } else {
      if (name !== '') {
        return <WaitingRoom name={name} app={this}/>
      }
      return <Login app={this} />
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
