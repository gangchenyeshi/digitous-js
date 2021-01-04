// 01 FILE SYSTEM
/*
- Dans le fichier `jour07.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console
- Faites en sorte que chaque clé / valeur apparaisse sur une ligne séparée
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


