//Display the current date and time
/*
var test = new Date();
console.log(test);
*/

//will give the current date (updated each time) in milliseconds
/*
var demo = Date.now();
console.log(demo);
*/
//will give the date of June 22, 1981 at midnight 
/*
var birthday = new Date("1981-06-22");
console.log(birthday);
*/


//01-FORMAT
// - Create a `formatDate` function which receives a string as a parameter (in yyyy-mm-dd format)
// - The function must return the date in dd / mm / yyyy format
// - Call the function and display its result in the console
 
function formatDate(dateString) {
    var date = new Date(dateString);
    var days = date.getDate();
    var months = date.getMonth() + 1;
    var years = date.getFullYear();
     return (`${days} / ${months} / ${years}`);
}
console.log(formatDate("2021-01-03"));

/*
function formatDate(stringDate) {
    var date = new Date(stringDate);
    var days = date.getDate();
    var months = date.getMonth()+ 1;
    var years = date.getFullYear();

    return `${days} / ${months} / ${years}`;
}
console.log(formatDate("2020-12-31"));
*/
