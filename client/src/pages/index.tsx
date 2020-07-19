import { Typography, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import SearchResultList from '../components/Home/SearchResultTable';
import SearchField from '../components/Home/SearchField';

const Home: FC = () => {
  const theme = useTheme();
  return (
    <>
      <SearchField />
      <SearchResultList />
      <a
        style={{
          gridArea: '12 / 11 / 13 / 13',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          color: theme.palette.getContrastText(
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]
          ),
        }}
        href="https://dryicons.com/free-icons/restaurant"
      >
        <Typography variant="body1">Icon by Dryicons</Typography>
      </a>
    </>
  );
};

export default Home;
