import React, { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';
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
  }, [hour, min, am]);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3em' }}>
      <Input
        placeholder="00"
        type="number"
        style={{ width: '3em' }}
        value={hour}
        onChange={(e) => {
          setHour(e.target.value);
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
          setMin(e.target.value);
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

export default TimeInput;
