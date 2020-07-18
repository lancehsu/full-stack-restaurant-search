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
          gridArea: '12 / 12 / 13 / 13',
          color: theme.palette.getContrastText(
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]
          ),
        }}
        href="https://dryicons.com/free-icons/restaurant"
      >
        <Typography variant="body2">Icon by Dryicons</Typography>
      </a>
    </>
  );
};

export default Home;
