import "./App.css";
import React, { useState, useEffect } from "react";
import Icon from "./components/Icon";
import Input from "./components/Input";

const getQueryUrl = (city) =>
  `${process.env.REACT_APP_API_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

const getQueryUrlByCurrentLocation = ({ latitude, longitude }) => {
  return `${process.env.REACT_APP_API_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const location = { latitude, longitude };
        const url = getQueryUrlByCurrentLocation(location);
        fetchWeatherData(url);
      },
      setLoading(false)
    );
  }, []);

  const fetchWeatherData = (url) => {
    setLoading(true);
    const fetchUrl = url ? url : getQueryUrl(city);
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
        setWeatherData(data);
        setError();
        if (!city) {
          setCity(data.name);
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.toString());
        setWeatherData();
      });
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      fetchWeatherData();
    }
  };

  return (
    <div className="App">
      <div className="circle"></div>
      <div className="weather-container">
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeypress}
        />
        <button onClick={() => fetchWeatherData()}>Submit</button>
        {weatherData && (
          <>
            <p>
              {weatherData?.name}, {weatherData?.sys?.country}
            </p>

            <p>{weatherData?.main?.temp}&#8451;</p>

            <Icon
              weatherIconId={weatherData?.weather?.[0]?.icon}
              alt={weatherData?.weather?.[0]?.description}
            />
            <p>{weatherData?.weather?.[0]?.description}</p>
          </>
        )}
        {error && <p>{error}. Please enter a valid city and try again.</p>}
        {(loading || !weatherData) && <Icon weatherIconId="50d" alt="Fog" />}
        {!error && (loading || !weatherData) && (
          <p>
            I'm a little foggy... Please enter a city or allow access to
            location.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
