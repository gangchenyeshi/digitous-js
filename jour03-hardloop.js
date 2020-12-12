//01 SUM
/*
Create an empty array `numbers`
using a for loop, add 50 random elements between 0 and 100 in your array
using another for loop, calculate the sum of the elements of your array

Créez un tableau vide `numbers`
à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau
à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau
*/
var number = [];
var min = 0;
var max = 100;
for(var i=0; i<5; i++) {
    var random=Math.floor(Math.random() * (max - min));
    console.log(`Random number are : ${random}`);
    number.push(random);
}
console.log(number);
for(var i=number())