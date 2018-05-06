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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./src/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_js__ = __webpack_require__("./src/components/Nav/style.js");
var _jsxFileName = "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








function Navigation(_ref) {
  var authUser = _ref.authUser;
  console.log(authUser);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__style_js__["b" /* Wrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Waajed")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__style_js__["a" /* NavContianer */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_6__routes__["b" /* LANDING */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, authUser !== null ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AuthLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(NonAuthLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }))));
}

var AuthLinks = function AuthLinks() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* DASHBOARD */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Dashboard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    onClick: hanldeLogOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Logout"));
};

function hanldeLogOut() {
  window.localStorage.removeItem("user");
  FB.then;
  return __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push("/signin");
}

var NonAuthLink = function NonAuthLink() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: "jsx-814413774" + " " + "auth"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_6__routes__["c" /* SIGN_IN */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: "jsx-814413774" + " " + "link"
  }, "Login")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_6__routes__["d" /* SIGN_UP */],
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
  }, "Register")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "814413774",
    css: ".auth{dispaly:-webkit-box;dispaly:-webkit-flex;dispaly:-ms-flexbox;dispaly:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.link{margin:10px;color:grey;font-size:15px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}.link:hover{-webkit-tranform:scale(1.5);tranform:scale(1.5);-webkit-transition:all .5ms ease-in;transition:all .5ms ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURPLEFBR3dCLEFBS0QsQUFPUSxZQU5ULFdBQ0ksZUFDRSxVQUtXLE9BSlAsbUJBUkYsK0JBU3JCLE9BSUEsK0JBWmdDLG1IQUNoQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaWdvL0Rlc2t0b3AvZGV2ZWxvcGVyL2Rldi1zcGFjZS90ZXN0L3dhYWplZC1jb2RlLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4uLy4uL3JvdXRlc1wiXG5pbXBvcnQgIHsgV3JhcHBlciwgTmF2Q29udGlhbmVyIH0gZnJvbSBcIi4vc3R5bGUuanNcIjtcblxuIGZ1bmN0aW9uIE5hdmlnYXRpb24gKHthdXRoVXNlcn0pIHtcbiAgY29uc29sZS5sb2coYXV0aFVzZXIpO1xuICByZXR1cm4gPFdyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldhYWplZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2Q29udGlhbmVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXMuTEFORElOR30+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluayc+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICB7YXV0aFVzZXIgIT09IG51bGwgPyA8QXV0aExpbmtzLz4gOiA8Tm9uQXV0aExpbmsgLz4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9OYXZDb250aWFuZXI+XG4gICAgPC9XcmFwcGVyPjtcbn1cblxuY29uc3QgQXV0aExpbmtzID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICA8TGluayBocmVmPXtyb3V0ZXMuREFTSEJPQVJEfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5EYXNoYm9hcmQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxidXR0b24gIG9uQ2xpY2s9e2hhbmxkZUxvZ091dH0+TG9nb3V0PC9idXR0b24+XG4gIDwvZGl2PlxuKTtcbmZ1bmN0aW9uIGhhbmxkZUxvZ091dCAoKSB7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gIEZCLnRoZW5cbiAgcmV0dXJuIFJvdXRlci5wdXNoKFwiL3NpZ25pblwiKVxufVxuY29uc3QgTm9uQXV0aExpbmsgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFwiPlxuICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5TSUdOX0lOfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5Mb2dpbjwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj17cm91dGVzLlNJR05fVVB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPlJlZ2lzdGVyPC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIC5hdXRoIHtcbiAgICAgICAgICBkaXNwYWx5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgdHJhbmZvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41bXMgZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il19 */\n/*@ sourceURL=src/components/Nav/Nav.js */"
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
//# sourceMappingURL=5.4eabdac5139ad3935d32.hot-update.js.map