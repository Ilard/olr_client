import React, { Component } from 'react';
import './Waiting-room.css';

class WaitingRoom extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="waiting-room-container">
        <div className="waiting-room-status">
          {(() => {
            if (this.props.data.status) {
              return <button className="button">JOUER !</button>
            } else {
              return <div className="waiting-loader">Partie en cours...</div>
            }
          })()}
        </div>
        <div className="waiting-room-list">
          <div className="waiting-room-list-title">
            <h2>Liste d'attente</h2>
          </div>
          <div className="waiting-room-list-items">
            <ul>
              {
                this.props.data.waitingRoom.map((elem, index) => {
                  return <li key={index}>{elem}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WaitingRoom;
