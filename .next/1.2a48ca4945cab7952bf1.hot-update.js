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
throw new Error("Module build failed: SyntaxError: /Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/reducer/auth.js: Unexpected token, expected \",\" (15:51)\n\n  13 |   switch (action.type) {\n  14 |     case USER_SESSION:\n> 15 |       (localStorage.setItem(\"user\", action.payload);\n     |                                                    ^\n  16 |       return { ...state, authUser: action.payload };\n  17 |     default:\n  18 |       return state;\n    at _class.raise (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2063:16)\n    at _class.expect (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2051:28)\n    at _class.parseParenAndDistinguishExpression (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3251:14)\n    at _class.parseExprAtom (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3081:21)\n    at _class.parseExprAtom (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2499:21)\n    at _class.parseStatementContent (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4040:21)\n    at _class.parseStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3926:17)");

/***/ })

})
//# sourceMappingURL=1.2a48ca4945cab7952bf1.hot-update.js.map