webpackHotUpdate(5,{

/***/ "./src/components/Nav/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase__ = __webpack_require__("./src/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./src/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_js__ = __webpack_require__("./src/components/Nav/style.js");
var _jsxFileName = "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "AuthLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "auth",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* DASHBOARD */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          onClick: _this.hanldeLogOut,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, "Logout"));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "NonAuthLink", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          className: "jsx-814413774" + " " + "auth"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: __WEBPACK_IMPORTED_MODULE_7__routes__["c" /* SIGN_IN */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-814413774" + " " + "link"
        }, "Login")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: __WEBPACK_IMPORTED_MODULE_7__routes__["d" /* SIGN_UP */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          className: "jsx-814413774" + " " + "link"
        }, "Register")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "814413774",
          css: ".auth{dispaly:-webkit-box;dispaly:-webkit-flex;dispaly:-ms-flexbox;dispaly:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.link{margin:10px;color:grey;font-size:15px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}.link:hover{-webkit-tranform:scale(1.5);tranform:scale(1.5);-webkit-transition:all .5ms ease-in;transition:all .5ms ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJPLEFBR3dCLEFBS0QsQUFPUSxZQU5ULFdBQ0ksZUFDRSxVQUtXLE9BSlAsbUJBUkYsK0JBU3JCLE9BSUEsK0JBWmdDLG1IQUNoQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaWdvL0Rlc2t0b3AvZGV2ZWxvcGVyL2Rldi1zcGFjZS90ZXN0L3dhYWplZC1jb2RlLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtGQiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiXG5cbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vLi4vcm91dGVzXCJcbmltcG9ydCAgeyBXcmFwcGVyLCBOYXZDb250aWFuZXIgfSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgQXV0aExpbmtzID0gKCkgPT4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5EQVNIQk9BUkR9PlxuICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPkRhc2hib2FyZDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgPGJ1dHRvbiAgb25DbGljaz17dGhpcy5oYW5sZGVMb2dPdXR9PkxvZ291dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuICBOb25BdXRoTGluayA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgPExpbmsgaHJlZj17cm91dGVzLlNJR05fSU59PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPkxvZ2luPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPXtyb3V0ZXMuU0lHTl9VUH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+UmVnaXN0ZXI8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgLmF1dGgge1xuICAgICAgICAgIGRpc3BhbHk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgICB0cmFuZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVtcyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuICApO1xuICBoYW5sZGVMb2dPdXQgKCkge1xuICByZXR1cm4gIEZCKCkudGhlbih1c2VyID0+IHtcbiAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICAvLyAgdXNlci5zaWduT3V0KCk7XG4gICAgIHJldHVybiBSb3V0ZXIucHVzaChcIi9zaWduaW5cIilcbiAgIH0pO1xufVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgYXV0aFVzZXIgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gPFdyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldhYWplZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2Q29udGlhbmVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXMuTEFORElOR30+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluayc+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICB7YXV0aFVzZXIgIT09IG51bGwgPyB0aGlzLkF1dGhMaW5rcygpIDogdGhpcy5Ob25BdXRoTGluIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTmF2Q29udGlhbmVyPlxuICAgIDwvV3JhcHBlcj47XG4gIH1cbiAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=src/components/Nav/Nav.js */"
        }));
      }
    }), _temp));
  }

  _createClass(Navigation, [{
    key: "hanldeLogOut",
    value: function hanldeLogOut() {
      return Object(__WEBPACK_IMPORTED_MODULE_6__firebase__["a" /* FB */])().then(function (user) {
        window.localStorage.removeItem("user"); //  user.signOut();

        return __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push("/signin");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var authUser = this.props.authUser;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["b" /* Wrapper */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Waajed")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["a" /* NavContianer */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: __WEBPACK_IMPORTED_MODULE_7__routes__["b" /* LANDING */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, authUser !== null ? this.AuthLinks() : this.NonAuthLin)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Navigation;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js");
  reactHotLoader.register(_default, "default", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.90b9710ce988b10d7cf2.hot-update.js.map