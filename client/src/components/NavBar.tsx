import React, { FC, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Bookmark, Brightness2, BrightnessHigh } from '@material-ui/icons';
import { darModeContext } from '../util/context';

const NavBar: FC = () => {
  const { isDarkMode, setIsDarkMode } = useContext(darModeContext);
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
        <IconButton>
          <Bookmark />
        </IconButton>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
