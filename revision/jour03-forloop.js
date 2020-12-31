//01 - Somme des carrés
// Calculate the sum of the squares of the numbers from 5 to 10
// Reminder: the square of a number is its value, multiplied by itself. example: 5x5 = 25
// Expected result: 355
var result =0;
for(var i=5; i<=10; i++) {
    result =result + (i * i);
    //console.log(result);
}
console.log(result);

//02 comptons
// Count how many multiple of 7 (think modulo!) Between 100 and 1000
// Expected result: 128

var result = 0;
for(var i=100; i<=1000; i++) {
    if(i % 7===0) {
        result ++;
        
    }
}
console.log(result);



//03 Chanceux
// Roll a dice 20 times and display the sum of all the results greater than or equal to 5
var min =1;
var max=20;
var sum=0;
for(var i=1; i<=20;i++) {
    rollDice=Math.floor(Math.random() * (max - min + 1));
    console.log(`Dice Roll : ${rollDice}`);
    if(rollDice >= 5) {
        sum = sum + rollDice;
    }
    
}
console.log(` sum of all the results greater than or equal to 5 : ${sum}`);


//### 04 - Des boites
//A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)
/*
ar box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);
*/


//05- Des setiob
//A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)
/*
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);
*/

//06 Encore des Boites
/*
var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);
*/