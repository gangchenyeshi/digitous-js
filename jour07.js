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


