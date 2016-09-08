'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = React.createClass({
  render : function() {
    return (
      <h1>{this.props.greeting}</h1>
    )
  }
});

export default Greeting;
