//01- NUMBER
//- Créez une variable `integer` et donnez lui la valeur `102`
//- Créer une variable `float` et donnez lui la valeur `13.9` (🚨on utilise le point pour les décimaux quand on code !)
//- Affichez dans la console

var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);

// 02- CONVERT
//- Créez une variable `basic` de valeur `34`
// - Créez une variable `stringified` qui contient la version string de `basic`
// - Affichez `stringified` dans la console
//Si malencontreusement, le formatteur a oublié cette partie dans le cours, pensez soit à regarder le cours sur les nombres, soit à lui demander

var basic =34;
 var stringified = basic.toString(); // convert the integer to string  by .toString method
 console.log(basic.length);// undefined because it is integer
 console.log(stringified.length);//now integer is converted to string and it has 2 string


// 03- ROUND
//- Créez une variable `num` de valeur `1.5`
//- Créez une variable `rounded` qui contient l'arrondi de `num`
//- Affichez `rounded` dans la console

var num = 1.3;
var rounded = Math.round(num); //round method is convert to nearest integer value....
console.log(rounded);

//04 - Arithmétique
//- Créer une variable `test` de valeur `12` et une variable `bis` de valeur `5`
//- Utilisez tous les opérateurs arithmétiques sur ces variables et affichez les résultats


var test = 12;
var bis = 5;

var sum = test + bis; 
console.log(`addition : ${sum}`);
var sub = test - bis;
console.log(`Subtraction : ${sub}`);
var mul = test * bis;
console.log(`Multiplication : ${mul}`);
var div = test / bis;
console.log(`Division : ${div}`);
var power = test ** bis;
console.log(`Power : ${power}`);
var reminder = test % bis;
console.log(`Reminder : ${reminder}`);


//05 COMPARISON
//- Créez une variable `test` de valeur `143` et une variable `bis` de valeur `219`
//- Utilisez tous les opérateurs de comparaison avec ces variables et affichez les résultats

var test = 143;
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

//06 CONDITION
// - Create a `limit` variable of value` 50` and a `score` variable of value` 64`
// - Create a condition: if the score is greater than or equal to the limit, display "Ok good!", Otherwise display "Oh nooo ..."
// - Change the score value to change the result

var limit = 70;
var score = 64;
 if(score >= limit) {
     console.log("Ok good !");
 }else {
     console.log("Oh nooo .... ");
 }


 //07 CONDITION 2
 //- Créez une variable `password` de valeur `"azerty"`
 //- À l'aide d'une condition, affichez "The password is secure" si `password` a une longueur plus grande que 5
 var limit = 70;
 var score = 64;
 var password ="azerty";
 if( password.length > 5) {
     console.log("The password is secure");
 } else {
    console.log("The password is not secure");
 }


 //08 CONDITION 3 
//- Combine the two previous conditions (exercises 6 and 7)
// - Display "Everything is good" if both conditions are true
// - Display "Something is good" if one of the two conditions is true
// - Display "Nothing is good" if neither of the two conditions is true

var limit = 70;
 var score = 64;
 var password ="azty";
 if( password.length > 5 && score >= limit) {
     console.log("Everything is good");
 } else if (password.length > 5 || score >= limit){
    console.log("Something is good");
 } else {
     console.log("Nothing is good");
 }


