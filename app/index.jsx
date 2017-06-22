import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './components/Notes.jsx';
import App from './components/App.jsx';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
