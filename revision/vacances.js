// 01-Alphabet
//- Créer une fonction `sortLetters` qui reçoit une string en paramètre
//- La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
//- Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"

const { max } = require("moment");

function sortLetters(word) {
    var letters = word.split("");//split method will split all letter in word
    console.log(letters);
    //console.log(letters.sort().join("")); 
    //or
    var sortLetters = letters.sort();//sort the letter in alphabetique order
    console.log(sortLetters);
    var joinLetters = sortLetters.join('');// join the letter into word;
    console.log(joinLetters);
}
sortLetters("konexio");


//02-XOXO
//- Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
//- La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
//- Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

function countEach(string) {
    var countO = 0;
    var countX = 0;
    for(var i=0; i<=string.length; i++) {
        if(string.charAt(i)== "o") {
            countO ++;
        } else if(string.charAt(i) == "x") {
            countX ++;
        }
    }
    return  countO === countX;
}
console.log(countEach("xoxo"));

//03-PALINDROME
//- Créez une fonction `checkPal` qui reçoit une string en paramètre
//- La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
//- Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"
function checkPal(string) {
    console.log(string);
    var letter = string.split('');
    console.log(letter);
    var letterReverse = letter.reverse('');
    console.log(letterReverse);
    var letterReverseJoin = letterReverse.join('');
    console.log(letterReverseJoin);
     
    if(string === letterReverseJoin) {
        console.log("palindrome");
    } else {
        console.log("Nope!");
    }
}
checkPal("racecar");

//04-SWAP
//- Créez une fonction `swap` qui reçoit une string en paramètre
//- La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
//- Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"
function swap(string) {
    var swapletter= "";
    for(var i=0; i<=string.length; i++) {
        var letter = string.charAt(i);
        console.log(letter);
        if(letter===letter.toUpperCase()) {
            swapletter += letter.toLowerCase();
            
        } else{
            swapletter += letter.toUpperCase();
        }
    }
    return swapletter;
}
console.log(swap("Hello World"));


//BONUS
//- Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
//- La fonction retourne une string avec le même texte en alternant majuscule / minuscule
//- Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat

function makeItSpongeBob(string) {
    var alternateCapital ="";
    for(var i=0; i<=string.length; i++) {
        var letter = string.charAt(i);
        console.log(letter);
        if(i % 2 ===0) {
            alternateCapital += letter.toUpperCase();
        } else {
            alternateCapital += letter.toLowerCase();
        }
    }
    return alternateCapital;
}

console.log(makeItSpongeBob("Javascript is easy"));