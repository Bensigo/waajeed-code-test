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
            lineNumber: 17
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* DASHBOARD */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          onClick: _this.hanldeLogOut,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
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
            lineNumber: 25
          },
          className: "jsx-814413774" + " " + "auth"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: __WEBPACK_IMPORTED_MODULE_7__routes__["c" /* SIGN_IN */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          className: "jsx-814413774" + " " + "link"
        }, "Login")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: __WEBPACK_IMPORTED_MODULE_7__routes__["d" /* SIGN_UP */],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          className: "jsx-814413774" + " " + "link"
        }, "Register")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "814413774",
          css: ".auth{dispaly:-webkit-box;dispaly:-webkit-flex;dispaly:-ms-flexbox;dispaly:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.link{margin:10px;color:grey;font-size:15px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}.link:hover{-webkit-tranform:scale(1.5);tranform:scale(1.5);-webkit-transition:all .5ms ease-in;transition:all .5ms ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NPLEFBR3dCLEFBS0QsQUFPUSxZQU5ULFdBQ0ksZUFDRSxVQUtXLE9BSlAsbUJBUkYsK0JBU3JCLE9BSUEsK0JBWmdDLG1IQUNoQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaWdvL0Rlc2t0b3AvZGV2ZWxvcGVyL2Rldi1zcGFjZS90ZXN0L3dhYWplZC1jb2RlLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtGQiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiXG5cbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vLi4vcm91dGVzXCJcbmltcG9ydCAgeyBXcmFwcGVyLCBOYXZDb250aWFuZXIgfSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmF1dGhVc2VyID09PSBudWxsKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9zaWduaW5cIik7XG4gICAgfVxuICB9XG4gIEF1dGhMaW5rcyA9ICgpID0+IChcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgICA8TGluayBocmVmPXtyb3V0ZXMuREFTSEJPQVJEfT5cbiAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5EYXNoYm9hcmQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgIDxidXR0b24gIG9uQ2xpY2s9e3RoaXMuaGFubGRlTG9nT3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgTm9uQXV0aExpbmsgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFwiPlxuICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5TSUdOX0lOfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5Mb2dpbjwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj17cm91dGVzLlNJR05fVVB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPlJlZ2lzdGVyPC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIC5hdXRoIHtcbiAgICAgICAgICBkaXNwYWx5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgdHJhbmZvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41bXMgZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbiAgKTtcbiAgaGFubGRlTG9nT3V0ICgpIHtcbiAgcmV0dXJuICBGQigpLnRoZW4odXNlciA9PiB7XG4gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgIC8vdXNlci5zaWduT3V0KCk7XG4gICAgIHJldHVybiBSb3V0ZXIucGF0aChcIi9zaWduaW5cIilcbiAgIH0pO1xufVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgYXV0aFVzZXIgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gPFdyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldhYWplZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2Q29udGlhbmVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXMuTEFORElOR30+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluayc+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICB7YXV0aFVzZXIgIT09IG51bGwgPyB0aGlzLkF1dGhMaW5rcygpIDogdGhpcy5Ob25BdXRoTGluaygpIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTmF2Q29udGlhbmVyPlxuICAgIDwvV3JhcHBlcj47XG4gIH1cbiAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=src/components/Nav/Nav.js */"
        }));
      }
    }), _temp));
  }

  _createClass(Navigation, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.authUser === null) {
        __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push("/signin");
      }
    }
  }, {
    key: "hanldeLogOut",
    value: function hanldeLogOut() {
      return Object(__WEBPACK_IMPORTED_MODULE_6__firebase__["a" /* FB */])().then(function (user) {
        window.localStorage.removeItem("user"); //user.signOut();

        return __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.path("/signin");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var authUser = this.props.authUser;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["b" /* Wrapper */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Waajed")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["a" /* NavContianer */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: __WEBPACK_IMPORTED_MODULE_7__routes__["b" /* LANDING */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, authUser !== null ? this.AuthLinks() : this.NonAuthLink())));
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
//# sourceMappingURL=5.d6e59dbc99b7dd70256f.hot-update.js.map