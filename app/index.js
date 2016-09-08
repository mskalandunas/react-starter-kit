'use strict'

import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Mosaic from 'mosaic-audio';

const App = () => (
  <Greeting
    greeting="Hello World"
  />
);

ReactDOM.render(<App/>, document.getElementById('app'));
