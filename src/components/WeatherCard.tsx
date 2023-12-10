import { css } from '@emotion/css';

const cardStyle = css`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const WeatherCard: React.FC<{ forecast: any }> = ({ forecast }) => {
  return (
    <div className={cardStyle}>
      <h3>{forecast.dateLabel} ({forecast.date})</h3>
      <p>天気: {forecast.telop}</p>
      <p>最高気温: {forecast.temperature.max ? forecast.temperature.max.celsius + '°C' : 'ー'}</p>
      <p>最低気温: {forecast.temperature.min ? forecast.temperature.min.celsius + '°C' : 'ー'}</p>
    </div>
  );
};

export default WeatherCard;
