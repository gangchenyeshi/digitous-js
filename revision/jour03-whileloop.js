//01 COMPRONS
// Using a while loop, display the even numbers between 50 and 200

var result =[];
var i =50;
while( i<=100){
    if(i % 2 === 0){
        result.push(i);
    }
    i++;
}
console.log(result);



//02- TRY AGAIN
// Create a `dice` variable equal to null and a` count` variable equal to 0
// As long as `dice` is not 6, assign the result of a random dice roll to dice and add 1 to` count`
// Display `count`, the number of times you had to roll the dice to make a 6
var dice=null;
var count = 0;
var max = 6;
var min = 1;

while(dice !==6) {
    dice=Math.floor(Math.random() * (max - min + 1)+1);
    console.log(dice);
    count++;
}
console.log(`Total Number  roll the dice to make a 6 is : ${count}`);

//03 Course
// Create two variables `ussainBolt` and` tysonGay` equal to 0
// As long as one of the two variables has not exceeded 100
// Draw two random numbers between 1 and 10 and add the first number to the first variable and the second to the second
// Display the winner of the race (the variable having exceeded 100 first)

var ussainBold =0;
var tysonGay = 0;
var max=10;
var min=1;
while(ussainBold<100 || tysonGay<100) {
    var firstRandom=Math.floor(Math.random() * (max - min + 1));
    var secondRandom=Math.floor(Math.random() * (max - min + 1));

    ussainBold =ussainBold + firstRandom;
    console.log(ussainBold);
    tysonGay = tysonGay + secondRandom;
    console.log(tysonGay);

}
console.log(ussainBold);
console.log(tysonGay);
 if(ussainBold > tysonGay) {
     console.log(`Winner is ussainBold : ${ussainBold}`);
 }else if(tysonGay > ussainBold) {
    console.log(`Winner is tysonGay : ${tysonGay}`);
 }

 