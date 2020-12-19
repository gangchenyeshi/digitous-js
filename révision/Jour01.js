//01- HElLLO WORDL
//Ecrivez Le code suivant dans votre fichier :

console.log("Hello World !");

//02- String 
//- Dans votre fichier, créez une variable `test`
//- Donnez lui la valeur `"My name is xxx"` avec votre nom à la place de "xxx"
//- Utilisez ensuite la fonction `console.log()` pour afficher la variable `test` dans la console
//- Lancez ensuite la commande pour exécuter le code

var test = "My name is Yeshi ";
console.log(test);


//03 -Concatenation 
//- Dans votre fichier, créez une variable `name`
//- Donnez lui la valeur `"xxx"` avec votre nom à la place de "xxx"
//- Utilisez ensuite la fonction `console.log()` pour afficher le texte "Nice to meet you" + la variable `name` dans la console
//- Lancez ensuite la commande pour exécuter le code

var name = "Yeshi";
console.log("Nice to meet you " + name);

//04- String Length
//- Dans votre fichier, créez une variable `testLength`
//- Donnez lui la valeur `"I'm very long !"`
//- Utilisez ensuite la fonction `console.log()` pour afficher la longueur de `testLength`
//- Lancez ensuite la commande pour exécuter le code

var testLength ="I'm very Long !";
console.log(testLength);

//05-Replace
//- Dans votre fichier, créez une variable `food`
//- Donnez lui la valeur `"croissant is meh"`
//- Utilisez la méthode `.replace()` pour remplacer "meh" par "so good"
//- Utilisez ensuite la fonction `console.log()` pour afficher le résultat dans la console
//- Lancez ensuite la commande pour exécuter le code

//À partir de maintenant, on vous donnera un peu moins d'indices dans les exercices. C'est à vous de trouver toutes les étapes nécessaires, on ne vous indiquera que les consignes de bases !

var food ="croissant is meh";
console.log(food.replace("meh", "so Good"));


//06-Up and Down
//- Créez une variable `basic` contenant la valeur `"This is Cool"`
//- Créez une variable `basicUp` contenant la version en majuscules de `basic`
//- Créez une variable `basicDown` contenant la version en minuscules de `basic`
//- Faites apparaître les trois variables dans la console

var basic ="This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);



//07-Split
//- Créez une variable `word` contenant la valeur `"banana"`
//- Créez une variable `letters` contenant un tableau des lettres de `word`
//- Faites apparaître `letters` dans la console

var word = "banana";
var letters = word.split('');
 console.log(word);
 console.log(letters);


 //08- Template
 //- Créez une variable `age` contenant la valeur `"xx"` en remplaçant "xx" par votre âge
 //- Créez une variable `template` contenant la phrase "I'm ___ years old" en utilisant une template literal et la variable `age`
 //- Faites apparaître `template` dans la console

 var age = 39;
 var template =`I'am ${age} years old`;
 console.log(template);

 //BONUS
 //It's day one, so we're taking it easy. As a bonus today, we recommend reading the MDN documentation (we told you about it, it's the wikipedia of the code!) On strings. This is a good idea for two reasons:
  // - You will have to get used to reading documentation so you might as well start with simple concepts
  // - Take a good look at the "Methods" section which contains things that we haven't seen in the lesson!
  // Do not hesitate to reproduce the examples and display their result (for example, substring with 1 or 2 parameters)
  // - Play with the escape, try to display a string with two lines, a string mixing single quotes and double quotes
  // - Create a `changed` variable with the value" Hello ", use the doc to display` Banjaur`


  var replaceVar = "Hello";
  console.log(replaceVar.replace(/o/, "a")); //replace method using single index
  console.log(replaceVar.replace("Hello", "Bye")); // replace method using string


  var doubleQuote = "Hello \" I am yeshi\" ";// Front slash \ before the " will be display the output;

  console.log(doubleQuote);


  var changed = "Bonjour";
  console.log(changed.replace(/o/g, "a")); // if  you use the /o /g,"a"  it will replace all the o to a;



  //### CharAt

  //Si vous souhaitez accéder au caractère situé à un endroit précis d'une string, vous utiliserez la méthode **.charAt(a)** :

  var test = "My name is Yeshi";
  var firstChar = test.charAt(0);// it will 0 Index indicate the First character

  console.log(firstChar); // it print ZERO Index
  console.log(test.charAt(3)); //It print Third index

  //### CharCodeAt et FromCharCode
   // it is ASCII CODE OF THE CHARACTER
  test.charCodeAt(0); // it will indicate the ASCII code of 0(zero) Index number

  console.log(test.charCodeAt(0)); // var test Index number zero is M so it dislay ASCII code OF M


  //SEARCH
var test = "I am fine!";
console.log(test.search("am")); // diplay the index number of first letter insearch that is a
console.log(test.search("you"));// it display the -1 because it is not available at here

//substring 
//The **. Substring (a, b) ** method will return a "piece" that starts at index a and ends just before index b:


var test = "My first substring";
var sub = test.substring(3, 8); //it return the INdex value start from 3 and end before 8 that is (7)
console.log(sub);

var end = test.substring(2); // it show index 2 to end
console.log(end);