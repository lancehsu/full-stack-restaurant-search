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
      light: '#bdbdbd',
      main: '#e0e0e0',
      dark: '#eeeeee',
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
