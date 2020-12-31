
// 02 AGE
// - Create a `calculateAge` function which receives as parameter a date in string format (which serves as date of birth)
// - The function must calculate the age of the person (in years) born at that time, based on today's date
// - Call the function and display its result in the console
// Reminder: The dates start with the year 1970!
//function calculateAge(date)
//calculateAge(1970);


function calculateAge(birthDay) {
    var date =new Date(birthDay);
    console.log(date);
    var age = new Date(new Date() -date);
    console.log(age);
    return age.getFullYear() - 1970; // date always start from 1970
    
}
console.log(calculateAge("1959 / 03 / 18"));
