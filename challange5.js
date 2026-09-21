const prompt = require('prompt-sync')();
let year =Number(prompt("enter the year :"));
console.log("enter [1] to change to months \nenter [2] to change to days \nenter [3] to change to hour \nenter [4] to change to minutes \nenter [5] to change to seconds");
let option= Number(prompt("enter the option "));
switch(option)
{
case 1:
    console.log("number of months in year", year * 12);
    break;
case 2:
    console.log("number of days in year", year * 12 * 30);
    break;
case 3: 
    console.log("number of hours in year", year * 12 * 30 * 24);
    break;
 case 4:
    console.log("number of minutes in year", year * 365 * 30 * 24 *60);
    break;
case 5: 
    console.log("number of seconds in year", year * 12 * 30 *24 * 60 * 60);
    break;
default:
   console.log("enter the required number!");
   break;
}
