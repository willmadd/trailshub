import React from "react";
import { __ } from "../../../translations/translator";
import DifficultyIndicator from "./difficultyIndicator";


const Statistics = ({ stats, difficulty }) => {
    let KMtoMileRatio = 0.621371;
    let FTtoMeterRatio = 3.280839895;
    let metersPerDecondToMilesPerHour = 2.2369;
    let metersTravelled = stats.totalDistance * 1000;
    let mph = (metersTravelled/stats.totalTime )*metersPerDecondToMilesPerHour;
    return (
        <div className="statistics">
            <div className="difficulty statArea">
                <div className="statAreaContent">
                    <div className="icon icon-difficulty"></div>
                    <div className="statAreaText">
                        <DifficultyIndicator diff={Number(difficulty)}/>
                    </div>
                </div>
            </div>
            <div className="distance statArea">
                <div className="statAreaContent">
                    <div className="icon icon-distance"></div>
                    <div className="statAreaText">
                        <p>{`${stats.totalDistance.toFixed(2)} KM`}</p>
                        <p>{`${(stats.totalDistance * KMtoMileRatio).toFixed(
                            2
                        )} Miles`}</p>
                    </div>
                </div>
            </div>
            <div className="time statArea">
                <div className="statAreaContent">
                    <div className="icon icon-time"></div>
                    <div className="statAreaText">
                {stats.totalTime?<p>{`${new Date(stats.totalTime * 1000)
                            .toISOString()
                            .substr(11, 5)}`}</p>:<p>No Time Data Available</p>}

                    </div>
                </div>
            </div>
            <div className="speed statArea">
                <div className="statAreaContent">
                    <div className="icon icon-speed"></div>
                    <div className="statAreaText">
                    {stats.totalTime?<React.Fragment>
                        <p>{`${(mph/KMtoMileRatio).toFixed(2)} KPH`}</p>
                        <p>{`${mph.toFixed(2)} MPH`}</p>
                    </React.Fragment>:<p>No Speed Data Available</p>}
                    </div>
                </div>
            </div>
            <div className="ascent statArea">
                <div className="statAreaContent">
                    <div className="icon icon-ascent"></div>
                        {!stats.totalPositiveElevation?<p>No Elevation Data Available</p>:
                    <div className="statAreaText">
                        <p>{`${stats.totalPositiveElevation.toFixed(0)} M`}</p>
                        <p>
                            {`${(
                                stats.totalPositiveElevation * FTtoMeterRatio
                            ).toFixed(0)} ft`}
                        </p>
                    </div>
                        }
                </div>
            </div>
            <div className="descent statArea">
                <div className="statAreaContent">
                    <div className="icon icon-descent"></div>
                    {!stats.totalPositiveElevation?<p>No Elevation Data Available</p>:                    
                    <div className="statAreaText">
                        <p>{`${stats.totalNegativeElevation.toFixed(0)} M`}</p>
                        <p>
                            {`${(
                                stats.totalNegativeElevation * FTtoMeterRatio
                            ).toFixed(0)} ft`}
                        </p>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Statistics;
