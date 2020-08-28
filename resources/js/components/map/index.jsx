import React, {useState} from 'react';
import MapWrapper from './MapWrapper';
import LocationSearch from '../locationSeach';


const index = () => {

    const [bounds, setBounds] = useState([
        [50.505, -29.09],
        [52.505, 29.09]
    ]);
    
    const [mapCenter, setMapCenter] = useState([0,0]);

    return (
        <div className="map">
            <LocationSearch />
            <MapWrapper mapCenter={mapCenter} bounds={bounds} />
        </div>
    );
};

export default index;