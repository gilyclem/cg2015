/* write a script containing the function identity(n)
that returns the n rows by n columns identity matrix */

function identity(n){
var i,j;
var result="";
var value=0;
for (i=1;i<=n;i++){
	for (j=1;j<=n;j++){
		value=(i===j)?1:0;	
		result+=value+"\t";
		}
	result+="\n";
	}
return result;
}

//Test di utilizzo
console.log(identity(4));
