import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import Favorites from './pages/favorites';
import FavoriteItems from './pages/favoriteItems';
import './App.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>Top bar</div>
      <Switch>
        <Route path="/favorites/:category" compponent={FavoriteItems} />
        <Route path="/favorites" compponent={Favorites} />
        <Route path="/" compponent={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
