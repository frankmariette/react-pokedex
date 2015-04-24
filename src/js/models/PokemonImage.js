import Backbone from 'backbone';

class PokemonImage extends Backbone.Model {
	constructor(options) {
		super(options);
		this.urlRoot = "http://pokeapi.co/";
	}
	url(){
		return this.urlRoot + this.get('resource_uri');
	}
}

export default PokemonImage;