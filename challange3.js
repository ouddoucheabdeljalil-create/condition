const prompt = require('prompt-sync')();
let number1 = Number(prompt("enter the first number : "));
let number2 = Number(prompt("enter the second number : "));
let sum = number1 + number2 ;

if(number1 === number2)
{
    console.log("triple : ",sum * 3);
}
else
{
    console.log("total : " ,sum);
}