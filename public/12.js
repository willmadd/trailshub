(window.webpackJsonp=window.webpackJsonp||[]).push([[12,16],{154:function(t,e){t.exports="/images/yorkshire.jpg?7a58426b7aa24b65cb4708ca91dbcad8"},253:function(t,e,r){var s=r(254);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(6)(s,i);s.locals&&(t.exports=s.locals)},254:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"img {\n  width: 100%;\n}",""])},261:function(t,e,r){var s=r(262);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(6)(s,i);s.locals&&(t.exports=s.locals)},262:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"",""])},263:function(t,e){(function(e){t.exports=e}).call(this,{})},49:function(t,e,r){"use strict";r.r(e);var s=r(154),i=r.n(s),o=(r(253),r(0)),a=r.n(o),h=r(9);e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:i.a}),a.a.createElement("figcaption",null,Object(h.a)("Ribblehead Viaduct, "),a.a.createElement("a",{href:"/trails/nidderdale"},Object(h.a)("Nidderdale"))))}},621:function(t,e,r){"use strict";r.r(e);var s=r(2),i=r.n(s),o=r(0),a=r.n(o),h=r(49),n=r(17),c=r(96);e.default=function(t){var e=t.match;console.log("email validation");var r=e.params.token,s=Object(o.useState)(""),u=i()(s,2),l=u[0],f=u[1];return Object(o.useEffect)((function(){console.log("use effect"),n.g(r).then((function(t){console.log(t),f("Thanks for Signing up. Your account has now been activated. Please sign in to continue!")})).catch((function(t){if(t.response)switch(t.response.status){case 404:f("Could not activate you account. Your token is invalid!");break;default:f("There was an error activating our account!")}else f("Could not connect to the server. Please check your internet connection")}))}),[]),a.a.createElement("div",null,a.a.createElement(h.default,null),a.a.createElement("h3",null,l),a.a.createElement(c.a,null))}},64:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__(263),ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(r){return new Sha256(e,!0).update(r)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var r=0;r<OUTPUT_TYPES.length;++r){var s=OUTPUT_TYPES[r];e[s]=createOutputMethod(s,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"==typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null==t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(r,s){return new HmacSha256(r,e,!0).update(s)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,r){return e.create(t).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var s=OUTPUT_TYPES[r];e[s]=createHmacOutputMethod(s,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,r){var s,i=typeof t;if("string"===i){var o,a=[],h=t.length,n=0;for(s=0;s<h;++s)(o=t.charCodeAt(s))<128?a[n++]=o:o<2048?(a[n++]=192|o>>6,a[n++]=128|63&o):o<55296||o>=57344?(a[n++]=224|o>>12,a[n++]=128|o>>6&63,a[n++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),a[n++]=240|o>>18,a[n++]=128|o>>12&63,a[n++]=128|o>>6&63,a[n++]=128|63&o);t=a}else{if("object"!==i)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(e,!0).update(t).array());var c=[],u=[];for(s=0;s<64;++s){var l=t[s]||0;c[s]=92^l,u[s]=54^l}Sha256.call(this,e,r),this.update(u),this.oKeyPad=c,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR);e=!0}for(var s,i,o=0,a=t.length,h=this.blocks;o<a;){if(this.hashed&&(this.hashed=!1,h[0]=this.block,h[16]=h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=0),e)for(i=this.start;o<a&&i<64;++o)h[i>>2]|=t[o]<<SHIFT[3&i++];else for(i=this.start;o<a&&i<64;++o)(s=t.charCodeAt(o))<128?h[i>>2]|=s<<SHIFT[3&i++]:s<2048?(h[i>>2]|=(192|s>>6)<<SHIFT[3&i++],h[i>>2]|=(128|63&s)<<SHIFT[3&i++]):s<55296||s>=57344?(h[i>>2]|=(224|s>>12)<<SHIFT[3&i++],h[i>>2]|=(128|s>>6&63)<<SHIFT[3&i++],h[i>>2]|=(128|63&s)<<SHIFT[3&i++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++o)),h[i>>2]|=(240|s>>18)<<SHIFT[3&i++],h[i>>2]|=(128|s>>12&63)<<SHIFT[3&i++],h[i>>2]|=(128|s>>6&63)<<SHIFT[3&i++],h[i>>2]|=(128|63&s)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=h[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,r,s,i,o,a,h,n,c=this.h0,u=this.h1,l=this.h2,f=this.h3,_=this.h4,H=this.h5,p=this.h6,S=this.h7,E=this.blocks;for(t=16;t<64;++t)e=((i=E[t-15])>>>7|i<<25)^(i>>>18|i<<14)^i>>>3,r=((i=E[t-2])>>>17|i<<15)^(i>>>19|i<<13)^i>>>10,E[t]=E[t-16]+e+E[t-7]+r<<0;for(n=u&l,t=0;t<64;t+=4)this.first?(this.is224?(o=300032,S=(i=E[0]-1413257819)-150054599<<0,f=i+24177077<<0):(o=704751109,S=(i=E[0]-210244248)-1521486534<<0,f=i+143694565<<0),this.first=!1):(e=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),s=(o=c&u)^c&l^n,S=f+(i=S+(r=(_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7))+(_&H^~_&p)+K[t]+E[t])<<0,f=i+(e+s)<<0),e=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),s=(a=f&c)^f&u^o,p=l+(i=p+(r=(S>>>6|S<<26)^(S>>>11|S<<21)^(S>>>25|S<<7))+(S&_^~S&H)+K[t+1]+E[t+1])<<0,e=((l=i+(e+s)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),s=(h=l&f)^l&c^a,H=u+(i=H+(r=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&S^~p&_)+K[t+2]+E[t+2])<<0,e=((u=i+(e+s)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),s=(n=u&l)^u&f^h,_=c+(i=_+(r=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7))+(H&p^~H&S)+K[t+3]+E[t+3])<<0,c=i+(e+s)<<0;this.h0=this.h0+c<<0,this.h1=this.h1+u<<0,this.h2=this.h2+l<<0,this.h3=this.h3+f<<0,this.h4=this.h4+_<<0,this.h5=this.h5+H<<0,this.h6=this.h6+p<<0,this.h7=this.h7+S<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3,i=this.h4,o=this.h5,a=this.h6,h=this.h7,n=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a];return this.is224||(n+=HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[15&h]),n},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3,i=this.h4,o=this.h5,a=this.h6,h=this.h7,n=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i,o>>24&255,o>>16&255,o>>8&255,255&o,a>>24&255,a>>16&255,a>>8&255,255&a];return this.is224||n.push(h>>24&255,h>>16&255,h>>8&255,255&h),n},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__(35),__webpack_require__(16))},96:function(t,e,r){"use strict";var s=r(4),i=r.n(s),o=r(2),a=r.n(o),h=r(0),n=r.n(h),c=r(9),u=r(12),l=(r(261),r(17)),f=r(14),_=r(64),H=r.n(_),p=r(10),S=r(11),E=r(38);function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(){var t=Object(S.f)(),e=Object(f.c)(),r=Object(h.useState)({email:"",password:""}),s=a()(r,2),o=s[0],_=s[1],A=function(t){var e=t.target,r=e.name,s=e.value;_((function(t){return R(R({},t),{},i()({},r,s))}))};return n.a.createElement("div",{className:"login-modal"},n.a.createElement("div",{className:"login"},n.a.createElement("h3",null,Object(c.a)("Log in to your Trails Hub Account")),n.a.createElement("input",{value:o.email,type:"email",name:"email",id:"email-login",onChange:function(t){return A(t)}}),n.a.createElement("input",{value:o.password,type:"password",name:"password",id:"password-login",onChange:function(t){return A(t)}}),n.a.createElement("button",{className:"progress-button",type:"button",onClick:function(){return r={email:o.email,password:H()(o.password),remember_me:!0},void l.h(r).then((function(r){localStorage.setItem("trailshub:all:userToken",r.data.access_token),e(Object(E.d)(r.data.access_token)),t.push(p.a.memberDashboard)}));var r}},"Sign In"),n.a.createElement(u.b,{to:"/forgotpassword"},"Forgot Password")))}}}]);