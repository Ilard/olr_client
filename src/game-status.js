import React from 'react';
import './game-status.css';

class GameStatus extends React.Component {
  playIsReady = () => {
    this.props.app.playerIsReady(true);
  }
  render() {
    const {username, progress, playersInGame} = this.props;

    if (progress) {
      return <div className="waiting-loader">Partie en cours...</div>
    }

    if (!progress) {
      if (playersInGame.length) {
        if (playersInGame.includes(username) && playersInGame.length < 2) {
          return <div className="waiting-loader">En attente d'un autre joueur...</div>
        }

        if (playersInGame.includes(username) && playersInGame.length === 2) {
          return <button className="button" onClick={this.playIsReady}>JOUER !</button>
        }
      }
    }
  }
}

export default GameStatus;
