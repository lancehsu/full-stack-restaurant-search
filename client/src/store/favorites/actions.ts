import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { showMessage } from '../message/actions';
import { ShowMessage } from '../message/types';
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

const deleteFavoriteSuccess = (data: string): DeleteFavoriteSuccess => ({
  type: DELETE_FAVORITE_SUCCESS,
  payload: data,
});

const requestFavoritesFailure = (): RequestFavoritesFailure => {
  return { type: REQUEST_FAVORITES_FAILURE };
};

export const getFavorites = (
  name: string = ''
): ThunkAction<Promise<void>, State, undefined, FavoritesAction | ShowMessage> => (
  dispatch,
  getState
) => {
  const { user } = getState();
  return axios
    .get(`/api/favorites/${name}`, {
      headers: { Authorization: `bearer ${user?.token}` },
    })
    .then((data) => {
      if (data.status === 200) {
        dispatch(getFavoritesSuccess(data.data));
      }
    })
    .catch((err) => {
      // dispatch(showMessage(err));
      alert(err);
      console.error(err);
      dispatch(requestFavoritesFailure());
    });
};

export const postFavorite = (
  favoriteName: string
): ThunkAction<Promise<void>, State, undefined, FavoritesAction | ShowMessage> => (
  dispatch,
  getState
) => {
  const { user } = getState();
  return axios
    .post(
      `/api/favorites/${favoriteName}`,
      {},
      { headers: { Authorization: `bearer ${user?.token}` } }
    )
    .then(({ data }) => {
      if (data !== null) dispatch(postFavoriteSuccess(data));
      else dispatch(showMessage(`${favoriteName} has been created!`));
    })
    .catch((err) => {
      // dispatch(showMessage(err));
      alert(err);
      console.error(err);
      dispatch(requestFavoritesFailure());
    });
};

type UpdateObject = { name: string; restaurant: Restaurant };
export const putFavorite = (
  favoriteName: string,
  { name, restaurant }: UpdateObject
): ThunkAction<Promise<void>, State, undefined, FavoritesAction | ShowMessage> => (
  dispatch,
  getState
) => {
  const { user } = getState();

  const queryStr = restaurant === undefined ? '' : `?restaurant=${restaurant.name}`;

  return axios
    .put(
      `/api/favorites/${favoriteName}${queryStr}`,
      { name },
      { headers: { Authorization: `bearer ${user?.token}` } }
    )
    .then(({ data }) => {
      dispatch(putFavoriteSuccess(data as Favorite));
      return void 0;
    })
    .catch((err) => {
      // dispatch(showMessage(err));
      alert(err);
      console.error(err);
      dispatch(requestFavoritesFailure());
    });
};

export const deleteFavorite = (
  favoriteName: string
): ThunkAction<Promise<void>, State, undefined, FavoritesAction | ShowMessage> => (
  dispatch,
  getState
) => {
  const { user } = getState();
  return axios
    .delete(`/api/favorites/${favoriteName}`, {
      headers: { Authorization: `bearer ${user?.token}` },
    })
    .then(({ data }) => {
      dispatch(deleteFavoriteSuccess(data.name));
      return void 0;
    })
    .catch((err) => {
      // dispatch(showMessage(err));
      alert(err);
      console.error(err);
      dispatch(requestFavoritesFailure());
    });
};
