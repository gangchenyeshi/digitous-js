// FOR LOOP

// 01 SUM OF SQUARES
var square='1';
var sum=0
for (var i=5; i<=10; i++) {
    console.log(`value of i : ${i}`);
    if(i===i) {
        square=i*i;
    }
    console.log(`square of ${i} * ${i} = ${square} `);
    
    sum += square;
}
console.log(`sum of square is ${sum}`);


//02 - Comptons
//Count how many multiple of 7 (think modulo!) Between 100 and 1000
//Expected result: 128
var count=0;
for (i=100; i<=1000; i++) {
    //console.log(`value of i ${i}`);
    if(i % 7 === 0){
        console.log(`value of i module  ${i}`);
        
        count++;
    }
    
    
}
console.log(`value of i count  ${count}`);


//CHANCEUX
//roll a dice 20 times and display the sum of all the results greater than or equal to 5
var min = 1;
var max = 6;
for(i=1; i<=20; i++) {
    var dice=Math.floor(Math.random() * (max - min + 1));
    console.log(`value of roll is : ${dice}`)
    if (i >= 5) {
        dice = dice + i;
    }
}
console.log(`sum of dice >= 5 : ${dice}`);


//04  Des Boites 
//Using a paper and pencil, guess what the following code displays (forbidden to execute the code!)
/*
var box1 = 12;
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
//i=12 ---  i<14--- yes
//i++ ---i=13
//box1 (5)=box2(5)
//print 5 + 5 =10
//box2 (17)=5(box1) + 13(i)

//i=13-----i<14--- yes
//i++ ---i=14
//box1 (12)=box2(25)
//print 12 + 25=37
//box2 (26)=12(box1) + 14(i)

//i=14-----i<14--- No
//exit loop
//print Box1 =12
//print Box2 =26
//print i = 14

//05 Des setiob
//Using a paper and pencil, guess what the following code displays (forbidden to execute the code!)
/*
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);

*/
//i=12 -- i!==0 yes
// i-3 --  12-3 =9
//print Box1 (12)
//box1(21) = box1(12) + i(9)

//i=9 -- i!==0 yes
// i-3 --  9-3 =6
//print Box1 (21)
//box1(27) = box1(21) + i(6)

//i=6 -- i!==0 yes
// i-3 --  6-3 =3
//print Box1 (27)
//box1(30) = box1(27) + i(3)

//i=3 -- i!==0 yes
// i-3 --  3-3 =0
//print Box1 (27)
//box1(27) = box1(27) + i(0)

//i=0 -- i!==0 No (true value)

//print box1 =27
//print i= 0



//Encore de boites
//Using a paper and pencil, guess what the following code displays (forbidden to execute the code!)

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


//i=0 -- i> -4 yes
// i-- =O -1 =-1
//if i divisible by 2 which is reminder ===0
// print box1(0) + i(0)=0
//box2++ -- 3 + 1 =4

//i=-1 -- i> -4 yes
// i-- =-1 -1 =-2
//if i divisible by 2 which is reminder === -1
//else 
// print box2(3) + i(-1)=0
//box1 -- = 0-1=-1


//i=-2 -- i> -4 yes
// i-- =-2 -1 =-3
//if i divisible by 2 which is reminder ===0
// print box1(-1) + -2=-3
//box2++ -- 4 + 1 =5 so 5 


//i=-3 -- i> -4 yes
// i-- =-3 -1 =-4
//if i divisible by 2 which is reminder === -1
//else 
// print box2(5) + i(-3)=2
//box1 -- = -1-1=-2



//i=-3 -- i> -4 NO
//Print box1= -2
//Print box 2= 5 
//print i = -4
