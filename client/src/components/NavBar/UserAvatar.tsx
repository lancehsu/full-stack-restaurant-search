import React, { useState, FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IconButton,
  ButtonBase,
  Tooltip,
  Avatar,
  Popper,
  Button,
  useTheme,
} from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../store/rootReducer';
import { User } from '../../store/user/types';
import { logout } from '../../store/user/actions';

const UserAvatar: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector<State, User>((state) => state.user);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <>
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
      <ButtonBase disableRipple onClick={handleClick}>
        <Avatar>{user?.name}</Avatar>
      </ButtonBase>
      <Popper
        style={{ backgroundColor: theme.palette.background.paper }}
        anchorEl={anchorEl}
        open={open}
      >
        <Button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      </Popper>
    </>
  );
};

export default UserAvatar;
