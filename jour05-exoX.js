// 01 - Calculator

function calculate(number1, operator, number2) {
    var result =0;
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    if(operator=== "+") {
        return num1 + num2;
    }
    //console.log(result);
}
//console.log("Si vous ne donnez pas trois arguments, le programme doit afficher error dans la console")

console.log(process.argv);
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));

//calculate(5, 4)






//- 02 - Table
//- Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
//- Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
//- Vous devrez donner l'argument dans le terminal en appelant le programme

//⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console//
function multiply(num) {
    //var num=2;    
    var result = 1;
    for(var i=1; i<=10; i++) {
        result = num * i;
        console.log(result);
    }
    
    
}

//console.log("if you don't give an argument, the program must display erro in the console")
console.log(process.argv);
multiply(process.argv[2]);
