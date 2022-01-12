(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/routeCarousel/index.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/routeCarousel/index.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel {\n  margin-top: 36px;\n  margin-left: auto;\n  width: 960px;\n  margin-right: auto;\n}\n.carousel__container {\n  margin-top: 12px;\n}\n.carousel__container .slick-slide {\n  padding: 8px;\n}\n\n.slick-track {\n  display: flex !important;\n}\n\n.slick-slide {\n  height: inherit !important;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n}\n.slick-slide a {\n  height: 100%;\n}\n.slick-slide > div {\n  height: 100%;\n}\n.slick-slide > div img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/IntroSection.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/IntroSection.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".intro__section {\n  position: relative;\n  margin-top: 12px;\n}\n.intro__section img {\n  width: 100%;\n  height: 500px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.intro__modal {\n  padding: 64px;\n  position: absolute;\n  top: -60px;\n  background-color: white;\n  border: 1px solid black;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 450px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/linksSection.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/linksSection.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 36px;\n}\n.link__area {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.link__area li {\n  list-style: none;\n}\n.link__area li a {\n  text-decoration: underline;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/textSection.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/pages/textSection.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text__section {\n  max-width: 960px;\n  padding: 24px;\n  margin-top: 36px;\n  background: white;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid black;\n  border-radius: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Hero/Hero.component.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Hero/Hero.component.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_geosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-geosuggest */ "./node_modules/react-geosuggest/module/Geosuggest.esm.js");
/* harmony import */ var _Hero_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero.styles */ "./resources/js/components/Hero/Hero.styles.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__);






var HeroComponent = function HeroComponent(_ref) {
  var searchSuggest = _ref.searchSuggest,
      animate = _ref.animate,
      submitLocation = _ref.submitLocation;
  console.log("animate is animate", animate);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: _Hero_styles__WEBPACK_IMPORTED_MODULE_3__["default"].container,
    disableGutters: true,
    maxWidth: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    component: "img" // sx={styles.myImage}
    ,
    alt: "",
    src: "/images/hero/hero2x1.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: _Hero_styles__WEBPACK_IMPORTED_MODULE_3__["default"].modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_geosuggest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: searchSuggest,
    onUpdateSuggests: function onUpdateSuggests(e) {
      return animate(e);
    },
    onSuggestSelect: submitLocation,
    placeholder: "Find local MTB Trails..."
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroComponent);

/***/ }),

/***/ "./resources/js/components/Hero/Hero.container.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Hero/Hero.container.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero.component */ "./resources/js/components/Hero/Hero.component.js");




var HeroContainer = function HeroContainer(props) {
  var searchSuggest = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var animate = function animate(e) {// requestAnimationFrame(() => {
    //     searchSuggest.current.transform = `translateX(40px)`;
    //     searchSuggest.current.transition = `transform 2s`;
    // });
  };

  var submitLocation = function submitLocation(e) {
    console.log(e);
    var viewport = e.gmaps.geometry.viewport;
    console.log(viewport); // let newBounds = [
    //     [viewport.Wa.i, viewport.Ra.i],
    //     [viewport.Wa.j, viewport.Ra.j],
    // ];
    // setBounds(newBounds);
  };

  var containerFunctions = {
    animate: animate,
    submitLocation: submitLocation
  };
  var containerProps = {
    searchSuggest: searchSuggest
  };
  console.log('an', animate);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hero_component__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, containerProps, containerFunctions));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroContainer);

/***/ }),

/***/ "./resources/js/components/Hero/Hero.styles.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Hero/Hero.styles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  container: {
    position: "relative",
    display: {
      xs: "flex",
      md: "block"
    },
    flexDirection: {
      xs: "column-reverse"
    }
  },
  heroImage: {},
  modal: {
    backgroundColor: function backgroundColor(theme) {
      return theme.palette.white;
    },
    border: 1,
    borderColor: function borderColor(theme) {
      return theme.palette.primary.two;
    },
    position: {
      xs: "relative",
      md: "absolute"
    },
    width: {
      xs: "100%",
      md: "calc(50% - 144px)"
    },
    right: {
      xs: 0,
      md: 48
    },
    // top: 24,
    color: "white",
    borderRadius: {
      xs: 0,
      md: "50px"
    },
    boxShadow: 3,
    p: {
      xs: 0,
      md: 2
    },
    opacity: 0.85,
    top: "50%",
    display: 'flex',
    alignItems: 'center',
    transform: {
      xs: "100%",
      md: "translateY(-50%)"
    }
  },
  logo: {
    width: 1 / 4
  }
});

/***/ }),

/***/ "./resources/js/components/Hero/index.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Hero/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero.container.js */ "./resources/js/components/Hero/Hero.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Hero_container_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

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
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./resources/js/components/routeCarousel/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);










var RouteCarousel = function RouteCarousel(_ref) {
  var quantity = _ref.quantity,
      searchTerm = _ref.searchTerm;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      routes = _useState2[0],
      setRoutes = _useState2[1];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  };
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
    className: "carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Recently added trails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "carousel__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_7___default.a, settings, routes.map(function (route, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_RouteCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      trail: route
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RouteCarousel);

/***/ }),

