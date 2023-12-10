import { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import locations from './locations.json';

const appStyle = css`
  text-align: center;
`;

const App: React.FC = () => {
  const [location, setLocation] = useState<string>(locations[0].id);
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://weather.tsukumijima.net/api/forecast/city/${location}`);
        console.log(response.data); // デバッグ用
        setWeatherData(response.data);
      } catch (error) {
        console.error('Weather data fetch error:', error);
      }
    };

    fetchWeatherData();
  }, [location]);

  return (
    <div className={appStyle}>
      <h1>天気予報アプリ</h1>
      <select value={location} onChange={e => setLocation(e.target.value)}>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.id}>{loc.name}</option>
        ))}
      </select>

      {weatherData && weatherData.forecasts
        ? weatherData.forecasts.slice(0, 3).map((forecast: any, index: number) => (
            <WeatherCard key={index} forecast={forecast} />
          ))
        : <p>天気データを読み込み中...</p>
      }
    </div>
  );
};

export default App;
