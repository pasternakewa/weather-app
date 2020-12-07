import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import Icon from "./components/Icon";

const getQueryUrl = (city) =>
  `${process.env.REACT_APP_API_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [weatherData, setWeatherData] = useState();
  const [cityInput, setCityInput] = useState("Warszawa");
  const [city, setCity] = useState(cityInput);

  const fetchWeatherData = useCallback(() => {
    fetch(getQueryUrl(city))
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("fetch failed");
      });
  }, [city]);

  useEffect(() => {
    setLoading(true);
    fetchWeatherData();
  }, [fetchWeatherData]);

  if (loading) {
    return <p>loading..</p>;
  }

  if (error) {
    return <p>ERROR: {error}</p>;
  }

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      setCity(cityInput);
    }
  };

  return (
    <div>
      <input
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyPress={(e) => handleKeypress(e)}
      />
      <button onClick={() => setCity(cityInput)}>Submit</button>
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
