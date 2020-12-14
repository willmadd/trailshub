import React, { Component } from "react";
import "react-vis/dist/style.css";
import {
    LineSeries,
    HorizontalGridLines,
    FlexibleWidthXYPlot, XAxis, YAxis,
} from "react-vis";
import {__} from '../../../translations/translator'

class ElevationProfile extends Component {
    render() {

const styles = {fontFamily:"'Questrial', sans-serif"}
const {hoverOnLine, route} = this.props;

const graphData = route.map(dataPoint=>{
    return {
        y:dataPoint.elevation,
        x:dataPoint.distance
    }
})

        return (
            <div className="ElevationProfile">
                {(graphData.length > 0 && graphData[0].y) ?<FlexibleWidthXYPlot height={150} style={styles}>
                    <LineSeries
                        data={graphData}
                        onNearestXY={hoverOnLine}
                        color="#87BE31"
                    />
                    <HorizontalGridLines />
                    <XAxis tickFormat={v => `${v}km`} />
                    <YAxis tickFormat={v => `${v}m`} />


                </FlexibleWidthXYPlot>:<div className="no-elevation">
                    <h2>{__("Could not display elevation profile - There is no elevation data in this GPX File")}</h2>
                </div>}
                
            </div>
        );
    }
}

export default ElevationProfile;
