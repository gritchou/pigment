import Link from 'next/link';
import React from 'react';

interface WeatherDisplayProps {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  linkToCityPage?: boolean;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city, temperature, description, humidity, windSpeed, linkToCityPage }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{city}</h2>
      <p className="text-lg mb-2">{description}</p>
      <p className="text-xl font-semibold">{temperature}°C</p>
      <p className="text-gray-600">Humidity: {humidity}%</p>
      <p className="text-gray-600">Wind Speed: {windSpeed} km/h</p>
      {linkToCityPage && (
        <Link href={`/${city}`} className="text-blue-500 hover:underline mt-4 inline-block">
          View more details about {city}
        </Link>
      )}
    </div>
  );
};

export default WeatherDisplay;
