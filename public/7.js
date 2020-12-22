(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,t){e.exports="/images/ascent.svg?4523a4a7ccc4c4a735e4f260224d053d"},151:function(e,t){e.exports="/images/descent.svg?d80a39495905448c2a12bf348ee518b1"},152:function(e,t){e.exports="/images/time.svg?f19eab6d6e90c13cc89282a324e8bb41"},153:function(e,t){e.exports="/images/distance.svg?03c2513393f16010ce28c2f927ffaf5a"},249:function(e,t,n){var a=n(250);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(e.exports=a.locals)},250:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".difficulty-indicator {\n  text-transform: uppercase;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.difficulty-indicator h5 {\n  font-size: 10px;\n  font-weight: 700;\n}\n.difficulty-indicator.easy {\n  background-color: green;\n  color: #fff;\n}\n.difficulty-indicator.intermediate {\n  background-color: #0080ca;\n  color: #fff;\n}\n.difficulty-indicator.hard {\n  background-color: black;\n  color: #fff;\n}\n.difficulty-indicator.extreme {\n  background-color: orange;\n  color: #fff;\n}",""])},251:function(e,t,n){var a=n(252);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(e.exports=a.locals)},252:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".stats-tab {\n  display: flex;\n  justify-content: space-between;\n  color: #2B303A;\n}\n.stats-tab h5 {\n  display: flex;\n}\n.stats-tab h5 img {\n  height: 18px;\n  width: 18px;\n  margin-right: 4px;\n}",""])},257:function(e,t,n){var a=n(258);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(e.exports=a.locals)},258:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".video-container {\n  margin-top: 24px;\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%;\n}\n.video-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.create-section .video-container {\n  -webkit-animation: slideDown 0.5s ease;\n          animation: slideDown 0.5s ease;\n}",""])},266:function(e,t){},333:function(e,t){},385:function(e,t,n){var a=n(386);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(e.exports=a.locals)},386:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".route {\n  background-color: #bac1b8;\n}\n.route__one {\n  width: 90%;\n  max-width: 1220px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 24px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.route .leaflet-container {\n  height: 350px;\n}\n.route h1 {\n  text-transform: uppercase;\n  width: 100%;\n  text-align: center;\n  padding: 12px;\n}\n\n.tags-area {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-bottom: 12px;\n}\n.tags-area a {\n  color: #d64933;\n  text-transform: uppercase;\n  text-decoration: underline;\n}\n\n.video-container iframe {\n  width: 100%;\n}\n\n.download-area button {\n  padding: 12px;\n  background-color: #d64933;\n  border: 1px solid #2B303A;\n}\n\n.slick-track {\n  display: flex !important;\n}\n\n.slick-slide {\n  height: inherit !important;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n}\n.slick-slide div {\n  height: 100%;\n}\n.slick-slide div img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n}",""])},387:function(e,t,n){var a=n(388);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(a,r);a.locals&&(e.exports=a.locals)},388:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".carousel {\n  display: flex;\n  justify-content: center;\n  margin-top: 36px;\n}\n.carousel__container {\n  width: 90%;\n}",""])},625:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(4),o=n.n(r),i=n(2),c=n.n(i),l=n(0),s=n.n(l),u=n(8),d=n.n(u),m=n(18),f=function(e){var t=e.tagsArr;return s.a.createElement("div",{className:"tags-area"},t.map((function(e){return s.a.createElement("a",{key:"".concat(e),href:"/trails/".concat(Object(m.a)(e))},s.a.createElement("h6",null,e.replace(/-/gi," ")))})))},p=function(e){var t=e.file,n=e.title;return s.a.createElement("div",{className:"download-area"},"Need to get the gpx file fetched from laravel once clicked",s.a.createElement("button",{onClick:function(){var e=document.createElement("a"),a=new Blob([t],{type:"text/plain"});e.href=URL.createObjectURL(a),e.download="thetrailmap.com_".concat(n||"gpxfile",".gpx"),document.body.appendChild(e),e.click()}},"Download GPX File"))},g=n(95),h=n(228),v=n.n(h),b=function(e){var t=e.text;return s.a.createElement("div",{className:"trail-text"},decodeURIComponent(v()(t)))},y=n(635),x=n(637),E=n(636),w=n(618);n(99),n(65),n(100),n(632);n(174);var k=L.icon({iconRetinaUrl:n(69),iconUrl:n(69),iconSize:[20,20],iconAnchor:[3,20]}),O=L.icon({iconRetinaUrl:n(70),iconUrl:n(70),iconSize:[20,20],iconAnchor:[3,20]}),j=(L.icon({iconRetinaUrl:n(71),iconUrl:n(71),iconSize:[20,20],iconAnchor:[10,10]}),function(e){var t=e.route,n=Object(l.useState)({lat:51.505,lng:-.09,zoom:13}),a=c()(n,2),r=a[0],o=(a[1],[r.lat,r.lng]);return s.a.createElement(y.a,{id:"mapid",center:o,zoom:r.zoom,scrollWheelZoom:!1,bounds:t},s.a.createElement(x.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://api.mapbox.com/styles/v1/willmadd/".concat("cka5ncmgs19io1io3qn27wejb","/tiles/{z}/{x}/{y}?access_token=")+"pk.eyJ1Ijoid2lsbG1hZGQiLCJhIjoiY2thNW43amlvMDFteDNtcGEyMWpxeWwzcCJ9.wfx7i_G1rWq3roofKl7XhQ"}),s.a.createElement(E.a,{positions:t}),s.a.createElement(w.a,{position:t[0],icon:k}),s.a.createElement(w.a,{position:t[t.length-1],icon:O}))}),_=n(101),N=n.n(_),S=n(102),R=n.n(S),D=n(103),I=n.n(D),P=n(104),U=n.n(P),z=n(51),C=n.n(z),A=(n(363),n(55));function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=C()(e);if(t){var r=C()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return U()(this,n)}}var M=function(e){I()(n,e);var t=F(n);function n(){return N()(this,n),t.apply(this,arguments)}return R()(n,[{key:"render",value:function(){var e=this.props,t=e.hoverOnLine,n=e.route.map((function(e){return{y:e.elevation,x:e.distance}}));return s.a.createElement("div",{className:"ElevationProfile"},n.length>0&&n[0].y?s.a.createElement(A.a,{height:150,style:{fontFamily:"'Questrial', sans-serif"}},s.a.createElement(A.c,{data:n,onNearestXY:t,color:"#87BE31"}),s.a.createElement(A.b,null),s.a.createElement(A.d,{tickFormat:function(e){return"".concat(e,"km")}}),s.a.createElement(A.e,{tickFormat:function(e){return"".concat(e,"m")}})):s.a.createElement("div",{className:"no-elevation"},s.a.createElement("h2",null,"Could not display elevation profile - There is no elevation data in this GPX File")))}}]),n}(l.Component),G=(n(385),n(156),n(157),n(98)),J=n.n(G),B=(n(387),function(e){var t=e.images,n={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!0};return s.a.createElement("div",{className:"carousel"},s.a.createElement("div",{className:"carousel__container"},s.a.createElement(J.a,n,t.map((function(e){return s.a.createElement("img",{key:e.url,src:e.url})})))))}),W=n(72),X=n(68);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=e.match,n=e.location,a=e.units,r=t.params.trailIdentifier,i=Object(l.useState)(o()({title:"",id:"",gpx:"",user_id:"",main_image:"",strava_link:"",youtube_link:"",coords:"",description:"",activity:"",hire_centre:"",tags:"",slug:"",approved:"",completed:"",difficulty:0},"coords",[])),u=c()(i,2),m=u[0],h=u[1],v=Object(l.useState)(!0),y=c()(v,2),x=y[0],E=y[1],w=Object(l.useState)({}),k=c()(w,2),O=(k[0],k[1],Object(l.useState)([{x:0,y:0,lat:0,lng:0}])),_=c()(O,2);_[0],_[1];Object(l.useEffect)((function(){n.state&&h(T(T({},m),{},{coords:n.state.coords}));d.a.get("/api/gettrail/".concat(r).concat(n.state&&n.state.coords.length>0?"/nocoords":"/coords")).then((function(e){h(T(T(T({},m),e.data),{},{coords:e.data.coords?JSON.parse(e.data.coords):n.state.coords})),E(!1)}))}),[]);return s.a.createElement("div",null,!x&&s.a.createElement("div",{className:"route"},s.a.createElement("h1",null,decodeURIComponent("".concat(m.title))),s.a.createElement("div",{className:"route__one"},s.a.createElement("div",{className:"route__one__left"},s.a.createElement(f,{tagsArr:m.tags}),s.a.createElement(X.a,{level:Number(m.difficulty)}),s.a.createElement(b,{text:m.summary}),s.a.createElement(W.a,{ascent:m.ascent,descent:m.descent,time:m.time,distance:m.distance,imperial:a.imperial}),s.a.createElement(p,{file:m.gpx,title:m.title}),s.a.createElement(b,{text:m.description})),s.a.createElement("div",null,s.a.createElement(j,{route:m.coords}),s.a.createElement(M,{route:m.coords}),s.a.createElement(g.a,{url:decodeURIComponent(m.youtube_link)}))),s.a.createElement(B,{images:m.images})))};t.default=Object(a.b)((function(e){return{units:{imperial:e.config.imperial}}}))(Z)},68:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(249);t.a=function(e){var t=e.level,n=1===t?"easy":2===t?"intermediate":3===t?"hard":"extreme";return r.a.createElement("div",{className:"difficulty-indicator ".concat(n)},r.a.createElement("h5",null,n))}},69:function(e,t){e.exports="/images/startflag.svg?c10530f310f559392b32dd257764b1ce"},70:function(e,t){e.exports="/images/endflag.svg?9e63e156ad7baef770662c85ad851070"},71:function(e,t){e.exports="/images/crosshair.svg?ecf3069a29b25dd2040da756f882757d"},72:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(0),i=n.n(o),c=(n(251),n(150)),l=n.n(c),s=n(151),u=n.n(s),d=n(152),m=n.n(d),f=n(153),p=n.n(f);t.a=function(e){var t,n=e.ascent,a=e.descent,o=e.time,c=e.distance,s=e.imperial,d=(t=o,console.log(t),new Date(1e3*t).toISOString().substr(11,8).split(":").map((function(e){return Number(e)}))),f=r()(d,3),g=f[0],h=f[1];f[2];return i.a.createElement("div",{className:"stats-tab"},n&&i.a.createElement("h5",null,i.a.createElement("img",{src:l.a}),s?"".concat(Math.round(3.28084*n)," ft"):"".concat(n," m")),a&&i.a.createElement("h5",null,i.a.createElement("img",{src:u.a}),s?"".concat(Math.round(3.28084*a)," ft"):"".concat(a," m")),o&&i.a.createElement("h5",null,i.a.createElement("img",{src:m.a}),g,"h ",h,"m"),c&&i.a.createElement("h5",null,i.a.createElement("img",{src:p.a}),s?"".concat(Math.round(3.28084*c*189394e-9)," miles"):"".concat(Math.round(c/1e3*100)/100," km")))}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=e.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|vi|e(?:mbed)?)\/|\S*?[?&]v=|\S*?[?&]vi=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);return!(!t||!t[1])&&t[1]}},95:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(257),n(94));t.a=function(e){var t=e.url;return r.a.createElement("div",{className:"video-container"},r.a.createElement("iframe",{className:"youtube-iframe",src:"https://www.youtube.com/embed/".concat(Object(o.a)(t)),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}}]);