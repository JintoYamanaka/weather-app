import { css } from '@emotion/css';
import { Forecast, Temperature } from './../types';

const cardStyle = css`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const WeatherCard: React.FC<{ forecast: Forecast }> = ({ forecast }) => {
    const getTemperature = (temp: Temperature) => temp && temp.celsius !== null ? `${temp.celsius}°C` : 'データなし';
  
    return (
      <div className={cardStyle}>
        <h3>{forecast.dateLabel} ({forecast.date})</h3>
        <p>天気: {forecast.telop}</p>
        <img src={forecast.image.url} alt={forecast.image.title} />
        <p>最高気温: {getTemperature(forecast.temperature.max)}</p>
        <p>最低気温: {getTemperature(forecast.temperature.min)}</p>
      </div>
    );
  };

export default WeatherCard;
