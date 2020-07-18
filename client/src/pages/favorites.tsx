import React, { useState, FC } from 'react';
import { Button, Typography } from '@material-ui/core';
import FavoritesContainer from '../components/Favorites/FavoritesContainer';
import { EditOutlined } from '@material-ui/icons';
import AddFavoriteDialog from '../components/Favorites/AddFavoriteDialog';

const Favorites: FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <>
      <Typography
        style={{
          gridArea: '2 / 1 / 3 / 13',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
        variant="h3"
        color="textPrimary"
      >
        Favorites
      </Typography>
      <Button
        color="primary"
        startIcon={<EditOutlined />}
        style={{ gridArea: ' 3 / 2 / 4 / 3' }}
        onClick={() => {
          setEditMode((prev) => !prev);
        }}
      >
        Edit
      </Button>
      <AddFavoriteDialog />
      <FavoritesContainer editMode={editMode} />
    </>
  );
};

export default Favorites;
