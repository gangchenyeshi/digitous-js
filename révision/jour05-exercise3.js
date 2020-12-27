

var {multiply, addition} =require("./table-utils.js");

if(process.argv.length !==4) {
    console.log("Error : expecting 4 parameter");
} else {
    multiply(parseInt(process.argv[2]));
    addition(parseInt(process.argv[3]));
}