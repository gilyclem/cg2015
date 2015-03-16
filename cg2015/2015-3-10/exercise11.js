/* exercise11 write a funciton that randomizes a number in range (1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5 */

function a()	{

function getRandomInt(min, max) 				{
	return Math.floor(Math.random() * (max - min)) + min;	}

var number = getRandomInt(1000,9999);
console.log("numero estratto="+number);

var array = [];
//continua a sommare finchè non è di una sola cifra
while(number>9)											{
	array = number.toString().split("");
	number = array.reduce(function(prev,curr){return parseInt(prev)+parseInt(curr)});	}

return number;	}

//utilizzo
var res = a();
console.log(res);
console.log("\n");
