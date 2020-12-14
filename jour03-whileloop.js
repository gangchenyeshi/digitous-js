//### 01 - Comptons

//A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200
//Using a while loop, display the even numbers between 50 and 200

var i=50;
while(i<=100) {
    
    //console.log(i);
    if(i % 2 === 0) {
        console.log(i);
    }
    i++;
}


// Let's Count
//Create a `dice` variable equal to null and a` count` variable equal to 0
//As long as `dice` is not 6, assign the result of a random dice roll to dice and add 1 to` count`
//Display `count`, the number of times you had to roll the dice to make a 6
var dice=null;
var count=0;
 var min=1;
 var max=6;
 while(dice!== 6) {
     dice=Math.floor(Math.random() * (max - min+1) + min);
        console.log(`Dice roll : ${dice}`);
        count++;
     
 }
 
console.log(`Total Number  roll the dice to make a 6 is : ${count}`);


 // 03 COURSE ()
// 03 RACE ()
// Create two variables `ussainBolt` and` tysonGay` equal to 0
// As long as one of the two variables has not exceeded 100
// Draw two random numbers between 1 and 10 and add the first number to the first variable and the second to the second
// Display the winner of the race (the variable having exceeded 100 first)

var ussainBold = 0;
var tysonGay = 0;
var max=10;
var min=1;
while(ussainBold<100 || tysonGay<100) {
    var firstRandom=Math.floor(Math.random() * (max - min +1)+min);
    var secondRandom=Math.floor(Math.random() * (max - min +1)+min);
    ussainBold = ussainBold + firstRandom;
    tysonGay = tysonGay + secondRandom;
   
}
console.log(ussainBold);
console.log(tysonGay);
if(ussainBold >=100) {
    console.log(`ussainbold is win! ${ussainBold}`);
}else if (tysonGay >=100) {
    console.log(`tysonGay is win! ${tysonGay}`);
}

 // 04 - Des boites
 //A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)
 /*
var box1 = 12;
var box2 = 5;
while (box1 > 0) {
    console.log(box2);
    box1 -= 10;
    console.log(box1);
}
 */

 /*
 12 > 0 yes
 print B2=5
 Box1(2)  =Box1(12) - 10
 Print Box1=2

 2 > 0 yes
 print B2=5
 Box1(-8)  =Box1(2) - 10
 Print Box1=-8
 
 -8 > 0 No
 exit loop
 */

 //### 05 - Encore des boites
 //A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)
 /*
 var i = 0;
var box1 = 7;
while (i > 0) {
    i++;
    console.log(box1 + i);
}
console.log(i);
console.log(box1);
 */

 /*
 i=0 > 0 no
 Exit loop
 print i = 0;
 print box1 = 7;
 */
 
 