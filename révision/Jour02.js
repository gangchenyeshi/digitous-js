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


//BONUS
//- Créez une variable `random` qui contient une valeur aléatoire entre 1 et 6 (nombres entiers seulement)
//- À l'aide d'une condition, affichez "Yes I win !" si `random` est égal à 6, et "So close..." dans les autres cas

//Create a variable `random` that contains a random value between 1 and 6 (whole numbers only)
// - Using a condition, display "Yes I win!" if `random` is equal to 6, and" So close ... "in the other cases
var max = 6;
var min = 1; 
var random = Math.floor(Math.random() * (max - min + 1)+min);
 console.log(random);
 if (random ===6) {
     console.log("Yes I win!");
    }else{
      console.log("So Close ...");  
    }


//BONUS 2
//- Créez une variable `month` de valeur `"January"`
//- À l'aide d'un switch, affichez "Winter", "Spring", "Summer" ou "Fall" selon la valeur du mois
//- Changez la valeur de `month` pour changer le résultat

var month ="September";
switch(month) {
    case "January":
    case "February":
    case "December":
        console.log("Winter");
        break;

    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
            
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
     default:
         console.log("Fall");       

}

if(month ==="January" || month ==="February" || month ==="December") {
    console.log("Winter !");
} else if(month ==="March" || month ==="April" || month ==="May") {
    console.log("Spring !");
} else if(month ==="June" || month ==="July" || month ==="August") {
    console.log("Summer !");
} else {
    console.log("Fall");  
}

//BONUS 3
//- Create a `roundedNumber` variable of value` 3.6`
// - Using only `Math.floor ()`, `Math.ceil ()`, math operations and an `if () {} else {}` reproduce the result of `Math.round ()`
// - Change the value of `roundedNumber` (with 3.3, 3.8 and 12.4) to change the result

var roundedNumber = 3.8;
var decimalValue = roundedNumber - Math.floor(roundedNumber); 
console.log(decimalValue);

var result = 0;
if (decimalValue >= .5) {
    result = Math.ceil(roundedNumber);//Math.ceil is function always rounds a number up to the next largest integer.
} else {
    result = Math.floor(roundedNumber);//Math.floor is function always rounds a number up to the next Lowest integer.
}
console.log(result, Math.round(roundedNumber));


//BONUS 4
// - We will start to do things a little more concrete (and suddenly more complicated!) And to program an artificial intelligence (word which is scary but do not worry)
// - Start by creating an account on [CodinGame] (https://www.codingame.com/) and share your nickname with your favorite trainer
// - Try to solve the following problem: [Thor vs Thunder] (https://www.codingame.com/ide/puzzle/power-of-thor-episode-1)



