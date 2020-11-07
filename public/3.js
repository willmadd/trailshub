(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/routeCarousel/RouteCard.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/routeCarousel/RouteCard.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var RouteCard = function RouteCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (RouteCard);

/***/ }),

/***/ "./resources/js/components/routeCarousel/index.js":
/*!********************************************************!*\
  !*** ./resources/js/components/routeCarousel/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RouteCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RouteCard */ "./resources/js/components/routeCarousel/RouteCard.jsx");
/* harmony import */ var _translations_translator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translations/translator */ "./resources/js/translations/translator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var RouteCarousel = function RouteCarousel(_ref) {
  var quantity = _ref.quantity,
      searchTerm = _ref.searchTerm;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      routes = _useState2[0],
      setRoutes = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {});

  var getCarouselRoutes = function getCarouselRoutes() {// axios.get
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "route-carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "".concat(Object(_translations_translator__WEBPACK_IMPORTED_MODULE_3__["__"])("Discover our most recent routes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "carousel-wrapper"
  }, routes.map(function (route, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RouteCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      route: route
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
/* harmony import */ var _components_routeCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/routeCarousel */ "./resources/js/components/routeCarousel/index.js");




var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_map__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routeCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    quantity: 4,
    query: "all"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./resources/js/translations/locales sync recursive ^\\.\\/.*\\.json$":
/*!***************************************************************!*\
  !*** ./resources/js/translations/locales sync ^\.\/.*\.json$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en_GB.json": "./resources/js/translations/locales/en_GB.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/translations/locales sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./resources/js/translations/locales/en_GB.json":
/*!******************************************************!*\
  !*** ./resources/js/translations/locales/en_GB.json ***!
  \******************************************************/
/*! exports provided: Likes, Welcome to Welcome to React-Laravel-Instagram, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Likes\":\"Likes\",\"Welcome to Welcome to React-Laravel-Instagram\":\"Welcome to React-Laravel-Instagram\"}");

/***/ }),

/***/ "./resources/js/translations/translator.js":
/*!*************************************************!*\
  !*** ./resources/js/translations/translator.js ***!
  \*************************************************/
/*! exports provided: __ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
var __ = function __(translation) {
  var translationsFile = findTranslationsFile('en_GB');

  if (translationsFile) {
    return translationsFile[translation] || translation;
  } else {
    return translation;
  }
};

var findTranslationsFile = function findTranslationsFile(locale) {
  try {
    return __webpack_require__("./resources/js/translations/locales sync recursive ^\\.\\/.*\\.json$")("./".concat(locale, ".json"));
  } catch (err) {
    return null;
  }
};

/***/ })

}]);