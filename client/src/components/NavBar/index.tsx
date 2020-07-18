import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, ButtonBase, Tooltip } from '@material-ui/core';
import { Brightness2, BrightnessHigh } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../store/rootReducer';
import { changeDarkMode } from '../../store/darkMode/actions';
import LoginDialog from './LoginDialog';
import { User } from '../../store/user/types';
import UserAvatar from './UserAvatar';

const NavBar: FC = () => {
  const dispatch = useDispatch();
  const { darkMode, user } = useSelector<State, { darkMode: boolean; user: User }>((state) => ({
    darkMode: state.darkMode,
    user: state.user,
  }));
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
          {user !== null ? <UserAvatar /> : <LoginDialog />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
