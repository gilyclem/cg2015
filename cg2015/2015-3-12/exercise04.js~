(function () {
	//una persona ha del denaro disponibile. Può comprare una macchina se ha denaro sufficiente, in tal caso è ricco ma il costo dell'acquisto gli è scalato
  var person = {
	money:6000,
	buy: function(car)	{
		if(this.money>=car.price){
			this.money-=car.price;
			console.log("I'm rich!I bought the car, now i have "+this.money);}
				}
  };
//Una macchina ha un prezzo, se guidata stampa Vrum Vrum
  var  car = {
	price:5000,
	drive: function(){console.log("Vrum Vrum");}
  };

  // print Vrum Vrum
  car.drive();

  // print I'm rich: prova a comprare la macchina se costa più di 1000 euro
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());


(function () {
//un impiegato ha una funzione hello
var employee={hello:function(){console.log("I work at IBM");}};
//l'impiegato è in una lista di impiegati
  var employees = [employee];
//itera sulla lista per stampare l'hello dell'impiegato
  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
console.log("\n");
}());
