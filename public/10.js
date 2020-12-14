(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/Dashboard/index.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/Dashboard/index.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".account-dashboard {\n  display: grid;\n  grid-template-columns: 230px auto;\n  margin-top: 24px;\n  grid-gap: 24px;\n}\n.account-dashboard main {\n  margin-right: 24px;\n}\n\nimg {\n  width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/Dashboard/menu.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/Dashboard/menu.scss ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  margin-bottom: 4px;\n  margin-left: 24px;\n  padding: 8px;\n  background: #2B303A;\n  color: #fff;\n}\n\na.active {\n  text-decoration: underline;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Dashboard/Menu.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Dashboard/Menu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.scss */ "./resources/js/components/Dashboard/menu.scss");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menuitems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuitems */ "./resources/js/components/Dashboard/menuitems.js");
/* harmony import */ var _routes_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/helpers */ "./resources/js/routes/helpers.js");






var Menu = function Menu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, _menuitems__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (menuItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: menuItem.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      exact: true,
      to: menuItem.url,
      onMouseOver: function onMouseOver() {
        return Object(_routes_helpers__WEBPACK_IMPORTED_MODULE_4__["preloadRouteComponent"])(menuItem.url);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, menuItem.name)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./resources/js/components/Dashboard/img/accountHeader.jpg":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Dashboard/img/accountHeader.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/accountHeader.jpg?414ec66232e8e77cb0bb1549ca146fc7";

/***/ }),

/***/ "./resources/js/components/Dashboard/index.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Dashboard/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./resources/js/components/Dashboard/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./resources/js/components/Dashboard/Menu.js");
/* harmony import */ var _routes_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes/helpers */ "./resources/js/routes/helpers.js");
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");
/* harmony import */ var _img_accountHeader_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/accountHeader.jpg */ "./resources/js/components/Dashboard/img/accountHeader.jpg");
/* harmony import */ var _img_accountHeader_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_accountHeader_jpg__WEBPACK_IMPORTED_MODULE_7__);








var Dashboard = Object(_routes_helpers__WEBPACK_IMPORTED_MODULE_5__["ReactLazyPreload"])(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./Dashboard */ "./resources/js/components/Dashboard/Dashboard.js"));
});
var MyTrails = Object(_routes_helpers__WEBPACK_IMPORTED_MODULE_5__["ReactLazyPreload"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../MyTrails */ "./resources/js/components/MyTrails/index.js"));
});
var LogOut = Object(_routes_helpers__WEBPACK_IMPORTED_MODULE_5__["ReactLazyPreload"])(function () {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./LogOut */ "./resources/js/components/Dashboard/LogOut.js"));
});
var CreateTrail = Object(_routes_helpers__WEBPACK_IMPORTED_MODULE_5__["ReactLazyPreload"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(19), __webpack_require__.e(6), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ../MyTrails/CreateTrail */ "./resources/js/components/MyTrails/CreateTrail.js"));
});

var DashboardLayout = function DashboardLayout(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    if (!props.user.loading && props.user.error) {
      history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_6__["default"].signUp);
    }
  }, [props.user]);
  console.log(props.user);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _img_accountHeader_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "bike in mountains"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "account-dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dashboard, {
    user: props.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: _routes_routeID__WEBPACK_IMPORTED_MODULE_6__["default"].mytrails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyTrails, {
    myTrails: props.user.trails
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: _routes_routeID__WEBPACK_IMPORTED_MODULE_6__["default"].creatTrail,
    component: CreateTrail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: _routes_routeID__WEBPACK_IMPORTED_MODULE_6__["default"].logout,
    component: LogOut
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardLayout);

/***/ }),

/***/ "./resources/js/components/Dashboard/index.scss":
/*!******************************************************!*\
  !*** ./resources/js/components/Dashboard/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/Dashboard/index.scss");

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

/***/ "./resources/js/components/Dashboard/menu.scss":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/menu.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./menu.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/Dashboard/menu.scss");

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

/***/ "./resources/js/components/Dashboard/menuitems.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Dashboard/menuitems.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "overview",
  url: "/dashboard"
}, {
  name: "Create a Trail",
  url: "/dashboard/trails/create"
}, {
  name: "My Trails",
  url: "/dashboard/trails"
}, {
  name: "Logout",
  url: "/dashboard/logout"
}]);

/***/ }),

/***/ "./resources/js/containers/Dashboard/index.js":
/*!****************************************************!*\
  !*** ./resources/js/containers/Dashboard/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Dashboard */ "./resources/js/components/Dashboard/index.js");



var mapStateToProps = function mapStateToProps(state) {
  return {
    units: {
      imperial: state.config.imperial
    },
    user: state.user
  };
}; // const mapDispatchToProps = dispatch => {
//     return {
//         toggleUnits: (bool) => {
//             return dispatch(config({imperial:bool}))}
//     }
//   }


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_components_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);