define(['exports', 'module', 'react', '../components/List', '../collections/Pokemen'], function (exports, module, _react, _componentsList, _collectionsPokemen) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _React = _interopRequire(_react);

	var _List = _interopRequire(_componentsList);

	var _Pokemen = _interopRequire(_collectionsPokemen);

	var Pokemon = (function (_React$Component) {
		function Pokemon(props) {
			_classCallCheck(this, Pokemon);

			_get(Object.getPrototypeOf(Pokemon.prototype), 'constructor', this).call(this, props);
			// this.state = {
			// 	currentPage: Pokemen.state.currentPage,
			// 	firstPage: Pokemen.state.firstPage,
			// 	lastPage: Pokemen.state.lastPage
			// };
		}

		_inherits(Pokemon, _React$Component);

		_createClass(Pokemon, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				_Pokemen.getFirstPage();
			}
		}, {
			key: 'handlePreviousClick',
			value: function handlePreviousClick() {
				if (_Pokemen.hasPreviousPage()) {
					this.setState({ hasPreviousPage: true });
					_Pokemen.getPreviousPage();
				} else {
					this.setState({ hasPreviousPage: false });
					return null;
				}
			}
		}, {
			key: 'handleNextClick',
			value: function handleNextClick() {
				var previous = _Pokemen.hasPreviousPage();
				this.setState({ hasPreviousPage: previous });
				_Pokemen.getNextPage();
			}
		}, {
			key: 'render',
			value: function render() {
				// var hasPreviousPage = this.state.hasPreviousPage;
				return _React.createElement(_List, {
					pageInfo: _Pokemen.state,
					previousClick: this.handlePreviousClick.bind(this),
					nextClick: this.handleNextClick.bind(this),
					collection: _Pokemen
				});
			}
		}]);

		return Pokemon;
	})(_React.Component);

	module.exports = Pokemon;
});