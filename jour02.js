//undefine
var ticket; //variable ticket has not  yet assign the value
console.log(ticket); //out put is undefine

// null 
var empty=null; //The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
console.log(empty);
empty="hello";
console.log(empty);


//Number
var integer = 102; // integer is number without decimal
var float = 13.9; // float is number with decimal
console.log(integer);

console.log(float);

// Convert
var basic = 34;
var stringified = basic;
console.log(stringified);


//Round
var num = 1.4;
var round = num;
console.log(Math.round(round)); //Math.round is and Math object to output the round from float to nearest integer

var num1 = 1.5;
var ceil = num1; //Math.ceil is and Math object to output the round from float to above integer
console.log(Math.ceil(ceil));


console.log(Math.min(2, 0, 21, 0)); //.min is out put the lowest number

// ARITHMETIC OPERATION

var test = 2;
var bis = 5;
 
console.log(test + bis); // addition
console.log(test - bis); //subtraction
console.log(test * bis); //multiplication
console.log(test / bis); //division
console.log(test ** bis); //square root
console.log(test % bis);

//COMPARISON
var test = 143;
var bis = 219;
 
console.log(test>bis);
console.log(test<bis);
console.log(test==bis);
console.log(test>=bis);
console.log(test<=bis);
console.log(test===bis);
console.log(test!=bis);
console.log(test!==bis);


var test = 143;
var bis = 219;
 if (test > bis) {
     console.log('"test" is greater than "bis" ');
 } else if (test === bis) {
    console.log('Both are equal');
 } else {
     console.log(' "test" is smaller than "bis" ');
 }


 //CONDITION
 