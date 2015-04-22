define(function(require){
	var Backbone = require('backbone');
	var Pokemon = require('../models/Pokemon');
	var LocalStorage = require('localstorage');

	var Pokemen = Backbone.Collection.extend({
		model: Pokemon,
		LocalStorage: new Backbone.LocalStorage("Pokemen"),
		url: "http://pokeapi.co/api/v1/pokedex/1",
		parse:function(response){
			return response.pokemon;
		}
	});

	return new Pokemen();
	
});