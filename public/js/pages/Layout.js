define(['exports', 'module', 'react', 'react-router', 'react-router-bootstrap'], function (exports, module, _react, _reactRouter, _reactRouterBootstrap) {
    'use strict';

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

    var _React = _interopRequire(_react);

    var ReactCSSTransitionGroup = _React.addons.CSSTransitionGroup;

    var Layout = (function (_React$Component) {
        function Layout() {
            _classCallCheck(this, Layout);

            if (_React$Component != null) {
                _React$Component.apply(this, arguments);
            }
        }

        _inherits(Layout, _React$Component);

        _createClass(Layout, [{
            key: 'render',
            value: function render() {
                var name = this.context.router.getCurrentPath();
                return _React.createElement(
                    'div',
                    null,
                    _React.createElement(
                        'div',
                        { className: 'navbar navbar-default' },
                        _React.createElement(
                            'div',
                            { className: 'navbar-header' },
                            _React.createElement(
                                'button',
                                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-responsive-collapse' },
                                _React.createElement('span', { className: 'icon-bar' }),
                                _React.createElement('span', { className: 'icon-bar' }),
                                _React.createElement('span', { className: 'icon-bar' })
                            ),
                            _React.createElement(
                                _reactRouter.Link,
                                { className: 'navbar-brand', to: 'home' },
                                'PokeDex'
                            )
                        ),
                        _React.createElement(
                            'div',
                            { className: 'navbar-collapse collapse navbar-responsive-collapse' },
                            _React.createElement(
                                'ul',
                                { className: 'nav navbar-nav navbar-right' },
                                _React.createElement(
                                    _reactRouterBootstrap.NavItemLink,
                                    { to: 'home' },
                                    'Home'
                                ),
                                _React.createElement(
                                    _reactRouterBootstrap.NavItemLink,
                                    { to: 'pokemon' },
                                    'Pokemon'
                                )
                            )
                        )
                    ),
                    _React.createElement(
                        'div',
                        { className: 'container' },
                        _React.createElement(
                            ReactCSSTransitionGroup,
                            { transitionName: 'page' },
                            _React.createElement(_reactRouter.RouteHandler, { key: name })
                        )
                    )
                );
            }
        }]);

        return Layout;
    })(_React.Component);

    Layout.contextTypes = {
        router: _React.PropTypes.func.isRequired
    };

    module.exports = Layout;

    //           <div className="navbar navbar-default">
    //     <div className="navbar-header">
    //         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //         </button>
    //         <a className="navbar-brand" href="javascript:void(0)">Brand</a>
    //     </div>
    //     <div className="navbar-collapse collapse navbar-responsive-collapse">
    //         <ul className="nav navbar-nav">
    //             <li className="active"><a href="javascript:void(0)">Active</a></li>
    //             <li><a href="javascript:void(0)">Link</a></li>
    //             <li className="dropdown">
    //                 <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
    //                 <ul className="dropdown-menu">
    //                     <li><a href="javascript:void(0)">Action</a></li>
    //                     <li><a href="javascript:void(0)">Another action</a></li>
    //                     <li><a href="javascript:void(0)">Something else here</a></li>
    //                     <li className="divider"></li>
    //                     <li className="dropdown-header">Dropdown header</li>
    //                     <li><a href="javascript:void(0)">Separated link</a></li>
    //                     <li><a href="javascript:void(0)">One more separated link</a></li>
    //                 </ul>
    //             </li>
    //         </ul>
    //         <form className="navbar-form navbar-left">
    //             <input type="text" className="form-control col-lg-8" placeholder="Search" />
    //         </form>
    //         <ul className="nav navbar-nav navbar-right">
    //             <li><a href="javascript:void(0)">Link</a></li>
    //             <li className="dropdown">
    //                 <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
    //                 <ul className="dropdown-menu">
    //                     <li><a href="javascript:void(0)">Action</a></li>
    //                     <li><a href="javascript:void(0)">Another action</a></li>
    //                     <li><a href="javascript:void(0)">Something else here</a></li>
    //                     <li className="divider"></li>
    //                     <li><a href="javascript:void(0)">Separated link</a></li>
    //                 </ul>
    //             </li>
    //         </ul>
    //     </div>
    // </div>
});