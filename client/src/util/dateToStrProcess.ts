import { ResponseRestaurant } from '../store/restaurants/types';

export const parseTimeToStr = (start: number, end: number): string => {
  let startAm = true;
  let startHour = (start / 10) | 0;
  if (startHour > 12) {
    startHour -= 12;
    startAm = false;
  }
  const startMin = (start % 10) * 60;

  let endAm = true;
  let endHour = (end / 10) | 0;
  if (endHour > 12) {
    endHour -= 12;
    endAm = false;
  }
  const endMin = (start % 10) * 60;

  return `${startHour}:${startMin} ${startAm ? 'AM' : 'PM'}-${endHour}:${endMin} ${
    endAm ? 'AM' : 'PM'
  }`;
};

const dateToNum = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};
const numToDate = {
  0: 'sun',
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat',
};
const dateToStrArrProcess = ({ name, ...restaurantDates }: ResponseRestaurant): string[] => {
  // * Filter the no-ope date, turn date to dateNum, and sort
  return ((Object.keys(restaurantDates) as (keyof typeof restaurantDates)[])
    .filter((date) => restaurantDates[date].open !== -1 && restaurantDates[date].close !== -1)
    .map((e) => dateToNum[e])
    .sort() as (keyof typeof numToDate)[]).map((e) => {
    const date = numToDate[e] as keyof typeof dateToNum;
    const { open, close } = restaurantDates[date];
    return `${date.replace(/^\w/, (c: string): string => c.toUpperCase())} ${parseTimeToStr(
      open,
      close
    )}`;
  });
};

export default dateToStrArrProcess;
