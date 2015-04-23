define(['exports', 'module', 'react', 'react-router'], function (exports, module, _react, _reactRouter) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _React = _interopRequire(_react);

	var Index = (function (_React$Component) {
		function Index() {
			_classCallCheck(this, Index);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(Index, _React$Component);

		_createClass(Index, [{
			key: 'render',
			value: function render() {
				return _React.createElement(
					'section',
					null,
					_React.createElement(
						'div',
						{ className: 'row' },
						_React.createElement(
							'div',
							{ className: 'col-xs-10 col-xs-offset-1' },
							_React.createElement(
								'h1',
								{ className: 'welcome' },
								_React.createElement(
									'span',
									null,
									'Welcome to your personal ',
									_React.createElement(
										'span',
										null,
										'Pokedex'
									)
								)
							),
							_React.createElement(
								'div',
								{ className: 'row' },
								_React.createElement(
									'div',
									{ className: 'col xs-6 col-xs-offset-4' },
									_React.createElement(
										_reactRouter.Link,
										{ to: 'pokemon', className: 'btn btn-primary btn-lg' },
										'Start here!'
									),
									_React.createElement(
										'div',
										{ className: 'center-block' },
										_React.createElement('i', { className: 'fa fa-facebook' })
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Index;
	})(_React.Component);

	module.exports = Index;
});