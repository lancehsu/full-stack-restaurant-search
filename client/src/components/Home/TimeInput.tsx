import React, { FC, memo, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Button, Input, Typography } from '@material-ui/core';
import { TimeObject } from '../../store/restaurants/actions';

interface TimeInputProps {
  setSearchTime: Dispatch<SetStateAction<TimeObject>>;
}
const TimeInput: FC<TimeInputProps> = ({ setSearchTime }) => {
  const [hour, setHour] = useState<string>('');
  const [min, setMin] = useState<string>('');
  const [am, setAm] = useState<boolean>(false);

  useEffect(() => {
    setSearchTime({ hour, min, am });
  }, [hour, min, am, setSearchTime]);

  useEffect(() => {
    if (hour !== '' && min === '') {
      setMin('0');
    }
  }, [hour])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '30%',
        justifyContent: 'space-evenly',
      }}
    >
      <Input
        placeholder="00"
        type="number"
        style={{ width: '3em' }}
        value={hour}
        onChange={(e) => {
          const { value } = e.target;
          if (value.length === 0) {
            setHour('');
          } else if (parseInt(value) < 1) {
            setHour('12');
          } else {
            const numValue = parseInt(value);
            let hr = numValue % 13;
            setHour((hr > 0 ? hr : 1).toString());
          }
        }}
      />
      <Typography variant="h5" color="primary">
        :
      </Typography>
      <Input
        placeholder="00"
        type="number"
        style={{ width: '3em' }}
        value={min}
        onChange={(e) => {
          const { value } = e.target;
          if (value.length === 0) {
            setMin('');
          } else if (parseInt(value) < 0) {
            setMin('60');
          } else {
            const numValue = parseInt(value);
            let min = numValue % 60;
            setMin(min.toString());
          }
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          setAm((prev) => !prev);
        }}
      >
        {am ? 'AM' : 'PM'}
      </Button>
    </div>
  );
};

export default memo(TimeInput);
