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
console.log(test ** bis); //Power root
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


 //IF CONDITION
// in this example if you have a only two possible condition than you  use if and else
 var limit = 50;
 var score = 44;
 if (score >= limit) {
     console.log("Ok good!");
 } else {
     console.log("Oh nooo...");
 }

 if(score >= limit) {
     console.log("Very good!!")
 } else if (score==limit){
     console.log("Ok");
 } else{
     console.log("Not good ");
 }

 // Condition 2
 //if else condition
 var password = "azeryY6";
 if (password.length > 5) {
     console.log("The password is secure");
 } else {
     console.log("Try again the Password");
 }

// Condition 3
//If else if 
var upperCase =false;
if (password.length >= 8 && upperCase) {
    console.log("Everything is good and strong password");
}else if (password.length >=8 || upperCase ) {
    console.log("Something is good but not strong ")
} else {
    console.log("Nothing is good not strong");
}

var password = "qsdfsj_u"
//switch 
switch (password.length) {
    case 8:
        case 9:
            case 10:{
        console.log("Password is strong");
        break;
    }
    case 6: 
    case 7: {
        console.log("Password is not strong");
        break;
    } default: {
        console.log("Password is weak");
        break;
    }

}


//RANDOM

var min = 1;
var max = 100;

var random =Math.floor(Math.random()*(max - min + 1)+ min);
 console.log(random);

if  (random === 100) {
    console.log("Yes I win !");
} else if (random > 90 ){
    console.log("So Close Try again ");
} else {
    console.log("Try again");
}

