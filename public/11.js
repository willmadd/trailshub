(window.webpackJsonp=window.webpackJsonp||[]).push([[11,16],{154:function(n,e){n.exports="/images/yorkshire.jpg?7a58426b7aa24b65cb4708ca91dbcad8"},253:function(n,e,t){var a=t(254);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(a,r);a.locals&&(n.exports=a.locals)},254:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,"img {\n  width: 100%;\n}",""])},261:function(n,e,t){var a=t(262);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(a,r);a.locals&&(n.exports=a.locals)},262:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,"",""])},264:function(n,e,t){var a=t(265);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(a,r);a.locals&&(n.exports=a.locals)},265:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,'.status-container {\n  border: 1px solid #2B303A;\n  border-width: 1px 1px 1px 0;\n  border-radius: 0 2px 2px 0;\n  height: 32px;\n  width: 32px;\n  background: #fff;\n}\n\n.status-valid {\n  display: inline-block;\n  transform: rotate(45deg);\n  height: 25px;\n  width: 12px;\n  margin-left: 10px;\n  border-bottom: 7px solid #78b13f;\n  border-right: 7px solid #78b13f;\n}\n\n.status-pending {\n  border-radius: 50%;\n  border: 3px solid orange;\n  height: 22px;\n  width: 22px;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-left-color: white;\n  -webkit-animation: infinite-spinning 2s infinite;\n          animation: infinite-spinning 2s infinite;\n}\n\n.status-error {\n  position: relative;\n  /* right: 32px; */\n  /* top: 32px; */\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n}\n\n.status-error:before, .status-error:after {\n  position: absolute;\n  left: 15px;\n  content: " ";\n  height: 30px;\n  width: 4px;\n  background-color: #d64933;\n}\n\n.status-error:before {\n  transform: rotate(45deg);\n}\n\n.status-error:after {\n  transform: rotate(-45deg);\n}\n\n@-webkit-keyframes infinite-spinning {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes infinite-spinning {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}',""])},37:function(n,e,t){"use strict";var a=t(0),r=t.n(a);t(264);e.a=function(n){var e=n.status;return r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"".concat(null===e?"status-unset":"error"===e?"status-error":"pending"===e?"status-pending":"success"===e&&"status-valid")}))}},391:function(n,e,t){var a=t(392);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(a,r);a.locals&&(n.exports=a.locals)},392:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,'@font-face {\n  font-family: "orkneyregular";\n  src: url("/fonts/Orkney Regular.woff2") format("woff2"), url("/fonts/Orkney Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "orkneybold";\n  src: url("/fonts/Orkney Bold.woff2") format("woff2"), url("/fonts/Orkney Bold.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  font-family: "orkneybold";\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nfigcaption {\n  width: 100%;\n  font-style: italic;\n  font-size: 12px;\n  color: gray;\n  margin: 8px 0 0 16px;\n}\nfigcaption a {\n  text-decoration: underline;\n}\n\ncaption {\n  width: 100%;\n  color: gray;\n  font-size: 12px;\n  display: block;\n}\n\n.signup-modal > img {\n  width: 100%;\n}\n\n.signup {\n  display: grid;\n  grid-template-columns: 1fr;\n  padding: 16px;\n}\n\nlabel {\n  display: flex;\n  justify-content: center;\n}\n\ninput {\n  border-width: 1px 0 1px 1px;\n  border-radius: 2px 0 0 2px;\n  border-color: #2B303A;\n  width: 250px;\n  padding-left: 8px;\n}\n\n.progress-button {\n  font-family: "orkneybold";\n  background-color: inherit;\n  border: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  outline: none;\n}\n.progress-button:focus {\n  outline: none;\n}\n.progress-button:after {\n  content: " ";\n  background: url("/images/right-arrow.svg");\n  background-size: 14px;\n  width: 14px;\n  height: 14px;\n  display: block;\n  margin-left: 8px;\n}\n.progress-button.back {\n  border-right: 1px solid #2B303A;\n}\n.progress-button.back:after {\n  transform: rotate(180deg);\n}\n.progress-button.button-submitting:after {\n  display: none;\n}\n.progress-button p {\n  margin: 0;\n}\n\n.progress-button:disabled:after {\n  background: url("/images/right-arrow-disabled.svg");\n}\n\nh3 {\n  font-family: "orkneybold";\n  margin: 16px 0 32px 0;\n  text-align: center;\n}\n\n.register-animation-container {\n  min-height: 105px;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n\ninput.password {\n  z-index: 10;\n}\n\n.swipe-enter {\n  transform: translateX(-100vw);\n  opacity: 0;\n}\n\n.swipe-exit {\n  transform: translateX(0px);\n  opacity: 1;\n}\n\n.swipe-enter-active {\n  transform: translateX(0px);\n  opacity: 1;\n}\n\n.swipe-exit-active {\n  transform: translateX(100vw);\n  opacity: 0;\n}\n\n.swipe-enter-active,\n.swipe-exit-active {\n  transition: all 500ms;\n}\n\n.button-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.button-wrapper button {\n  width: auto;\n}\n\n.swipeback-enter {\n  transform: translateX(100vw);\n  opacity: 0;\n}\n\n.swipeback-exit {\n  transform: translateX(-50px);\n  opacity: 1;\n}\n\n.swipeback-enter-active {\n  transform: translateX(0px);\n  opacity: 1;\n}\n\n.swipeback-exit-active {\n  transform: translateX(-100vw);\n  opacity: 0;\n}\n\n.swipeback-enter-active,\n.swipeback-exit-active {\n  transition: all 500ms;\n}\n\n.password-dropdown {\n  -webkit-animation: slideDown 0.5s ease;\n          animation: slideDown 0.5s ease;\n}\n\n.warning {\n  text-align: center;\n  color: #d64933;\n}\n\n.password {\n  z-index: 2;\n}\n.password + .status-container {\n  z-index: 999;\n}',""])},393:function(n,e,t){var a=t(394);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(6)(a,r);a.locals&&(n.exports=a.locals)},394:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,'.dot-pulse {\n  position: relative;\n  left: -9999px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: #2B303A;\n  color: #2B303A;\n  box-shadow: 9999px 0 0 -5px #2B303A;\n  -webkit-animation: dotPulse 1.5s infinite linear;\n          animation: dotPulse 1.5s infinite linear;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n  margin-left: 20px;\n}\n\n.dot-pulse::before, .dot-pulse::after {\n  content: "";\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: #2B303A;\n  color: #2B303A;\n}\n\n.dot-pulse::before {\n  box-shadow: 9984px 0 0 -5px #2B303A;\n  -webkit-animation: dotPulseBefore 1.5s infinite linear;\n          animation: dotPulseBefore 1.5s infinite linear;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  margin-left: 0;\n}\n\n.dot-pulse::after {\n  box-shadow: 10014px 0 0 -5px #2B303A;\n  -webkit-animation: dotPulseAfter 1.5s infinite linear;\n          animation: dotPulseAfter 1.5s infinite linear;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  margin-left: -5px;\n}\n\n@-webkit-keyframes dotPulseBefore {\n  0% {\n    box-shadow: 9984px 0 0 -5px #2B303A;\n  }\n  30% {\n    box-shadow: 9984px 0 0 2px #2B303A;\n  }\n  60%, 100% {\n    box-shadow: 9984px 0 0 -5px #2B303A;\n  }\n}\n\n@keyframes dotPulseBefore {\n  0% {\n    box-shadow: 9984px 0 0 -5px #2B303A;\n  }\n  30% {\n    box-shadow: 9984px 0 0 2px #2B303A;\n  }\n  60%, 100% {\n    box-shadow: 9984px 0 0 -5px #2B303A;\n  }\n}\n@-webkit-keyframes dotPulse {\n  0% {\n    box-shadow: 9999px 0 0 -5px #2B303A;\n  }\n  30% {\n    box-shadow: 9999px 0 0 2px #2B303A;\n  }\n  60%, 100% {\n    box-shadow: 9999px 0 0 -5px #2B303A;\n  }\n}\n@keyframes dotPulse {\n  0% {\n    box-shadow: 9999px 0 0 -5px #2B303A;\n  }\n  30% {\n    box-shadow: 9999px 0 0 2px #2B303A;\n  }\n  60%, 100% {\n    box-shadow: 9999px 0 0 -5px #2B303A;\n  }\n}\n@-webkit-keyframes dotPulseAfter {\n  0% {\n    box-shadow: 10014px 0 0 -5px #2B303A;\n  }\n  30% {\n    box-shadow: 10014px 0 0 2px #2B303A;\n  }\n  60%, 100% {\n    box-shadow: 10014px 0 0 -5px #2B303A;\n  }\n}\n@keyframes dotPulseAfter {\n  0% {\n    box-shadow: 10014px 0 0 -5px #2B303A;\n  }\n  30% {\n    box-shadow: 10014px 0 0 2px #2B303A;\n  }\n  60%, 100% {\n    box-shadow: 10014px 0 0 -5px #2B303A;\n  }\n}',""])},42:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var a=function(n,e){var t;return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var s=this;t&&clearTimeout(t),t=setTimeout((function(){t=null,n.apply(s,r)}),e)}}},49:function(n,e,t){"use strict";t.r(e);var a=t(154),r=t.n(a),o=(t(253),t(0)),s=t.n(o),i=t(9);e.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:r.a}),s.a.createElement("figcaption",null,Object(i.a)("Ribblehead Viaduct, "),s.a.createElement("a",{href:"/trails/nidderdale"},Object(i.a)("Nidderdale"))))}},629:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(96),s=t(4),i=t.n(s),l=t(2),c=t.n(l),u=t(9),p=(t(391),t(8)),d=t.n(p),f=t(17),m=t(37),b=t(619),w=t(631),g=t(49),x=t(64),h=t(10),y=t(11),v=(t(393),function(){return r.a.createElement("div",{className:"stage"},r.a.createElement("div",{className:"dot-pulse"}))}),k=t(42);function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){i()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var P=function(){var n=Object(a.useState)({username:"",email:"",password:"",confirmPassword:""}),e=c()(n,2),t=e[0],o=e[1],s=Object(a.useState)(1),l=c()(s,2),p=l[0],m=l[1],v=Object(a.useState)(!1),O=c()(v,2),P=O[0],B=O[1],C=Object(a.useState)({email:"",username:"",password:"",confirmPassword:"",submit:""}),N=c()(C,2),S=N[0],D=N[1],z=Object(a.useState)({username:null,email:null,password:null,confirmPassword:null}),X=c()(z,2),I=X[0],F=X[1],T=Object(y.f)(),R=function(n){var e=n.target,t=e.value,a=e.name;H(t,a),o((function(n){return E(E({},n),{},i()({},a,t))}))},H=r.a.useCallback(Object(k.a)((function(n,e){if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(n)||"username"===e&&n.length>2){F((function(n){return E(E({},n),{},i()({},e,"pending"))})),D((function(n){return E(E({},n),{},i()({},e,""))}));var t={email:"email"===e?n:"",username:"username"===e?n:"",name:e};d.a.post("/api/auth/fieldverification",t).then((function(n){F((function(n){return E(E({},n),{},i()({},e,"success"))}))})).catch((function(n){F((function(n){return E(E({},n),{},i()({},e,"error"))})),n.response&&422===n.response.status&&(console.clear(),D((function(n){return E(E({},n),{},i()({},e,"An account already exists with this ".concat(e,", please use forgot password instead")))})))}))}else F((function(n){return E(E({},n),{},i()({},e,"error"))})),D((function(n){return E(E({},n),{},i()({},e,"Please enter a valid email address"))}))}),1e3),[]),_=r.a.useCallback(Object(k.a)((function(n){/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(n)?(F((function(n){return E(E({},n),{},{password:"success"})})),D((function(n){return E(E({},n),{},{password:""})}))):(F((function(n){return E(E({},n),{},{password:"error"})})),D((function(n){return E(E({},n),{},{password:"Must contain at least 8 characters, a number, an upper and a lowercase letter"})})))}),1e3),[]),L=r.a.useCallback(Object(k.a)((function(n,e){n!==e?(F((function(n){return E(E({},n),{},{confirmPassword:"error"})})),D((function(n){return E(E({},n),{},{confirmPassword:"Passwords must match"})}))):(F((function(n){return E(E({},n),{},{confirmPassword:"success"})})),D((function(n){return E(E({},n),{},{confirmPassword:""})})))}),1e3),[]);return r.a.createElement("div",{className:"signup-modal"},r.a.createElement(g.default,null),r.a.createElement("div",{className:"signup"},r.a.createElement("h3",null,Object(u.a)("Register with Trailshub")),r.a.createElement("p",null,Object(u.a)("Registering with Trails Hub has many benefits, upload videos, keep track of your rides and rate your favourite routes.")),r.a.createElement("div",{className:"register-animation-container"},r.a.createElement(b.a,null,r.a.createElement(w.a,{key:1===p?"step1":"step2",addEndListener:function(n,e){return n.addEventListener("transitionend",e,!1)},classNames:"".concat(1===p?"swipe":"swipeback"),timeout:1e3},r.a.createElement("div",null,1===p?r.a.createElement(j,{verifyingData:I,warning:S,handleChange:R,setStep:m,value:t.email}):r.a.createElement(A,{verifyingData:I,warning:S,handleChange:R,setStep:m,formData:t,handlePasswordChange:function(n){var e=n.target,t=e.value,a=e.name;_(t),o((function(n){return E(E({},n),{},i()({},a,t))}))},confirmHandlePasswordChange:function(n){var e=n.target,a=e.value,r=e.name;L(a,t.password),o((function(n){return E(E({},n),{},i()({},r,a))}))},handleSubmit:function(n){var e=t.password,a=t.email,r=t.username,o=t.confirmPassword;if(e&&a&&r&&o){B(!0);var s={username:r,email:a,password:Object(x.sha256)(e),password_confirmation:Object(x.sha256)(o)};f.e(s).then((function(n){201===n.status?T.push(h.a.signupsuccess,{from:"signup",email:n.data.email}):D((function(n){return E(E({},n),{},{submit:"An error occured, please try again later!"})}))}))}},submitting:P})))))))},j=function(n){var e=n.verifyingData,t=n.warning,a=n.handleChange,o=n.setStep,s=n.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(n){return a(n)},placeholder:"Email Address",value:s}),r.a.createElement(m.a,{status:e.email})),r.a.createElement("button",{className:"progress-button",type:"button",disabled:"success"!==e.email,onClick:function(){return o(2)}},r.a.createElement("p",null,Object(u.a)("Next"))),t.email&&r.a.createElement("p",{className:"warning"},t.email))},A=function(n){var e=n.verifyingData,t=n.warning,o=n.handleChange,s=n.setStep,l=n.formData,p=n.handlePasswordChange,d=n.confirmHandlePasswordChange,f=n.handleSubmit,b=n.submitting,w=Object(a.useState)(!1),g=c()(w,2),x=g[0],h=g[1],y=l.password,k=l.email,O=l.username,E=l.confirmPassword;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("input",{type:"username",name:"username",id:"username",placeholder:"Choose a username",onChange:function(n){return o(n)}}),r.a.createElement(m.a,{status:e.username})),r.a.createElement("label",null,r.a.createElement("input",{className:"password",type:"password",name:"password",id:"password",placeholder:"Password",onChange:function(n){return p(n)},onFocus:function(){return h(!0)}}),r.a.createElement(m.a,{status:e.password})),t.password&&r.a.createElement("p",{className:"warning"},t.password),x&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"password-dropdown"},r.a.createElement("input",{className:"confirm-password",type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm password",onChange:function(n){return d(n)}}),r.a.createElement(m.a,{status:e.confirmPassword})),t.confirmPassword&&r.a.createElement("p",{className:"warning"},t.confirmPassword)),t.submit&&r.a.createElement("p",{className:"warning"},t.submit),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("button",{className:"progress-button back",type:"button",onClick:function(){return s(1)}},Object(u.a)("Back")),r.a.createElement("button",i()({className:"progress-button ".concat(b?"button-submitting":""),type:"button",onClick:function(){return f()},disabled:!y||!k||!O||!E||"success"!==e.confirmPassword||"success"!==e.password||"success"!==e.username||"success"!==e.email||b},"onClick",(function(){return f()})),Object(u.a)("Submit"),b&&r.a.createElement(v,null))))};e.default=function(){return r.a.createElement("div",null,r.a.createElement(P,null),"-------------",r.a.createElement(o.a,null))}},96:function(n,e,t){"use strict";var a=t(4),r=t.n(a),o=t(2),s=t.n(o),i=t(0),l=t.n(i),c=t(9),u=t(12),p=(t(261),t(17)),d=t(14),f=t(64),m=t.n(f),b=t(10),w=t(11),g=t(38);function x(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?x(Object(t),!0).forEach((function(e){r()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.a=function(){var n=Object(w.f)(),e=Object(d.c)(),t=Object(i.useState)({email:"",password:""}),a=s()(t,2),o=a[0],f=a[1],x=function(n){var e=n.target,t=e.name,a=e.value;f((function(n){return h(h({},n),{},r()({},t,a))}))};return l.a.createElement("div",{className:"login-modal"},l.a.createElement("div",{className:"login"},l.a.createElement("h3",null,Object(c.a)("Log in to your Trails Hub Account")),l.a.createElement("input",{value:o.email,type:"email",name:"email",id:"email-login",onChange:function(n){return x(n)}}),l.a.createElement("input",{value:o.password,type:"password",name:"password",id:"password-login",onChange:function(n){return x(n)}}),l.a.createElement("button",{className:"progress-button",type:"button",onClick:function(){return t={email:o.email,password:m()(o.password),remember_me:!0},void p.h(t).then((function(t){localStorage.setItem("trailshub:all:userToken",t.data.access_token),e(Object(g.d)(t.data.access_token)),n.push(b.a.memberDashboard)}));var t}},"Sign In"),l.a.createElement(u.b,{to:"/forgotpassword"},"Forgot Password")))}}}]);