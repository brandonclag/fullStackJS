import React from 'react';
import ReactDom from 'react-dom';

import data from './testData';
import App from './components/App';

console.log(data);

ReactDom.render(
  <App content={data.contests} />,
  document.getElementById('root')
);
