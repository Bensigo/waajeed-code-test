webpackHotUpdate(1,{

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


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var USER_SESSION = "USER_SESSION"; // create new user

function createUser(email, password) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* auth */])().createUserWithEmailAndPassword(email, password);
} // login user 


function login(email, password) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* auth */])().signInWithEmailAndPassword(email, password);
} // logout user


function logout() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* auth */])().signOut();
} // password reset 


function resetPassword(email) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* auth */])().sendPasswordResetEmail(email);
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

/***/ }),

/***/ "./src/store/reducer/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_auth__ = __webpack_require__("./src/store/action/auth.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  authUser: null
};
/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__action_auth__["a" /* USER_SESSION */]:
      localStorage.setItem("user", action.payload);
      return _objectSpread({}, state, {
        authUser: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INITIAL_STATE, "INITIAL_STATE", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/reducer/auth.js");
  reactHotLoader.register(_default, "default", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/store/reducer/auth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.eea4e37bb078b59dc3fa.hot-update.js.map