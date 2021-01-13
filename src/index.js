import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/main/Calculator';

ReactDOM.render(
  <React.Fragment>
    <h1>Calculator</h1>
    <Calculator/>
  </React.Fragment>,
  document.getElementById('root')
);
