import { ThemeOptions } from '@material-ui/core';

const getMuiThemeObj = (prefersDarkMode: boolean): ThemeOptions  => ({
  palette: {
    type: prefersDarkMode ? 'dark' : 'light',
    primary: {
      light: '#f28933',
      main: '#ef6c00',
      dark: '#a74b00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#616161',
      main: '#e0e0e0',
      dark: '#212121',
      contrastText: '#000',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default getMuiThemeObj;
