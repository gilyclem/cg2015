(function() {
	//trova l'oggetto della lista music che è stato eseguito più volte
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
      max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }
	//restituisce un oggetto composto da un campo play ed uno index
    return { play: max_played, index: max_index };
  };

	//music è una lista con tre oggetti con proprietà played
  var music = [{played:2},{played:3},{played:0}];
	//invoca la funzione favorite_album
  var fav = favorite_album( music );

	//stampa la proprietà play dell'oggetto restituito da favorite_album
  console.log( "Your favorite album was played " + fav.play + " times" );

  // Bonus: Write code here to make the following line print the above line
	fav = "Your favorite album was played " + fav.play + " times";
  console.log( fav );
  console.log("\n");
}());
