"use client";

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapBox() {
  return (
    <main>
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWVlcmVhayIsImEiOiJjbHZhbXgwNDQweHJpMmpudG1kd2tqMjl0In0.qtuWudqwu_fGNCfUG0Dwkw"
        initialViewState={{
          longitude: 104.991,
          latitude: 12.5657,
          zoom: 7,
        }}
        style={{ width: 600, height: 400, zIndex: 999 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </main>
  );
}
