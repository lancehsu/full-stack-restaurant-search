import React, { FC } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/rootReducer';
import { Restaurant } from '../../store/restaurants/types';

const SearchResultList: FC = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector<State, Restaurant[]>((state) => state.restaurants);

  return (
    <List style={{ width: '100%', border: 'solid' }}>
      {restaurants.map((restaurant: Restaurant, i) => {
        return (
          <ListItem key={`${restaurant.name[0]}${i}`} button>
            <ListItemText
              primary={restaurant.name}
              secondary={restaurant.openInfo.reduce((acc, curr) => `${acc}\n${curr}`)}
              onClick={() => {
                // * post to favorites (category)
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default SearchResultList;
