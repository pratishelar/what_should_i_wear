var app = angular.module('myApp')

// http service function start
var forecast = function ($http) { 
    var getData = function (city) {
        // open weather api for forecast weather
        return $http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&type=accurate&units=metric&APPID=a7f7e42a4b7c3d7e2d28df4008647347"); 
    }
    return {
        getData: getData
    }
};


app.service('forecast', forecast);
