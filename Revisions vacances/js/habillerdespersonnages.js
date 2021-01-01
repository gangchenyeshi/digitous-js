// ## 05 - Dress up characters
// You have created a game with characters and want to write a script that selects their clothes.
// 1. You create a table that contains the outfit they all should wear and another that lists all possible colors. Copy the two tables below:


var clothes = ["shirt", "pants", "jacket", "shoes"];
var colors = ["blue", "red", "green", "yellow"];
/*
2. Create a `displayOnShelves` function that takes two parameters` clothes` and `colors` and returns a list of` shelves` list representing each of the shelves in the cabinet. This function should generate the following result:

    ["blue shirt", "red shirt", "green shirt", "yellow shirt"],
    ["blue pants", "red pants", "green pants", "yellow pants"],
    ["blue jacket", "red jacket", "green jacket", "yellow jacket"],
    ["blue shoes", "red shoes", "green shoes", "yellow shoes"],

*/

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

    