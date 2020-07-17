import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Restaurant } from '../restaurants/types';

import { State } from '../rootReducer';
import {
  GET_FAVORITES_SUCCESS,
  POST_FAVORITE_SUCCESS,
  PUT_FAVORITE_SUCCESS,
  DELETE_FAVORITE_SUCCESS,
  REQUEST_FAVORITES_FAILURE,
  GetFavoritesSuccess,
  PostFavoriteSuccess,
  PutFavoriteSuccess,
  DeleteFavoriteSuccess,
  RequestFavoritesFailure,
  Favorite,
  FavoritesAction,
} from './types';

const getFavoritesSuccess = (data: Favorite[]): GetFavoritesSuccess => ({
  type: GET_FAVORITES_SUCCESS,
  payload: data,
});

const postFavoriteSuccess = (data: Favorite): PostFavoriteSuccess => ({
  type: POST_FAVORITE_SUCCESS,
  payload: data,
});

const putFavoriteSuccess = (data: Favorite): PutFavoriteSuccess => ({
  type: PUT_FAVORITE_SUCCESS,
  payload: data,
});

const deleteFavoriteSuccess = (data: Favorite): DeleteFavoriteSuccess => ({
  type: DELETE_FAVORITE_SUCCESS,
  payload: data,
});

const requestFavoritesFailure = (error: any): RequestFavoritesFailure => {
  console.error(error);
  alert(error);
  return { type: REQUEST_FAVORITES_FAILURE };
};

export const getFavorites = (
  name?: string
): ThunkAction<Promise<void>, State, undefined, FavoritesAction> => (dispatch) => {
  return axios
    .get(`/api/favorites/${name}`)
    .then(({ data }) => {
      dispatch(getFavoritesSuccess(data));
      return void 0;
    })
    .catch((err) => {
      dispatch(requestFavoritesFailure(err));
    });
};

export const postFavorite = (
  favorite: Favorite
): ThunkAction<Promise<void>, State, undefined, FavoritesAction> => (dispatch) => {
  return axios
    .post('/api/favorites/', { data: favorite })
    .then(({ data }) => {
      dispatch(postFavoriteSuccess(data));
      return void 0;
    })
    .catch((err) => {
      dispatch(requestFavoritesFailure(err));
    });
};

export const putFavorite = (
  name: string,
  restaurants: Restaurant[]
): ThunkAction<Promise<void>, State, undefined, FavoritesAction> => (dispatch) => {
  return axios
    .put(`/api/favorites/${name}`, { data: restaurants })
    .then(({ data }) => {
      dispatch(putFavoriteSuccess(data));
      return void 0;
    })
    .catch((err) => {
      dispatch(requestFavoritesFailure(err));
    });
};

export const deleteFavorite = (
  name: string
): ThunkAction<Promise<void>, State, undefined, FavoritesAction> => (dispatch) => {
  return axios
    .delete(`/api/favorites/${name}`)
    .then(({ data }) => {
      dispatch(deleteFavoriteSuccess(data.name));
      return void 0;
    })
    .catch((err) => {
      dispatch(requestFavoritesFailure(err));
    });
};
