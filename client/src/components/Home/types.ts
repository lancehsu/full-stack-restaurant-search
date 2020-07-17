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
      return 'Sun';
    case Dates.mon:
      return 'Mon';
    case Dates.tue:
      return 'Tue';
    case Dates.wed:
      return 'Wed';
    case Dates.thu:
      return 'Thu';
    case Dates.fri:
      return 'Fri';
    case Dates.sat:
      return 'Sat';
    default:
      console.error('Wrong date number');
      return '';
  }
};
