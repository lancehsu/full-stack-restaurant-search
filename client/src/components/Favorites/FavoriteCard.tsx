import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Cancel } from '@material-ui/icons';
import { createStyles, fade, IconButton, makeStyles, Theme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
  idx: number;
  favorite: any;
  selfDelete: () => void;
}
const FavoriteCard: FC<FavoriteCardProps> = ({ editMode, url, favorite, selfDelete }) => {
  const classes = useStyles();
  const history = useHistory();
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
        title={favorite.name}
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
    </Card>
  );
};

export default FavoriteCard;
