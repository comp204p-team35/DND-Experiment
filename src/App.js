import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './board';
import Knight from './knight';
import Square from './square';

class App extends Component {
  render() {
    return (
      <div>
        <Board position={[4,7]}/>
      </div>
    );
  }
}

export default App;
