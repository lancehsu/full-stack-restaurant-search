import { Dates, dateNumToStr } from '../components/Home/types';
import { ResponseRestaurant } from '../store/restaurants/types';

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
