define(['exports', 'module', 'backbone', 'backbone.paginator', '../models/Pokemon', 'localstorage'], function (exports, module, _backbone, _backbonePaginator, _modelsPokemon, _localstorage) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _Backbone = _interopRequire(_backbone);

	var _PageableCollection2 = _interopRequire(_backbonePaginator);

	var _Pokemon = _interopRequire(_modelsPokemon);

	var _LocalStorage = _interopRequire(_localstorage);

	var Pokemen = (function (_PageableCollection) {
		function Pokemen() {
			_classCallCheck(this, Pokemen);

			_get(Object.getPrototypeOf(Pokemen.prototype), 'constructor', this).call(this);
			this.model = _Pokemon;
			this.LocalStorage = new _Backbone.LocalStorage('Pokemen');
			this.url = 'http://pokeapi.co/api/v1/pokedex/1';
			this.switchMode('client');
			this.setPageSize(9);
		}

		_inherits(Pokemen, _PageableCollection);

		_createClass(Pokemen, [{
			key: 'parse',
			value: function parse(response) {
				return response.pokemon;
			}
		}]);

		return Pokemen;
	})(_PageableCollection2);

	module.exports = new Pokemen();
});