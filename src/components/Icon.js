import React from "react";

const thunderstorm = [200, 201, 202, 210, 211, 212, 230, 231, 232];
const drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
const rain = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
const snow = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
const fog = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
const clear = [800];
const clouds = [801, 802, 803, 804];

const Icon = ({ weatherDescriptionId }) => {
  let iconSuffix;
  if (thunderstorm.includes(weatherDescriptionId)) {
    iconSuffix = "bolt";
  } else if (drizzle.includes(weatherDescriptionId)) {
    iconSuffix = "cloud-showers-heavy";
  } else if (rain.includes(weatherDescriptionId)) {
    iconSuffix = "cloud-rain";
  } else if (snow.includes(weatherDescriptionId)) {
    iconSuffix = "snowflake";
  } else if (fog.includes(weatherDescriptionId)) {
    iconSuffix = "smog";
  } else if (clear.includes(weatherDescriptionId)) {
    iconSuffix = "sun";
  } else if (clouds.includes(weatherDescriptionId)) {
    iconSuffix = "cloud";
  } else {
    iconSuffix = "question";
  }

  return <i className={`fa fa-${iconSuffix}`}></i>;
};

export default Icon;
