// @format
import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { is, compose, applySpec, always, path, when, applyTo } from 'ramda';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { getThisPeriodFee } from 'utils/getThisPeriodFee';
import publicImage from 'assets/public.png';
import gasImage from 'assets/gas.png';
import waterImage from 'assets/water.png';
import electricityImage from 'assets/electricity.png';
import clearImage from 'assets/clear.png';
import './CalculatForm.css';

const applyToSpacing = value =>
  compose(
    when(is(Function), applyTo(value)),
    path(['spacing']),
  );

const useStyles = makeStyles(
  applySpec({
    root: applySpec({
      alignItems: always('stretch'),
      flexGrow: always(1),
      padding: applyToSpacing(2),
    }),
    textField: {
      marginLeft: applyToSpacing(1),
      marginRight: applyToSpacing(1),
      marginBottom: applyToSpacing(1),
    },
    halfTextField: {
      marginLeft: applyToSpacing(1),
      marginRight: applyToSpacing(1),
      marginBottom: applyToSpacing(1),
      width: always('15ch'),
    },
    button: {
      marginTop: applyToSpacing(2),
    },
    clearButton: {
      marginLeft: always('auto'),
    },
  }),
);
const CalculatForm = ({ onCalculated }) => {
  const classes = useStyles();
  const [utilityMeta, setUtilityMeta] = React.useState({
    lastElectricMeter: '',
    currentElectricMeter: '',
    periodElectrickWh: '',
    electricFee: '',
    publicElectricFee: '',
    gasFee: '',
    waterFee: '',
  });

  const onFieldChange = event => {
    setUtilityMeta(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const {
      lastElectricMeter,
      currentElectricMeter,
      periodElectrickWh,
      electricFee,
      publicElectricFee,
      gasFee,
      waterFee,
    } = utilityMeta;
    const result = getThisPeriodFee(
      lastElectricMeter,
      currentElectricMeter,
      periodElectrickWh,
      electricFee,
      publicElectricFee,
      gasFee,
      waterFee,
    );
    onCalculated(result);
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <div className="Form-electricity-meters-title">
        <img src={electricityImage} alt="flash" />
        <Typography variant="h5">meters</Typography>
        <IconButton className={classes.clearButton} aria-label="clear" color="primary">
          <img className="Form-clear" alt="claer" src={clearImage} />
        </IconButton>
      </div>
      <TextField
        required
        className={classes.textField}
        label="Previous"
        fullWidth
        name="lastElectricMeter"
        value={utilityMeta['lastElectricMeter']}
        helperText="Previous electricity meters"
        placeholder="1234"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onFieldChange}
      />
      <TextField
        required
        className={classes.textField}
        label="Current"
        fullWidth
        name="currentElectricMeter"
        value={utilityMeta['currentElectricMeter']}
        helperText="Current electricity meters"
        placeholder="1234"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onFieldChange}
      />
      <TextField
        required
        className={classes.textField}
        label="Usage"
        fullWidth
        name="periodElectrickWh"
        value={utilityMeta['periodElectrickWh']}
        helperText="Electricity usage"
        placeholder="1234"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onFieldChange}
      />
      <div className="Form-divider" />
      <Typography variant="h5" align="left">
        Current Fee
      </Typography>
      <TextField
        required
        className={classes.textField}
        label="Water"
        fullWidth
        name="waterFee"
        value={utilityMeta['waterFee']}
        helperText="Water fee"
        placeholder="1234"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img className="Input-adornment-icon" src={waterImage} alt="water" />
            </InputAdornment>
          ),
        }}
        onChange={onFieldChange}
      />
      <TextField
        required
        className={classes.textField}
        label="Gas"
        fullWidth
        name="gasFee"
        value={utilityMeta['gasFee']}
        helperText="Gas fee"
        placeholder="1234"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img className="Input-adornment-icon" src={gasImage} alt="gas" />
            </InputAdornment>
          ),
        }}
        onChange={onFieldChange}
      />
      <TextField
        required
        className={classes.halfTextField}
        label="Electricity"
        placeholder="1234"
        name="electricFee"
        value={utilityMeta['electricFee']}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img className="Input-adornment-icon" src={electricityImage} alt="flash" />
            </InputAdornment>
          ),
        }}
        onChange={onFieldChange}
      />
      <TextField
        required
        className={classes.halfTextField}
        label="Public fee"
        placeholder="1234"
        name="publicElectricFee"
        value={utilityMeta['publicElectricFee']}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img className="Input-adornment-icon" src={publicImage} alt="earth" />
            </InputAdornment>
          ),
        }}
        onChange={onFieldChange}
      />
      <Button
        className={classes.button}
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
      >
        Calculate
      </Button>
    </form>
  );
};

CalculatForm.propTypes = {
  onCalculated: PropTypes.func,
};

export default CalculatForm;
