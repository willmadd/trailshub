(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SignUpPage/login.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/SignUpPage/login.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SignUpPage/signupHeaderImage.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/SignUpPage/signupHeaderImage.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/EmailValidationPage/index.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/EmailValidationPage/index.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignUpPage_SignUpHeaderImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignUpPage/SignUpHeaderImage */ "./resources/js/components/SignUpPage/SignUpHeaderImage.jsx");
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/api */ "./resources/js/auth/api.js");
/* harmony import */ var _SignUpPage_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignUpPage/Login */ "./resources/js/components/SignUpPage/Login.jsx");






var EmailValidationPage = function EmailValidationPage(_ref) {
  var match = _ref.match;
  console.log('email validation');
  var token = match.params.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('use effect');
    _auth_api__WEBPACK_IMPORTED_MODULE_3__["tokenActivate"](token).then(function (res) {
      console.log(res);
      setMessage("Thanks for Signing up. Your account has now been activated. Please sign in to continue!");
    })["catch"](function (error) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            setMessage("Could not activate you account. Your token is invalid!");
            break;

          default:
            setMessage("There was an error activating our account!");
        }
      } else {
        setMessage("Could not connect to the server. Please check your internet connection");
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SignUpPage_SignUpHeaderImage__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SignUpPage_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailValidationPage);

/***/ }),

/***/ "./resources/js/components/SignUpPage/Login.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/SignUpPage/Login.jsx ***!
  \******************************************************/
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
/* harmony import */ var _translations_translator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translations/translator */ "./resources/js/translations/translator.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.scss */ "./resources/js/components/SignUpPage/login.scss");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/api */ "./resources/js/auth/api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes_routeID__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes/routeID */ "./resources/js/routes/routeID.js");
/* harmony import */ var _store_Load_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/Load/actions */ "./resources/js/store/Load/actions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // import {getUserData }from '../../store/Login/actions';
// props.user






var Login = function Login() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: "",
    password: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setFormData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
    });
  };

  var handleSubmit = function handleSubmit() {
    var remember_me = true;
    var user = {
      email: formData.email,
      password: js_sha256__WEBPACK_IMPORTED_MODULE_8___default()(formData.password),
      remember_me: remember_me
    };
    _auth_api__WEBPACK_IMPORTED_MODULE_6__["userSignIn"](user).then(function (res) {
      localStorage.setItem("trailshub:all:userToken", res.data.access_token);
      dispatch(Object(_store_Load_actions__WEBPACK_IMPORTED_MODULE_10__["initUser"])(res.data.access_token));
      history.push(_routes_routeID__WEBPACK_IMPORTED_MODULE_9__["default"].memberDashboard);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "login-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, Object(_translations_translator__WEBPACK_IMPORTED_MODULE_3__["__"])('Log in to your Trails Hub Account')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: formData.email,
    type: "email",
    name: "email",
    id: "email-login",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    value: formData.password,
    type: "password",
    name: "password",
    id: "password-login",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "progress-button",
    type: "button",
    onClick: function onClick() {
      return handleSubmit();
    }
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: '/forgotpassword'
  }, "Forgot Password")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./resources/js/components/SignUpPage/SignUpHeaderImage.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/SignUpPage/SignUpHeaderImage.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_yorkshire_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/yorkshire.jpg */ "./resources/js/components/SignUpPage/img/yorkshire.jpg");
/* harmony import */ var _img_yorkshire_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_yorkshire_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signupHeaderImage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signupHeaderImage.scss */ "./resources/js/components/SignUpPage/signupHeaderImage.scss");
/* harmony import */ var _signupHeaderImage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_signupHeaderImage_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _translations_translator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translations/translator */ "./resources/js/translations/translator.js");





var SignUpHeaderImage = function SignUpHeaderImage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _img_yorkshire_jpg__WEBPACK_IMPORTED_MODULE_0___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", null, Object(_translations_translator__WEBPACK_IMPORTED_MODULE_3__["__"])("Ribblehead Viaduct, "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/trails/nidderdale"
  }, Object(_translations_translator__WEBPACK_IMPORTED_MODULE_3__["__"])("Nidderdale"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpHeaderImage);

/***/ }),

/***/ "./resources/js/components/SignUpPage/img/yorkshire.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/components/SignUpPage/img/yorkshire.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/yorkshire.jpg?7a58426b7aa24b65cb4708ca91dbcad8";

/***/ }),

/***/ "./resources/js/components/SignUpPage/login.scss":
/*!*******************************************************!*\
  !*** ./resources/js/components/SignUpPage/login.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./login.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SignUpPage/login.scss");

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

/***/ "./resources/js/components/SignUpPage/signupHeaderImage.scss":
/*!*******************************************************************!*\
  !*** ./resources/js/components/SignUpPage/signupHeaderImage.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./signupHeaderImage.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SignUpPage/signupHeaderImage.scss");

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