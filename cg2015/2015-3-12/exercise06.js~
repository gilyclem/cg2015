(function() {
//funzione costruttrice per l'album
function Album(author,title){
 if (!(this instanceof Album)) return new Album(author, title);
 this.author=author;
this.title=title;
this.times_played=0; 	//quante volte l'album è stato eseguito
}

//funzione costruttrice per music box
function MusicBox(){
if (!(this instanceof MusicBox)) return new MusicBox();
this.album_list=[];	//tutti gli album del box
}  

/*
//posso aggiungere molti album con una sola istruzione sfruttando gli arguments
MusicBox.prototype.addAlbum=function(){
  var n = arguments.length;
  var i;
  for (i = 0; i < n; i += 1) { //itera sui parametri
    this.album_list.push(arguments[i]);	//inserisce l'album nella lista
  }
  };
*/

//In alternativa posso aggiungere molti album con una sola istruzione sfruttando gli arguments
MusicBox.prototype.addAlbum=function(){
    Array.prototype.push.apply(this.album_list,arguments);
  };

//incrementa times_played e stampa una stringa
Album.prototype.play=function(){
	console.log("Playing "+this.toString());
	this.times_played++;};

//toString per l'album
Album.prototype.toString=function(){return this.author+"-"+this.title};

//l'album preferito è quello che è stato eseguito più volte
MusicBox.prototype.favoriteAlbum=function(){
//il comparatore valuta times_played di ogni album e ordina dal più grande al più piccolo
var compare = function (a1, a2) {
 return a2.times_played - a1.times_played;
};
//invoca ordinamento con comparatore
this.album_list.sort(compare);
//restituisco il primo album della lista cioè il più eseguito
return this.album_list[0].toString();
};

//creo il box e gli album
  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  //box.addAlbum(a1);
  //box.addAlbum(a2);
  //box.addAlbum(a3);

    box.addAlbum(a1, a2, a3);

  a1.play(); // prints "Playing The Who - Tommy"
  a2.play();  // prints "Playing Tom Waits - Closing Time"  
  a1.play();  // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite);

  console.log("\n");
}());
