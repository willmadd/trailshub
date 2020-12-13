(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/test/test.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/test/test.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-enter {\n  opacity: 0;\n}\n\n.fade-exit {\n  opacity: 1;\n}\n\n.fade-enter-active {\n  opacity: 1;\n}\n\n.fade-exit-active {\n  opacity: 0;\n}\n\n.fade-enter-active,\n.fade-exit-active {\n  transition: opacity 500ms;\n}\n\n.test-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.swipr-enter {\n  transform: translateX(100vw);\n}\n\n.swipr-exit {\n  transform: translateX(0px);\n}\n\n.swipr-enter-active {\n  transform: translateX(0px);\n}\n\n.swipr-exit-active {\n  transform: translateX(-100vw);\n}\n\n.swipr-enter-active,\n.swipr-exit-active {\n  transition: transform 500ms;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/test/index.jsx":
/*!************************************************!*\
  !*** ./resources/js/components/test/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.scss */ "./resources/js/components/test/test.scss");
/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var index = function index() {
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }); //     console.log('test component');

  console.log(user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// if(Object.keys(userDetails).length===0){
    //     // history.push('/notloggedin')
    // }
  }, []); // 

  return user.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Member Area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your User name is"), user.username, "...");
};

/* harmony default export */ __webpack_exports__["default"] = (index); // import React, { Component } from 'react';
// class index extends Component {
//     state={
//         toggle:true,
//     }
// setToggle = () => {
//     this.setState({
//         toggle: !this.state.toggle
//     })
// }
//     render() {
//         let {toggle} = this.state;
//         return (
//                     <div>
//                         <h1>Test</h1>
//                         <button type="button" onClick={()=>this.setToggle(!toggle)}>Click me</button>
//                         {toggle?"on":"off"}
//                     <SwitchTransition className={'xxxxxxx'}>
//                       <CSSTransition
//                         key={toggle ? "Goodbye, world!" : "Hello, world!"}
//                         addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
//                         classNames='fade'
//                       >
//                         <button onClick={() => this.setToggle(toggle => !toggle)}>
//                           {toggle ? "Goodbye, world 12!" : "Hello, world! 32"}
//                         </button>
//                       </CSSTransition>
//                     </SwitchTransition>
//                     </div>
//                 );
//     }
// }
// export default index;

/***/ }),

/***/ "./resources/js/components/test/test.scss":
/*!************************************************!*\
  !*** ./resources/js/components/test/test.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./test.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/test/test.scss");

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