/***/ "./resources/js/components/routeCarousel/index.scss":
/*!**********************************************************!*\
  !*** ./resources/js/components/routeCarousel/index.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/routeCarousel/index.scss");

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

/***/ "./resources/js/pages/HomePage.js":
/*!****************************************!*\
  !*** ./resources/js/pages/HomePage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Hero */ "./resources/js/components/Hero/index.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/map */ "./resources/js/components/map/index.jsx");
/* harmony import */ var _components_routeCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/routeCarousel */ "./resources/js/components/routeCarousel/index.jsx");
/* harmony import */ var _IntroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IntroSection */ "./resources/js/pages/IntroSection.js");
/* harmony import */ var _LinksSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinksSection */ "./resources/js/pages/LinksSection.js");
/* harmony import */ var _TextSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextSection */ "./resources/js/pages/TextSection.js");








var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routeCarousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    quantity: 3,
    query: "all"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IntroSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextSection__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinksSection__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./resources/js/pages/IntroSection.js":
/*!********************************************!*\
  !*** ./resources/js/pages/IntroSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_intro_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/intro.jpg */ "./resources/js/pages/img/intro.jpg");
/* harmony import */ var _img_intro_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_intro_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IntroSection_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IntroSection.scss */ "./resources/js/pages/IntroSection.scss");
/* harmony import */ var _IntroSection_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_IntroSection_scss__WEBPACK_IMPORTED_MODULE_2__);




var IntroSection = function IntroSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro__section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_intro_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro__modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "An open source collection of the best trails. Made by Mountain Bikers, for mountain bikers")));
};

/* harmony default export */ __webpack_exports__["default"] = (IntroSection);

/***/ }),

/***/ "./resources/js/pages/IntroSection.scss":
/*!**********************************************!*\
  !*** ./resources/js/pages/IntroSection.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./IntroSection.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/IntroSection.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/LinksSection.js":
/*!********************************************!*\
  !*** ./resources/js/pages/LinksSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linksSection_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linksSection.scss */ "./resources/js/pages/linksSection.scss");
/* harmony import */ var _linksSection_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_linksSection_scss__WEBPACK_IMPORTED_MODULE_1__);



var LinksSection = function LinksSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Popular Destinations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "link__area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "YorkShire")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Lake District")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Mt Cook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Peak District")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Cape Town")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Rockies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Scotland"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "YorkShire")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Lake District")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Mt Cook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Peak District")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Cape Town")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Rockies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Scotland"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "YorkShire")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Lake District")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Mt Cook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Peak District")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Cape Town")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Rockies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Scotland")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LinksSection);

/***/ }),

/***/ "./resources/js/pages/TextSection.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/TextSection.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _textSection_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textSection.scss */ "./resources/js/pages/textSection.scss");
/* harmony import */ var _textSection_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_textSection_scss__WEBPACK_IMPORTED_MODULE_1__);



var TextSection = function TextSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text__section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nulla pharetra diam sit amet nisl suscipit. A diam maecenas sed enim ut sem. Non blandit massa enim nec dui nunc mattis enim. A condimentum vitae sapien pellentesque. Fusce id velit ut tortor pretium viverra suspendisse potenti. Vel quam elementum pulvinar etiam non quam lacus. Tristique senectus et netus et malesuada fames ac turpis egestas. Lacus vestibulum sed arcu non odio euismod. Urna condimentum mattis pellentesque id nibh. Eget gravida cum sociis natoque penatibus et. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Morbi tristique senectus et netus et. Dui accumsan sit amet nulla facilisi. Dolor magna eget est lorem ipsum. Mollis aliquam ut porttitor leo a diam sollicitudin. Dignissim suspendisse in est ante. Nec dui nunc mattis enim ut tellus elementum. Aliquet lectus proin nibh nisl condimentum. Nisi est sit amet facilisis magna etiam. Laoreet suspendisse interdum consectetur libero. Hac habitasse platea dictumst quisque sagittis purus sit amet. Senectus et netus et malesuada fames ac turpis egestas. Proin libero nunc consequat interdum. Sed nisi lacus sed viverra tellus in. Purus in mollis nunc sed id semper risus in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Nisi est sit amet facilisis magna etiam tempor orci. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Pellentesque dignissim enim sit amet venenatis urna cursus eget. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Fermentum et sollicitudin ac orci phasellus egestas. Condimentum vitae sapien pellentesque habitant morbi. Phasellus egestas tellus rutrum tellus pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Vitae ultricies leo integer malesuada nunc. Dui ut ornare lectus sit. Enim tortor at auctor urna nunc id cursus. Purus non enim praesent elementum facilisis leo vel. Fringilla urna porttitor rhoncus dolor."));
};

/* harmony default export */ __webpack_exports__["default"] = (TextSection);

/***/ }),

/***/ "./resources/js/pages/img/intro.jpg":
/*!******************************************!*\
  !*** ./resources/js/pages/img/intro.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/intro.jpg?7482361c3303f7d623375eda9f491cae";

/***/ }),

/***/ "./resources/js/pages/linksSection.scss":
/*!**********************************************!*\
  !*** ./resources/js/pages/linksSection.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./linksSection.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/linksSection.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/textSection.scss":
/*!*********************************************!*\
  !*** ./resources/js/pages/textSection.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./textSection.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/pages/textSection.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);