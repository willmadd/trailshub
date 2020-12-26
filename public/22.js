(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/routeCard.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/common/routeCard.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-transform: uppercase;\n  text-align: center;\n  margin: 16px;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.tags-list {\n  display: grid;\n  margin: 16px;\n}\n\n.tag-card {\n  border: 1px solid #2B303A;\n  position: relative;\n  margin-bottom: 16px;\n}\n.tag-card:hover {\n  border: 2px solid #2B303A;\n  transition: 0.25s;\n}\n\n.tag-text {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background-color: #fff;\n  width: calc(100% - 16px);\n  padding: 8px;\n  border: 1px solid #2B303A;\n}\n\n.text-upper {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  margin-bottom: 8px;\n}\n\n.card-tags {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.card-tags p {\n  padding: 4px 8px;\n  margin: 0;\n  border: 1px solid #2B303A;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/routeCardArea.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/common/routeCardArea.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".routeCardArea {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 24px;\n  margin-top: 36px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/statsTab.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/common/statsTab.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stats-tab {\n  display: flex;\n  justify-content: space-between;\n  color: #2B303A;\n}\n.stats-tab h5 {\n  display: flex;\n}\n.stats-tab h5 img {\n  height: 18px;\n  width: 18px;\n  margin-right: 4px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/images/icons/ascent.svg":
/*!*******************************************!*\
  !*** ./resources/images/icons/ascent.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ascent.svg?4523a4a7ccc4c4a735e4f260224d053d";

/***/ }),

/***/ "./resources/images/icons/descent.svg":
/*!********************************************!*\
  !*** ./resources/images/icons/descent.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/descent.svg?d80a39495905448c2a12bf348ee518b1";

/***/ }),

/***/ "./resources/images/icons/distance.svg":
/*!*********************************************!*\
  !*** ./resources/images/icons/distance.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/distance.svg?03c2513393f16010ce28c2f927ffaf5a";

/***/ }),

/***/ "./resources/images/icons/time.svg":
/*!*****************************************!*\
  !*** ./resources/images/icons/time.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/time.svg?f19eab6d6e90c13cc89282a324e8bb41";

/***/ }),

/***/ "./resources/js/components/PlacePage/BreadCrumbs.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/PlacePage/BreadCrumbs.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/slugify */ "./resources/js/utils/slugify.js");




var BreadCrumbs = function BreadCrumbs(_ref) {
  var crumbs = _ref.crumbs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, crumbs.reverse().map(function (crumb, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: Object(_utils_slugify__WEBPACK_IMPORTED_MODULE_2__["slugify"])(crumb)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/trails/".concat(Object(_utils_slugify__WEBPACK_IMPORTED_MODULE_2__["slugify"])(crumb))
    }, "".concat(crumb)), "".concat(i === crumbs.length - 1 ? "" : " > "));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BreadCrumbs);

/***/ }),

/***/ "./resources/js/components/PlacePage/PlaceMap.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/PlacePage/PlaceMap.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/js/constants/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_slugify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/slugify */ "./resources/js/utils/slugify.js");
/* harmony import */ var _routes_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes/helpers */ "./resources/js/routes/helpers.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");








