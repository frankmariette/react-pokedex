import Backbone from 'backbone';
import Pokemon from '../models/Pokemon';
import LocalStorage from 'localstorage';

class Pokemen extends Backbone.Collection {
	constructor () {
		super();
		this.model = Pokemon;
		this.LocalStorage = new Backbone.LocalStorage("Pokemen");
		this.url = "http://pokeapi.co/api/v1/pokedex/1";
		this.fetch();
	}
	parse (response) {
		return response.pokemon;
	}
}

export default new Pokemen;
