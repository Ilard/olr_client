import React from 'react';
import './Waiting-room.css';
import GameStatus from './game-status';
import WaitingList from './waiting-list'

class WaitingRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
  }
  componentDidMount() {
    setInterval(() => {
      fetch(process.env.REACT_APP_API_URL)
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data:result
          });
        },
        (error) => {
          console.log(error);
        })
    }, 1000);
  }
  render() {
    const {isLoaded, data} = this.state,
          {username, app} = this.props;

    if (!isLoaded) {
      return (
        <div className="waiting-room-container">
          <div className="waiting-room-status">
            <div className="waiting-loader">Chargement...</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="waiting-room-container">
          <div className="waiting-room-status">
            <GameStatus app={app} username={username} progress={data.gameInProgress} playersInGame={data.playersInGame} />
          </div>
          <div className="waiting-room-list">
            <div className="waiting-room-list-title">
              <h2>Liste d'attente</h2>
            </div>
            <div className="waiting-room-list-items">
              <WaitingList waitingList={data.waitingList} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default WaitingRoom;
