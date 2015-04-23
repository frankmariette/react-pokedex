import React from 'react';
import Pokemen from 'js/collections/Pokemen';
import reactbackbone from 'backbone-react-component';

var List = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	createListItem:function(pokemon){
		var style = {
			content: name
		};
		return (
			<div style={style} className="browser-mockup with-url">
				<div className="hoverslide">
					<div>{pokemon.name}</div>
				</div>
			</div>
		)
	},
	render:function(){
		var pokeList = this.state.collection.map(this.createListItem);
		return (
			<ul>
				{pokeList}
			</ul>
		)
	}
});

export default List;
