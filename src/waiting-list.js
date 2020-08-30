import React from 'react';
import './waiting-list.css';

class WaitingList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.waitingList.map((elem, index) => {
            return <li key={index}>{elem}</li>
          })
        }
      </ul>
    )
  }
}

export default WaitingList;
