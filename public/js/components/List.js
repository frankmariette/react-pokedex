define(['exports', 'module', 'react', 'js/collections/Pokemen', 'backbone-react-component'], function (exports, module, _react, _jsCollectionsPokemen, _backboneReactComponent) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _React = _interopRequire(_react);

	var _Pokemen = _interopRequire(_jsCollectionsPokemen);

	var _reactbackbone = _interopRequire(_backboneReactComponent);

	var List = _React.createClass({
		displayName: 'List',

		mixins: [Backbone.React.Component.mixin],
		createListItem: function createListItem(pokemon) {
			return _React.createElement(
				'div',
				{ className: 'col-xs-4 pokemon' },
				_React.createElement(
					'div',
					{ className: 'panel panel-primary' },
					_React.createElement(
						'div',
						{ className: 'panel-heading' },
						pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)
					),
					_React.createElement(
						'div',
						{ className: 'panel-body' },
						'Panel content'
					)
				)
			);
		},
		componentWillMount: function componentWillMount() {
			this.setState({ hasPreviousPage: this.props.hasPreviousPage });
		},
		getInitialState: function getInitialState() {
			return { hasPreviousPage: this.props.hasPreviousPage };
		},
		handlePreviousClick: function handlePreviousClick(component) {
			this.props.previousClick(component);
		},
		handleNextClick: function handleNextClick(component) {
			this.props.nextClick(component);
		},
		render: function render() {
			var pokeList = this.state.collection.map(this.createListItem);
			var disabled = this.props.hasPreviousPage ? '' : 'disabled';
			return _React.createElement(
				'div',
				null,
				_React.createElement(
					'div',
					{ className: 'row' },
					pokeList
				),
				_React.createElement(
					'ul',
					{ className: 'pager' },
					_React.createElement(
						'li',
						{ className: 'previous' + ' ' + disabled, onClick: this.handlePreviousClick },
						_React.createElement(
							'a',
							{ href: 'javascript:void(0)' },
							'Previous'
						)
					),
					_React.createElement(
						'li',
						{ className: 'next', onClick: this.handleNextClick },
						_React.createElement(
							'a',
							{ href: 'javascript:void(0)' },
							'Next'
						)
					)
				)
			);
		}
	});

	module.exports = List;
});