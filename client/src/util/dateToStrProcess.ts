import { Dates, dateNumToStr } from '../components/Home/types';
import { ResponseRestaurant } from '../store/restaurants/types';

export const parseTimeToStr = (start: number, end: number): string => {
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
  if (endHour > 12) {
    endHour -= 12;
    endAm = false;
  }

  return `${startHour}:${startMin >= 10 ? startMin : `0${startMin}`} ${
    startAm ? 'AM' : 'PM'
  }-${endHour}:${endMin >= 10 ? endMin : `0${endMin}`} ${endAm ? 'AM' : 'PM'}`;
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
const dateToStrArrProcess = ({
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

export default dateToStrArrProcess;
