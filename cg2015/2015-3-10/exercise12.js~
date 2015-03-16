/*
exercise12 write a funciton that randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed
= minimo comune divisore
*/

(function(){
var num1 = Math.floor(Math.random()*100+1);
var num2 = Math.floor(Math.random()*100+1);

//se non c'è divisore comune stampa -1.
var res = -1;
for (var i=2;i<num1;i++){
	if (num1%i===0 && num2%i===0) res=i;
}
console.log(num1+","+num2+"-->"+res);
console.log("\n");
}());
