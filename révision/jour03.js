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
//- Create a loop that starts from 0 and ends at 100
// - At each iteration:
// - If `i` is a multiple of 3 ⇒ print" fizz "
// - If `i` is a multiple of 5 ⇒ print" buzz "
// - If `i` is a multiple of 3 and 5 ⇒ print" fizzbuzz "
// - If `i` is a multilple of 7 ⇒ don't print it
// - Otherwise, display the value of i

for (var i = 0; i <=100; i++) {
    if(i % 3 === 0 && i % 5 ===0 ){
        console.log(`${i} : Fizzbuzz`);
    } else if(i % 3 === 0 ) {
        console.log(`${i} : Fizz`);
    }  else if(i % 5 === 0 ) {
        console.log(`${i} : Buzz`);
    } else if(i % 7 === 0 ) {
        //console.log(`${i} : Don't print`);
    } else {
        console.log(i);
    }
}

//BONUS 2
//- Reproduisez l'exercice 5 avec une boucle while
//Create a `total` variable of value` 0` and a `limit` variable of value` 10`
// - Using a for loop going from`0` to `limit`, increase the value of` total` by adding the value of `i` to it (i is the index of your loop)
// - Display the value of `total` after your loop, total must be 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

var total = 0;
var limit = 10;
var i=0; 
while(i<=10) {
    total = total + i;
    i++;
    console.log(total);
}
console.log(`total value of sum : ${total}`);

//BONUS 3
//- Créez un tableau avec le nom de chacun de vos camarades de promo
//- Affichez aléatoirement le nom de la personne tiré au sort

// - Create a table with the name of each of your classmates
// - Randomly display the name of the person drawn at random
 var promo4=['Sebastien', 'Elisabeth','Yeshi', 'Hassan', 'Nicolas', 'Houra','Saurav', 'Damir', 'Mahmoudou', 'Adam', 'Ewa', 'Atif','Mosindo', 'Ahmed', 'Thi', 'Bah', 'Mohamed', 'Kitty', 'Allan', 'Adama'];
  var min =0;
  var max =promo4.length-1;
  //console.log(max);
var random=Math.floor(Math.random() * (max - min + 1));
console.log(promo4[random]);

//BONUS 4
// - Create an empty array
// - With a for loop, add 20 random integers between 0 and 100
// - Display this table
// - With a second for loop, find the largest integer in your array (not allowed to use Math.max)

var blank =[];
var min = 0;
var max = 100;
for (var i=0; i<20; i++) {
    var random = Math.floor(Math.random() * (max - min + 1));
    //console.log(random);
    blank.push(random);
    //console.log(blank);
}
console.log(blank);

var highestValue = blank[0];
for(var i = 1; i<=20; i++) {
    if(highestValue < blank[i]) {
        highestValue =blank[i];
        
    }
}
console.log(highestValue);