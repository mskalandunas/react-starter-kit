'use strict'

// CSS
import './css/main.css';

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Greeting from './js/components/greeting';

const App = () => (
  <Greeting
    greeting="Hello World"
  />
);

ReactDOM.render(<App/>, document.getElementById('app'));
