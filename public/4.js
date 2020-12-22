(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/DashboardTrailList/trailsList.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/DashboardTrailList/trailsList.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-body li {\n  margin-left: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/MyTrails/index.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/MyTrails/index.scss ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-trail-button {\n  display: inline-block;\n  margin: 24px 0;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/DashboardTrailList/TrailsList.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/DashboardTrailList/TrailsList.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _translations_translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../translations/translator */ "./resources/js/translations/translator.js");
/* harmony import */ var _trailsList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trailsList.scss */ "./resources/js/components/DashboardTrailList/trailsList.scss");
/* harmony import */ var _trailsList_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_trailsList_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");






var TrailsList = function TrailsList(_ref) {
  var name = _ref.name,
      trails = _ref.trails;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var editTrail = function editTrail(id) {
    history.push({
      pathname: _routes_routeID__WEBPACK_IMPORTED_MODULE_4__["default"].creatTrail,
      state: {
        id: id
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-body"
  }, trails.length > 0 ? trails.map(function (trail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: trail.title
    }, trail.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return editTrail(trail.id);
      }
    }, "Edit"));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_translations_translator__WEBPACK_IMPORTED_MODULE_1__["__"])("You have no ".concat(name)))));
};

/* harmony default export */ __webpack_exports__["default"] = (TrailsList);

/***/ }),

/***/ "./resources/js/components/DashboardTrailList/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/DashboardTrailList/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TrailsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrailsList */ "./resources/js/components/DashboardTrailList/TrailsList.js");
/* harmony import */ var _translations_translator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translations/translator */ "./resources/js/translations/translator.js");




var DashboardTrailList = function DashboardTrailList(_ref) {
  var myTrails = _ref.myTrails;
  // console.log(myTrails.filter(trail=>trail.status==="draft"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrailsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: Object(_translations_translator__WEBPACK_IMPORTED_MODULE_2__["__"])("Drafts"),
    trails: myTrails.filter(function (trail) {
      return trail.status === "draft";
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrailsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: Object(_translations_translator__WEBPACK_IMPORTED_MODULE_2__["__"])("Published Trails"),
    trails: myTrails.filter(function (trail) {
      return trail.status === "pending" || trail.status === "approved";
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardTrailList);

/***/ }),

/***/ "./resources/js/components/DashboardTrailList/trailsList.scss":
/*!********************************************************************!*\
  !*** ./resources/js/components/DashboardTrailList/trailsList.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./trailsList.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/DashboardTrailList/trailsList.scss");

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

/***/ "./resources/js/components/MyTrails/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/MyTrails/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _translations_translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../translations/translator */ "./resources/js/translations/translator.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");
/* harmony import */ var _DashboardTrailList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DashboardTrailList */ "./resources/js/components/DashboardTrailList/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./resources/js/components/MyTrails/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);







var MyTrails = function MyTrails(_ref) {
  var myTrails = _ref.myTrails;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-trails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, Object(_translations_translator__WEBPACK_IMPORTED_MODULE_1__["__"])('My Trails')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: 'primary-action create-trail-button',
    to: _routes_routeID__WEBPACK_IMPORTED_MODULE_3__["default"].creatTrail
  }, Object(_translations_translator__WEBPACK_IMPORTED_MODULE_1__["__"])("Create a trail")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardTrailList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    myTrails: myTrails
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyTrails);

/***/ }),

/***/ "./resources/js/components/MyTrails/index.scss":
/*!*****************************************************!*\
  !*** ./resources/js/components/MyTrails/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/MyTrails/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);