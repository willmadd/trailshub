import React from "react";
import secondsToTime from "../../utils/secondsToTime";
import './statsTab.scss';
import ascendIcon from '../../../images/icons/ascent.svg';
import descendIcon from '../../../images/icons/descent.svg';
import timeIcon from '../../../images/icons/time.svg';
import distanceIcon from '../../../images/icons/distance.svg';



const StatsTab = props => {
    let { ascent, descent, time, distance, imperial } = props;

    const MetersToFt = 3.28084;
    const ftToMiles = 0.000189394;

const [hours, min, sec] = secondsToTime(time);

return (
        <div className="stats-tab">
            {ascent && (
                <h5><img src={ascendIcon}/>
                    {imperial
                        ? `${Math.round(ascent * MetersToFt)} ft`
                        : `${ascent} m`}
                </h5>
            )}
            {descent && (
                <h5><img src={descendIcon}/>
                    {imperial
                        ? `${Math.round(descent * MetersToFt)} ft`
                        : `${descent} m`}
                </h5>
            )}
            {time && <h5><img src={timeIcon}/>{hours}h {min}m</h5>}
            
            {distance && (
                <h5><img src={distanceIcon}/>
                    {imperial
                        ? `${Math.round(distance * MetersToFt * ftToMiles)} miles`
                        : `${distance/1000} km`}
                </h5>
            )}
        </div>
    );
};

export default StatsTab;
