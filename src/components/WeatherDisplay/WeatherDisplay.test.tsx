import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherDisplay from './WeatherDisplay';
import '@testing-library/jest-dom';

test('renders weather information correctly', () => {
  render(<WeatherDisplay city="Paris" temperature={25} description="Sunny" humidity={50} windSpeed={10} />);

  expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature: 25°C/i)).toBeInTheDocument();
  expect(screen.getByText(/Description: Sunny/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity: 50%/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed: 10 km\/h/i)).toBeInTheDocument();
});
