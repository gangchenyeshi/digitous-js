// ## 05 - Dress up characters
// You have created a game with characters and want to write a script that selects their clothes.
// 1. You create a table that contains the outfit they all should wear and another that lists all possible colors. Copy the two tables below:


//var clothes = ["shirt", "pants", "jacket", "shoes"];
//var colors = ["blue", "red", "green", "yellow"];
/*
2. Create a `displayOnShelves` function that takes two parameters` clothes` and `colors` and returns a list of` shelves` list representing each of the shelves in the cabinet. This function should generate the following result:

    ["blue shirt", "red shirt", "green shirt", "yellow shirt"],
    ["blue pants", "red pants", "green pants", "yellow pants"],
    ["blue jacket", "red jacket", "green jacket", "yellow jacket"],
    ["blue shoes", "red shoes", "green shoes", "yellow shoes"],

*/
var clothes = ["shirt", "pants", "jacket", "shoes"];
var colors = ["blue", "red", "green", "yellow"];
var shelve1 =[];
var shelve2 =[];
var shelve3 =[];
var shelve4 =[];
for( var i=0; i<+colors.length; i++) {
    
    shelve1.push(colors[i] + " " + clothes[0]);
    shelve2.push(colors[i] + " " + clothes[1]);
    shelve3.push(colors[i] + " " + clothes[2]);
    shelve4.push(colors[i] + " " + clothes[3]);
}
console.log(shelve1);
console.log(shelve2);
console.log(shelve3);
console.log(shelve4);



function getDressed() {
    var max =shelve1.length;
    var min =1;
    var randomshelve1 = Math.floor(Math.random() * (max - min + 1) +min);
    outfit.push(shelve1[randomshelve1]);   
   
    var max =shelve2.length;
    var min =1;
    var randomshelve2 = Math.floor(Math.random() * (max - min + 1) +min);
    outfit.push(shelve2[randomshelve2]);    

    var max =shelve3.length;
    var min =1;
    var randomshelve3 = Math.floor(Math.random() * (max - min + 1) +min);
    outfit.push(shelve3[randomshelve3]); 

    var max =shelve4.length;
    var min =1;
    var randomshelve4 = Math.floor(Math.random() * (max - min + 1) +min);
    outfit.push(shelve4[randomshelve4]); 
}

var outfit = [ ];

console.log(getDressed(outfit));
/* 
    3. Now create a `getDressed` function that randomly selects one item of clothing from each shelf. You will get, for example:

    `` jsx
    var outfit = ["red shirt", "green pants", "red jacket", "blue shoes"]
    `` ``

    4. As you have a minimum of good taste, you add conditions:
    - If `outfit` contains four different colors, display` "Too many colors!" `And restart the function.
    - If `outfit` contains only one color, print` "Not enough color!" `And restart the function.
    - If `outfit` contains two colors, display` outfit` and `" Not bad, let's go! "`.
    - If `outfit` contains three colors, display` outfit` and `" Perfect, let's go! "`.

    */