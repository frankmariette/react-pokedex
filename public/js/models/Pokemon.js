define(function(require){
	var Backbone = require('backbone');

	var Pokemon = Backbone.Model.extend({
		urlRoot: "http://pokeapi.co/api/v1/",
		idAttribute: "national_id"
	});

	return Pokemon;
	
});