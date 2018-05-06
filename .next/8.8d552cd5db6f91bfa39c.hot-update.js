webpackHotUpdate(8,{

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
false,

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
false,

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
false,

/***/ "./node_modules/babel-runtime/core-js/map.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
false,

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
false,

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/foreach/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/lib/link.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

/***/ "./src/components/Layout/Index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styled__ = __webpack_require__("./src/components/Layout/styled.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dynamic__ = __webpack_require__("./node_modules/next/dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Nav_Nav__ = __webpack_require__("./src/components/Nav/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Nav_Nav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Nav_Nav__);
var _jsxFileName = "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Layout/Index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styled__["a" /* Wrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Nav_Nav__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Layout/Index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Nav/Nav.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js: Unexpected token, expected \";\" (9:8)\n\n   7 | import  { Wrapper, NavContianer } from \"./style.js\";\n   8 | \n>  9 | unction Navigation () {\n     |         ^\n  10 |   const authUser = () => window.localStorage.getItem(\"user\");\n  11 |   const user = authUser()\n  12 |   console.log(user);\n    at _class.raise (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseExpressionStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4439:10)\n    at _class.parseStatementContent (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4045:19)\n    at _class.parseStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseTopLevel (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3902:10)\n    at _class.parse (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:5250:17)\n    at parse (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:9972:38)\n    at parser (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/@babel/core/lib/transformation/normalize-file.js:106:33)\n    at normalizeFile (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/@babel/core/lib/transformation/normalize-file.js:53:11)\n    at runSync (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/@babel/core/lib/transformation/index.js:34:41)\n    at runAsync (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/@babel/core/lib/transformation/index.js:25:14)\n    at /Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/@babel/core/lib/transform.js:32:34");

/***/ }),

/***/ "./src/components/Nav/style.js":
false,

/***/ "./src/routes/index.js":
false

})
//# sourceMappingURL=8.8d552cd5db6f91bfa39c.hot-update.js.map