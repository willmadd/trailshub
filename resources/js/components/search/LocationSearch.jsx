import React, { Component } from 'react';
import SearchModal from './SearchModal';

class LocationSearch extends Component {
//     selectLocation = (suggest) => {
//         console.log("select location hit");
//         let { setMapViewport } = this.props;
//     setMapViewport(suggest.gmaps.geometry.viewport);
//   };
  render() {
    let { submitLocation, initialLayout } = this.props;
    return (
      <div
        className={`search-wrapper ${initialLayout ? "initial" : "secondary"}`}
      >
        <SearchModal
          submitLocation={submitLocation}
          initialLayout={initialLayout}
        />
      </div>
    );
  }
}

export default LocationSearch;