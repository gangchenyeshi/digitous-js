//01   ARRAY or french TABLEAU
var fruits =[ "mango", "lemon", "blueberry"];
console.log(fruits); //It print the all the value in variable fruits

console.table(fruits); //Print in Table with Index number


//02   ACCESS
var ingredients = ["eggs", "milk", "butter"];

//print Milks value
console.log(ingredients[1]);

//print index value of "butter"
console.log(ingredients.indexOf("butter"));


//03  ADD AND REMOVE
 var objects = ["pen", "book", "lamp"];
 console.log("First object List : " + objects);
 
 //ADD the new items at first
 objects.unshift("chair");
 console.log(objects);

 //remove the last
 objects.pop();
 console.log(objects);

 //add at end
 objects.push("laptop");
 console.log(objects);

 //remove first item
 objects.shift();
 console.log(objects);