import React, { FC, useState, useEffect, useMemo } from 'react';
import { Search } from '@material-ui/icons';
import { makeStyles, createStyles, Theme, fade, InputBase, Button } from '@material-ui/core';
import { getRestaurants, TimeObject } from '../../store/restaurants/actions';
import { useDispatch } from 'react-redux';
import { DateOptions, Dates } from './types';
import DateButtonGroup from './DateButtonGroup';
import TimeInput from './TimeInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.35),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.55),
      },
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      width: '100%',
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
    },
  })
);

const SearchField: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState<string>('');
  const date = new Date().getDay().toString();
  const [searchDateOption, setSearchDateOption] = useState<DateOptions>({
    [Dates.sun]: false,
    [Dates.mon]: false,
    [Dates.tue]: false,
    [Dates.wed]: false,
    [Dates.thu]: false,
    [Dates.fri]: false,
    [Dates.sat]: false,
  });
  const [searchTime, setSearchTime] = useState<TimeObject>({ hour: '', min: '', am: false });
  const [isSearchFieldFocus, setIsSearchFieldFocus] = useState<boolean>(false);

  const dates = useMemo<Dates[]>(() => {
    return (Object.keys(searchDateOption) as Dates[]).filter((date) => searchDateOption[date]);
  }, [searchDateOption]);

  useEffect(() => {
    setSearchDateOption((prev) => ({ ...prev, [date]: true }));
  }, [setSearchDateOption]);

  useEffect(() => {
    const pressEnterCallback = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        dispatch(getRestaurants(searchName, dates, searchTime));
      }
    };
    if (isSearchFieldFocus) {
      window.addEventListener('keypress', pressEnterCallback);
      return () => window.removeEventListener('keypress', pressEnterCallback);
    }
  }, [isSearchFieldFocus]);
  return (
    <div
      style={{
        gridArea: '3 / 1 / span 2 / span 12',
        margin: 'auto',
        width: '60%',
        display: 'flex',
        flexFlow: 'column',
        gap: '2em',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '1.5em',
        }}
      >
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Enter Restaurant Name..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={searchName}
            onFocus={() => {
              setIsSearchFieldFocus(true);
            }}
            onBlur={() => {
              setIsSearchFieldFocus(false);
            }}
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(getRestaurants(searchName, dates, searchTime));
          }}
        >
          Search
        </Button>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          gap: '0.1em',
        }}
      >
        <DateButtonGroup dateOptions={searchDateOption} setDateOptions={setSearchDateOption} />
        <TimeInput setSearchTime={setSearchTime} />
      </div>
    </div>
  );
};

export default SearchField;
