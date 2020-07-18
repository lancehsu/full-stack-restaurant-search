import React, { useEffect, useMemo, FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import './styles/global.css';
import Home from './pages/index';
import Favorites from './pages/favorites';
import FavoriteItems from './pages/favoriteItems';
import getMuiThemeObj from './styles/theme';

import NavBar from './components/NavBar';
import Layout from './components/Layout';
import { State } from './store/rootReducer';
import { changeDarkMode } from './store/darkMode/actions';
import MessageDialog from './components/MessageDialog';

const App: FC = () => {
  const darkMode = useSelector<State, boolean>((state) => state.darkMode);
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => createMuiTheme(getMuiThemeObj(darkMode)), [darkMode]);

  useEffect(() => {
    dispatch(changeDarkMode(prefersDarkMode));
  }, [prefersDarkMode]);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? theme.palette.grey[900]
      : theme.palette.grey[50];
  }, [darkMode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <NavBar />
          <MessageDialog />
          <Switch>
            <Route path="/favorites/:category" component={FavoriteItems} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
