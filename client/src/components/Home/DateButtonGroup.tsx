import React, { memo, FC, Dispatch, SetStateAction } from 'react';
import { Button, useTheme } from '@material-ui/core';
import { DateOptions, Dates, dateNumToStr } from '../../util/dateOperations';

interface DateButtonGroupProps {
  dateOptions: DateOptions;
  setDateOptions: Dispatch<SetStateAction<DateOptions>>;
}
const DateButtonGroup: FC<DateButtonGroupProps> = ({ dateOptions, setDateOptions }) => {
  const theme = useTheme();

  const dateNumList = Object.keys(dateOptions) as Dates[];

  return (
    <div style={{ display: 'flex' }}>
      {dateNumList.map((dateNum) => {
        return (
          <Button
            key={dateNum}
            style={{
              backgroundColor: dateOptions[dateNum]
                ? theme.palette.grey[600]
                : theme.palette.grey[500],
              borderRadius: '0.1em',
            }}
            onClick={() => {
              setDateOptions((prev) => ({
                ...prev,
                [dateNum]: !prev[dateNum],
              }));
            }}
          >
            {dateNumToStr(dateNum).replace(/^\w/, (c: string): string => c.toUpperCase())}
          </Button>
        );
      })}
    </div>
  );
};

export default memo(DateButtonGroup);
