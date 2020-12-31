//02-TABLE
// - Create a `multiply` function which will receive a parameter (an integer)
// - Make the function display the multiplication table of this number in the console (from 1 to 10) line by line
// - You will have to give the argument in the terminal by calling the program

// ⇒ If you don't give an argument, the program must display "error" in the console

function multiply(integer) {
    var result = 1;
    for(var i=1; i<=10; i++) {
        result = integer * i;
        console.log(`${integer} * ${i} = ${result}`);
    }
}
console.log(process.argv);
multiply(parseInt(process.argv[2]));

