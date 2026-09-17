const prompt = require('prompt-sync')();
let delta = Number(prompt("enter the value of delta : "));

if(delta < 0)
{
    console.log(" l’équation n’admet pas de solution réelle ");
}
else if(delta > 0)
{
    console.log("équation admet deux solutions réelles distinctes");
}
else
{
    console.log("l’équation admet une solution réelle double :");
}