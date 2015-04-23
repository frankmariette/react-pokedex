import Backbone from 'backbone';
import PageableCollection from 'backbone.paginator';
import Pokemon from '../models/Pokemon';
import LocalStorage from 'localstorage';

class Pokemen extends PageableCollection {
	constructor () {
		super();
		this.model = Pokemon;
		this.LocalStorage = new Backbone.LocalStorage("Pokemen");
		this.url = "http://pokeapi.co/api/v1/pokedex/1";
		this.switchMode("client");
		this.setPageSize(12);
	}
	parse (response) {
		return response.pokemon;
	}
}

export default new Pokemen;
