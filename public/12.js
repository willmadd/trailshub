(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/trailPlaceHolder.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/common/trailPlaceHolder.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/loader/loader.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/loader/loader.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loadcontainer {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.bar {\n  width: 50%;\n  height: 20px;\n  border: 1px solid #2980b9;\n  border-radius: 3px;\n  background-image: repeating-linear-gradient(-45deg, #2980b9, #2980b9 11px, #eee 10px, #eee 20px);\n  background-size: 28px 28px;\n  -webkit-animation: move 0.5s linear infinite;\n          animation: move 0.5s linear infinite;\n}\n\n@-webkit-keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 28px 0;\n  }\n}\n\n@keyframes move {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 28px 0;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/common/TrailPlaceHolder.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/common/TrailPlaceHolder.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/placeholder.jpg */ "./resources/js/components/common/img/placeholder.jpg");
/* harmony import */ var _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _trailPlaceHolder_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trailPlaceHolder.scss */ "./resources/js/components/common/trailPlaceHolder.scss");
/* harmony import */ var _trailPlaceHolder_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_trailPlaceHolder_scss__WEBPACK_IMPORTED_MODULE_2__);




var TrailPlaceHolder = function TrailPlaceHolder(_ref) {
  var loadingComplete = _ref.loadingComplete;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "tag-card",
    src: _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    style: {
      display: loadingComplete ? "none" : "block"
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TrailPlaceHolder);

/***/ }),

/***/ "./resources/js/components/common/img/placeholder.jpg":
/*!************************************************************!*\
  !*** ./resources/js/components/common/img/placeholder.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/placeholder.jpg?cc153500c456458648d42fda657d3c2d";

/***/ }),

/***/ "./resources/js/components/common/trailPlaceHolder.scss":
/*!**************************************************************!*\
  !*** ./resources/js/components/common/trailPlaceHolder.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./trailPlaceHolder.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/trailPlaceHolder.scss");

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

/***/ "./resources/js/components/loader/index.js":
/*!*************************************************!*\
  !*** ./resources/js/components/loader/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.scss */ "./resources/js/components/loader/loader.scss");
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loader_scss__WEBPACK_IMPORTED_MODULE_1__);



var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loadcontainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./resources/js/components/loader/loader.scss":
/*!****************************************************!*\
  !*** ./resources/js/components/loader/loader.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./loader.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/loader/loader.scss");

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

/***/ "./resources/js/components/tags/index.jsx":
/*!************************************************!*\
  !*** ./resources/js/components/tags/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/slugify */ "./resources/js/utils/slugify.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader */ "./resources/js/components/loader/index.js");
/* harmony import */ var _common_RouteCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/RouteCard */ "./resources/js/components/common/RouteCard.jsx");
/* harmony import */ var _common_TrailPlaceHolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/TrailPlaceHolder */ "./resources/js/components/common/TrailPlaceHolder.jsx");




 // import "./tags.scss";




var index = function index(_ref) {
  var match = _ref.match;
  var tag = match.params.tag;
  var isFirstRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      trails = _useState2[0],
      setTrails = _useState2[1]; // const [trails, setTrails] = useState([]);


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      regionData = _useState4[0],
      setRegionData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      imagesLoaded = _useState6[0],
      setImagesLoaded = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var imageLoaded = function imageLoaded() {
    console.log("images loaded");
    setImagesLoaded(imagesLoaded + 1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/gettrailsbytag/".concat(tag)).then(function (res) {
      console.log(res.data);
      console.log("111111");
      setTrails(res.data.trails);
      console.log("22222222");
      setRegionData(res.data.regionData);
      console.log("3333333");
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isFirstRender.current) {
      setLoading(false);
    }
  }, [trails]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    isFirstRender.current = false;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tags-page"
  }, regionData && regionData.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: regionData.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "".concat(Object(_utils_slugify__WEBPACK_IMPORTED_MODULE_3__["unslugify"])(tag), " Trails")), !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tags-list"
  }, regionData && regionData.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, regionData.description), trails.map(function (trail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_TrailPlaceHolder__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      loadingComplete: imagesLoaded === trails.length
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_RouteCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: trail.slug,
      trail: trail,
      imageLoaded: imageLoaded,
      loadingComplete: imagesLoaded === trails.length
    }));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, new Array(9).map(function (trail, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_TrailPlaceHolder__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      loadingComplete: false
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

}]);