/*
exercise02a write a function that pushes into an array n random integer numbers
exercise02b filter even numbers and return the odd ones
exercise02c sort obtained numbers from the smallest to the largest
*/

function a(n){
var a=[];
var i;
for(i=0;i<n;i++)
	a.push(Math.floor(Math.random()*100+1));
return a;
}

function b(item){
return item%2===1;
}

function c(value1,value2){return value1-value2;} //comparatore dal piccolo al grande

var array=a(10).filter(b).sort(c);
console.log(array.toString());
console.log("\n");
