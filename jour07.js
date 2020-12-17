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








