//write a function that randomizes 3 numbers in range (0.. 100) and prints the largest one

(function(){

function estrai(){return Math.floor(Math.random()*100+1);}

var array = [estrai(),estrai(),estrai()];

//invoca la funzione di Math per il calcolo del massimo in un array
console.log(array.toString()+"-->max="+Math.max.apply(null,array));
console.log("\n");

}());
