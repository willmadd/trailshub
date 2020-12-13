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
        console.log(e);
        const {viewport} = e.gmaps.geometry;
        console.log();
        let newBounds = [[viewport.Wa.i, viewport.Ra.i],[viewport.Wa.j, viewport.Ra.j]]
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