/* write a script containing the function fibonacci(i)
that returns the i-th element of the Fibonacci's serie */

function fibonacci(i){
if(!(i in fibonacci)){
	fibonacci[i]=fibonacci(i-2)+fibonacci(i-1);
}
return fibonacci[i];
}

fibonacci[0]=1;
fibonacci[1]=1;

//Test di utilizzo
console.log("I primi 10 numeri della serie di fibonacci:\n");
var input, output, stringa;
stringa = "";
for(input=1;input<=10;input++){
	output = fibonacci(input);
	stringa+=output+"\t";
	}
console.log(stringa);
