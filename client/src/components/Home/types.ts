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
