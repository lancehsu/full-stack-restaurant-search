import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Cancel } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

interface FavoriteCardProps {
  editMode: boolean;
  idx: number;
  favorite: any;
  selfDelete: () => void;
}
const FavoriteCard: FC<FavoriteCardProps> = ({ editMode, favorite, selfDelete }) => {
  return (
    <Card style={{ minHeight: '9em' }} elevation={3}>
      <CardHeader
        title={favorite.name}
        action={
          <IconButton
            size="small"
            style={{ display: !editMode ? 'none' : undefined, color: '#ff1744' }}
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
