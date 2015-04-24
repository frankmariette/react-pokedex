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
			var name = pokemon.get('name');
			var abilities = pokemon.get('abilities');
			var abilityStyle = {
				padding: '5px'
			};
			if (abilities && abilities.length > 0) {
				abilities = abilities.map(function (ability) {
					return _React.createElement(
						'div',
						{ style: abilityStyle },
						ability.name.charAt(0).toUpperCase() + ability.name.substring(1)
					);
				});
			};
			return _React.createElement(
				'div',
				{ className: 'col-xs-4 pokemon' },
				_React.createElement(
					'div',
					{ className: 'panel panel-primary' },
					_React.createElement(
						'div',
						{ className: 'panel-heading' },
						name.charAt(0).toUpperCase() + name.substring(1)
					),
					_React.createElement(
						'div',
						{ className: 'panel-body' },
						_React.createElement(
							'span',
							null,
							'Abilities'
						),
						_React.createElement(
							'div',
							{ className: 'abilities' },
							abilities
						)
					)
				)
			);
		},
		handlePreviousClick: function handlePreviousClick() {
			this.props.previousClick();
		},
		handleNextClick: function handleNextClick() {
			this.props.nextClick();
		},
		render: function render() {
			var self = this;
			var pokeList = this.getCollection().map(function (model) {
				return self.createListItem(model);
			});
			var previousActive = this.props.pageInfo.currentPage > this.props.pageInfo.firstPage ? '' : 'disabled';
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
						{ className: 'previous' + ' ' + previousActive, onClick: this.handlePreviousClick },
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