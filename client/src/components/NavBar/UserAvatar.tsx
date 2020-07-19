import React, { memo, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, Tooltip, Avatar } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../store/rootReducer';
import { User } from '../../store/user/types';
import { logout } from '../../store/user/actions';
import PopupMenuList from '../PopupMenuList';

const UserAvatar: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector<State, User>((state) => state.user);
  const menuItems = [
    {
      name: 'Logout',
      onClick: () => {
        dispatch(logout());
      },
    },
  ];

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

      <PopupMenuList menuItems={menuItems}>
        <Avatar>{user?.name}</Avatar>
      </PopupMenuList>
    </>
  );
};

export default memo(UserAvatar);
