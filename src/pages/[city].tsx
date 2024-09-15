import React, { Fragment, useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import WeatherDisplay from '../components/WeatherDisplay/WeatherDisplay';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import useWeatherApi from '../hooks/useWeatherApi';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Page: React.FC = () => {
  const router = useRouter();
  const [city, setCity] = useState<string>(router.query.city as string || '');
  const { weatherData, loading, error } = useWeatherApi(city);

  const handleSearch = (city: string) => {
    if (router.query.city !== city) {
      router.push(`/${city}`);
    }
  };

  useEffect(() => {
    if (router.query.city) {
      setCity(router.query.city as string);
    }
  }, [router.query.city]);

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
        />
      )}
      <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Home
      </Link>
    </Fragment>
  );
};

export default Page;
