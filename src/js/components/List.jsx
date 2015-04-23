import React from 'react';
import Pokemen from 'js/collections/Pokemen';
import reactbackbone from 'backbone-react-component';

var List = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	createListItem:function(pokemon){
		return (
			<div className="col-xs-4 pokemon">
				<div className="panel panel-primary">
					<div className="panel-heading">
						{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
					</div>
					<div className="panel-body">
						Panel content
					</div>
				</div>
			</div>
		)
	},
	componentWillMount: function(){
		this.setState({hasPreviousPage: this.props.hasPreviousPage});
	},
	getInitialState: function(){
		return {hasPreviousPage: this.props.hasPreviousPage};
	},
	handlePreviousClick: function(component){
		this.props.previousClick(component);
	},
	handleNextClick: function(component){
		this.props.nextClick(component);
	},
	render:function(){
		var pokeList = this.state.collection.map(this.createListItem);
		var disabled = this.props.hasPreviousPage ? "" : "disabled";
		return (
			<div>
				<div className="row">
					{pokeList}
				</div>
				<ul className="pager">
					<li className={"previous" +" "+ disabled} onClick={this.handlePreviousClick}><a href="javascript:void(0)">Previous</a></li>
					<li className="next" onClick={this.handleNextClick}><a href="javascript:void(0)">Next</a></li>
				</ul>
			</div>
		)
	}
});

export default List;
