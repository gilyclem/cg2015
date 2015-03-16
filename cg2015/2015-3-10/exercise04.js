/*write a function select(data, key, values) that given an array of objects data, a string key and an array of values values, returns the array of the objects where the property key is equal to one of the values in values. */

var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'donald'];

function select(data,key,values){
return data.filter(function(item1){ //filtra l'array data con la funzione prendendo un oggetto alla volta item1
	if (values.some(function(item2){
		return item2===item1[key];})) //verifica se il valore dell'oggetto item1 con key cioè il nome del personaggio in oggetto è presente nell'array values dei nomi. Se è presente ritorna true
	return item1;		} //se la some ha restituito true l'oggetto corrente è presente nella lista filtrata dei risultati
	);
}

//utilizzo
var out = select(data, key, values);
printObject(out);
console.log("\n");

//stampa un array di oggetti con campi id e name
function printObject(result){
	result.forEach(function (item){console.log(item["id"]+" "+item["name"])});
}
