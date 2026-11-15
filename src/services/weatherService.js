
export async function getWeather() {
    const latitude = 34.2746;
    const longitude = -81.6187;
  
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
      `&longitude=${longitude}` +
      '&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m' +
      '&temperature_unit=fahrenheit&wind_speed_unit=mph';
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Unable to load weather information');
    }
  
    const data = await response.json();
  
    return {
      temperature: Math.round(data.current.temperature_2m),
      humidity: data.current.relative_humidity_2m,
      wind: Math.round(data.current.wind_speed_10m),
      code: data.current.weather_code,
      location: 'Newberry, SC',
    };
  }
  