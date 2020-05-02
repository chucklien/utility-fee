// @format
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  compose,
  applySpec,
  always,
  multiply,
  path,
  isNil,
  complement,
  when,
} from 'ramda';

const styles = compose(
  applySpec({
    root: applySpec({
      alignItems: always('stretch'),
      flexGrow: always(1),
      padding: compose(
        when(complement(isNil), multiply(2)),
        path(['spacing', 'unit']),
      ),
    }),
  }),
);
const CalculatForm = ({ classes }) => <div className={classes.root}>form</div>;
CalculatForm.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CalculatForm);
