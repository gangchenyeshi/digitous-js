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
console.log(`sum of square is ${sum}`)