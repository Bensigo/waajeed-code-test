webpackHotUpdate(5,{

/***/ "./src/components/Nav/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./src/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_js__ = __webpack_require__("./src/components/Nav/style.js");

var _jsxFileName = "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








function Navigation() {
  var authUser =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.localStorage.getItem("user");

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function authUser() {
      return _ref.apply(this, arguments);
    };
  }();

  var user = authUser();
  console.log(user);
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["b" /* Wrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Waajed")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["a" /* NavContianer */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["b" /* LANDING */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, user != null ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(AuthLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(NonAuthLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }))));
}

var AuthLinks = function AuthLinks() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    className: "auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* DASHBOARD */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
    onClick: hanldeLogOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Logout"));
};

function hanldeLogOut() {
  window.localStorage.removeItem("user");
  return __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.push("/signin");
}

var NonAuthLink = function NonAuthLink() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: "jsx-814413774" + " " + "auth"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["c" /* SIGN_IN */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: "jsx-814413774" + " " + "link"
  }, "Login")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["d" /* SIGN_UP */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    className: "jsx-814413774" + " " + "link"
  }, "Register")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "814413774",
    css: ".auth{dispaly:-webkit-box;dispaly:-webkit-flex;dispaly:-ms-flexbox;dispaly:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.link{margin:10px;color:grey;font-size:15px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}.link:hover{-webkit-tranform:scale(1.5);tranform:scale(1.5);-webkit-transition:all .5ms ease-in;transition:all .5ms ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RPLEFBR3dCLEFBS0QsQUFPUSxZQU5ULFdBQ0ksZUFDRSxVQUtXLE9BSlAsbUJBUkYsK0JBU3JCLE9BSUEsK0JBWmdDLG1IQUNoQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaWdvL0Rlc2t0b3AvZGV2ZWxvcGVyL2Rldi1zcGFjZS90ZXN0L3dhYWplZC1jb2RlLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4uLy4uL3JvdXRlc1wiXG5pbXBvcnQgIHsgV3JhcHBlciwgTmF2Q29udGlhbmVyIH0gZnJvbSBcIi4vc3R5bGUuanNcIjtcblxuIGZ1bmN0aW9uIE5hdmlnYXRpb24gKCkge1xuICBjb25zdCBhdXRoVXNlciA9IGFzeW5jKCkgPT4gIGF3YWl0IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gIGNvbnN0IHVzZXIgPSBhdXRoVXNlcigpXG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuICByZXR1cm4gPFdyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldhYWplZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2Q29udGlhbmVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXMuTEFORElOR30+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluayc+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICB7dXNlciAhPSBudWxsID8gPEF1dGhMaW5rcy8+IDogPE5vbkF1dGhMaW5rIC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTmF2Q29udGlhbmVyPlxuICAgIDwvV3JhcHBlcj47XG59XG5cbmNvbnN0IEF1dGhMaW5rcyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgPExpbmsgaHJlZj17cm91dGVzLkRBU0hCT0FSRH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+RGFzaGJvYXJkPC9hPlxuICAgIDwvTGluaz5cbiAgICA8YnV0dG9uICBvbkNsaWNrPXtoYW5sZGVMb2dPdXR9PkxvZ291dDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5mdW5jdGlvbiBoYW5sZGVMb2dPdXQgKCkge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICByZXR1cm4gUm91dGVyLnB1c2goXCIvc2lnbmluXCIpXG59XG5jb25zdCBOb25BdXRoTGluayA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgPExpbmsgaHJlZj17cm91dGVzLlNJR05fSU59PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPkxvZ2luPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPXtyb3V0ZXMuU0lHTl9VUH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+UmVnaXN0ZXI8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgLmF1dGgge1xuICAgICAgICAgIGRpc3BhbHk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgICB0cmFuZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVtcyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=src/components/Nav/Nav.js */"
  }));
};

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
  reactHotLoader.register(AuthLinks, "AuthLinks", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js");
  reactHotLoader.register(hanldeLogOut, "hanldeLogOut", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js");
  reactHotLoader.register(NonAuthLink, "NonAuthLink", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js");
  reactHotLoader.register(_default, "default", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.86594d27f54c7a2bd291.hot-update.js.map