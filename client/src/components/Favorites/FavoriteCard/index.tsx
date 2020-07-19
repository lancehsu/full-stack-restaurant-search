import React, { FC, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Cancel } from '@material-ui/icons';
import {
  Button,
  CardContent,
  createStyles,
  fade,
  IconButton,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Favorite } from '../../../store/favorites/types';
import FavoriteCardTitle from './FavoriteCardTitle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editModeCard: {
      minHeight: '9em',
      '&:hover': {
        cursor: 'default',
      },
      width: '80%',
    },
    normalCard: {
      minHeight: '9em',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.55),
      },
      width: '80%',
      cursor: 'pointer',
    },
  })
);

interface FavoriteCardProps {
  editMode: boolean;
  url: string;
  favorite: Favorite;
  selfEditName: (newName: string) => void;
  selfDelete: () => void;
}
const FavoriteCard: FC<FavoriteCardProps> = ({
  editMode,
  url,
  favorite,
  selfDelete,
  selfEditName,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [isSearchFieldFocus, setIsSearchFieldFocus] = useState<boolean>(false);
  const [favoriteEditName, setFavoriteEditName] = useState<string>(favorite.name);

  useEffect(() => {
    const pressEnterCallback = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        selfEditName(favoriteEditName);
      }
    };

    if (isSearchFieldFocus) {
      window.addEventListener('keypress', pressEnterCallback);
      return () => window.removeEventListener('keypress', pressEnterCallback);
    }
  }, [isSearchFieldFocus, favoriteEditName, selfEditName]);

  return (
    <Card
      className={editMode ? classes.editModeCard : classes.normalCard}
      onClick={() => {
        if (!editMode) {
          history.push(url);
        }
      }}
      elevation={3}
    >
      <CardHeader
        title={
          <FavoriteCardTitle
            favoriteName={favorite.name}
            editMode={editMode}
            favoriteEditName={favoriteEditName}
            setFavoriteEditName={setFavoriteEditName}
            setIsSearchFieldFocus={setIsSearchFieldFocus}
          />
        }
        disableTypography={true}
        action={
          <IconButton
            size="small"
            style={{
              display: !editMode ? 'none' : undefined,
              color: '#ff1744',
            }}
            onClick={selfDelete}
          >
            <Cancel />
          </IconButton>
        }
      />
      <CardContent style={{ display: !editMode ? 'none' : undefined }}>
        <Button
          variant="contained"
          onClick={() => {
            selfEditName(favoriteEditName);
          }}
        >
          Confirm
        </Button>
      </CardContent>
    </Card>
  );
};

export default FavoriteCard;
