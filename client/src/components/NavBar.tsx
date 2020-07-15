import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Bookmark, Brightness2, BrightnessHigh } from '@material-ui/icons';
import { DarkModeContext } from '../util/context';

const NavBar: FC = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const history = useHistory();
  return (
    <AppBar style={{ gridColumn: '1 / span 12' }} position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          onClick={() => {
            setIsDarkMode((prev) => !prev);
          }}
        >
          {isDarkMode ? <BrightnessHigh /> : <Brightness2 />}
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => {
            history.push('/favorites');
          }}
        >
          <Bookmark />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
