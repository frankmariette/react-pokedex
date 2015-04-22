define(function(require){
	'use strict';

	var React = require('react.backbone');
	var Pokemen = require('js/collections/Pokemen');

	var AbilityView = React.createClass({
		render: function(){
			return (<li>{this.props.ability.name}</li>)
		}
	})

	var PokemonView = React.createBackboneClass({
		render: function(){
			var index = 0;
			// var abilities = this.getModel().get('abilities').map(function(ability, index){
			// 	index++;
			// 	return ( <AbilityView key={index} ability={ability} /> );
			// });
			var name = this.getModel().get('name');
			var style = {
				content: name
			};
			return (
				<div style={style} className="browser-mockup with-url">
					<div className="hoverslide">
						<div>{name}</div>
					</div>
				</div>
			)
		}
	})

	var List = React.createBackboneClass({
		render: function(){
			var pokeList = this.getCollection().map(function(pokemon) {
	            return <PokemonView key={pokemon.national_id} model={pokemon} />;
	        });
			return (
				<ul>
					{pokeList}
				</ul>
			)
		}
	});

	return List;
})