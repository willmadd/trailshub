(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/components/Dashboard/LogOut.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/LogOut.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/api */ "./resources/js/auth/api.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");





var LogOut = function LogOut() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _auth_api__WEBPACK_IMPORTED_MODULE_2__["logout"]().then(function (res) {
      console.log(res);
      history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_3__["default"].home);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Logging out...");
};

/* harmony default export */ __webpack_exports__["default"] = (LogOut);

/***/ })

}]);