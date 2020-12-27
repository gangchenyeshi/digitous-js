//03-Separate Table
// - Create a `table-utils.js` file
// - Put your `multiply` function in this file, and add a second` addition` which uses the same principle but with an addition instead of a multiplication
// - Export the two functions thanks to the modules, and import them into your previous file to make your code work again
// - Display the addition table
function multiply (integer) {
    var result = 1;
    for (var i=1; i<=10; i++) {
        result = integer * i;
        console.log(`${integer} * ${i} = ${result}`);
    }
}

function addition (integer) {
    var result = 0;
    for (var i=1; i<=10; i++) {
        result = integer + i;
        console.log(`${integer} + ${i} = ${result}`);
    }
}

module.exports = {
    multiply,
    addition
}