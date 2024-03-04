import React from "react";

const Map = ({ src }) => (
  <div className="relative" style={{ paddingTop: "75%" }}>
    <iframe
      src={src}
      className="absolute inset-0 w-full h-[85%]"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default Map;
