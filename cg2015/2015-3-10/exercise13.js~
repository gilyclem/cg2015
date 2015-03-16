/* exercise13 write a funciton that randomizes two numbers and prints their least common multiplication of them. (use lcm for details) */

(function(){

function scomposizione_fattori_primi(x){
var n=x;
var a = [];
for (var i=2;i<n;i++)	{
	while(n%i===0) {a.push(i); n/=i;}
			}
if(n!==1&&n!==x) a.push(n);
return a;
}

function mcm(num1,num2){
var res1 = scomposizione_fattori_primi(num1);
var res2 = scomposizione_fattori_primi(num2);
console.log(res1.toString());
console.log(res2.toString());

for(var i=0;i<res1.length;i++){
	if (res2.some(function (item){return item===res1[i]})) return res1[i];
	}
return -1;
}

//utilizzo su 2 numeri random
var num1 = Math.floor(Math.random()*100+1);
var num2 = Math.floor(Math.random()*100+1);
console.log(num1+" "+num2+"-->"+mcm(num1,num2));
console.log("\n");
}());
