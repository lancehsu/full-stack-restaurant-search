import React, { useState, useEffect, useMemo, FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './styles/global.css';
import { DarkModeContext } from './util/context';
import Home from './pages/index';
import Favorites from './pages/favorites';
import FavoriteItems from './pages/favoriteItems';
import getMuiThemeObj from './styles/theme';

import NavBar from './components/NavBar';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(prefersDarkMode);

  const theme = useMemo(() => createMuiTheme(getMuiThemeObj(isDarkMode)), [isDarkMode]);

  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <BrowserRouter>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Switch>
            <Route path="/favorites/:category" component={FavoriteItems} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/" component={Home} />
          </Switch>
        </ThemeProvider>
      </DarkModeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
