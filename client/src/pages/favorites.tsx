import React, { useState, FC } from 'react';
import { Button, Typography } from '@material-ui/core';
import FavoritesContainer from '../components/Favorites/FavoritesContainer';
import { EditOutlined } from '@material-ui/icons';
import AddFavoriteDialog from '../components/Favorites/AddFavoriteDialog';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editModeOnBtn: {
      gridArea: ' 3 / 2 / 4 / 3',
      backgroundColor: theme.palette.primary.light,
    },
    normalBtn: {
      gridArea: ' 3 / 2 / 4 / 3',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  })
);

const Favorites: FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const classes = useStyles();

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
        className={editMode ? classes.editModeOnBtn : classes.normalBtn}
        startIcon={<EditOutlined />}
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
