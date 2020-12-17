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

function formatDate(dateString ){
    var date=new Date(dateString); //dateString string parameter are call in date variable
    //console.log(date);
    var days = date.getDate(); // var days is getDate from date var 
    var months = date.getMonth() + 1;
    var years = date.getFullYear();
    console.log((`${days} / ${months} / ${years}`));
}
formatDate("2020-12-31");




// 02 AGE
// - Create a `calculateAge` function which receives as parameter a date in string format (which serves as date of birth)
// - The function must calculate the age of the person (in years) born at that time, based on today's date
// - Call the function and display its result in the console
// Reminder: The dates start with the year 1970!
//function calculateAge(date)
//calculateAge(1970);

function calculateAge(dateString) {
    var birthday= new Date(dateString);
    var currentDate = new Date();
    var different=currentDate - birthday;
    var age=new Date(different);
    console.log(age.getFullYear() - 1970);
}
calculateAge("1981-06-22");


