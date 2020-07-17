import React, { useState, FC } from 'react';
import { Button, Typography } from '@material-ui/core';
import FavoritesContainer from '../components/Favorites/FavoritesContainer';
import { AddCircleOutline, EditOutlined } from '@material-ui/icons';

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
      <Button startIcon={<AddCircleOutline />} style={{ gridColumn: '11 / span 1' }}>
        Add
      </Button>
      <FavoritesContainer editMode={editMode} />
    </>
  );
};

export default Favorites;
