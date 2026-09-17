const prompt = require('prompt-sync')();
let char = prompt("enter a character : ").toLowerCase();
 switch(char)
 {
    case "a":
    case "o":
    case "e":
    case "i":
    case "u":
    case "y":
    console.log("voyelle")
    break;

    default:
     console.log("non voyelle")
 }
