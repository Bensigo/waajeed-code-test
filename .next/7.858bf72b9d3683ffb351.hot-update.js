webpackHotUpdate(7,{

/***/ "./src/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var FB =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
    var firebase, config;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new (__webpack_require__("./node_modules/next/dynamic.js").SameLoopPromise)(function (resolve, reject) {
              var weakId = /*require.resolve*/("./node_modules/firebase/index.js");

              try {
                var weakModule = __webpack_require__(weakId);

                return resolve(weakModule);
              } catch (err) {}

              __webpack_require__.e/* require.ensure */(6).then((function (require) {
                try {
                  var m = __webpack_require__("./node_modules/firebase/index.js");

                  m.__webpackChunkName = 'firebase_bf12e1515c25c7d8c0352f1413ab9a15';
                  resolve(m);
                } catch (error) {
                  reject(error);
                }
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            });

          case 2:
            firebase = _context.sent;
            _context.prev = 3;
            config = {
              apiKey: "AIzaSyDpFAgJC-Id8VNknwr-V7YvjvO3HY4p0Po",
              authDomain: "waajed-d6fa8.firebaseapp.com",
              databaseURL: "https://waajed-d6fa8.firebaseio.com",
              projectId: "waajed-d6fa8",
              storageBucket: "waajed-d6fa8.appspot.com",
              messagingSenderId: "750432590094"
            };
            firebase.initializeApp(config);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", console.log(_context.t0.stack));

          case 11:
            ;
            return _context.abrupt("return", firebase.auth());

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 8]]);
  }));

  return function FB() {
    return _ref.apply(this, arguments);
  };
}();
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FB, "FB", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/firebase.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

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


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var USER_SESSION = "USER_SESSION"; // create new user

function createUser(email, password) {
  __WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* FB */];
  return auth.createUserWithEmailAndPassword(email, password);
} // login user 


function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
} // logout user


function logout() {
  return auth.signOut();
} // password reset 


function resetPassword(email) {
  return auth.sendPasswordResetEmail(email);
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
//# sourceMappingURL=7.858bf72b9d3683ffb351.hot-update.js.map