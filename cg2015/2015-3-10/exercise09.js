// write a function that randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them

(function(){

function estrai(){
	return Math.floor(Math.random()*100+1);
}

var n = estrai();
var array = [];
for (var i=0;i<n;i++)
	array[i]=estrai();

//stampa il massimo
console.log(array.toString()+"-->"+Math.max.apply(null,array));
console.log("\n");
}());
