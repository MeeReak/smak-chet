import { Typography } from "@/components/atoms";
import React from "react";

const Map = () => {
  return (
    <div>
      <Typography fontSize="h3" variant="bold">
        Map
      </Typography>
      <div className="w-full">
        <iframe
          className="w-[35%] h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3126568670227!2d104.92259197489524!3d11.601044088602363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f3148296db%3A0x5b289f3f5cef444!2sSabaiCode!5e0!3m2!1skm!2skh!4v1709196014319!5m2!1skm!2skh"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
