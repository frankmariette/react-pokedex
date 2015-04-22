define(['exports', 'module', 'react', 'js/collections/Pokemen', 'backbone-react-component'], function (exports, module, _react, _jsCollectionsPokemen, _backboneReactComponent) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _React = _interopRequire(_react);

	var _Pokemen = _interopRequire(_jsCollectionsPokemen);

	var _reactbackbone = _interopRequire(_backboneReactComponent);

	var AbilityView = (function (_React$Component) {
		function AbilityView() {
			_classCallCheck(this, AbilityView);

			_get(Object.getPrototypeOf(AbilityView.prototype), 'constructor', this).call(this);
		}

		_inherits(AbilityView, _React$Component);

		_createClass(AbilityView, [{
			key: 'render',
			value: function render() {
				return _React.createElement(
					'li',
					null,
					this.props.ability.name
				);
			}
		}]);

		return AbilityView;
	})(_React.Component);

	var List = _React.createClass({
		displayName: 'List',

		mixins: [Backbone.React.Component.mixin],
		createListItem: function createListItem(pokemon) {
			var style = {
				content: name
			};
			return _React.createElement(
				'div',
				{ style: style, className: 'browser-mockup with-url' },
				_React.createElement(
					'div',
					{ className: 'hoverslide' },
					_React.createElement(
						'div',
						null,
						pokemon.name
					)
				)
			);
		},
		render: function render() {
			var pokeList = this.state.collection.map(this.createListItem);
			return _React.createElement(
				'ul',
				null,
				pokeList
			);
		}
	});

	module.exports = List;
});