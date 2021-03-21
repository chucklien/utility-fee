// @format
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import gasImage from 'assets/gas.png';
import waterImage from 'assets/water.png';
import electricityImage from 'assets/electricity.png';
import './Header.css';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Utility Fee Caculator
        </Typography>
        <div className="Header-icons">
          <img className="Header-icons-gas" src={electricityImage} alt="flash" />
          <img className="Header-icons-gas" src={gasImage} alt="gas" />
          <img className="Header-icons-gas" src={waterImage} alt="water drop" />
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
