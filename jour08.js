//01- COUNTRIES
// Using the following url: "[https://restcountries.eu/rest/v1/all
// - Create an empty array `countriesNames`
// - Create an asynchronous `getCountries` function to retrieve the countries and store their names in the array
// - Display the names of the countries retrieved in the console, separated by a hyphen
var request = require('request');

var countriesNames = [];
request.get("https://restcountries.eu/rest/v2/all", function(error,response, body) {
    var getCountries =JSON.parse(body);
    //console.log(getCountries);
    for(var i=0; i<getCountries.length; i++) {
        countriesNames.push(getCountries[i].name);
    }

    console.log(`List of countries name are : ${countriesNames}`);

});



//02-CHUCK NORRIS
// Using the following API (read the documentation carefully): [https://api.chucknorris.io/)
// - Create an asynchronous `getFact` function which will retrieve a random Chuck Norris joke each time the function is started, and which will display it in the console

request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
    var getFact =JSON.parse(body);
   // console.log(getFact);
    console.log(getFact.value); //It is object no need to type [0] because type direct access

});