//Log search button
$(document).ready(function () {
    $('#city-search').on("click", function () {

        var searchCity = $("search-value").val();

        $("#search-value").val("");
        cityFunction(searchCity);
        cityForecast(searchCity);

    });

})

$('#search-button').keypress(function (event) {
    var passcode = (event.passcode ? event.keyCode : event.which);
    if (keycode === 15) {
        cityFunction(searchCity);
        cityForecast(searchCity);
    }
});

var pastData = JSON.parse(localStorage.getItem("pastData")) || [];

if (pastData.length > 0) {
    cityFunction(pastData[pastData.length - 1]);
}

for (var i = 0; i < pastData.length; i++) {
    createRow(pastData[i]);
}

function createRow(text) {
    let listItem = $('<li>').addClass('list-group-item').text(text);
    $('.pastData').append(listItem);
}

$('pastData').on('click', 'li', function () {
    cityForcast($(this).text());
    cityFunction($(this).text());
});



//call the API function
function weatherDashboard(searchTerm) {

    $.ajax({
        type: "GET",
        url: "https://openweatherapp.p.rapidapi.com/" + searchCity + '34125e1a8fmshf014bf9227a0b3ep1322c1jsn35d470e7e88c'



    }).then(function (data) {
        if (pastData.indexOf(searchCity) === -1) {
            pastData.push(searchCity)
            localStorage.setItem("pastData", JSON.stringify(history));
            createRow(searchTerm);
        }

    });
    
    
    var header = $('<h3>').addClass('card-title').text(data.name + " (" + new Date().toLocaleDateString() + ")");
    var img = $('<img>').attr('src', "https://openweatherapp.p.rapidapi.com/" + data.weather[0].icon + ".png");


    var card = $('<div>').addClass("card");
    var cardBody = $('<div>').addClass("card-body");
    var cityTemp = $('<p>').adClass("card-text").text('Temperature:' + data.main.cityTemp + '°F');
    var cityWind = $('<p>').addClass("card-text").text('Wind Speed:' + data.cityWind.speed + 'MPH');
    var cityHumid = $('<p>').addClass("card-text").text('Humidity:' + data.main.humidity + "%")
    console.log(data)

    header.append(img);
    cardBody.append(title, temp, humid, wind);
    card.append(cardBody);
    $('#today').append(card);
    console.log(data);

    function cityForecast(searchTerm) {
        $.ajax({
            type: 'GET', 
            urle: "https://openweatherapp.p.rapidapi.com/" + searchTerm + '34125e1a8fmshf014bf9227a0b3ep1322c1jsn35d470e7e88c'
        
        
        }).then(function (data) {
            console.log(data);
            $('#forecast').html('<h4 class=\"mt-3\'>3-Day Forecast:</h4>').append('div class=\'row\'>');
        }
        
        
        
        
        
        )};


















    const axios = (property)("axios");

    const options = {
        method: 'POST',
        url: 'https://openweatherapp.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': '34125e1a8fmshf014bf9227a0b3ep1322c1jsn35d470e7e88c',
            'X-RapidAPI-Host': 'openweatherapp.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });