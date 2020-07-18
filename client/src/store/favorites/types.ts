import { Restaurant } from '../restaurants/types';

export type Favorite = {
  name: string;
  restaurants: Restaurant[];
};

export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const POST_FAVORITE_SUCCESS = 'POST_FAVORITES_SUCCESS';
export const PUT_FAVORITE_SUCCESS = 'PUT_FAVORITES_SUCCESS';
export const DELETE_FAVORITE_SUCCESS = 'DELETE_FAVORITES_SUCCESS';
export const REQUEST_FAVORITES_FAILURE = 'REQUEST_FAVORITES_FAILURE';

export type GetFavoritesSuccess = { type: typeof GET_FAVORITES_SUCCESS; payload: Favorite[] };
export type PostFavoriteSuccess = { type: typeof POST_FAVORITE_SUCCESS; payload: Favorite };
export type PutFavoriteSuccess = {
  type: typeof PUT_FAVORITE_SUCCESS;
  payload: { name: string; restaurants: Restaurant[] };
};
export type DeleteFavoriteSuccess = {
  type: typeof DELETE_FAVORITE_SUCCESS;
  payload: string;
};
export type RequestFavoritesFailure = { type: typeof REQUEST_FAVORITES_FAILURE };

export type FavoritesAction =
  | GetFavoritesSuccess
  | PostFavoriteSuccess
  | PutFavoriteSuccess
  | DeleteFavoriteSuccess
  | RequestFavoritesFailure;
