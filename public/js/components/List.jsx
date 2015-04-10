define(function(require){
	var React = require('react.backbone');
	var Pokemen = require('js/collections/Pokemen');

	var AbilityView = React.createClass({
		render: function(){
			return (<li>{this.props.ability.name}</li>)
		}
	})

	var PokemonView = React.createBackboneClass({
		render: function(){
			var listStyle = {
				listStyle:'none'
			}
			var index = 0;
			var abilities = this.getModel().get('abilities').map(function(ability, index){
				index++;
				return ( <AbilityView key={index} ability={ability} /> );
			});
			return (
				<div className="browser-mockup with-url">
					<div className="hoverslide">
						<li style={listStyle} id={this.getModel().get('national_id')}>{this.getModel().get('name')}</li>
						<ul>{abilities}</ul>
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