import React from 'react';
import Geosuggest from "react-geosuggest";

const SearchBar = ({ submitLocation }) => {
    return (
        <div className="searchBar">
            <Geosuggest onSuggestSelect={submitLocation} />
            <button className="submit-location"></button>
        </div>
    );
};

export default SearchBar;