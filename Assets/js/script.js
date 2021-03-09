// click event for search button
// grab user input assign to variable
// assign to variable as value
// 
// 
// 
// 
// 

var apiKey = "67843abc242cc43b51908b533ef15fd4";

// Getting a handle on the user input
// var citySearch = $("#userSearch").val();
// var searchBtn = $("#searchBtn");

// Getting a handle on the main card items
var mainCity = $("#citySearch");
var mainTemp = $("#tempSearch");
var mainWind = $("#windSearch");
var mainUv = $("#uvSearch");

// Getting a handle on the 5 day forecast items
var day1 = $("#day1");
var tempDay1 = $("#tempDay1");
var humidDay1 = $("#humidDay1");

var day2 = $("#day2");
var tempDay2 = $("#tempDay2");
var humidDay2 = $("#humidDay2");

var day3 = $("#day3");
var tempDay3 = $("#tempDay3");
var humidDay3 = $("#humidDay3");

var day4 = $("#day4");
var tempDay4 = $("#tempDay4");
var humidDay4 = $("#humidDay4");

var day5 = $("#day5");
var tempDay5 = $("#tempDay5");
var humidDay5 = $("#humidDay5");


function mainCard (){
    var citySearch = $("#userSearch").val();
    var searchBtn = $("#searchBtn");
    $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`,
    method: "GET",
    dataType: 'json',
    success: function(result){
        console.log(result);
}})};
    
 

searchBtn.click(mainCard());


