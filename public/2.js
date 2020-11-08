(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/_difficultyTab.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/common/_difficultyTab.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".difficulty-indicator {\n  text-transform: uppercase;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.difficulty-indicator h5 {\n  font-size: 10px;\n  font-weight: 700;\n}\n.difficulty-indicator.easy {\n  background-color: green;\n  color: #fff;\n}\n.difficulty-indicator.intermediate {\n  background-color: #CA0B00;\n  color: #fff;\n}\n.difficulty-indicator.hard {\n  background-color: black;\n  color: #fff;\n}\n.difficulty-indicator.extreme {\n  background-color: orange;\n  color: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/routeCard.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/common/routeCard.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-transform: uppercase;\n  text-align: center;\n  margin: 16px;\n}\n\nimg {\n  width: 100%;\n}\n\n.tags-list {\n  display: grid;\n  margin: 16px;\n}\n\n.tag-card {\n  border: 1px solid #2B303A;\n  position: relative;\n  margin-bottom: 16px;\n}\n.tag-card:hover {\n  border: 2px solid #2B303A;\n  transition: 0.25s;\n}\n\n.tag-text {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  background-color: #fff;\n  width: calc(100% - 16px);\n  padding: 8px;\n  border: 1px solid #2B303A;\n}\n\n.text-upper {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  margin-bottom: 8px;\n}", ""]);

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

/***/ "./resources/js/components/common/Difficulty_Tab.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/common/Difficulty_Tab.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _difficultyTab_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_difficultyTab.scss */ "./resources/js/components/common/_difficultyTab.scss");
/* harmony import */ var _difficultyTab_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_difficultyTab_scss__WEBPACK_IMPORTED_MODULE_1__);



var DifficultyTab = function DifficultyTab(_ref) {
  var level = _ref.level;
  var grade = level === 1 ? "easy" : level === 2 ? "intermediate" : level === 3 ? "hard" : "extreme";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "difficulty-indicator ".concat(grade)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, grade));
};

/* harmony default export */ __webpack_exports__["default"] = (DifficultyTab);

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
/* harmony import */ var _Difficulty_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Difficulty_Tab */ "./resources/js/components/common/Difficulty_Tab.jsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../containers/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _routeCard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routeCard.scss */ "./resources/js/components/common/routeCard.scss");
/* harmony import */ var _routeCard_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routeCard_scss__WEBPACK_IMPORTED_MODULE_3__);





var RouteCard = function RouteCard(_ref) {
  var trail = _ref.trail,
      imageLoaded = _ref.imageLoaded;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    key: trail.slug,
    href: "/".concat(trail.slug),
    className: "tag-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    key: trail.id,
    src: trail.main_image,
    onLoad: imageLoaded
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tag-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-upper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, trail.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Difficulty_Tab__WEBPACK_IMPORTED_MODULE_1__["default"], {
    level: trail.difficulty
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../containers/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    ascent: trail.ascent,
    descent: trail.descent,
    distance: trail.distance,
    time: trail.time
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RouteCard);

/***/ }),

/***/ "./resources/js/components/common/_difficultyTab.scss":
/*!************************************************************!*\
  !*** ./resources/js/components/common/_difficultyTab.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./_difficultyTab.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/common/_difficultyTab.scss");

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




 // import "./tags.scss";



var index = function index(_ref) {
  var match = _ref.match;
  var tag = match.params.tag;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      trails = _useState2[0],
      setTrails = _useState2[1];

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
    setImagesLoaded(imagesLoaded + 1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/gettrailsbytag/".concat(tag)).then(function (res) {
      console.log(res.data);
      setLoading(false);
      setTrails(res.data.trails);
      setRegionData(res.data.regionData);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tags-page"
  }, regionData && regionData.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: regionData.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "".concat(Object(_utils_slugify__WEBPACK_IMPORTED_MODULE_3__["unslugify"])(tag), " Trails")), loading && imagesLoaded === trails.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loader__WEBPACK_IMPORTED_MODULE_4__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tags-list"
  }, regionData && regionData.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, regionData.description), trails.map(function (trail) {
    return (
      /*#__PURE__*/
      // <a
      //     key={trail.slug}
      //     href={`/${trail.slug}`}
      //     className="tag-card"
      // >
      //     <img key={trail.id} src={trail.main_image} onLoad={imageLoaded}/>
      //     <div className="tag-text">
      //         <div className="text-upper">
      //         <h3>{trail.title}</h3>
      //         <DifficultyTab level={trail.difficulty} />
      //         </div>
      //         <StatsTab
      //             ascent={trail.ascent}
      //             descent={trail.descent}
      //             distance={trail.distance}
      //             time={trail.time}
      //         />
      //     </div>
      // </a>
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_RouteCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        trail: trail,
        imageLoaded: imageLoaded
      })
    );
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

}]);