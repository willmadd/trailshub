import React from 'react';
import SearchModal from './SearchModal';

const LocationSearch = ({ submitLocation}) => {
    return (
        <div className={`search-wrapper`}>
            <SearchModal
                submitLocation={submitLocation}
            />
        </div>
    );
};

export default LocationSearch;