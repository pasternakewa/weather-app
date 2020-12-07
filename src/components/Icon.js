import React from "react";

const Icon = ({ weatherIconId, alt }) => {
  return (
    <img
      style={{ width: 100, height: 100 }}
      src={`${process.env.REACT_APP_API_URL_ICON}${weatherIconId}@2x.png`}
      alt={alt}
    />
  );
};

export default Icon;
