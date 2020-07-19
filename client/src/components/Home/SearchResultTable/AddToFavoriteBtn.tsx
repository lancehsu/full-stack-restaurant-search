import React, { FC, memo } from 'react';
import { useDispatch } from 'react-redux';

import { IconButton, Typography } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { User } from '../../../store/user/types';
import { putFavorite } from '../../../store/favorites/actions';
import { Favorite } from '../../../store/favorites/types';
import { showMessage } from '../../../store/message/actions';
import { openDialog } from '../../../store/dialog/actions';
import { useHistory } from 'react-router';
import PopupMenuList, { PopupMenuItemProps } from '../../PopupMenuList';
import { Restaurant } from '../../../store/restaurants/types';

interface AddToFavoriteBtnProps {
  restaurant: Restaurant;
  favorites: Favorite[];
  user: User;
}
const AddToFavoriteBtn: FC<AddToFavoriteBtnProps> = ({ restaurant, favorites, user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // * If not login
  if (user === null) return <div />;
  // * If no favorite created, go and add favorite
  if (favorites.length === 0) {
    return (
      <IconButton
        color="inherit"
        onClick={() => {
          dispatch(
            showMessage('No favorite created. Create one?', () => {
              history.push('/favorites');
              dispatch(openDialog());
            })
          );
        }}
      >
        <Bookmark />
      </IconButton>
    );
  }

  let favoriteName = '';
  for (let i = 0; i < favorites.length; i++) {
    if (favoriteName !== '') break;
    const restaurantIdx = favorites[i].restaurants.findIndex((e) => e.name === restaurant.name);
    if (restaurantIdx !== -1) favoriteName = favorites[i].name;
  }

  const menuItems: PopupMenuItemProps[] = favorites.map((e) => ({
    name: e.name,
    onClick: () => {
      dispatch(putFavorite(e.name, { restaurant }));
    },
  }));

  return (
    <>
      <PopupMenuList menuItems={menuItems} title="Add to favorite list">
        {favoriteName === '' ? (
          <Bookmark />
        ) : (
          <>
            <Bookmark />
            <Typography>{favoriteName}</Typography>
          </>
        )}
      </PopupMenuList>
    </>
  );
};

export default memo(AddToFavoriteBtn);