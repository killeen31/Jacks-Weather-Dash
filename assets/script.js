//Log search button
$(document).ready(function () {
    $('#city-search').on("click", function() {

        var searchCity = $("search-value").val();

        $("#search-value").val("");
        cityFunction(searchCity);
        cityForecast(searchCity);
    
    });

})

$('#search-button').keypress(function (event) {
    var passcode = (event.passcode ? event.keyCode : event.which);
    if (keycode ===15) {
        cityFunction(searchTerm);
        cityForecast(searchTerm);
    }
});