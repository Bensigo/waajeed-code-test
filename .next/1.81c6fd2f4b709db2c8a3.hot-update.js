webpackHotUpdate(1,{

/***/ "./node_modules/next/dist/lib/dynamic.js":
false,

/***/ "./node_modules/next/dynamic.js":
false,

/***/ "./src/firebase.js":
false,

/***/ "./src/store/action/auth.js":
false,

/***/ "./src/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__("./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer_auth__ = __webpack_require__("./src/store/reducer/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__reducer_auth__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({
  auth: __WEBPACK_IMPORTED_MODULE_3__reducer_auth__["default"]
});
var middleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_1_redux_logger___default.a, __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a);
var makeStore = function makeStore() {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(reducer, middleware);
  return store;
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(reducer, "reducer", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/index.js");
  reactHotLoader.register(middleware, "middleware", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/index.js");
  reactHotLoader.register(makeStore, "makeStore", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/reducer/auth.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/reducer/auth.js: Unexpected token, expected \";\" (15:49)\n\n  13 |   switch (action.type) {\n  14 |     case USER_SESSION:\n> 15 |      const payload = localStorage.getItem(\"user\"));\n     |                                                  ^\n  16 |       return { ...state, authUser: payload };\n  17 |     default:\n  18 |       return state;\n    at _class.raise (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseVarStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4370:10)\n    at _class.parseStatementContent (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3976:21)\n    at _class.parseStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseSwitchStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4308:36)\n    at _class.parseStatementContent (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3963:21)\n    at _class.parseStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseFunctionBody (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3722:24)\n    at _class.parseArrowExpression (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3674:10)\n    at _class.parseParenAndDistinguishExpression (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3290:12)\n    at _class.parseExprAtom (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3081:21)");

/***/ })

})
//# sourceMappingURL=1.81c6fd2f4b709db2c8a3.hot-update.js.map