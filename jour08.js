var request = require('request');

//01- COUNTRIES
// Using the following url: "[https://restcountries.eu/rest/v1/all
// - Create an empty array `countriesNames`
// - Create an asynchronous `getCountries` function to retrieve the countries and store their names in the array
// - Display the names of the countries retrieved in the console, separated by a hyphen

/*
var countriesNames = [];
request.get("https://restcountries.eu/rest/v2/all", function(error,response, body) {
    var getCountries =JSON.parse(body);
    //console.log(getCountries);
    for(var i=0; i<getCountries.length; i++) {
        countriesNames.push(` -${getCountries[i].name}`);
    }

    console.log(`List of countries name are : ${countriesNames}`);
    // use join method
});


*/
//02-CHUCK NORRIS
// Using the following API (read the documentation carefully): [https://api.chucknorris.io/)
// - Create an asynchronous `getFact` function which will retrieve a random Chuck Norris joke each time the function is started, and which will display it in the console
/*
request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
    var getFact =JSON.parse(body);
   // console.log(getFact);
    console.log(getFact.value); //It is object no need to type [0] because type direct access

});
*/
//03-POKEMON
// Using the superb [PokeAPI] (https://pokeapi.co/) (read the documentation well):
// - Create an asynchronous `catchPokemon` function which will receive a number as a parameter (it will correspond to the id of a pokemon) and which will retrieve the pokemon corresponding to this id. It will then display in the console:
/*
```jsx
id: xxx // remplacer xxx par l'id du pokemon
name: "xxx" // remplacer xxx par le nom du pokémon
```
*/
/*
function catchPokemon(id) {
    var catchId = id;
    console.log(`My CatchPokement ID is : ${catchId}`);
    request.get(`https://pokeapi.co/api/v2/pokemon/${catchId}`, function(error, response, body) {
        var pokemon =JSON.parse(body);
        console.log(pokemon.name);
        
    });
};
catchPokemon(12);

*/

//BONUS
// Do you know Black Jack? Today, we're going to code it! A little reminder of the rules:
// - The player starts with a score of 0
// - The bank starts with a random score between 16 and 21, which will remain hidden until the end of the game
/* - On each turn, the player is asked to draw a card and he can:
    - Draw a card of random value between 1 and 10: this value is added to his score. If his score is greater than 21, the game ends automatically, otherwise we go to the next round ("draw" option)
    - Skip his turn only if his score is greater than 16 which ends the game ("pass" option)
*/
/* - At the end of the game, we announce the score of the player and the bank as well as the result:
    - The player's score is greater than 21 ⇒ he loses
    - The player's score is 21 ⇒ he does a "Black Jack" and wins
    - The player's score is higher than the bank's score ⇒ he wins
    - The score is less than or equal to the bank's score ⇒ he loses
*/
var player1Score = 0;
var player2Score = 0;

for(var i=1; i<=21; i++) {
    /*
    var max = 20;
    var min = 16;
    var bankRandom1 = Math.floor(Math.random() * (max - min + 1) + min);
        //console.log(`Player 1 Bank Random : ${bankRandom1}`);
    var bankRandom2 = Math.floor(Math.random() * (max - min + 1) + min);
        //console.log(`Player 2 Bank Random : ${bankRandom2}`);
    */
    var cardMax =10;
    var cardMin = 1;
    var player1RandomCard = Math.floor(Math.random() * (cardMax - cardMin + 1) + cardMin);
    //console.log(`Player 1 Random Card : ${player1RandomCard}`);
    player1Score += player1RandomCard;

    var player2RandomCard = Math.floor(Math.random() * (cardMax - cardMin + 1) + cardMin);
    //console.log(`Player 2 Random Card : ${player2RandomCard}`);
    player2Score += player2RandomCard;
    if(player1Score => 21) {
        console.log(`Player1 Win !`);
    } else if(player2Score => 21) {
        console.log(`Player2 Win !`);
    }
}
