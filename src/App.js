import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getThisPeriodFee } from './util';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {
            getThisPeriodFee(
              781.4,
              1797.8,
              2010,
              7967.7,
              57.0,
              724,
              370,
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
