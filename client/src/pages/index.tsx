import React, { useState, FC } from 'react';
import SearchField from '../components/Home/SearchField';

const Home: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <>
      <div style={{ gridColumn: '4 / 10' }}>
        <SearchField searchText={searchText} setSearchText={setSearchText} />
      </div>
      <a style={{gridColumn: '12/ span 1'}} href='https://dryicons.com/free-icons/restaurant'> Icon by Dryicons </a>
    </>
  );
};

export default Home;
