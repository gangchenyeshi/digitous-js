// 01 - Calculator

function calculate(number1, operator, number2) {
    if(operator=== "+") {
        return number1 + number2;
    }else if(operator=== "-") {
        return number1 - number2;
    }else if(operator=== "x") {
        return number1 * number2;
    }else if(operator=== "/") {
        return number1 / number2;
    }else if (operator=== "%") {
        return number1 % number2;
    }
    /*
    var result =0;
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    if(operator=== "+") {
        return num1 + num2;
    }else if(operator=== "-") {
        return num1 - num2;
    }else if(operator=== "x") {
        return num1 * num2;
    }else if(operator=== "/") {
        return num1 / num2;
    }else (operator=== "%") {
        return num1 % num2;
    }

    //console.log(result);
    */
}
//console.log("Si vous ne donnez pas trois arguments, le programme doit afficher error dans la console")
//calculate(5, "-", 4);
//console.log(result);
console.log(process.argv);
//calculate(5, "-", 4);
//console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
if(process.argv.length===5) {
    console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
} else {
    console.log("Si vous ne donnez pas trois arguments, le programme doit afficher error dans la console")
}
//calculate(5, 4)





