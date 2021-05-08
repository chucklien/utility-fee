// @format
import * as React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Header from 'components/Header';
import CalculatForm from 'components/CalculatForm';
import './Main.css';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const Main = () => {
  const [result, setResult] = React.useState();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="Main">
        <Header />
        <CalculatForm onCalculated={setResult} />
        <Typography variant="subtitle2" gutterBottom>
          {result?.total}
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default Main;
