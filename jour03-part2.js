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
