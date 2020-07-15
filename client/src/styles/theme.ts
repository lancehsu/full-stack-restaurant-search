import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const getMuiThemeObj = (prefersDarkMode: boolean): { palette: PaletteOptions } => ({
  palette: {
    type: prefersDarkMode ? 'dark' : 'light',
    primary: {
      light: '#b2741a',
      main: '#ffa726',
      dark: '#ffb851',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bdbdbd',
      main: '#e0e0e0',
      dark: '#eeeeee',
      contrastText: '#000',
    },
  },
});

export default getMuiThemeObj;
