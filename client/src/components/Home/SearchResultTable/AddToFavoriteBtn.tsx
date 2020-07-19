import React, { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../../store/rootReducer';
import { Button, IconButton } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { User } from '../../../store/user/types';
import { putFavorite } from '../../../store/favorites/actions';
import { Favorite } from '../../../store/favorites/types';
import { showMessage } from '../../../store/message/actions';
import { openDialog } from '../../../store/dialog/actions';
import { useHistory } from 'react-router';

interface AddToFavoriteBtnProps {
  restaurantName: string;
}
const AddToFavoriteBtn: FC<AddToFavoriteBtnProps> = ({ restaurantName }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, favorites } = useSelector<State, { user: User; favorites: Favorite[] }>(
    (state) => ({
      favorites: state.favorites,
      user: state.user,
    })
  );

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
    const restaurantIdx = favorites[i].restaurants.findIndex((e) => e.name === restaurantName);
    if (restaurantIdx !== -1) favoriteName = favorites[i].name;
  }

  return (
    <>
      {favoriteName === '' ? (
        <IconButton
          color="inherit"
          onClick={() => {
            // dispatch(putFavorite())
          }}
        >
          <Bookmark />
        </IconButton>
      ) : (
        <Button color="inherit"></Button>
      )}
    </>
  );
};

export default memo(AddToFavoriteBtn);
