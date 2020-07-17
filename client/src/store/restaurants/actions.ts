import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import dateToStrArrProcess from '../../util/dateToStrProcess';

import { State } from '../rootReducer';
import {
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
  GetRestaurantsSuccess,
  GetRestaurantsFailure,
  RestaurantsAction,
  Restaurant,
  ResponseRestaurant,
} from './types';

const getRestaurantsSuccess = (data: Restaurant[]): GetRestaurantsSuccess => ({
  type: GET_RESTAURANTS_SUCCESS,
  payload: data,
});

const getRestaurantsFailure = (error: any): GetRestaurantsFailure => {
  console.error(error);
  alert(error);
  return { type: GET_RESTAURANTS_FAILURE };
};
export const getRestaurants = (
  name: string,
  dates: string[],
  time: { hour: number; min: number; am: boolean }
): ThunkAction<Promise<void>, State, undefined, RestaurantsAction> => (dispatch) => {
  const { hour, min, am } = time;
  const dateStr = dates.reduce((acc, curr) => `${acc},${curr}`);
  const timeStr = (hour + (am ? 0 : 12) + min / 60).toString();
  return axios(`/api/restaurants?name=${name}&dates=${dateStr}&time=${timeStr}`)
    .then(({ data }: { data: ResponseRestaurant[] }) => {
      const restaurants: Restaurant[] = data.map((e) => {
        return { ...e, openInfo: dateToStrArrProcess(e) };
      });
      dispatch(getRestaurantsSuccess(restaurants));
      return void 0;
    })
    .catch((err) => {
      dispatch(getRestaurantsFailure(err));
    });
};
