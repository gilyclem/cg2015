/*exercise05 implement the following Bingo object. The Bingo object should randomize a number between 1 and 10 on creation and provide a single method guess(number). That method should return true if the argument was the secret number. Test your class. */

//funzione costrutturice per l'oggetto bingo, estrae un numeroda 1 a 10
function Bingo () {
	this.number=Math.floor(Math.random()*10+1);
}

Bingo.prototype.info = function () {
  console.log(this.number);
};

//da true se l'utente ha indovinato il numero estratto
Bingo.prototype.guess = function (number) {
    return this.number===number;
};

//crea l'oggetto bingo
var bingo = new Bingo();

bingo.info();
//prova ad indovinare con 3
console.log(bingo.guess(3));

console.log("\n");

