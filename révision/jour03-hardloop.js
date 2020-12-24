//01- SUM
// Create an empty array `numbers`
// using a for loop, add 50 random elements between 0 and 100 in your array
// using another for loop, calculate the sum of the elements of your array

var numbers = [];
var min = 50;
var max = 100;
for (var i=1; i<=50; i++) {
    var random=Math.floor(Math.random() * (max - min + 1));
    //console.log(random);
    numbers.push(random);
}
console.log(numbers);
var sum=0;
for(var i=0; i<numbers.length; i++ ){
    sum=sum+numbers[i];
}
console.log(sum);

//02 MAX
// Create an empty array `numbers`
// using a for loop, add 50 random elements between 50 and 200 in your array
// using another for loop, find the maximum number of elements in your array (without using the function)

var number =[];
var min = 50;
var max =200;
for(var i=1; i<=50; i++) {
    var random = Math.floor(Math.random() * (max - min + 1));
    //console.log(random);
    number.push(random);
}
console.log(numbers);

var maxNumber=number[0];
for(var i=1; i<=number.length; i++) {
    if(maxNumber< number[i]){
        maxNumber=number[i];
    }
}
console.log(maxNumber);


//03 Unique
// Create an empty array `numbers`
// using a for loop, add 50 random elements between 50 and 200 in your array
// using a while loop display the first element of your array greater than or equal to 75 and less than or equal to 100

var numbers =[];
var min = 50;
var max =200;
for(var i=0; i<50; i++) {
    var random = Math.floor(Math.random() * (max - min + 1)+min);
    //console.log(random);
    numbers.push(random);
    //console.log(numbers);
}
console.log(numbers);

var i=0;
var result=numbers[i]
while(result < 75 || result > 100) {
    i++;
    result = numbers[i];
}
console.log(result);



//04 Nested Loop
// Create a `words` array with the following words
// var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
// Using a for loop, use the split method to create an array containing the letters of each word.
// Using a second for loop (inside the first), count the number of "o" in each word.
// Return the total number of "o"
// Expected result: 8

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var countO=0;
for(var i=0; i<words.length; i++) {
    var text=words[i];
    //console.log(text);
    var splitLetter =text.split('');
    //console.log(splitLetter);
    for(var letterO=0; letterO<splitLetter.length; letterO++) {
        if(splitLetter[letterO] ==="o")  {
            countO++;
            //console.log(splitLetter);
        }
        
    }
    
}
console.log(countO);


