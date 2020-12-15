//03 SEPARATE TABLE
//- Créez un fichier `table-utils.js`
//- Mettez votre fonction `multiply` dans ce fichier, et ajouter en une deuxieme `addition` qui reprend le même principe mais avec une addition au lieu d'une multiplication
//- Exportez les deux fonctions graces aux modules, et importez les dans votre fichier précedant pour refaire marcher votre code
//- Affichez la table d'addition
//Put your `multiply` function in this file, and add in a second` addition` which uses the same principle but with an addition instead of a multiplication
// - Export the two functions thanks to the modules, and import them into your previous file to make your code work again
// - Display the addition table
    
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

function addition(num){
        var result =0;
        for(var i = 1; i<=10; i++){
            result =num + i;
            console.log(`${num} + ${i} = ${result}`);
        }
}
console.log(process.argv);
multiply(process.argv[2]);

module.exports = {
    multiply,
    addition
};
