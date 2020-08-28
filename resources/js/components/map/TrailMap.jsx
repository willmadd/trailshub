import React, { Component } from "react";
import axios from 'axios'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  Polygon,
  Polyline,
} from "react-leaflet";
import { convertGpxToJson, useFetcher } from "../../../helpers/gpxToJson";
import { routeNidderdale } from "../../../testData/nidderdale";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { EsriProvider } from "leaflet-geosearch";
const style_id = `cka5ncmgs19io1io3qn27wejb`;
const access_token = `pk.eyJ1Ijoid2lsbG1hZGQiLCJhIjoiY2thNW43amlvMDFteDNtcGEyMWpxeWwzcCJ9.wfx7i_G1rWq3roofKl7XhQ`;

class TrailMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 5,
    route: null,
    keyMAP: 0.5,
  }

  highlightFeature = (e) => {
    console.log(e.target);
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
  };

  // searchQuery = async () => {
    // const provider = new OpenStreetMapProvider();
    //   const provider = new EsriProvider();
    //   // search
    //   const results = await provider.search({
    //     query: "Lake District National Park, United Kingdom",
    //   });
    //   console.log(results);
  // };

  componentDidMount() {
    console.log('finding trails');
  axios.get("/api/trails")
  .then(res=>{
    console.log('result!');
    console.log(res);
  });
    // this.searchQuery();
    // let jsonRoute = convertGpxToJson(routeNidderdale);
    // this.setState({
    //   route: jsonRoute,
    // });
  }

componentDidUpdate=(prevProps, prevState)=>{
  if(prevProps.initialLayout !== this.props.initialLayout){
    this.setState({
      keyMAP: Math.random(),
    });
  }
}

  render() {
    let { initialLayout, center } = this.props;
    const position = [this.state.lat, this.state.lng];
    const route = this.state.route;
console.log('map render');
    return (
      <Map
        className={`mapid ${initialLayout ? "initial" : "secondary"}`}
        center={center}
        zoom={this.state.zoom}
        scrollWheelZoom={false}
        bounds={this.props.bounds}
        key={this.state.keyMAP}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={
            `https://api.mapbox.com/styles/v1/willmadd/${style_id}/tiles/{z}/{x}/{y}?access_token=` +
            access_token
          }

        />
        {/* {route && <GeoJSON positions={route.route} />} */}
        {/* <GeoJSON data={route.route} /> */}
        <div className="hel">
          {route && (
            <div className="polygon">
              <Polyline positions={route.route} />
            </div>
          )}
        </div>
        <Marker position={position}/>

        {/* <GeoJSON mouseOver={this.highlightFeature} data={data} onClick={this.props.city} /> */}
      </Map>
    );
  }
}

export default TrailMap;
