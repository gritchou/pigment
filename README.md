# Weather Dashboard

A simple weather dashboard built with Next.js, fetching data from a weather API based on user input. The app supports dynamic city routes and displays weather details like temperature, humidity, and wind speed.

## Demo

[Live demo on Netlify](https://weather-dashboard-next.netlify.app/)

## Features

- Dynamic routing for city-based weather display.
- Reusable components for input, weather data, and error messages.
- Custom `useWeatherApi` hook for fetching weather data.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/gritchou/weather-dashboard.git
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

## Environment Variables

Create a `.env.local` file and set the `NEXT_PUBLIC_WEATHER_API_KEY`:
```bash
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

## Testing

Run tests with:
```bash
yarn test
```
