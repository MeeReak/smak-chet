"use client";

import React, { useState, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";

export default function MapBox() {
  const [markers, setMarkers] = useState<
    { longitude: number; latitude: number }[]
  >([]);

  const handleMapClick = (e: any) => {
    const { lngLat } = e;
    const newMarker = {
      longitude: lngLat.lng,
      latitude: lngLat.lat,
    };
    setMarkers([newMarker]);
  };

  return (
    <main>
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWVlcmVhayIsImEiOiJjbHZhbXgwNDQweHJpMmpudG1kd2tqMjl0In0.qtuWudqwu_fGNCfUG0Dwkw"
        initialViewState={{
          longitude: 104.991,
          latitude: 12.5657,
          zoom: 7,
        }}
        style={{ width: 1024, height: 400, zIndex: 999 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
          />
        ))}
      </Map>
    </main>
  );
}
