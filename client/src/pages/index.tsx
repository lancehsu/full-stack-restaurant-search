import { Typography, useTheme } from '@material-ui/core';
import React, { useState, FC } from 'react';
import SearchField from '../components/Home/SearchField';

const Home: FC = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState<string>('');
  return (
    <>
      <div style={{ gridColumn: '1 / span 12' }}>
        <SearchField searchText={searchText} setSearchText={setSearchText} />
      </div>

      <a
        style={{
          gridArea: '10 / 11 / 11 / 13',
          color: theme.palette.getContrastText(
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]
          ),
        }}
        href="https://dryicons.com/free-icons/restaurant"
      >
        <Typography>Icon by Dryicons</Typography>
      </a>
    </>
  );
};

export default Home;
