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
        variant="h3"
        color="textPrimary"
        align="center"
        style={{ gridColumn: '1 / span 12' }}
      >
        Favorites
      </Typography>
      <Button
        startIcon={<EditOutlined />}
        style={{ gridColumn: '2 / span 1' }}
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
