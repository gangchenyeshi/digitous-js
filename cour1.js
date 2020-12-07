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


/*METHOD   String have in-build features(methods) to modify / read heir content
EXAMPLE property like  .length , .replace etc

*/
//String length is count the character length in a string for  example password check length
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


//charAt method  use for if you want to access the character located at a specific place in a string,

var firstTest = "Hello there !";
var newTest = firstTest.charAt(0);
console.log(newTest); //output is H 
console.log(firstTest.charAt(3)); //return l

//charCodeAt and FromCharCode
// charCodeAt method will return you the ASCII code 

var testAscii ="This is a string";
console.log(testAscii.charCodeAt(1));

// fromCharCode method does the opposite and return a character code ASCII
console.log(testAscii.fromCharCode(86));
