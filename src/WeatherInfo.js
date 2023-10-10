const weatherConditionElement = document.getElementById("weather-condition");
const weatherConditionIcon = document.getElementById("weather-condition-icon");
const weatherTemp = document.getElementById("weather-temp");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const chanceRain = document.getElementById("chance-rain");
const windSpeed = document.getElementById("wind-speed");

let currentMetric = true;

export const FillWeatherInfo = (pResponseJson) => {

    weatherConditionElement.textContent = pResponseJson.current.condition.text;
    weatherConditionIcon.src = pResponseJson.current.condition.icon;
    humidity.textContent = pResponseJson.current.humidity + "%";
    chanceRain.textContent = pResponseJson.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    
    if(currentMetric)
    {
        weatherTemp.textContent = pResponseJson.current.temp_c + " °C";
        feelsLike.textContent = pResponseJson.current.feelslike_c + " °C"
        windSpeed.textContent = pResponseJson.current.wind_kph + " km/h";
    } else {
        weatherTemp.textContent = pResponseJson.current.temp_f + " °F";
        feelsLike.textContent = pResponseJson.current.feelslike_f + " °F"
        windSpeed.textContent = pResponseJson.current.wind_mph + " mi/h";

    }
} 

export function ChangeMetric() {
    currentMetric = !currentMetric;

    return currentMetric;
} 



