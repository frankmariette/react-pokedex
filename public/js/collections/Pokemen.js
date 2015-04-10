define(function(require){
	var Backbone = require('backbone');
	var Pokemon = require('../models/Pokemon');

	var Pokemen = Backbone.Collection.extend({
		model: Pokemon,
		url: "http://pokeapi.co/api/v1/pokemon/?limit=10&offset=1",
		parse:function(response){
			return response.objects;
		}
	});

	return new Pokemen();
	
});