import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Dates } from '../../util/dateOperations';
import { showMessage } from '../message/actions';
import { ShowMessage } from '../message/types';

import { State } from '../rootReducer';
import {
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
  RESET_RESTAURANTS,
  GetRestaurantsSuccess,
  GetRestaurantsFailure,
  ResetRestaurants,
  RestaurantsAction,
  Restaurant,
  ResponseRestaurant,
} from './types';

export const resetRestaurants = (): ResetRestaurants => ({
  type: RESET_RESTAURANTS,
});

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
): ThunkAction<Promise<void> | undefined, State, undefined, RestaurantsAction | ShowMessage> => (
  dispatch
) => {
  if (dates.length === 0) {
    dispatch(showMessage('Select at least one day'));
    return;
  }
  const { hour, min, am } = time;
  const dateStr: string = (dates as string[]).reduce((acc, curr) => `${acc},${curr}`);
  const timeStr =
    hour.length === 0
      ? ''
      : (
          (parseInt(hour) === 12 ? 0 : parseInt(hour)) +
          (am ? 0 : 12) +
          (min.length === 0 ? 0 : parseInt(min)) / 60
        ).toString();

  return axios
    .get(`/api/restaurants?name=${name}&dates=${dateStr}&time=${timeStr}`)
    .then(({ data }: { data: ResponseRestaurant[] }) => {
      dispatch(getRestaurantsSuccess(data));
    })
    .catch((err) => {
      dispatch(getRestaurantsFailure(err));
    });
};
