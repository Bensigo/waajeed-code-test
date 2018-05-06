webpackHotUpdate(1,{

/***/ "./src/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var config = {
  apiKey: "AIzaSyDpFAgJC-Id8VNknwr-V7YvjvO3HY4p0Po",
  authDomain: "waajed-d6fa8.firebaseapp.com",
  databaseURL: "https://waajed-d6fa8.firebaseio.com",
  projectId: "waajed-d6fa8",
  storageBucket: "waajed-d6fa8.appspot.com",
  messagingSenderId: "750432590094"
};
__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config);
var auth = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth();
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, "config", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/firebase.js");
  reactHotLoader.register(auth, "auth", "/Users/sigo/Desktop/developer/dev-space/test/waajed-code-test/src/firebase.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.d84e9025d4aa7712bd06.hot-update.js.map