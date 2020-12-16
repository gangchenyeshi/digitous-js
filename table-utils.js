function multiply(num) {
    //var num=2;    
    var result = 1;
    for(var i=1; i<=10; i++) {
        result = num * i;
        console.log(`${num} x ${i} = ${result} `);
        //return result;
    }    
}
console.log(process.argv);
multiply(process.argv[2]);

function addition(num){
        var result =0;
        for(var i = 1; i<=10; i++){
            result =num + i;
            console.log(`${num} + ${i} = ${result}`);
        }
}
console.log(process.argv);
multiply(process.argv[2]);

module.exports = {
    multiply,
    addition
};
