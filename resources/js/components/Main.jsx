import Header from "./header";
import React, { Component } from "react";
import LocationSearch from "./locationSeach";
import TrailMap from "./map/TrailMap";

class Main extends Component {
  state = {
    bounds: [
      [50.505, -29.09],
      [52.505, 29.09],
    ],
    center: [0,0],
    initialLayout:true,
  };

  submitLocation = (suggest) => {
    this.setMapViewport(suggest);
    this.setState({
      initialLayout:false,
    })
  };

  setMapViewport = (suggest) => {
    if (suggest) {
      let boundsObj = suggest.gmaps.geometry.viewport;
      let center = [suggest.location.lat, suggest.location.lng];
      let bounds = [
        [boundsObj.Ya.j, boundsObj.Ua.j],
        [boundsObj.Ya.i, boundsObj.Ua.j],
      ];
      this.setState({
        bounds,
        center,
      });
    }
  };

  render() {
    let { submitLocation } = this;
    let { bounds, center, initialLayout } = this.state;
    return (
      <div className="main-container">
        <Header />
        <LocationSearch
          submitLocation={submitLocation}
          initialLayout={initialLayout}
        />
        <TrailMap
          bounds={bounds}
          center={center}
          initialLayout={initialLayout}
        />
      </div>
    );
  }
}

export default Main;
