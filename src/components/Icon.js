import React from "react";

const Icon = ({ weatherIconId, alt }) => {
  return (
    <img
      style={{ width: 100, height: 100 }}
      src={`http://openweathermap.org/img/wn/${weatherIconId}@2x.png`}
      alt={alt}
    ></img>
  );
};

export default Icon;
