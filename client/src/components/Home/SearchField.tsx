import React, { FC, Dispatch } from 'react';
import { Search } from '@material-ui/icons';
import { makeStyles, createStyles, Theme, fade, InputBase } from '@material-ui/core';

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
  return (
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
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchField;
