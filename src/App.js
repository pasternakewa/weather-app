import "./App.css";
import React, { useState, useEffect } from "react";
import Icon from "./components/Icon";
import Input from "./components/Input";

const getQueryUrl = (city) =>
  `${process.env.REACT_APP_API_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

const getQueryUrlByCurrentLocation = (currentLocation) => {
  const lat = currentLocation.latitude;
  const lon = currentLocation.longitude;
  return `${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
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

  function handleErrors(response) {
    if (!response.ok) {
      setError("erorr");
      throw Error(response.statusText);
    }
    return response;
  }

  const fetchWeatherData = (url) => {
    setLoading(true);
    const fetchUrl = url ? url : getQueryUrl(city);
    fetch(fetchUrl)
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        if (!city) {
          setCity(data.name);
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("fetch failed");
        console.log("error", e);
      });
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      setCity(city);
      setError();
      fetchWeatherData();
    }
  };

  if (!weatherData || loading) {
    return (
      <div>
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <button onClick={() => fetchWeatherData()}>Submit</button>
        <Icon weatherIconId="50d" alt="Fog" />
        <p>I'm a little foggy...</p>
        <p>Please enter a city or allow access to location.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => handleKeypress(e)}
        />
        <button
          onClick={() => {
            setError();
            fetchWeatherData();
          }}
        >
          Submit
        </button>
        <p>ERROR: {error}. Please enter a valid city and try again.</p>
      </div>
    );
  }

  return (
    <div>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => handleKeypress(e)}
      />
      <button onClick={() => fetchWeatherData()}>Submit</button>
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
