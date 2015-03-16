//funzione costruttrice di album
(function () {
  function PhotoAlbum(){
 if (!(this instanceof PhotoAlbum)) return new PhotoAlbum();
 this.pictures=[]; //lista delle foto nell'album
}

//funzione costruttrice di foto
function Photo(title){
 if (!(this instanceof Photo)) return new Photo(title);
	this.title=title;
	this.tags=[]; //lista di tag nella foto
}

//funzioni di foto: tagga: aggiungi un nome nella lista di tag di foto; showTags:toString() sull'array
Photo.prototype.tag=function(name){this.tags.push(name);};
Photo.prototype.showTags=function(){console.log(this.tags.toString());};

//funzioni di album: addPicture: aggiungi una foto all'album; showPictures: stampa i titoli delle foto nell'album in cui compare una certa persona con name passato come parametro
PhotoAlbum.prototype.addPicture=function(photo){this.pictures.push(photo);};//aggiungi una foto all'album
PhotoAlbum.prototype.showPictures=function(name){
//crea un array di foto filtrando la lista dell'album con una funzione che dato il nome della persona controlla se il nome compaia nell'array di tag della foto
var selection = this.pictures.filter(function(item1){if(item1.tags.some(function(item2){return item2===name;}))return item1;});
//per ogni foto nella nuova lista stampa il titolo
selection.forEach(function(item){console.log(item.title);});
};

  var album = PhotoAlbum();
  var p;

  p = Photo("Sardinia Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the beach");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's splendid");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Sardinia Trip 1, Look the beach, OMG it's splendid"
  album.showPictures("Jimmy");

  // prints "Sardinia Trip 1, OMG it's splendid"
  album.showPictures("Jane");    
	console.log("\n");
}());
