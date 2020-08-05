import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';


import App from './components/App';

axios.get('/api/contests')
  .then(resp => {
    ReactDom.hydrate(
      <App initialContests={resp.data.contests} />,
      document.getElementById('root')
    );
  })
  .catch(console.error);


