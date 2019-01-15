// @format
import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';

import { getThisPeriodFee } from 'utils/getThisPeriodFee';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <p>
            Edit <code>src/components/Main</code> and save to reload.
          </p>
          {getThisPeriodFee(781.4, 1797.8, 2010, 7967.7, 57.0, 724, 370)}
        </header>
      </div>
    );
  }
}

export default Main;
