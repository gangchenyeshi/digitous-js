//01 CALCULATOR
// - Create a `calculate` function which will receive three parameters (two integers and an operator` + `,` -`, `x`,` / `or`% `
// - Create a condition (method of your choice) for each possible value of the operator which will return the result of the calculation
// - Display the result in the console (check that for the arguments `5`,` x` and `4` you get` 20`)
// - You will have to give the arguments in the terminal by calling the program so pay attention to the parameters!

// ⇒ If you don't give three arguments, the program must display "error" in the console

/*
function calculate (number1, number2, operator) {
    if(operator ==="+") {
        return number1 + number2;
    }else if(operator ==="-") {
        return number1 - number2;
    }else if(operator ==="x") {
        return number1 * number2;
    }else if (operator === "/") {
        return  number1 / number2;
    }else if(operator === "%") {
        return number1 % number2;
    }else {
        console.log(`${operator} is not valid operator`);
    }
}
console.log(process.argv);

if(process.argv.length !== 5) {
    console.log("Error : I'am expecting for 3 parameter");
} else {
    var result = calculate(parseInt(process.argv[2]), parseInt(process.argv[4]), process.argv[3]);
    console.log(result);
    
}
*/


function calculate(number1, number2, operator) {
    switch (operator) {
        case "+" : {
            return number1 + number2;
        }
        case "-" : {
            return number1 - number2;
        }
        case "x" : {
            return number1 * number2;
        }
        case "/" : {
            return number1 / number2;
        }
        case "%" : {
            return number1 / number2;
        }
        default: {
            console.log(`${operator} is not valid operator`);
        }
        
    }
}

console.log(process.argv);

if(process.argv.length !== 5) {
    console.log("Error :  I'am expecting 3 parameters");
}else {
    var result=calculate(parseInt(process.argv[2]), parseInt(process.argv[4]), process.argv[3]);
    console.log(result);
}
