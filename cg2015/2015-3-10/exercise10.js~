/*
exercise10 write a funciton that randomizes a number in range (1000..9999) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14 */

function a(){

function getRandomInt(min, max) 				{
	return Math.floor(Math.random() * (max - min)) + min;	}

var array = getRandomInt(1000,9999).toString().split("");
console.log(array.toString());
return array.reduce(function(prev,curr){return parseInt(prev)+parseInt(curr)});
}

//utilizzo
var res = a();
console.log(res);
console.log("\n");
