/* 
exercise03a write a function that given a word return it capitalized
exercise03b write a function that capitalize each word of the text
*/

function a(string){
return string.charAt(0).toUpperCase()+string.substring(1);
}

function b(text){
//array ottenuto separando ogni parola del testo con separatore spazio. Ogni elemento dell'array è reso maiuscolo con la funzione a. Infine l'array è riunito in stringa
var result = text.split(" ").map(a).reduce(concatena);
return result;
}

function concatena(prev,curr){
return prev+" "+curr;
}

var input = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

console.log(b(input));
console.log("\n");
