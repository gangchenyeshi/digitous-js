//02- COMPTER LES VOYELLES
// Create a `countvowels` function which takes a string as a parameter and which returns the number of vowels contained in a text.

function countvowels(string) {
    var countVoyelles = 0;
    var splitString = string.split('');
    console.log(splitString);
    for(var i=0; i<=splitString.length; i++) {
        if(splitString[i] ==="a" || splitString[i] ==="e" || splitString[i] ==="i" || splitString[i] ==="o" || splitString[i] ==="u" || splitString[i] ==="A" || splitString[i] ==="E" || splitString[i] ==="I" || splitString[i] ==="O" || splitString[i] ==="U") {
            countVoyelles ++;
        }
    }
    console.log(countVoyelles);
}
countvowels("aeiouAEIOU");