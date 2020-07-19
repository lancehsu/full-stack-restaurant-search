import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { deleteFavorite, getFavorites } from '../../store/favorites/actions';
import { Favorite } from '../../store/favorites/types';
import { showMessage } from '../../store/message/actions';
import { State } from '../../store/rootReducer';
import RestaurantCard from './RestaurantCard';

interface FavoriteRestaurantsContainerProps {
  editMode: boolean;
  favoriteName: string;
}
const FavoriteRestaurantsContainer: FC<FavoriteRestaurantsContainerProps> = ({
  editMode,
  favoriteName,
}) => {
  const dispatch = useDispatch();
  const favorite = useSelector<State, Favorite | null>(
    (state) => state.favorites.find((e) => e.name === favoriteName) ?? null
  );

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  if (favorite === null) return <Redirect to="/favorites" />;

  return (
    <div
      style={{
        gridArea: '4 / 2 / 13 / 12',
        width: '100%',
        overflow: 'scroll',
        display: 'grid',
        gridTemplate: 'repeat(2, 1fr) / repeat(4, 1fr)',
        gap: '3em',
      }}
    >
      {favorite.restaurants.map((e) => (
        <RestaurantCard
          key={e.name}
          editMode={editMode}
          restaurant={e}
          selfDelete={() => {
            dispatch(
              showMessage(`It will delete all items in "${e.name}", confirm?`, () => {
                dispatch(deleteFavorite(e.name));
              })
            );
          }}
        />
      ))}
    </div>
  );
};

export default FavoriteRestaurantsContainer;
