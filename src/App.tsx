import { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

const appStyle = css`
  text-align: center;
`;

const App: React.FC = () => {
  const [location, setLocation] = useState<string>('Tokyo'); // 例として東京を初期値に
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://weather.tsukumijima.net/api/forecast/city/${location}`);
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
        {/* ここに選択可能な地域のオプションを追加 */}
        <option value="Tokyo">東京</option>
        <option value="Osaka">大阪</option>
        {/* 他の地域 */}
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
