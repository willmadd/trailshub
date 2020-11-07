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
const {hoverOnLine, route} = this.props;;
        return (
            <div className="ElevationProfile">
                {(route.length > 0 && route[0].y) ?<FlexibleWidthXYPlot height={150} style={styles}>
                    <LineSeries
                        data={route}
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
