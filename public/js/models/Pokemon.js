define(['exports', 'module', 'backbone', './PokemonImage'], function (exports, module, _backbone, _PokemonImage) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _Backbone = _interopRequire(_backbone);

	var _PokemonImage2 = _interopRequire(_PokemonImage);

	var Pokemon = (function (_Backbone$Model) {
		function Pokemon(options) {
			_classCallCheck(this, Pokemon);

			_get(Object.getPrototypeOf(Pokemon.prototype), 'constructor', this).call(this, options);
			this.urlRoot = 'http://pokeapi.co/';
			this.fetch();
		}

		_inherits(Pokemon, _Backbone$Model);

		_createClass(Pokemon, [{
			key: 'url',
			value: function url() {
				return this.urlRoot + this.get('resource_uri');
			}
		}]);

		return Pokemon;
	})(_Backbone.Model);

	module.exports = Pokemon;
});