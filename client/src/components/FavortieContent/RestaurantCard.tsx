import React, { FC } from 'react';
import { Cancel } from '@material-ui/icons';
import { CardContent, IconButton, Typography, CardHeader, Card } from '@material-ui/core';
import { ResponseRestaurant, Restaurant } from '../../store/restaurants/types';
import { dateToStrArrProcess } from '../../util/dateOperations';

interface RestaurantCardProps {
  editMode: boolean;
  restaurant: Restaurant;
  selfDelete: () => void;
}
const RestaurantCard: FC<RestaurantCardProps> = ({ editMode, restaurant, selfDelete }) => {
  const openInfo = dateToStrArrProcess(restaurant as ResponseRestaurant);
  return (
    <Card style={{ minHeight: '18em' }} elevation={3}>
      <CardHeader
        style={{ height: '30%', minHeight: '3.5em' }}
        title={restaurant.name}
        titleTypographyProps={{ variant: 'h6' }}
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
      <CardContent>
        {openInfo.map((e, i) => (
          <Typography key={i} color="textSecondary" variant="body2">
            {e}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
