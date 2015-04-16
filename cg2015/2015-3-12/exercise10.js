/* Inheritance exercise10
exercise10a
define a Door constructor function. A door instance exposes the two methods open and close that change the values of a state property respectively to open and closed.
exercise10b
define a SecurityDoor constructor function that inherits the bhehaviour from Door but once closed a security_door instance can be locked via the lock method. Invoking the unlock method, bring the security_door back to the close state. */

//porta: gli stati sono open e closed
function Door (state) {
this.state=state||"closed";//non funziona con numeri questa inizializzazione 0=false
}

Door.prototype.open = function () {
    this.state="open";
};

Door.prototype.close = function () {
    this.state="closed";
};

Door.prototype.info = function () {
  console.log(this.state);
};

//security door: sottoclasse
function SecurityDoor (state) {
  Door.call(this,state); // call "super" constructor
}
//il prototipo della sottoclasse ha prototipo della superclasse
SecurityDoor.prototype = Object.create(Door.prototype); //crea un nuovo prototipo copia di quello di door
//in security door trovo open() e close()
SecurityDoor.prototype.constructor = SecurityDoor;	//cambia funzione costruttrice rispetto a door	
SecurityDoor.prototype.lock = function () {		//aggiungo il metodo lock che blocca se è chiusa
	if (this.state==="closed"){  
	this.state="locked";}
};

SecurityDoor.prototype.unlock = function () {		//aggiungo unlock
	this.state="closed";
};

//utilizzo. stampa closed open closed locked closed
var door1 = new Door();
console.log(door1 instanceof Door); //true
door1.close();
door1.info();
door1.open();
door1.info();

var door2 = new SecurityDoor();
door2.close();
door2.info();
door2.lock();
door2.info();
door2.unlock();
door2.info();









