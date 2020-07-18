import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite, getFavorites } from '../../store/favorites/actions';
import { Favorite } from '../../store/favorites/types';
import { State } from '../../store/rootReducer';
import FavoriteCard from './FavoriteCard';

interface FavoritesContainerProps {
  editMode: boolean;
}
const FavoritesContainer: FC<FavoritesContainerProps> = ({ editMode }) => {
  const dispatch = useDispatch();
  const favorites = useSelector<State, Favorite[]>((state) => state.favorites);
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);
  return (
    <div style={{ display: 'grid', grid: 'none / repeat(4, 1fr)' }}>
      {favorites.map((e, idx) => (
        <FavoriteCard
          key={e.name}
          editMode={editMode}
          idx={idx}
          favorite={e}
          selfDelete={() => {
            dispatch(deleteFavorite(e.name));
          }}
        />
      ))}
    </div>
  );
};

export default FavoritesContainer;
