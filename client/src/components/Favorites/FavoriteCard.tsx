import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Cancel } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface FavoriteCardProps {
  editMode: boolean;
  url: string;
  idx: number;
  favorite: any;
  selfDelete: () => void;
}
const FavoriteCard: FC<FavoriteCardProps> = ({ editMode, url, favorite, selfDelete }) => {
  return (
    <Link style={{ pointerEvents: editMode ? 'none' : 'auto', textDecoration: 'none' }} to={url}>
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
    </Link>
  );
};

export default FavoriteCard;
