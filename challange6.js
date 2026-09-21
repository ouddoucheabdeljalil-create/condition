const prompt = require('prompt-sync')();
let num =Number(prompt("saisissez le numéro :"));
if( num > 0 ){
    console.log("le nombre positif");
}
else if( num < 0){
    console.log("le nombre négatif");
}else{
    console.log("le nombre est égal à zéro.");
}