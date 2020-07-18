export type WorkTime = { open: number; close: number };
export type Restaurant = {
  name: string;
  openInfo: string[];
  0: WorkTime;
  1: WorkTime;
  2: WorkTime;
  3: WorkTime;
  4: WorkTime;
  5: WorkTime;
  6: WorkTime;
};

export type ResponseRestaurant = {
  name: string;
  _id: string;
  __v: number;
  0: WorkTime;
  1: WorkTime;
  2: WorkTime;
  3: WorkTime;
  4: WorkTime;
  5: WorkTime;
  6: WorkTime;
};

export const GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS';
export const GET_RESTAURANTS_FAILURE = 'GET_RESTAURANTS_FAILURE';

export type GetRestaurantsSuccess = { type: typeof GET_RESTAURANTS_SUCCESS; payload: Restaurant[] };
export type GetRestaurantsFailure = { type: typeof GET_RESTAURANTS_FAILURE };

export type RestaurantsAction = GetRestaurantsSuccess | GetRestaurantsFailure;
