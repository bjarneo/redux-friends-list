webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _react = __webpack_require__(139);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(243);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _redux = __webpack_require__(244);\n\nvar _reactRedux = __webpack_require__(253);\n\nvar _unary = __webpack_require__(262);\n\nvar _unary2 = _interopRequireDefault(_unary);\n\nvar _app = __webpack_require__(266);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// if more than one reducer we need to combineReducers in order to make it work\nvar store = (0, _redux.createStore)(_unary2.default);\n\n// wrap our root component in Provider to make our store instance available to\n// all components. Internally, this is done via React's context.\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(_app2.default, null)\n), document.getElementById('root'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(263); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 76\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ }

})