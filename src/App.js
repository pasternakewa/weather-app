import "./App.css";
import React, { useState, useEffect } from "react";
import Icon from "./components/Icon";

const getQueryUrl = (city) =>
  `${process.env.REACT_APP_API_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("Warszawa");

  useEffect(() => {
    setLoading(true);
    fetch(getQueryUrl(city))
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log("e", e);
        setError("fetch failed");
      });
  }, [city]);

  if (loading) {
    return <p>loading..</p>;
  }

  if (error) {
    return <p>ERROR: {error}</p>;
  }
  return (
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <p>
        {weatherData?.name}, {weatherData?.sys?.country}
      </p>
      <p>{weatherData?.main?.temp}&#8451;</p>
      <p>{weatherData?.weather?.[0]?.description}</p>
      <Icon
        weatherIconId={weatherData?.weather?.[0]?.icon}
        alt={weatherData?.weather?.[0]?.description}
      />
    </div>
  );
}

export default App;