var PlaceMap = function PlaceMap(_ref) {
  var trails = _ref.trails,
      bounds = _ref.bounds;
  console.log(trails);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var fetchRoute = function fetchRoute(routeSlug, coords) {
    history.push({
      pathname: "/".concat(Object(_utils_slugify__WEBPACK_IMPORTED_MODULE_4__["slugify"])(routeSlug)),
      state: {
        coords: coords
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__["Map"], {
    className: "mapid" // center={mapCenter}
    // zoom={mapZoom}
    ,
    scrollWheelZoom: false,
    bounds: bounds,
    doubleClickZoom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__["TileLayer"], {
    attribution: _constants__WEBPACK_IMPORTED_MODULE_1__["mapAttribution"],
    url: _constants__WEBPACK_IMPORTED_MODULE_1__["tileLayerUrl"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "route-overview"
  }, trails.length > 0 && trails.map(function (route, i) {
    console.log(JSON.parse(route.coords));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__["Polyline"], {
      key: "".concat(i),
      onMouseEnter: function onMouseEnter() {
        return Object(_routes_helpers__WEBPACK_IMPORTED_MODULE_5__["preloadRouteComponent"])("".concat(route.slug));
      },
      positions: JSON.parse(route.coords),
      onClick: function onClick() {
        return fetchRoute(route.slug, route.coords);
      },
      doubleClickZoom: true,
      fill: "blue",
      color: "#D64933"
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaceMap);

/***/ }),

/***/ "./resources/js/components/PlacePage/index.js":
/*!****************************************************!*\
  !*** ./resources/js/components/PlacePage/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/api */ "./resources/js/auth/api.js");
/* harmony import */ var _common_RouteCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/RouteCard */ "./resources/js/components/common/RouteCard.jsx");
/* harmony import */ var _common_RouteCardArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/RouteCardArea */ "./resources/js/components/common/RouteCardArea.js");
/* harmony import */ var _BreadCrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BreadCrumbs */ "./resources/js/components/PlacePage/BreadCrumbs.js");
/* harmony import */ var _PlaceMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlaceMap */ "./resources/js/components/PlacePage/PlaceMap.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var PlacePage = function PlacePage(_ref) {
  var match = _ref.match;
  var place = match.params.place;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    address_components: [],
    bounds: [{
      lat: 0,
      lng: 0
    }, {
      lat: 0,
      lng: 0
    }],
    locationTrails: [],
    locationData: {}
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      pageConfig = _useState2[0],
      setPageConfig = _useState2[1];

  var formatBounds = function formatBounds(bounds) {
    var northeast = bounds.northeast,
        southwest = bounds.southwest;
    return [northeast, southwest];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _auth_api__WEBPACK_IMPORTED_MODULE_3__["getLocationCoords"](place).then(function (res) {
      setPageConfig(_objectSpread(_objectSpread({}, res.data), {}, {
        bounds: formatBounds(res.data.bounds)
      }));
    });
  }, []);
  console.log(pageConfig);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BreadCrumbs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    crumbs: pageConfig.address_components
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Mountain Bike Trails in and around ", pageConfig.address_components[0]), pageConfig.locationData && pageConfig.locationData.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: pageConfig.locationData.image,
    alt: pageConfig.locationData.title
  }), pageConfig.locationData && pageConfig.locationData.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, pageConfig.locationData.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PlaceMap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    bounds: pageConfig.bounds,
    trails: pageConfig.locationTrails
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_RouteCardArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
    trails: pageConfig.locationTrails
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlacePage);

/***/ }),

/***/ "./resources/js/components/common/RouteCard.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/common/RouteCard.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DifficultyTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DifficultyTab */ "./resources/js/components/common/DifficultyTab.js");
/* harmony import */ var _containers_statsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/statsContainer */ "./resources/js/containers/statsContainer/index.js");
/* harmony import */ var _routeCard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routeCard.scss */ "./resources/js/components/common/routeCard.scss");
/* harmony import */ var _routeCard_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routeCard_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var RouteCard = function RouteCard(_ref) {
  var trail = _ref.trail,
      imageLoaded = _ref.imageLoaded,
      loadingComplete = _ref.loadingComplete,
      tags = _ref.tags;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    key: trail.slug,
    href: "/".concat(trail.slug),
    className: "tag-card",
    style: {
      display: loadingComplete ? "block" : "block"
    }
  }, trail.images && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    key: trail.id,
    src: "/".concat(trail.images[0]),
    onLoad: imageLoaded
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tag-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-upper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, decodeURIComponent(trail.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DifficultyTab__WEBPACK_IMPORTED_MODULE_1__["default"], {
    level: trail.difficulty
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-tags"
  }, trail.tags && trail.tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: tag,
      to: "/tags/".concat(tag)
    }, tag);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_statsContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ascent: trail.ascent,
    descent: trail.descent,
    distance: trail.distance,
    time: trail.time
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RouteCard);

/***/ }),

