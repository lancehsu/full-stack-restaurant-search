import React, { useState, FC } from 'react';
import SearchField from '../components/Home/SearchField';

const Home: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <>
      <div style={{ gridColumn: '5 / 9' }}>
        <SearchField searchText={searchText} setSearchText={setSearchText} />
      </div>

    </>
  );
};

export default Home;
