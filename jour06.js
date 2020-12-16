var today = new Date();
console.log(today);
//getDate() : retourne le jour du mois (de 1 à 31)
console.log(today.getDate()); 
console.log(today.getHours());//dans la timezone de mon utilisateur
console.log(today.getUTCHours());//en GMT(à londres)
var birthday =new Date("12/20/2020");//month, day, years
 console.log(birthday.getMonth());
 console.log(today.getMonth());
//01-Format
//- Create a `formatDate` function which receives a string as a parameter (in yyyy-mm-dd format)
// - The function must return the date in dd / mm / yyyy format
// - Call the function and display its result in the console
var test= new Date();
console.log(test);
// new Date("2020-12-16");
function formatDate(yyyy, mm, dd ){
    //var date=new Date();
    //console.log(date);
    console.log((`${dd} / ${mm} / ${yyyy}`));
}
formatDate(2020, 12, 7);



/*
function formatDate(aaaa, mm,jj) {
    //var days=jj.getDate();
    //var months=mm.getMonth();
    //var years=aaaa.getFullYear();
    console.log(`${jj} / ${mm} / ${aaaa}`);
 
}
console.log(process.argv);
formatDate(process.argv[2], process.argv[3], process.argv[4], );
*/
