import { renderHook, act } from '@testing-library/react';
import useWeatherApi from './useWeatherApi';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ main: { temp: 25 }, weather: [{ description: 'Sunny' }] }),
  })
) as jest.Mock;

test('should fetch weather data', async () => {
  const { result } = renderHook(() => useWeatherApi('Paris'));

  await act(async () => {
    // wait for the next update
  });

  expect(result.current.loading).toBe(false);
  expect(result.current.weatherData.main.temp).toBe(25);
  expect(result.current.weatherData.weather[0].description).toBe('Sunny');
  expect(result.current.error).toBe(null);
});

test('handles fetch error', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve({}),
    } as Response)
  ) as jest.Mock;

  const { result } = renderHook(() => useWeatherApi('InvalidCity'));

  await act(async () => {
    // wait for the next update
  });

  expect(result.current.error).toBe('City not found');
});
