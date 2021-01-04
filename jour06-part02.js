//01 ALPHABET
//- Create a `sortLetters` function which receives a string as a parameter
// - The function returns a string with the same letters, in alphabetical order
// - Do not use the .sort () method
// - Call your function with "konexio" as an argument and check that you get "eiknoox"

function sortLetter(newString) {
    var alphabet=newString.split('').sort().join('');
    console.log(alphabet);

}
sortLetter("konexio");

//02 XOXO
// - Create a `countEach` function which receives a string containing x and o as parameter
// - The function returns true if there are as many x as there are o, otherwise it returns false
// - Check that the "xxxoooox" argument triggers a true, and that "xox" triggers a false

function countEach(string) {
    var newString=string.split('');
    //console.log(newString);
   var countx=0;
   var counto=0;
    for(var i=0; i<string.length; i++) {
       if(newString[i]==="x") {
        countx =countx +1;  
       }else {
           counto = counto +1;
       }
    }
    console.log(`count x : ${countx}`);
    console.log(`count o : ${counto}`);

    if(countx > counto) {
        console.log("true")
    }else{
        console.log("false")
    }
}
countEach("xox");

//03 - Palindrome

// - Create a `checkPal` function which receives a string as a parameter
// - The function returns "Palindrome!" if the word reads both ways, otherwise it returns "Nope"
// - Check that you get a positive with the "racecar" argument but not with "laptop"

function checkPal(string){
    var newSplitString = string.split('');
    console.log(`Split String : ${newSplitString}`);
    var newReverseString = newSplitString.reverse();
    console.log(`Reverse string : ${newReverseString}`);
    var newJoinString = newReverseString.join("");
    console.log(`Join string : ${newJoinString}`);

    
    if(string === newJoinString) {
            console.log("Palindrome!");
        } else {
            console.log("Nope");
        }
}
checkPal("abcdfcba");

//04- SWAP
// - Create a `swap` function which receives a string as a parameter
// - The function returns a string with reverse case: an uppercase will become lowercase and vice versa
// - Call your function with the argument "Hello World" and verify that you get "hELLO wORLD"
 function swap(string) {
    /*
    var newString = string.split('');
    console.log(newString);
    var lowerCase = string.toLowerCase();
    console.log(lowerCase);
    var upperCase = string.toUpperCase();
    console.log(upperCase);
    */
    var reverseString = '';//blank string for change CASE
    var i = 0;
    while (i < string.length) {
        var n = string.charAt(i);
        //console.log(n);
        if(n == n.toUpperCase()) {
            n = n.toLowerCase();
        } else {
            n = n.toUpperCase();
        }
        i +=1;
        reverseString +=n;
//        console.log(n);
    }  
    console.log(reverseString);
    //return reverseString;      
 }
 swap("AbCd");

 //Bonus 1
// - Create a `makeItSpongeBob` function which receives a string as a parameter
  // - The function returns a string with the same text alternating upper / lower case
  // - Call your function with the argument "Javascript is easy" and check the result

  function makeItSpongeBob(string) {
    var doubleCase = '';
    var i = 0;
    while (i < string.length) {
        var n = string.charAt(i);
        //console.log(`value of n : ${n}`);
        if(n == n.toUpperCase()) {
            n = n.toLowerCase();
            console.log(n);
        }
        doubleCase +=n;
        if(n == n.toLowerCase()) {
            n = n.toUpperCase();
            console.log(n);
        }
        doubleCase +=n;
        
        
        i++;
    }
    console.log(doubleCase);
  }
  makeItSpongeBob("YYYY");





//Bonus 2
//- tester votre exercice 1 avec un mélange de lettres majuscules et minuscules. Est ce que cela fonctionne toujours ?
//- si non corrigez le !


//Bonus 3
//- Que retourne votre fonction de l'exercice 2 si vous lui passez autre chose que des x ou des o ? ou des X et O majuscules ?
//- Rajoutez un message d'erreur explicite dans le premier cas et comptez les majuscules dans le second.



