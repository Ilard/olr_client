import React from 'react';
import './waiting-list.css';

class WaitingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      list: []
    };

    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
    setInterval(() => {
      fetch(process.env.REACT_APP_API_URL + '/game/list')
      .then((response) => {
        return response.json();
      })
      .then(
        (result) => {
          if (this._isMounted) {
            this.setState({
              isLoaded: true,
              list:result
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
    const {list} = this.state;
    return (
      <ul>
        {
          list.map((elem, index) => {
            return <li key={index}>{elem}</li>
          })
        }
      </ul>
    )
  }
}

export default WaitingList;
