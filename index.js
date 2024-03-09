const apiKey = '44a4202671c1fe6f6a91cde16156bb56';

window.addEventListener('load', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  } else {
    console.error('Geolocation is not available.');
  }
  console.log(data);
});

function displayWeather(data) {
  const weatherElement = document.getElementById('weather');
  const { name, main, weather } = data;
  const { temp, humidity } = main;
  const { description } = weather[0];

  weatherElement.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Weather: ${description}</p>
  `;
}

