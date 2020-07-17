import {
  GET_FAVORITES_SUCCESS,
  POST_FAVORITE_SUCCESS,
  PUT_FAVORITE_SUCCESS,
  DELETE_FAVORITE_SUCCESS,
  REQUEST_FAVORITES_FAILURE,
  Favorite,
  FavoritesAction,
} from './types';
import { initialState } from '../rootReducer';

const favoritesReducer = (state = initialState.favorites, action: FavoritesAction): Favorite[] => {
  switch (action.type) {
    case GET_FAVORITES_SUCCESS:
      return action.payload;
    case POST_FAVORITE_SUCCESS:
      return state.concat(action.payload);
    case PUT_FAVORITE_SUCCESS: {
      const newState = [...state];
      // const idx = state.findIndex((e) => {
      //   e.name === action.payload.name;
      // });
      // newState[idx] = { ...newState[idx], restaurants: action.payload.restaurants };
      return newState;
    }
    case DELETE_FAVORITE_SUCCESS:
      // const idx = state.findIndex((e) => {
      //   e.name === action.payload.name;
      // });
      // return state.slice(0, idx).concat(state.slice(idx + 1));
      return state;
    case REQUEST_FAVORITES_FAILURE:
      return state;
    default:
      return state;
  }
};

export default favoritesReducer;
