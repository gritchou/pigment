import React, { Fragment, useState } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import WeatherDisplay from '../components/WeatherDisplay/WeatherDisplay';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import useWeatherApi from '../hooks/useWeatherApi';

const Page: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const { weatherData, loading, error } = useWeatherApi(city);

  const handleSearch = (city: string) => {
    setCity(city);
  };

  return (
    <Fragment>
      <SearchInput onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weatherData && (
        <WeatherDisplay
          city={weatherData.name}
          temperature={weatherData.main.temp}
          description={weatherData.weather[0].description}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          linkToCityPage={true}
        />
      )}
    </Fragment>
  );
};

export default Page;
