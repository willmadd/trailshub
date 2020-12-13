(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/components/routeCarousel/index.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/routeCarousel/index.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _translations_translator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translations/translator */ "./resources/js/translations/translator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_RouteCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/RouteCard */ "./resources/js/components/common/RouteCard.jsx");






var RouteCarousel = function RouteCarousel(_ref) {
  var quantity = _ref.quantity,
      searchTerm = _ref.searchTerm;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      routes = _useState2[0],
      setRoutes = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getCarouselRoutes();
  }, []);

  var getCarouselRoutes = function getCarouselRoutes() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/getrecenttrails/".concat(quantity)).then(function (res) {
      console.log(res.data);
      setRoutes(res.data);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "route-carousel tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "".concat(Object(_translations_translator__WEBPACK_IMPORTED_MODULE_2__["__"])("Discover our most recent routes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "carousel-wrapper tags-list"
  }, routes.map(function (route, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_RouteCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      trail: route
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RouteCarousel);

/***/ }),

/***/ "./resources/js/pages/HomePage.jsx":
/*!*****************************************!*\
  !*** ./resources/js/pages/HomePage.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/map */ "./resources/js/components/map/index.jsx");
/* harmony import */ var _components_routeCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/routeCarousel */ "./resources/js/components/routeCarousel/index.jsx");




var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_map__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routeCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    quantity: 2,
    query: "all"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

}]);