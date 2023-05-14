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