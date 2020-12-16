
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
        console.log(`${num} x ${i} = ${result} `);
        //return result;
    }    
}
console.log(process.argv);
multiply(process.argv[2]);


/*
 
var {multiply, addition} = require("./table-utils.js");

multiply();
addition();
*/