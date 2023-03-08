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