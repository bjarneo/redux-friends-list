webpackHotUpdate(0,{

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(253);\n\nvar _addFriend = __webpack_require__(267);\n\nvar _addFriend2 = _interopRequireDefault(_addFriend);\n\nvar _removeFriend = __webpack_require__(269);\n\nvar _removeFriend2 = _interopRequireDefault(_removeFriend);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = (function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var _props = this.props;\n            var friends = _props.friends;\n            var dispatch = _props.dispatch;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'Hello, friends'\n                ),\n                _react2.default.createElement('input', { type: 'text', ref: 'input' }),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return dispatch((0, _addFriend2.default)(input.value)).bind(_this2);\n                        } },\n                    'addFriend'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return dispatch((0, _removeFriend2.default)());\n                        } },\n                    'removeFriend'\n                ),\n                _react2.default.createElement('br', null),\n                friends.map(function (friend) {\n                    _react2.default.createElement(\n                        'span',\n                        { id: friend.id },\n                        friend.name\n                    );\n                })\n            );\n        }\n    }]);\n\n    return App;\n})(_react.Component);\n\n// Map state to props\n\nvar select = function select(state) {\n    return {\n        friends: state\n    };\n};\n\n// Connect a react component to the Redux store\nexports.default = (0, _reactRedux.connect)(select)(App);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(263); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"app.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app.js\n ** module id = 266\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/app.js?");

/***/ }

})