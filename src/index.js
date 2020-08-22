import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import WaitingRoom from './Waiting-room';
import './reset.css';
import './index.css';

const user = "User1",
      data = {"status":false,"waitingRoom":["User1","User2","User3","User4"]};

ReactDOM.render(
  <WaitingRoom user={user} data={data} />,
  document.getElementById('app')
);
