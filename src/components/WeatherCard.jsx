
import { useEffect, useState } from 'react';
import { CloudSun, Droplets, Wind } from 'lucide-react';
import { getWeather } from '../services/weatherService';

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadWeather() {
      try {
        const data = await getWeather();
        if (active) setWeather(data);
      } catch {
        if (active) setError('Weather is currently unavailable.');
      } finally {
        if (active) setLoading(false);
      }
    }

    loadWeather();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="weather-card">
      <h2>
        <CloudSun size={23} />
        Training Weather
      </h2>

      {loading && <p>Loading live weather...</p>}

      {error && <p role="alert">{error}</p>}

      {weather && (
        <>
          <p className="weather-location">{weather.location}</p>
          <p className="temperature">{weather.temperature}°F</p>

          <div className="weather-details">
            <span>
              <Droplets size={18} />
              Humidity: {weather.humidity}%
            </span>
            <span>
              <Wind size={18} />
              Wind: {weather.wind} mph
            </span>
          </div>
        </>
      )}
    </section>
  );
}

export default WeatherCard;
