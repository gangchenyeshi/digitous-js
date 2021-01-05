//01- COUNTRIES
// Using the following url: "[https://restcountries.eu/rest/v1/all
// - Create an empty array `countriesNames`
// - Create an asynchronous `getCountries` function to retrieve the countries and store their names in the array
// - Display the names of the countries retrieved in the console, separated by a hyphen
var request = require('request');

var countriesNames = [];
request.get("https://restcountries.eu/rest/v2/name/france", function(error,respont, body) {
    var getCountries =JSON.parse(body);
    console.log(getCountries[0].name);
    var countrie = getCountries[0].name;
    countriesNames.push(countrie);


    request.get("https://restcountries.eu/rest/v2/name/italy", function(error,respont, body) {
    var getCountries =JSON.parse(body);
    console.log(getCountries[0].name);
    })
    
    request.get("https://restcountries.eu/rest/v2/name/spain", function(error,respont, body) {
    var getCountries =JSON.parse(body);
    console.log(getCountries[0].name);
    })

    request.get("https://restcountries.eu/rest/v2/name/germany", function(error,respont, body) {
    var getCountries =JSON.parse(body);
    console.log(getCountries[0].name);
    })
})
console.log(`List of countries name are : ${countriesNames}`);