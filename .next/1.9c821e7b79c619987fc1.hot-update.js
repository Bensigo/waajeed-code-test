webpackHotUpdate(1,{

/***/ "./node_modules/@firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/auth/dist/auth.js":
false,

/***/ "./node_modules/@firebase/database/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/messaging/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/polyfill/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/app/index.js":
false,

/***/ "./node_modules/firebase/auth/index.js":
false,

/***/ "./node_modules/firebase/database/index.js":
false,

/***/ "./node_modules/firebase/index.js":
false,

/***/ "./node_modules/firebase/messaging/index.js":
false,

/***/ "./node_modules/firebase/storage/index.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/whatwg-fetch/fetch.js":
false,

/***/ "./src/firebase.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/firebase.js: Unexpected token (22:37)\n\n  20 |  const config = { apiKey: \"AIzaSyDpFAgJC-Id8VNknwr-V7YvjvO3HY4p0Po\", authDomain: \"waajed-d6fa8.firebaseapp.com\", databaseURL: \"https://waajed-d6fa8.firebaseio.com\", projectId: \"waajed-d6fa8\", storageBucket: \"waajed-d6fa8.appspot.com\", messagingSenderId: \"750432590094\" };\n  21 | firebase.initializeApp(config);\n> 22 |  export const auth = firebase.auth().;\n     |                                      ^\n    at _class.raise (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseIdentifierName (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3818:18)\n    at _class.parseIdentifier (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3800:21)\n    at _class.parseMaybePrivateName (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3148:19)\n    at _class.parseSubscript (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2796:30)\n    at _class.parseSubscripts (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2745:19)\n    at _class.parseExprSubscripts (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2735:17)\n    at _class.parseMaybeUnary (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseVar (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4539:26)\n    at _class.parseVarStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4369:10)\n    at _class.parseStatementContent (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3976:21)\n    at _class.parseStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3926:17)");

/***/ }),

/***/ "./src/store/action/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_SESSION; });
/* unused harmony export signUp */
/* unused harmony export signin */
/* unused harmony export signout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase__ = __webpack_require__("./src/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__firebase__);


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var USER_SESSION = "USER_SESSION"; // create new user

function createUser(email, password) {
  return __WEBPACK_IMPORTED_MODULE_1__firebase__["auth"].createUserWithEmailAndPassword(email, password);
} // login user 


function login(email, password) {
  return __WEBPACK_IMPORTED_MODULE_1__firebase__["auth"].signInWithEmailAndPassword(email, password);
} // logout user


function logout() {
  return __WEBPACK_IMPORTED_MODULE_1__firebase__["auth"].signOut();
} // password reset 


function resetPassword(email) {
  return __WEBPACK_IMPORTED_MODULE_1__firebase__["auth"].sendPasswordResetEmail(email);
}

var signUp = function signUp(email, password) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var currentUser;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return createUser(email, password);

              case 2:
                currentUser = _context.sent;
                return _context.abrupt("return", dispatch({
                  type: USER_SESSION,
                  payload: currentUser
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var signin = function signin(email, pwd) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        var currentUser;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return login(email, pwd);

              case 2:
                currentUser = _context2.sent;
                return _context2.abrupt("return", dispatch({
                  type: USER_SESSION,
                  payload: currentUser
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var signout = function signout() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return logout();

              case 2:
                return _context3.abrupt("return", dispatch({
                  type: USER_SESSION,
                  payload: null
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(USER_SESSION, "USER_SESSION", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  reactHotLoader.register(createUser, "createUser", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  reactHotLoader.register(login, "login", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  reactHotLoader.register(logout, "logout", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  reactHotLoader.register(resetPassword, "resetPassword", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  reactHotLoader.register(signUp, "signUp", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  reactHotLoader.register(signin, "signin", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  reactHotLoader.register(signout, "signout", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/action/auth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.9c821e7b79c619987fc1.hot-update.js.map