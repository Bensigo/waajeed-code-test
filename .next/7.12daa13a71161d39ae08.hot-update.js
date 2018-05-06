webpackHotUpdate(7,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./src/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_js__ = __webpack_require__("./src/components/Nav/style.js");
var _jsxFileName = "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/components/Nav/Nav.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







function Navigation() {
  var authUser = wind;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__style_js__["b" /* Wrapper */], {
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
  }, "Waajed")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__style_js__["a" /* NavContianer */], {
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
    href: __WEBPACK_IMPORTED_MODULE_5__routes__["b" /* LANDING */],
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
  }, authUser ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AuthLinks, {
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
    href: __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* DASHBOARD */],
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
  return null;
}

var NonAuthLink = function NonAuthLink() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-814413774" + " " + "auth"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_5__routes__["c" /* SIGN_IN */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: "jsx-814413774" + " " + "link"
  }, "Login")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: __WEBPACK_IMPORTED_MODULE_5__routes__["d" /* SIGN_UP */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: "jsx-814413774" + " " + "link"
  }, "Register")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "814413774",
    css: ".auth{dispaly:-webkit-box;dispaly:-webkit-flex;dispaly:-ms-flexbox;dispaly:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.link{margin:10px;color:grey;font-size:15px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}.link:hover{-webkit-tranform:scale(1.5);tranform:scale(1.5);-webkit-transition:all .5ms ease-in;transition:all .5ms ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NPLEFBR3dCLEFBS0QsQUFPUSxZQU5ULFdBQ0ksZUFDRSxVQUtXLE9BSlAsbUJBUkYsK0JBU3JCLE9BSUEsK0JBWmdDLG1IQUNoQyIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaWdvL0Rlc2t0b3AvZGV2ZWxvcGVyL2Rldi1zcGFjZS90ZXN0L3dhYWplZC1jb2RlLXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vLi4vcm91dGVzXCJcbmltcG9ydCAgeyBXcmFwcGVyLCBOYXZDb250aWFuZXIgfSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuXG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24gKCkge1xuICBjb25zdCBhdXRoVXNlciA9IHdpbmRcbiAgcmV0dXJuIDxXcmFwcGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XYWFqZWQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdkNvbnRpYW5lcj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVzLkxBTkRJTkd9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAge2F1dGhVc2VyID8gPEF1dGhMaW5rcy8+IDogPE5vbkF1dGhMaW5rIC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTmF2Q29udGlhbmVyPlxuICAgIDwvV3JhcHBlcj47XG59XG5cbmNvbnN0IEF1dGhMaW5rcyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhdXRoXCI+XG4gICAgPExpbmsgaHJlZj17cm91dGVzLkRBU0hCT0FSRH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+RGFzaGJvYXJkPC9hPlxuICAgIDwvTGluaz5cbiAgICA8YnV0dG9uICBvbkNsaWNrPXtoYW5sZGVMb2dPdXR9PkxvZ291dDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5mdW5jdGlvbiBoYW5sZGVMb2dPdXQgKCkge1xuICByZXR1cm4gbnVsbDtcbn1cbmNvbnN0IE5vbkF1dGhMaW5rID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICA8TGluayBocmVmPXtyb3V0ZXMuU0lHTl9JTn0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+TG9naW48L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9e3JvdXRlcy5TSUdOX1VQfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5SZWdpc3RlcjwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7YFxuICAgICAgICAuYXV0aCB7XG4gICAgICAgICAgZGlzcGFseTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgICAubGluayB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgIHRyYW5mb3JtOiBzY2FsZSgxLjUpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNW1zIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdfQ== */\n/*@ sourceURL=src/components/Nav/Nav.js */"
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
//# sourceMappingURL=7.12daa13a71161d39ae08.hot-update.js.map