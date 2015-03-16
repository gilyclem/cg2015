/*
write a funciton that randomizes a number in range (0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)
*/

(function(){
var num = Math.floor(Math.random()*100+1);

var res="";
	if (num>40)			{
		for (var i=41;i<num;i+=2) 
			res+=i+" ";	}
	else 	{
		for (i=40;i>=num;i--) 
			res+=i+" ";
		}

console.log(num+"--->"+res);
console.log("\n");

}());
