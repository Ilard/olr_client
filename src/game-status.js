import React from 'react';
import './game-status.css';

class GameStatus extends React.Component {
  render() {
    if (this.props.progress) {
      return <div className="waiting-loader">Partie en cours...</div>
    }

    if (!this.props.progress && this.props.playersInGame.length < 2) {
      return <div className="waiting-loader">En attente d'un autre joueur...</div>
    }

    if (!this.props.progress && this.props.playersInGame.length === 2) {
      return <button className="button">JOUER !</button>
    }
  }
}

export default GameStatus;
