import { Button } from '@mui/material';
import React from 'react';
import SearchBar from './SearchBar';
;

const SearchModal = ({ submitLocation }) => {
  return (
    <div className={`searchModal`}>
      <h2 className="mob-hide">Search for Mountain Bike Trails in Your Area</h2>
      <SearchBar submitLocation={submitLocation} />
      <h2>hgfjhf</h2>
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default SearchModal;
