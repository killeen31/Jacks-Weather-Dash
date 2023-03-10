var apiKey = "2ebc4e2b6834276fea4d0908ecca1c61"
var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=cleveland&units=imperial&appid="

var searchBtn = document.getElementById('search-button')
var searchValue = document.getElementById('search-value')

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