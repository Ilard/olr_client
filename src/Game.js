import React from 'react';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {log:[]};
  }
  componentDidMount() {
    const fire = document.getElementById('command-fire');
    let run = 1;

    fire.addEventListener('click', (event) => {
      event.target.classList.add('run');
      setTimeout(() => {
        event.target.classList.remove('run');
      }, 100);

      // fetch(process.env.REACT_APP_API_URL + '/run/' + this.props.app.state.username, {
      //   method: 'POST'
      // })
      // .then((response) => {
      //   return response.json();
      // })
      // .then(
      //   (result) => {
      //     this.setState({
      //       isLoaded: true,
      //       data:result
      //     });
      //   },
      //   (error) => {
      //     console.log(error);
      //   })
    });
  }
  render() {
    return (
      <div className='game-container'>
        <div className='game-commands'>
          <button id='command-fire' className='game-command-run'>Run!</button>
        </div>
      </div>
    )
  }
}

export default Game;
