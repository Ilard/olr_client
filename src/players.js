import React from 'react';
import './players.css';

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      isLoaded: false,
      players: []
    };

    this._isMounted = false;
  }
  playIsReady() {
    this.props.app.playerIsReady(true);
  }
  componentDidMount() {
    this._isMounted = true;
    setInterval(() => {
      fetch(process.env.REACT_APP_API_URL + '/game/players')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => {
          if (this._isMounted) {
            this.setState({
              isLoaded: true,
              players:result
            });
          }
        },
        (error) => {
          console.error(error);
        })
    }, 1000);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const {isLoaded, name, players} = this.state;

    if (isLoaded) {
      if (players.includes(name)) {

        if (players.length < 2) {
          return <div className="waiting-loader">En attente d'un autre joueur...</div>
        }

        if (players.length === 2) {
          return <button className="button" onClick={this.playIsReady}>JOUER !</button>
        }
      } else {
        return <div className="waiting-loader">Partie en cours...</div>
      }
    } else {
      return <div className="waiting-loader">Chargement...</div>
    }
  }
}

export default Players;
