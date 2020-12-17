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

function countEach(xo) {
    var newString=xo.split('');
    console.log(newString);
    /*
    var varX="x";
    var countx=newString.indexOf(varX);
    console.log(countx);
  
    var varO="o";
    var counto=newString.indexOf(varO);
    console.log(counto);
    */
    var countX=newString.filter(i=>i==="x").length;
    console.log(`number of x : ${countX}`);
    var countO=newString.filter(i=>i==="o").length;
    console.log(`Number of x : $(countO)`)
}
countEach("xxxoooox");