const prompt = require('prompt-sync')();
let Num = Number(prompt("enter a numebr : "));

if(Num % 2 === 0)
{
    console.log("pair");
}
else
{
    console.log("impair");
}