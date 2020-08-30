import React from 'react';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    }
  }
  fireOn(event) {
    /* Todo: Ajax post request to shot */
    event.target.classList.add('fire');
    setTimeout(function() {
      this.classList.remove('fire');
    }.bind(this), 200);
  }
  fireOff() {
    // console.log('Fire Off');
  }
  render() {
    return (
      <div className='game-container'>
        <div className='game-commands'>
          <button className='game-command-fire' onMouseDown={this.fireOn} onMouseUp={this.fireOff}>Fire!</button>
        </div>
      </div>
    )
  }
}

export default Game;
