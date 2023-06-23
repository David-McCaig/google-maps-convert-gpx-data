import React from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { useEffect } from 'react';
import jsonData from "./testData.json"
import gpxData from "./gpx/lord-of-the-possums.gpx"
// var xml2js = require('xml2js');
import gpxParser from "gpxparser"


function App() {

  var gpx = new gpxParser()
const test = gpx.parse(gpxData)

console.log(test)


  const containerStyle = {
    margin: "auto",
    width: '700px',
    height: '700px'
  };
  
  const center = {
    lat: -43.59909,
    lng: 172.63241
  };


    const flightPlanCoordinates = [
      { lat: -43.59909, lng: 172.63241 },
      { lat: -43.69909, lng: 172.63241 },
    ];
 


  // const flightPath = new Polyline({
  //   path: flightPlanCoordinates,
  //   geodesic: true,
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2,
  // });

  // useEffect(() => {

  //   parseString(gpxData, function (err, result) {
  //     console.dir(result);
  // });

  // },[])

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Polyline
              path={flightPlanCoordinates}
              strokeColor="#FF0000"
              strokeOpacity={1}
              strokeWeight={2} />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default App

