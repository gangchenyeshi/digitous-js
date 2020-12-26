//01- OBJECT
//- Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
//- Affichez `cat` dans la console
//- Affichez la valeur de `age` dans la console
//- À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`
 var cat = {
     name: "Garfield",
     age: 3,
     isCute: true
 };
console.log(cat);
console.log(cat.age);
console.log(cat["age"]);

if(cat.isCute) {
    console.log("So cute !");
}


//02 COMBINE
//- Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
//- Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
//- Affichez la valeur de `age` de `cat` dans la console
//- Affichez la valeur de `isCute` de `cat2` dans la console

var cat2 = {
    name:"Tom",
    age:10,
    isCute:false
};
console.log(cat2);
var cats= [cat, cat2];
console.log(cats);

//Both the output are same
console.log(cat.age); //here direct access the variable cat and its clear words
console.log(cats[0].age);//here access first cats then Zero index variable that is cat then age access.

console.log(cat2.isCute);
console.log(cats[1].isCute);



//03 EVEN
//- Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - In the function, using a condition, display "even" if `num` is even," odd "if it is odd
// - Call your function several times with different digits as argument to check the results

//Astuce : pensez au modulo !
 function checkIfEven(num) {
    if(num % 2===0) {
        console.log(`it is EVEN`);
    } else {
        console.log(`it is ODD`);
    }
 }
checkIfEven(0);
checkIfEven(1);
checkIfEven(4);
checkIfEven(7);
checkIfEven(10);
checkIfEven(11);


//O4 COMPARE

//- Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
//- Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//- "`num1` is bigger" si `num1` est plus grand
//- "`num2` is bigger" si `num2` est plus grand
//- "both are the same" si ils sont égaux

//- Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats

function compare(num1, num2) {
    if(num1>num2) {
        console.log(`${num1} : num1 is Bigger`);
    } else if(num1<num2) {
        console.log(`${num2} : num2 is Bigger`);  
    }else {
        console.log(`${num1} : is same as : ${num2}`);
    }
}
compare(2, 8);
compare(10, 8);
compare(2, 2);

//05 ADD UP
//- Créez une fonction `addUp` qui reçoit un paramètre `num`
// - Using a loop, add the digits from 1 to `num`
// - Call your function with the number 12 and check that you get 78
 function addUp(num) {
     var sum=0;
     for(var i=1; i<=num; i++){
        sum += i;
     }
     return sum;
 }
 var result =addUp(12);
 console.log(result);

//06 TIME
//- Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Make the function return an `hours: minutes: seconds` format
// - Call your function with the argument `3700` and verify that you get` 1: 1: 40`

function format(num) {
    //60 secondes =1 minute
    //124 secondes =2 minute and 4 secondes   ie 124/60
    /*
    console.log(Math.floor(num / 3600));//Heur
    console.log(num % 3600) //Minutes and secondes left
    console.log(Math.floor(num % 3600 / 60));
    console.log(num % 3600 % 6);
    */

    var hours=Math.floor(num/3600);
    var restHours = num % 3600;
    var minutes =Math.floor(restHours / 60); //3600/60 is equal to 60
    var seconds = restHours % 60; //find the reminder of restHour by 60
    console.log(`${hours} : ${minutes} : ${seconds}`);
}
format(3700);

function formatWithoutMaths(num) {
    var days = 0;
    var hours = 0;
    var minutes =0;
    var seconds = 0;
    for(var i =0; i< num; i++) {
        seconds ++;
        if(seconds === 60) {
            minutes ++;
            seconds = 0;
        }
        if(minutes === 60) {
            hours ++;
            minutes = 0;
        }
        if(hours ===24) {
            days ++;
            hours = 0;
        }
    }
    console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
}
formatWithoutMaths(3700);


function timecalculator(num) {
    var hours = Math.floor(num/3600);
    var rest=num-hours * 3600; //1 hour is equal to 3600 seconds
    var minutes = Math.floor(rest/60);
    var seconds=rest - minutes * 60;
    console.log(`${hours} : ${minutes} : ${seconds}`);
}
timecalculator(3700);

//BONUS
//- Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - The function generates a random password, with as many letters as the value of `num`
// - The password will contain only uppercase letters
// - If `num` is less than 6 and greater than 15, the function returns" error "
//Astuce : Vous vous souvenez de la table ASCII ? 😉
function generatePassword(num){
    var max=122;
    var min=48;
    var password='';
    for(var i=0; i<num; i++) {
        var random=Math.floor(Math.random() * (max-min+1)+min);
        while(random>=58 && random <=64) {
            random=Math.floor(Math.random() * (max-min+1)+min);
        }
        var letter=String.fromCharCode(random);

        password += letter;
    }
    console.log(password);
}
generatePassword(10);

//BONUS 02
// - Create a `launchDice` function which receives a` numberOfDice` parameter
// - The function will randomly throw `numberOfDice` dice and return their sum
// - Call the function twice with parameter 5, once for `player1` and` player2`
// - Display the winning player (the one with the highest score)

function launchDice(numberOfDice) {
    var max = 6;
    var min = 1;
    var sum ='';
    for(var i=1; i<numberOfDice; i++) {
        var random=Math.floor(Math.random() * (max - min + 1) + min);
        sum+=random;
    }
    return sum;
}
var player1 = launchDice(5);
var player2 = launchDice(5);
if(player1 > player2) {
    console.log(`Player1 is Win : ${player1}`);
}else if(player2 > player1) {
    console.log(`Player2 is Win : ${player2}`);
} else{
    console.log(`Both the player are equal`);
}