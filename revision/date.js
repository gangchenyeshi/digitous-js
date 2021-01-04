var today = new Date();
console.log(today);

//Returns the day of the month (1–31) for the specified date according to local time.
console.log(today.getDate());

//Returns the hour (0–23) in the specified date according to local time.
console.log(today.getHours());

//Returns the hours (0–23) in the specified date according to universal time.
console.log(today.getUTCHours());

//months, days, years
var birthday = new Date("01/15/2020");
console.log(birthday);