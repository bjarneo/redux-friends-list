webpackHotUpdate(0,{

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(253);\n\nvar _addFriend2 = __webpack_require__(267);\n\nvar _addFriend3 = _interopRequireDefault(_addFriend2);\n\nvar _removeFriend = __webpack_require__(269);\n\nvar _removeFriend2 = _interopRequireDefault(_removeFriend);\n\nvar _friend = __webpack_require__(270);\n\nvar _friend2 = _interopRequireDefault(_friend);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = (function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: 'addFriend',\n        value: function addFriend(e) {\n            var dispatch = this.props.dispatch;\n\n            var input = this.refs.input;\n\n            dispatch((0, _addFriend3.default)(input.value.trim()));\n            input.value = '';\n        }\n    }, {\n        key: 'removeFriend',\n        value: function removeFriend(e) {\n            // removeFriend()\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var friends = this.props.friends;\n\n            console.log(friends);\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'Hello, friends'\n                ),\n                _react2.default.createElement('input', { type: 'text', ref: 'input' }),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: this.addFriend.bind(this) },\n                    'addFriend'\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'ul',\n                    null,\n                    friends.map(function (friend) {\n                        return _react2.default.createElement(_friend2.default, _extends({ key: friend.id }, friend));\n                    })\n                )\n            );\n        }\n    }]);\n\n    return App;\n})(_react.Component);\n\n// Map state to props\n\nvar select = function select(state) {\n    return {\n        friends: state\n    };\n};\n\n// Connect a react component to the Redux store\nexports.default = (0, _reactRedux.connect)(select)(App);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(263); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"app.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app.js\n ** module id = 266\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/app.js?");

/***/ }

})