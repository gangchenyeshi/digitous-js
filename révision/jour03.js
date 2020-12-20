//01 ARRAY
//- Créez une variable `fruits` qui contiendra un tableau avec les valeurs `"mango"`, `"lemon"` et `"blueberry"`
//- Affichez `fruits` dans la console
//- Bonus: essayez `console.table(fruits)`

var fruits =['mango', 'lemon', 'blueberry'];
console.log(fruits);
console.table(fruits);



//02 ACCESS
//- Créez une variable `ingredients` qui contiendra un tableau avec les valeurs `"eggs"`, `"milk"` et `"butter"`
//- Faites apparaître `"milk"` dans la console
//- Faites apparaître l'index de `"butter"` dans la console


var ingredients =['eggs', 'milk', 'butter'];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));




//03 ADD AND REMOVE
//- Créez une variable `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
//- Add `" chair "` to the start of the table then display the result
// - Remove `" lamp "` then display the result
// - Add `" laptop "` at the end of the table then display the result
// - Remove `" chair "` then display the result

var objects =["pen", "book", "lamp"];
 objects.unshift("chair"); ////- unshift Add first index `" chair "` to the start of the table then display the result
 console.log(objects);
 objects.pop();// - pop Remove last index `" lamp "` then display the result
 console.log(objects);
 objects.push("laptop");//// -push Add last index `" laptop "` at the end of the table then display the result
 console.log(objects);
 objects.shift();//// -shift Remove  first index`" chair "` then display the result
 console.log(objects);

//04 ORDER
// - Create a variable `numbers` which will contain an array with the values` 4`, `10`,` 8`, `12` and` 6`
// - Reverse the order of the elements of `numbers` then display the result
// - Arrange the elements of `numbers` in ascending order then display the result

var numbers = [4, 10, 8, 1, 12, 6];
var reversOrder =numbers.reverse();
console.log(reversOrder);
var ascendingOrder =numbers.sort();//will give [1, 10, 2, 4, 5, 8] because 10 is just after 1 in alphabetical order
console.log(ascendingOrder);
var ascendingOrder =numbers.sort((a, b) => a - b); //best sort the number with all range
console.log(ascendingOrder);



//05 BOUCLE
//- Create a `total` variable of value` 0` and a `limit` variable of value` 10`
// - Using a for loop going from`0` to `limit`, increase the value of` total` by adding the value of `i` to it (i is the index of your loop)
// - Display the value of `total` after your loop, total must be 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

var total = 0;
var limit = 10;
for(var i = 0; i<=10; i++) {
    console.log(total);
    total =total + i;
    //console.log(total);
}
console.log(total);


//06 REVERSE
//- Créez une variable `sentence` valant "Hello Konexio !"
//- A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH")

var sentence = "Hello Konexio !";
var sentenceArray =sentence.split(''); //first SPLIT method string to array
//console.log(sentenceArray);
var reverse = sentenceArray.reverse();//Second REVERSE method  for reverse string INDEX
//console.log(reverse);

var reverseSentence =" ";//create blank var for Add the Reverse of sentence "Hello Konexio !"
for (i=0; i <sentence.length; i++) {
    reverseSentence=reverseSentence + reverse[i];// add reverse + index of reverse variable
    //console.log(reverseSentence);
}
console.log(reverseSentence);

//BONUS
//- Créez une boucle qui part de 0 et s'arrête à 100
//- À chaque itération :
//- Si `i` est un multiple de 3 ⇒ affichez "fizz"
//- Si `i` est un multiple de 5 ⇒ affichez "buzz"
//- Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
//- Si `i` est un multilple de 7 ⇒ ne l'affichez pas
//- Sinon, affichez la valeur de i



//BONUS 2
//- Reproduisez l'exercice 5 avec une boucle while



//BONUS 3
//- Créez un tableau avec le nom de chacun de vos camarades de promo
//- Affichez aléatoirement le nom de la personne tiré au sort


//BONUS 4
//- Creez un tableau vide
//- Avec une boucle for, ajoutez 20 entiers aléatoires entre 0 et 100
//- Affichez ce tableau
//- Avec une deuxième boucle for, trouvez l'entier le plus grand de votre tableau (pas le droit d'utiliser Math.max)
