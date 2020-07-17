import {
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
  Restaurant,
  RestaurantsAction,
} from './types';
import { initialState } from '../rootReducer';

const restaurantsReducer = (
  state = initialState.restaurants,
  action: RestaurantsAction
): Restaurant[] => {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return action.payload;
    case GET_RESTAURANTS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default restaurantsReducer;
