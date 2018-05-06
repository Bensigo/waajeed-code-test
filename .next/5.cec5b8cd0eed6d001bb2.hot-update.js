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









function Navigation(_ref) {
  var authUser = _ref.authUser;
  console.log(authUser);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["b" /* Wrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Waajed")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__style_js__["a" /* NavContianer */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["b" /* LANDING */],
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
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, authUser !== null ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AuthLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(NonAuthLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }))));
}

var AuthLinks = function AuthLinks() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* DASHBOARD */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    onClick: hanldeLogOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Logout"));
};

function hanldeLogOut() {
  return Object(__WEBPACK_IMPORTED_MODULE_6__firebase__["a" /* FB */])().then(function (user) {
    window.localStorage.removeItem("user");
    auser.signOut();
    return __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push("/signin");
  });
}

var NonAuthLink = function NonAuthLink() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: "jsx-814413774" + " " + "auth"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["c" /* SIGN_IN */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    className: "jsx-814413774" + " " + "link"
  }, "Login")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_7__routes__["d" /* SIGN_UP */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: "jsx-814413774" + " " + "link"
  }, "Register")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "814413774",
    css: ".auth{dispaly:-webkit-box;dispaly:-webkit-flex;dispaly:-ms-flexbox;dispaly:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.link{margin:10px;color:grey;font-size:15px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}.link:hover{-webkit-tranform:scale(1.5);tranform:scale(1.5);-webkit-transition:all .5ms ease-in;transition:all .5ms ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RPLEFBR3dCLEFBS0QsQUFPUSxZQU5ULFdBQ0ksZUFDRSxVQUtXLE9BSlAsbUJBUkYsK0JBU3JCLE9BSUEsK0JBWmdDLG1IQUNoQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaWdvL0Rlc2t0b3AvZGV2ZWxvcGVyL2Rldi1zcGFjZS90ZXN0L3dhYWplZC1jb2RlLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtGQiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiXG5cbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vLi4vcm91dGVzXCJcbmltcG9ydCAgeyBXcmFwcGVyLCBOYXZDb250aWFuZXIgfSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuXG4gZnVuY3Rpb24gTmF2aWdhdGlvbiAoe2F1dGhVc2VyfSkge1xuICBjb25zb2xlLmxvZyhhdXRoVXNlcik7XG4gIHJldHVybiA8V3JhcHBlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2FhamVkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZDb250aWFuZXI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5MQU5ESU5HfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rJz5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgIHthdXRoVXNlciAhPT0gbnVsbCA/IDxBdXRoTGlua3MvPiA6IDxOb25BdXRoTGluayAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L05hdkNvbnRpYW5lcj5cbiAgICA8L1dyYXBwZXI+O1xufVxuXG5jb25zdCBBdXRoTGlua3MgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFwiPlxuICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5EQVNIQk9BUkR9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPkRhc2hib2FyZDwvYT5cbiAgICA8L0xpbms+XG4gICAgPGJ1dHRvbiAgb25DbGljaz17aGFubGRlTG9nT3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuZnVuY3Rpb24gaGFubGRlTG9nT3V0ICgpIHtcbiAgcmV0dXJuICBGQigpLnRoZW4odXNlciA9PiB7XG4gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgIGF1c2VyLnNpZ25PdXQoKTtcbiAgICAgcmV0dXJuIFJvdXRlci5wdXNoKFwiL3NpZ25pblwiKVxuICAgfSk7XG59XG5jb25zdCBOb25BdXRoTGluayA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgPExpbmsgaHJlZj17cm91dGVzLlNJR05fSU59PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPkxvZ2luPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPXtyb3V0ZXMuU0lHTl9VUH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+UmVnaXN0ZXI8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgLmF1dGgge1xuICAgICAgICAgIGRpc3BhbHk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgICB0cmFuZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVtcyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=src/components/Nav/Nav.js */"
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
//# sourceMappingURL=5.cec5b8cd0eed6d001bb2.hot-update.js.map