/***/ "./resources/js/components/common/RouteCardArea.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/RouteCardArea.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RouteCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouteCard */ "./resources/js/components/common/RouteCard.jsx");
/* harmony import */ var _routeCardArea_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routeCardArea.scss */ "./resources/js/components/common/routeCardArea.scss");
/* harmony import */ var _routeCardArea_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routeCardArea_scss__WEBPACK_IMPORTED_MODULE_2__);




var RouteCardArea = function RouteCardArea(_ref) {
  var trails = _ref.trails;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "routeCardArea"
  }, trails.map(function (trail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: trail.slug,
      trail: trail // imageLoaded={imageLoaded}
      // loadingComplete={imagesLoaded === trails.length}

    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RouteCardArea);

/***/ }),

/***/ "./resources/js/components/common/StatsTab.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/common/StatsTab.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_secondsToTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/secondsToTime */ "./resources/js/utils/secondsToTime.js");
/* harmony import */ var _statsTab_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statsTab.scss */ "./resources/js/components/common/statsTab.scss");
/* harmony import */ var _statsTab_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_statsTab_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_icons_ascent_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/icons/ascent.svg */ "./resources/images/icons/ascent.svg");
/* harmony import */ var _images_icons_ascent_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_icons_ascent_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_icons_descent_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/icons/descent.svg */ "./resources/images/icons/descent.svg");
/* harmony import */ var _images_icons_descent_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_icons_descent_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_icons_time_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/icons/time.svg */ "./resources/images/icons/time.svg");
/* harmony import */ var _images_icons_time_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_icons_time_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_icons_distance_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/icons/distance.svg */ "./resources/images/icons/distance.svg");
/* harmony import */ var _images_icons_distance_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_icons_distance_svg__WEBPACK_IMPORTED_MODULE_7__);









var StatsTab = function StatsTab(props) {
  var ascent = props.ascent,
      descent = props.descent,
      time = props.time,
      distance = props.distance,
      imperial = props.imperial;
  var MetersToFt = 3.28084;
  var ftToMiles = 0.000189394;

  var _secondsToTime = Object(_utils_secondsToTime__WEBPACK_IMPORTED_MODULE_2__["default"])(time),
      _secondsToTime2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_secondsToTime, 3),
      hours = _secondsToTime2[0],
      min = _secondsToTime2[1],
      sec = _secondsToTime2[2];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "stats-tab"
  }, ascent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_icons_ascent_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }), imperial ? "".concat(Math.round(ascent * MetersToFt), " ft") : "".concat(ascent, " m")), descent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_icons_descent_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }), imperial ? "".concat(Math.round(descent * MetersToFt), " ft") : "".concat(descent, " m")), time && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_icons_time_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }), hours, "h ", min, "m"), distance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_icons_distance_svg__WEBPACK_IMPORTED_MODULE_7___default.a
  }), imperial ? "".concat(Math.round(distance * MetersToFt * ftToMiles), " miles") : "".concat(Math.round(distance / 1000 * 100) / 100, " km")));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsTab);

/***/ }),

/***/ "./resources/js/components/common/routeCard.scss":
/*!*******************************************************!*\
  !*** ./resources/js/components/common/routeCard.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./routeCard.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/routeCard.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/common/routeCardArea.scss":
/*!***********************************************************!*\
  !*** ./resources/js/components/common/routeCardArea.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./routeCardArea.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/routeCardArea.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/common/statsTab.scss":
/*!******************************************************!*\
  !*** ./resources/js/components/common/statsTab.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./statsTab.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/statsTab.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/containers/statsContainer/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/containers/statsContainer/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_StatsTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/common/StatsTab */ "./resources/js/components/common/StatsTab.jsx");



var mapStateToProps = function mapStateToProps(state) {
  return {
    imperial: state.config.imperial
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_common_StatsTab__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./resources/js/utils/secondsToTime.js":
/*!*********************************************!*\
  !*** ./resources/js/utils/secondsToTime.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (seconds) {
  console.log(seconds);
  return new Date(seconds * 1000).toISOString().substr(11, 8).split(":").map(function (time) {
    return Number(time);
  });
});

/***/ })

}]);