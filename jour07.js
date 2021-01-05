// 01 FILE SYSTEM
/*
- Dans le fichier `jour07.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console

*/
var fs = require("fs");
 
fs.readFile("./jour07.txt", function(error, data) {
    console.log(error);
    console.log(data.toString());
    
})

//02 MAP DOUBLE
// - Create an `array` variable containing an array that will contain the values` 1`, `2`,` 3`, `4` and` 5`
// - Create a `double` variable which will call the` .map () `method to hold the double values of` array`
// - Display the values of `double` in the console
var array = [2, 3, 4, 5];
var double = array.map(function(num)  {
    return num * 2;
})
console.log(double);
console.log(double);
//03-MAP NAMES
//- Créez une variable `longNames` contenant la valeur suivante :
//- Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

console.log(longNames[0].lastName);
var shortName = longNames.map(function(element) {
    return {name:element.firstName + ' ' + element.lastName};
    /*
    var names = {
        name: `${element.firstName} ${element.lastName}`;
    } 
    return name;
    */
})
console.log(shortName);


//04 FILTER NUMBERS
//- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// - Create a `numbers` variable which will call the` .filter () `method to contain the ** numbers ** of` array`
//- Affichez les valeurs de `numbers` dans la console

var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter(function(element) {
    return typeof element === 'number';
    //return typeof element === 'string';

    //return element > 0 ;
    //return isNaN(element) === false;
    //return parseInt(element);
})
console.log(numbers);

//05 Filter EVEN
// - Create a variable `numbers` containing an array that will contain the values` 1`, `2`,` 3`, `4`,` 5`, `6`,` 7` and `8`
// - Create an `even` variable which will call the` .filter () `method to contain the ** even ** numbers of` numbers`
// - Display the values of `even` in the console

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even =numbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(even);

//06-cake
//- Créez une variable `cakes` contenant la valeur suivante :
var cakes =[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];

//- À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
//- Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console

var cakeChocolates = cakes.filter(function(element) {
    return element.flavor === 'chocolate';
}).map(function(element) {
    element.status = "Sold Out !";
    return element;
});
console.log(cakeChocolates);



//bonus
// Do you know the game of ** Hangman **? Today we will code it using the npm prompt module! A little reminder of the rules:
// - A mystery word is proposed, each letter is indicated by an underscore `_`
// - The player has ten attempts to guess the mystery word, and for each attempt he suggests a letter:
// - If the letter is in the mystery word, each corresponding letter is displayed
// - If the letter is not in the word, the following message is displayed: "oops ... more than x chances!" (x will be replaced by the number of remaining attempts)
// ⇒ Display a message in case of victory or defeat

var prompt = require("prompt");
var randomWord =require("random-words")