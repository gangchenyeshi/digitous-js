// Display Hello World in console.log
console.log("Hello World !");
console.log("Welcome to javascript World");

// create a variable string type
var test = "My name is Yeshi"; //first way to create variable declare and assign in one line
console.log(test);


var school;  //Second way to create variable declare one line
school = "Konexio" // and assign in one line


// Concatenation mean Join the two string together
var name = "yeshi";
console.log("Nice to meet you " + name + ".");

var familyName = 'Gangchen';
console.log("My name is " + name + " " + familyName) ; //for concatenation two string can posible not two number


//String length is count the character length in a string
var testLength = "I'm very long!";
console.log(testLength.length);


//REPLACE is change or replace your value or index
var food = "increasing is meh";
console.log(food.replace("meh", "so good"));


// UpperCase and LowerCase
var basic = "This is Cool";
console.log(basic);
var basicUp = basic;
console.log(basicUp.toUpperCase());
var basicDown = basic;
console.log(basicDown.toLowerCase());


//SPLIT is split the word in to character
var word = "banana";
var letter = word;
console.log(letter.split(""));


//TEMPLATE it is similar as Concatenation
var age = 39;
var template = "I'm " + age + " years old";
console.log(` Hello ${template}`);

var firstName = "Yeshi";
var secondName = "Gangchen";
console.log("My first name is " + firstName + " second name is " + secondName); //syntaxe classique like Concatenation
console.log(`My first name is ${firstName} second name is ${secondName} `); //Template leteral

//back single quote
console.log(`I'am ${firstName} ${secondName}`); // if you using the TEMPLATE never mix back single quote (`) and single quote (') complitely different


//single quote and double quote use
console.log("I'am " + firstName);
console.log('I am "Yeshi" ');