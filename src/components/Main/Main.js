// @format
import React, { Component } from 'react';

import { getThisPeriodFee } from 'utils/getThisPeriodFee';
import Header from 'components/Header';
import CalculatForm from 'components/CalculatForm';
import logo from './logo.svg';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <header className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <p>
            Edit <code>src/components/Main</code> and save to reload.
          </p>
          {getThisPeriodFee(781.4, 1797.8, 2010, 7967.7, 57.0, 724, 370)}
          <CalculatForm />
        </header>
      </div>
    );
  }
}

export default Main;
