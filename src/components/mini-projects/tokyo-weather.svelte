<script>
    let weatherData = {};
    let consolidatedWeatherData = {};
    let nonConsolidatedWeatherData = {};

    async function fetchWeatherData() {
        const response = await fetch(`https://www.metaweather.com/api/location/1118370/`);
        weatherData = await response.json();
        consolidatedWeatherData = weatherData.consolidated_weather;
        nonConsolidatedWeatherData = weatherData.weather;
        console.log(weatherData);
    }

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    function celsiusToFahrenheit(celsius) {
        return celsius * 9/5 + 32;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function getCompassDirection(degree) {
        if (degree >= 337.5 || degree < 22.5) {
            return "N";
        } else if (degree >= 22.5 && degree < 67.5) {
            return "NE";
        } else if (degree >= 67.5 && degree < 112.5) {
            return "E";
        } else if (degree >= 112.5 && degree < 157.5) {
            return "SE";
        } else if (degree >= 157.5 && degree < 202.5) {
            return "S";
        } else if (degree >= 202.5 && degree < 247.5) {
            return "SW";
        } else if (degree >= 247.5 && degree < 292.5) {
            return "W";
        } else if (degree >= 292.5 && degree < 337.5) {
            return "NW";
        } else {
            return "N/A";
        }
    }
</script>

<h1>Weather in Tokyo</h1>

<div>
    <h2>Consolidated Weather</h2>
    {#if consolidatedWeatherData}
        <p>High: {kelvinToCelsius(consolidatedWeatherData[0].max_temp).toFixed(2)}°C / {celsiusToFahrenheit(kelvinToCelsius(consolidatedWeatherData[0].max_temp)).toFixed(2)}°F</p>
        <p>Low: {kelvinToCelsius(consolidatedWeatherData[0].min_temp).toFixed(2)}°C / {celsiusToFahrenheit(kelvinToCelsius(consolidatedWeatherData[0].min_temp)).toFixed(2)}°F</p>
        <p>Humidity: {(consolidatedWeatherData[0].humidity).toFixed(2)}%</p>
        <p>Precipitation: {consolidatedWeatherData[0].weather_state_name}</p>
        <p>Wind: {(consolidatedWeatherData.consolidated_weather[0].wind_speed * 3.6).toFixed(2)} km/h from the {getCompassDirection(consolidatedWeatherData.consolidated_weather[0].wind_direction)}</p>
    {/if}

    <h2>Non-Consolidated Weather</h2>
    {#each nonConsolidatedWeatherData as weather}
        <p>Time: {weather.applicable_date}</p>
        <p>High: {kelvinToCelsius(weather.max_temp).toFixed(2)}°C / {celsiusToFahrenheit(kelvinToCelsius(weather.max_temp)).toFixed(2)}°F</p>
        <p>Low: {kelvinToCelsius(weather.min_temp).toFixed(2)}°C / {celsiusToFahrenheit(kelvinToCelsius(weather.min_temp)).toFixed(2)}°F</p>
        <p>Humidity: {(weather.humidity).toFixed(2)}%</p>
        <p>Precipitation: {weather.weather_state_name}</p>
        <p>Wind: {(weather.wind_speed * 3.6).toFixed(2)} km/h from the {getCompassDirection(weather.wind_direction)}</p>
    {/each}
</div>

<button on:click={fetchWeatherData()}>Fetch Weather Data</button>
