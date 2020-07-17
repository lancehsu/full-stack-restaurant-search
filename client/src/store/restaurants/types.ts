export type WorkTime = { open: number; close: number };
export type Restaurant = {
  name: string;
  openInfo: string[];
  mon: WorkTime;
  tue: WorkTime;
  wed: WorkTime;
  thu: WorkTime;
  fri: WorkTime;
  sat: WorkTime;
  sun: WorkTime;
};

export type ResponseRestaurant = {
  name: string;
  mon: WorkTime;
  tue: WorkTime;
  wed: WorkTime;
  thu: WorkTime;
  fri: WorkTime;
  sat: WorkTime;
  sun: WorkTime;
};

export const GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS';
export const GET_RESTAURANTS_FAILURE = 'GET_RESTAURANTS_FAILURE';

export type GetRestaurantsSuccess = { type: typeof GET_RESTAURANTS_SUCCESS; payload: Restaurant[] };
export type GetRestaurantsFailure = { type: typeof GET_RESTAURANTS_FAILURE };

export type RestaurantsAction = GetRestaurantsSuccess | GetRestaurantsFailure;
