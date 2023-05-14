var apiKey = "2ebc4e2b6834276fea4d0908ecca1c61"
var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=cleveland&units=imperial&appid="

const searchBtn = document.getElementById('search-button')
const searchValue = document.getElementById('search-value')
const searchHistoryEl = document.getElementById('search-history')
const searchFormEl = document.getElementById('search-form')
const searchInputEl = document.getElementById('search-input')
const currentConditionsEl = document.getElementById('current-conditions')
const forecastEl = document.getElementById('forecast')

async function getWeather(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    const response = await fetch("2ebc4e2b6834276fea4d0908ecca1c61")
    const data = await response.json()
    return data
}

async function displayCurrentConditions () {
    const cityName = data.name
    const date = new Date(data.dt * 1000)
    const iconCode = data.weather[0].icon
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`
    const temp = data.main.temp
    const wind = data.wind.speed
    const humidity = data.main.humidity
    const uvIndex = await getUvIndex(data.coord.lat, data.coord.lon)
    const currentConditions = await getWeather(searchValue.value)
    console.log(currentConditions)
}

currentConditionsEl.innerHTML = `
<h2>${cityName}</h2>
<p>Date: ${date}</p>
<img src="${iconUrl}" alt="Weather Icon">
<p>Temperature: ${temp} °F</p>
<p>Wind Speed: ${wind} mph</p>
<p>Humidity: ${humidity}%</p>
<p>UV Index: ${uvIndex}</p>
`;


async function displayForecast(data) {
    const forecastData = data.list.filter((item) => item.dt_txt.includes('12:00:00'))
    const forecast = await getForecast(searchValue.value)
    console.log(forecast)
    let forecastHtml = ''
}

forecastData.forEach((day) => {
    const date = new Date(day.dt * 1000)
    const iconCode = day.weather[0].icon
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`
    const temp = day.main.temp
    const wind = day.wind.speed
    const humidity = day.main.humidity

    forecastHtml += `
    <div>
      <p>Date: ${date}</p>
      <img src="${iconUrl}" alt="Weather Icon">
      <p>Temperature: ${temp} °F</p>
      <p>Wind Speed: ${wind} mph</p>
      <p>Humidity: ${humidity}%</p>
    </div>
  `;
});

forecastEl.innerHTML = forecastHtml;




   













const currentTemp = document.getElementById('current-temp')
const currentWind = document.getElementById('current-wind')
const currentHumidity = document.getElementById('current-humidity')

function currentCity() {
    var cityName = searchValue.value.trim()
    var currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    fetch (currentWeather)
.then ((response)=> {
    return response.json()
})
.then ((data)=>{
    console.log(data)
})
    
}

searchBtn.addEventListener("click", currentCity)


function fiveDayCast() {
    var cityName = searchValue.value.trim();
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=YOUR_API_KEY`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the retrieved data here
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

searchBtn.addEventListener('click', fiveDayCast)