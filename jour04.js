var number = 7;
var mulNumber="";
 for(i=0; i<=10; i++) {
     mulNumber = i * number
     // number * 1 = 7
     //number * 2 = 14
     //.....        70
     console.log(`${number} * ${i} = ${mulNumber}`); 
     
 }
 var min=1;
 var max=6;

//console.log(dice);

 for (var i=0; i<10; i++) {
    //console.log(Math.floor(Math.random() * (max-min+1)));
    var dice= Math.floor(Math.random() * (max-min+1));
    console.log(dice)
 }
 
// sum total at end for 10 times
 var min=1;
 var max=6;

//console.log(dice);
var totalDice=0;
 for (var i=0; i<10; i++) {
    //console.log(Math.floor(Math.random() * (max-min+1)));
    var dice= Math.floor(Math.random() * (max-min+1));
    console.log(`each dice : ${dice} `);
    totalDice = totalDice + dice;
 }
 console.log(`sum total of the dice : ${totalDice} ` );



 console.log(`value of i ${sumInteger}`);

 //afficher la multiplication de tout les entier allant de 10 à 15
 var mulNumber=1;
 for(var i=10; i<=15; i++) {
     console.log(`value of i ${i}`);
     mulNumber =mulNumber * i;
     
 }
 console.log(mulNumber);

 // afficher la somme des entiers pairs allant de 0 à 100 (resultat: 2550)
 var pairNumber = 0;
 for (i=0; i<=100;  i= i + 2) {
    console.log(`value of i ${i}`);
    pairNumber = pairNumber + i;
 }
 console.log(` sum of pairs value ${pairNumber}`);

 //: afficher tout les multiples de 7 entre 0 et 1000 (edited) 
var multipleNumber = 7;
var result=0;
 for(i=0; i<=1000; i++) {
    //console.log(`value of i is : ${i}`);
    result = multipleNumber * i;
    console.log(`${multipleNumber} * ${i} =${result}`);
 }

 //: afficher tout les multiples de 7 entre 0 et 1000 (edited) 
 
 var result=0;
 for(var i=0; i<=1000; i++) {
    //console.log(`value of i is : ${i}`);
    if(i % 7 === 0) {
        console.log(i);
    }
}
 
 



//AFFICHER LA SOMME DE TOUT LES ENTIER ALLANT DE 25 à 75
var sumInteger=0; 

 var i = 25; 
 while(i<=75) {
    sumInteger +=i;
    i++;
 }
 console.log(sumInteger);  