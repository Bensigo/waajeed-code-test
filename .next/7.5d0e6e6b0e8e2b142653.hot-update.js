webpackHotUpdate(7,{

/***/ "./node_modules/next/dynamic.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/dynamic.js")


/***/ }),

/***/ "./src/firebase.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/firebase.js: Unexpected token (1:20)\n\n> 1 | export const  async () => {\n    |                     ^\n  2 |   const firebase = await import(\"firebase\");\n  3 |   try{\n  4 |     const config = {\n    at _class.raise (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseVar (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4543:18)\n    at _class.parseVarStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4369:10)\n    at _class.parseStatementContent (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3976:21)\n    at _class.parseStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseExportDeclaration (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4978:17)\n    at _class.parseExport (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4945:31)\n    at _class.parseStatementContent (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4013:27)\n    at _class.parseStatement (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseTopLevel (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:3902:10)\n    at _class.parse (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:5250:17)\n    at parse (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/babylon/lib/index.js:9972:38)\n    at parser (/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/node_modules/@babel/core/lib/transformation/normalize-file.js:106:33)");

/***/ }),

/***/ "./src/store/action/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return signUp; });
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
  console.log(email, password);
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
//# sourceMappingURL=7.5d0e6e6b0e8e2b142653.hot-update.js.map