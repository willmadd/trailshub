import React from 'react';
import SearchBar from './SearchBar';
;

const SearchModal = ({ submitLocation }) => {
  return (
    <div className={`searchModal`}>
      <h2>Search for Mountain Bike Trails in Your Area</h2>
      <SearchBar submitLocation={submitLocation} />
    </div>
  );
};

export default SearchModal;