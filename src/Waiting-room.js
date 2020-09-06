import React from 'react';
import './Waiting-room.css';
import Players from './players';
import WaitingList from './waiting-list'

class WaitingRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      inProgress: true
    };
  }
  componentDidMount() {
    setInterval(() => {
      fetch(process.env.REACT_APP_API_URL + '/game/status')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            inProgress:result
          });
        },
        (error) => {
          console.error(error);
        })
    }, 1000);
  }
  render() {
    const {isLoaded, inProgress} = this.state,
          {name, app} = this.props;

    if (!isLoaded) {
      return (
        <div className="waiting-room-container">
          <div className="waiting-room-status">
            <div className="waiting-loader">Chargement...</div>
          </div>
        </div>
      )
    } else {
      if (inProgress) {
        return <div className="waiting-loader">Partie en cours...</div>
      } else {
        return (
          <div className="waiting-room-container">
            <div className="waiting-room-status">
              <Players name={name} app={app} />
            </div>
            <div className="waiting-room-list">
              <div className="waiting-room-list-title">
                <h2>Liste d'attente</h2>
              </div>
              <div className="waiting-room-list-items">
                <WaitingList />
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default WaitingRoom;
