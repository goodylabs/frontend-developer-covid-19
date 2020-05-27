import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#727272',
            main: '#4b4b4b',
            dark: '#727272',
            contrastText: '#000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));