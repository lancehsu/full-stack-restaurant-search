import { ResponseRestaurant } from '../store/restaurants/types';

export type DateOptions = {
  [date in Dates]: boolean;
};

export enum Dates {
  sun = '0',
  mon = '1',
  tue = '2',
  wed = '3',
  thu = '4',
  fri = '5',
  sat = '6',
}

export const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const dateNumToStr = (dateNum: Dates): string => {
  switch (dateNum) {
    case Dates.sun:
      return 'sun';
    case Dates.mon:
      return 'mon';
    case Dates.tue:
      return 'tue';
    case Dates.wed:
      return 'wed';
    case Dates.thu:
      return 'thu';
    case Dates.fri:
      return 'fri';
    case Dates.sat:
      return 'sat';
    default:
      console.error('Wrong date number');
      return '';
  }
};

export const parseTimeToStr = (start: number, end: number): string => {
  if (start === -1 && end === -1) return '';

  let startAm = true;
  let startHour = start | 0;
  const startMin = (start - startHour) * 60;
  if (startHour > 12) {
    startHour -= 12;
    startAm = false;
  }

  let endAm = true;
  let endHour = end | 0;
  const endMin = (end - endHour) * 60;
  // * If it's open time cross 12:00 am
  if (endHour > 24) {
    endHour -= 24;
  } else if (endHour === 24) {
    endHour -= 12;
  }
  if (endHour > 12) {
    endHour -= 12;
    endAm = false;
  }

  const startTimeStr = `${startHour}:${startMin >= 10 ? startMin : `0${startMin}`} ${
    startAm ? 'AM' : 'PM'
  }`;
  const endTimStr = `${endHour}:${endMin >= 10 ? endMin : `0${endMin}`} ${endAm ? 'AM' : 'PM'}`;
  return `${startTimeStr}\n-${endTimStr}`;
};

export const dateToStrArrProcess = ({
  name,
  _id,
  __v,
  ...restaurantDates
}: ResponseRestaurant): string[] => {
  // * Filter the no-ope date, turn date to dateNum, and sort
  return (Object.keys(restaurantDates) as Dates[])
    .filter((date) => restaurantDates[date].open !== -1 && restaurantDates[date].close !== -1)
    .map((e) => parseInt(e))
    .sort()
    .map((e) => {
      const day = e.toString() as Dates;
      const { open, close } = restaurantDates[day];
      return `${dateNumToStr(day).replace(/^\w/, (c: string): string =>
        c.toUpperCase()
      )} ${parseTimeToStr(open, close)}`;
    });
};
