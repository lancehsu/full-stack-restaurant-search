import React, { useState, FC } from 'react';
import { Button, Typography, useTheme } from '@material-ui/core';
import FavoritesContainer from '../components/Favorites/FavoritesContainer';
import { EditOutlined } from '@material-ui/icons';
import AddFavoriteDialog from '../components/Favorites/AddFavoriteDialog';

const Favorites: FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const theme = useTheme();
  let backgroundColor: string;
  if (theme.palette.type === 'dark') {
    backgroundColor = editMode ? theme.palette.grey[500] : theme.palette.grey[900];
  } else {
    backgroundColor = editMode ? theme.palette.grey[400] : theme.palette.grey[50];
  }

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
        style={{
          gridArea: ' 3 / 2 / 4 / 3',
          backgroundColor,
        }}
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
