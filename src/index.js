import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.css';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);