import React from 'react';
import Pokemen from 'js/collections/Pokemen';
import reactbackbone from 'backbone-react-component';

var List = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	createListItem:function(pokemon){
		var name = pokemon.get('name');
		var abilities = pokemon.get('abilities');
		var abilityStyle = {
			padding:'5px'
		}
		if(abilities && abilities.length > 0){
			abilities = abilities.map(function(ability){
				return (
					<div style={abilityStyle}>
							{ability.name.charAt(0).toUpperCase() + ability.name.substring(1)}
					</div>
				);
			});
		};
		return (
			<div className="col-xs-4 pokemon">
				<div className="panel panel-primary">
					<div className="panel-heading">
						{name.charAt(0).toUpperCase() + name.substring(1)}
					</div>
					<div className="panel-body">
						<span>Abilities</span>
						<div className="abilities">
							{abilities}
						</div>
					</div>
				</div>
			</div>
		)
	},
	handlePreviousClick: function(){
		this.props.previousClick();
	},
	handleNextClick: function(){
		this.props.nextClick();
	},
	render:function(){
		var self = this;
		var pokeList = this.getCollection().map(function(model){
			return self.createListItem(model);
		});
		var previousActive = this.props.pageInfo.currentPage > this.props.pageInfo.firstPage ? "" : "disabled";
		return (
			<div>
				<div className="row">
					{pokeList}
				</div>
				<ul className="pager">
					<li className={"previous" +" "+ previousActive} onClick={this.handlePreviousClick}><a href="javascript:void(0)">Previous</a></li>
					<li className="next" onClick={this.handleNextClick}><a href="javascript:void(0)">Next</a></li>
				</ul>
			</div>
		)
	}
});

export default List;
