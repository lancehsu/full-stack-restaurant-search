import React, { FC, Dispatch, useState, useEffect } from 'react';
import { Search } from '@material-ui/icons';
import { makeStyles, createStyles, Theme, fade, InputBase, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
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

interface SearchFieldProps {
  searchText: string;
  setSearchText: Dispatch<string>;
}
const SearchField: FC<SearchFieldProps> = ({ searchText, setSearchText }) => {
  const classes = useStyles();
  const [isSearchFieldFocus, setIsSearchFieldFocus] = useState<boolean>(false);

  useEffect(() => {
    const pressEnterCallback = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        // * Dispatch thunk action to fetch data
      }
    };
    if (isSearchFieldFocus) {
      window.addEventListener('keypress', pressEnterCallback);
      return () => window.removeEventListener('keypress', pressEnterCallback);
    }
  }, [isSearchFieldFocus]);
  return (
    <div style={{ margin: 'auto', width: '60%', display: 'flex', justifyContent: 'space-evenly', gap: '1.5em' }}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search by restaurant name or open date"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={searchText}
          onFocus={() => {
            setIsSearchFieldFocus(true);
          }}
          onBlur={() => {
            setIsSearchFieldFocus(false);
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // * Dispatch thunk
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchField;
