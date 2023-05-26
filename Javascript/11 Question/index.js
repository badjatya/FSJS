// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date = new Date();

console.log("Year Today: ", date.getFullYear());
console.log("Month Today: ", date.getMonth());
console.log("Date Today: ", date.getDate());
console.log("Day Today: ", date.getDay());
console.log("Hours Now: ", date.getHours());
console.log("Minutes Now: ", date.getMinutes());
console.log("Seconds elapsed from Jan 1, 1970 : ", Date.now() / 1000);
