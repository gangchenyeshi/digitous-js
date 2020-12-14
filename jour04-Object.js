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

var cats=[cat, cat2];
console.log(cat.age);
console.log(cat2.isCute);