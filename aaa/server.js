var express = require('express');
var app = express();

app.set('view engine', 'ejs')

properties = ['idPilote','nom','prenom', 'dateNaiss']  

var knex = require('knex')({
	client: 'pg',
	connection: {
		user : 'postgres',
		password : 'loic',
		database : 'test'
	}
  });

    var b = []
    var c = []
	


	

knex.select().from('pilote').then(todo => {
    for (var i = 0; i<todo.length; i++) {
        b.push(todo[i].nom)
    }
})


function ajouterPilote() {
	console.log("ajout")
	var insert1 = {idPilote: "0005", nom: "jack", prenom: "aazz", dateNaiss: "1990/10/10"};
	knex.insert(insert1).into("pilote").then(function (id) {
		console.log(id);
	  })
}




// var b = knex('pilote').select()

app.get('/', (request, response) => {
	response.render('./pages/index.ejs', {b: b})
})

app.listen(80)