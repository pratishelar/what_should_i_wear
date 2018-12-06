var app = angular.module('myApp', []);

// controller function starts
var forecastCtrl = function ($scope, forecast) { 
    $scope.submitSearch = function (city) {
        // forecast service called
        forecast.getData($scope.city) 
        // if service call is successful
            .success(function (data) {  
            
                $scope.myData = data.list;
                // console.log($scope.myData);
                $scope.myData.forEach(function (obj) {
                    var weather = obj.weather[0].main;
                    var temp = obj.main.temp;
                    var humidity = obj.main.humidity;
                    
                    // console.log("temp", temp);
                    // console.log("weather", weather);
                    switch (weather) { // check the weather and temperature and add links to object if condition is true 
                        case 'Rain':
                            if (temp > 5 && temp < 15) {
                                obj.imgurl = "plus_5_to_plus_15_rainy.png";
                                obj.imglink = "https://www.sportchek.ca/categories/men/jackets-coats-vests/rain-jackets/product/woods-mens-joffre-2-layer-everyday-rain-jacket-332558105.html#332558105%5Bcolor%5D=40";
                            } else if ((temp > -15) && (temp < 5)) {
                                obj.imgurl = "5tominus15rain.png";
                                obj.imglink = "https://www.sportchek.ca/categories/men/apparel/jackets-coats-vests/winter-jackets/ski-snowboard-jackets/product/woods-mens-burgess-insulated-jacket-332611541.html#332611541%5Bcolor%5D=01";
                            }
                            else{
                                obj.imgurl = "default.png";
                                obj.imglink = "#";
                            }
                            break;
                        case 'Snow':
                            if (temp > -15 && temp < 5){
                                 obj.imgurl = "plus_5_to_minus_15_snowy.png";
                            obj.imglink = "https://www.sportchek.ca/categories/men/apparel/jackets-vests/winter/ski-snowboard/product/woods-mens-sanford-mid-layer-down-jacket-332611453.html#332611453%5Bcolor%5D=60";
                            } 
                            else{
                                obj.imgurl = "default.png";
                                obj.imglink = "#";
                            }
                            break;
                         case 'Clear':
                            if (temp > -15 && temp < 5){
                                 obj.imgurl = "plus_5_to_minus_15_snowy.png";
                            obj.imglink = "https://www.sportchek.ca/categories/men/apparel/jackets-vests/winter/ski-snowboard/product/woods-mens-sanford-mid-layer-down-jacket-332611453.html#332611453%5Bcolor%5D=60";
                            } 
                            else if ((temp > 30) && (humidity > 70)){
                            obj.imgurl = "warm_weather.png";
                            obj.imglink = "https://www.sportchek.ca/categories/men/apparel/tops/short-sleeve-tee/outdoor-hiking/product/woods-mens-michener-performance-short-sleeve-shirt-navy-332559639.html#332559639%5Bcolor%5D=44";
                            }
                            else{
                                obj.imgurl = "default.png";
                                obj.imglink = "#";
                            }
                            break;
                        default:
                            if (temp < -15) {
                                obj.imgurl = "under_minus_15_all_conditions.png";
                                obj.imglink = "https://www.sportchek.ca/categories/men/jackets-coats-vests/winter-jackets/parkas/product/woods-mens-alverstone-iconic-expedition-down-parka-332611705.html#332611705%5Bcolor%5D=01";
                            } 
                            else if ((temp > 30) && (humidity > 70)){
                            obj.imgurl = "warm_weather.png";
                            obj.imglink = "https://www.sportchek.ca/categories/men/apparel/tops/short-sleeve-tee/outdoor-hiking/product/woods-mens-michener-performance-short-sleeve-shirt-navy-332559639.html#332559639%5Bcolor%5D=44";
                            }
                            else{
                                obj.imgurl = "default.png";
                                obj.imglink = "#";
                            }
                    }

                });
                  console.log("Aftert", $scope.myData);

            })
            .error(function (e) { // if service dosent get data

                $scope.display = "Sorry, something's gone wrong ";

            });
    }

}; // controller function ends

app.controller('forecastCtrl', forecastCtrl);
