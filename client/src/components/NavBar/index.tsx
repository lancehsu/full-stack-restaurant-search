import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, ButtonBase, Tooltip } from '@material-ui/core';
import { Bookmark, Brightness2, BrightnessHigh } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../store/rootReducer';
import { changeDarkMode } from '../../store/darkMode/actions';
import LoginDialog from './LoginDialog';

const NavBar: FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector<State, boolean>((state) => state.darkMode);
  const history = useHistory();
  return (
    <AppBar style={{ gridArea: '1 / 1 / span 2 / span 12' }} position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonBase
          color="inherit"
          onClick={() => {
            history.push('/');
          }}
        >
          <Typography color="inherit" variant="h6">
            Restaurant Search
          </Typography>
        </ButtonBase>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignContent: 'center',
          }}
        >
          <Tooltip title={darkMode ? 'Light' : 'Dark'}>
            <IconButton
              color="inherit"
              onClick={() => {
                dispatch(changeDarkMode());
              }}
            >
              {darkMode ? <BrightnessHigh /> : <Brightness2 />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Favorites">
            <IconButton
              color="inherit"
              onClick={() => {
                history.push('/favorites');
              }}
            >
              <Bookmark />
            </IconButton>
          </Tooltip>
          <LoginDialog />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
