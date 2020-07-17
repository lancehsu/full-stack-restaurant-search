import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Dates } from '../../components/Home/types';
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
export type TimeObject = { hour: string; min: string; am: boolean };
export const getRestaurants = (
  name: string,
  dates: Dates[],
  time: TimeObject
): ThunkAction<Promise<void>, State, undefined, RestaurantsAction> => (dispatch) => {
  const { hour, min, am } = time;
  const dateStr: string = (dates as string[]).reduce((acc, curr) => `${acc},${curr}`);
  const timeStr = (parseInt(hour) + (am ? 0 : 12) + parseInt(min) / 60).toString();
  return axios
    .get(`/api/restaurants?name=${name}&dates=${dateStr}&time=${timeStr}`)
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
