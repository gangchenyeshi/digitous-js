//01 OBJECT
//- Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
//- Affichez `cat` dans la console
//- Affichez la valeur de `age` dans la console
//- À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`
//Using a condition, display "So cute!" if the value of `isCute` is` true`

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
console.log(cat);
console.log(cat.age); //OR 
console.log(cat["age"]);//same as above
if(cat.isCute===true) {
    console.log("So cute");
}

//O2 COMBINE
//- Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
//- Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
//- Affichez la valeur de `age` de `cat` dans la console
//- Affichez la valeur de `isCute` de `cat2` dans la console

var cat2 = {
    name: "Tom",
    age: 2,
    isCute: false
}
if(cat2.isCute===true) {
    console.log("So cute");
}

var cats={
    cat, 
    cat2
};
console.log(` cats are : ${cats}`);
console.log(cat.age);
console.log(cat2.isCute);


//03 EVEN
//- Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
//- Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
//- Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats


function checkIfEven(num){
    for(num=3; num<=20; num= num + 3){
        if(num % 2 ===0){
            console.log(`Num is even : ${num}`);
        }else {
            console.log(`Num is odd : ${num}`);
        }
    }
    
    
    
}
checkIfEven(3);


//04 COMPARE
//- Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
//- Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//- "`num1` is bigger" si `num1` est plus grand
//- "`num2` is bigger" si `num2` est plus grand
//- "both are the same" si ils sont égaux
//- Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats


function compare(num1, num2) {
    
            if(num1 > num2) {
                console.log(`num1 is bigger : ${num1}`);
            } else if(num2 > num1) {
                console.log(`num2 is bigger : ${num2}`);
            } else {
                console.log(`Both are the same : ${num1} = ${num2}`);
            }
    
}

compare(20,10);