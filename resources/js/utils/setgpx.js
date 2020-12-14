import React, { useState, useEffect } from "react";
import { gpx } from "@mapbox/togeojson";
import { zipWith } from "lodash";
import haversine from "haversine";
import { differenceInSeconds } from "date-fns";


export const setGpx = gpxFile => {
console.log("set gpx")
    let gpsJson = convertGpxToJson(gpxFile);
    console.log(gpsJson);
    if (!gpsJson){
    return false;
    }else{
        let nth = 12;
        let route = gpsJson.coords.map(point => ({ 
            lat: point.lat,
            lon: point.lon,
            ele: point.elevation,
            time: point.time,
        })).filter((point, index)=>{
            return  index % nth === nth - 1
         });

        return{
            ...gpsJson,
            route,
        }
        console.log(gpsJson)
        // console.log(coords);
    }
};




const convertGpxToJson = (routeGpx) => {
  if (!routeGpx) {
    return;
  }

  // Convert GPX XML to GeoJSON
  const parsed = new DOMParser().parseFromString(routeGpx, "application/xml");
  const converted = gpx(parsed);
  console.log(converted);
if (converted.features.length===0) {
  return false
} 

const name=converted.features[0].properties.name;
  // Combine two arrays into one
  let route = zipWith(
    converted.features[0].geometry.coordinates,
    converted.features[0].properties.coordTimes,
    function (a, b) {
      return {
        lon: a[0],
        lat: a[1],
        elevation: a[2],
        time: b,
        distance: 0,
      };
    }
  );

  // Calculate additional information about route and each route point, for example distance and slope

  const totalTime = differenceInSeconds(
    new Date(route[route.length - 1].time),
    new Date(route[0].time)
    );

  let totalPositiveElevation = 0;
  let totalNegativeElevation = 0;
  let totalDistance = 0;

  for (let i = 0; i < route.length - 1; i++) {
    const start = {
      latitude: route[i].lat,
      longitude: route[i].lon,
    };

    const end = {
      latitude: route[i + 1].lat,
      longitude: route[i + 1].lon,
    };

    // Haversine formula determines distance between two points based on their coordinates
    totalDistance += haversine(start, end);
    route[i + 1].distance = totalDistance;

    const distanceChange = route[i + 1].distance - route[i].distance;
    const elevationChange = route[i + 1].elevation - route[i].elevation;

    if (elevationChange > 0) {
      totalPositiveElevation += elevationChange;
    } else {
      totalNegativeElevation += elevationChange;
    }

    route[i + 1].slope = (elevationChange / (distanceChange * 1000)) * 100;
  }

  return {
    coords: route,
    distance: totalDistance,
    ascent: totalPositiveElevation,
    descent: totalNegativeElevation,
    time: totalTime,
    name,
  };
}

// Naive custom hook for fetching stuff
export function useFetcher(fetchSomethingAPI, inputs) {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState();

  useEffect(() => {
    setIsFetching(true);

    fetchSomethingAPI()
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, inputs);

  return [data, isFetching];
}

// Super naive slope color generator
export function getSlopeColor(slope) {
  let green = 180;
  let red = (slope * 255) / 8;

  if (slope > 8) {
    green = green - ((slope - 3) * 100) / 12;
  }

  return `rgba(${red}, ${green}, 0)`;
}

export function secondsToHm(d) {
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);

  return `${h}:${m}`;
}