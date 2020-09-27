import React, {useState} from 'react';
import MapWrapper from './MapWrapper';
import LocationSearch from '../locationSeach';


const index = () => {

    const [bounds, setBounds] = useState([
        [49.959999905, -7.57216793459],
        [58.6350001085, 1.68153079591]
    ]);
    
    const [mapCenter, setMapCenter] = useState([0,0]);

    const submitLocation = (e) => {
        const {viewport} = e.gmaps.geometry;
        let newBounds = [[viewport.Ya.i, viewport.Sa.i],[viewport.Ya.j, viewport.Sa.j]]
        setBounds(newBounds);
    } 

    return (
        <div className="map">
            <LocationSearch submitLocation={submitLocation}/>
            <MapWrapper mapCenter={mapCenter} bounds={bounds} />
        </div>
    );
};

export default index;