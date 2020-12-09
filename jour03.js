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


 //04  ORDER 
 var numbers =[4, 10, 8, 12, 6];
 console.log("Array numbers are : " + numbers);

 //Reverse order
 numbers.reverse();
 console.log("Reverse Number order : " + numbers);

 //ascending order
 numbers.sort();
 console.log("Ascending Number order : " + numbers);

//BUCKLE  (LOOP)
var total = 0;
var limit = 10;

for (var i = 0; i<= limit; i ++ ) {
    //console.log(total = i);
    total +=i;
    console.log(total)

}


//console.log(i);

// Reverse 
