import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite, getFavorites } from '../../store/favorites/actions';
import { Favorite } from '../../store/favorites/types';
import { showMessage } from '../../store/message/actions';
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
    <div
      style={{
        gridArea: '4 / 2 / 12 / 12',
        width: '100%',
        overflow: 'scroll',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(5, 1fr)',
        gap: '3em',
      }}
    >
      {favorites.map((e, idx) => (
        <FavoriteCard
          key={e.name}
          editMode={editMode}
          idx={idx}
          favorite={e}
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

export default FavoritesContainer;
