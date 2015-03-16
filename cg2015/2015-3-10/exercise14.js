//exercise14 write a funciton that randomizes two numbers and prints their average and standard deviation

(function(){
var num1 = Math.floor(Math.random()*100+1);
var num2 = Math.floor(Math.random()*100+1);
var media = avg(num1,num2);

//calcola la media
function avg(n1,n2){return (n1+n2)/2;}
//calcola la varianza fra due numeri
function calc_varianza(n1,n2){return (Math.pow(n1-media,2)+Math.pow(n2-media,2));}
//calcola la deviazione standard come radice della varianza
function dev(varianza){return Math.sqrt(varianza)}
//stampa del risultato
console.log(num1+","+num2+"-->avg="+media+"-->var="+calc_varianza(num1,num2)+"-->dev="+dev(calc_varianza(num1,num2)));

}());
