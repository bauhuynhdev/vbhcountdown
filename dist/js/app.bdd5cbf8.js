(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],a=0,f=[];a<i.length;a++)c=i[a],Object.prototype.hasOwnProperty.call(A,c)&&A[c]&&f.push(A[c][0]),A[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==A[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},A={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"094c":function(e,t,n){},"3d50":function(e,t,n){"use strict";n("e885")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$isDevelopment?e._e():n("Background"),n("Logo"),n("Timer"),n("FullScreen"),n("RequireScreen")],1)},o=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"logo"}},[r("div",{staticClass:"image"},[r("img",{attrs:{src:n("cf05")}})]),r("div",{staticClass:"title"},[r("h2",[e._v("VIETNAM BACKPACKER HOSTELS"),r("br"),e._v("NEW YEAR COUNT DOWN")])])])}],u={name:"Logo"},s=u,l=(n("86eb"),n("2877")),a=Object(l["a"])(s,c,i,!1,null,"5966d176",null),f=a.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background"}},[n("iframe",{attrs:{allow:"autoplay",frameborder:"0",src:"https://www.youtube.com/embed/videoseries?controls=0&list=PLc3uPjELXRb9TwYUNOUbhNLwAfMm_xosL&autoplay=1&mute=1&loop=1"}})])}],m={name:"Background"},v=m,b=(n("cb82"),Object(l["a"])(v,d,p,!1,null,"2c0cd13e",null)),h=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"timer"}},[n("div",[e._v(e._s(e.d)),n("span",[e._v("Days")])]),n("div",[e._v(e._s(e.h)),n("span",[e._v("Hours")])]),n("div",[e._v(e._s(e.m)),n("span",[e._v("Minutes")])]),n("div",[e._v(e._s(e.s)),n("span",[e._v("Seconds")])]),e._m(0)])},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"country-name"},[n("h2",[e._v("Vietnam")])])}],y=(n("0d03"),n("4795"),{name:"Timer",data:function(){return{d:0,h:0,m:0,s:0}},methods:{setTimer:function(){var e=Date.parse("Dec 31, 2021 23:59:59"),t=new Date,n=e-t,r=Math.floor(n/864e5),A=Math.floor(n/36e5),o=Math.floor(n/6e4),c=Math.floor(n/1e3);this.d=r,this.h=A-24*r,this.m=o-60*A,this.s=c-60*o},runTimer:function(){var e=this;this.setTimer(),setInterval((function(){e.setTimer()}),1e3)}},mounted:function(){this.runTimer()}}),w=y,E=(n("59ef"),Object(l["a"])(w,g,_,!1,null,"679438dc",null)),F=E.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("span",{on:{click:e.toggle}},[r("img",{attrs:{src:n("854c")}})])])},S=[],T={name:"FullScreen",data:function(){return{is_zoom:!1}},methods:{toggle:function(){try{if(this.is_zoom)document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen();else{var e=document.body;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}}catch(t){}this.is_zoom=!this.is_zoom}}},x=T,M=(n("7e44"),Object(l["a"])(x,O,S,!1,null,"4a2460eb",null)),C=M.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"require-screen"}},[n("p",[e._v("This website only works on screens larger than 1024")])])}],k={name:"RequireScreen"},D=k,Q=(n("3d50"),Object(l["a"])(D,R,j,!1,null,"5348d410",null)),P=Q.exports,U={name:"App",components:{RequireScreen:P,FullScreen:C,Timer:F,Background:h,Logo:f}},q=U,G=(n("5c0b"),Object(l["a"])(q,A,o,!1,null,null,null)),W=G.exports,B=n("2f62");r["a"].use(B["a"]);var H=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,r["a"].prototype.$isDevelopment=!1,new r["a"]({store:H,render:function(e){return e(W)}}).$mount("#app")},"59ef":function(e,t,n){"use strict";n("094c")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7e44":function(e,t,n){"use strict";n("d7e5")},"854c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAF9AAABfQFg/W6DAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAGZQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATug2UwAAACF0Uk5TAAECBgcNFRcYKy0vSWx9lpiZm6Kyu8HE1Nri7/Dy8/r8AJ1GHAAAAQ1JREFUOMuFk1kSgyAQRMe4Ju4RdwX7/pdMQDEasegPqigesw/RLi8pmp7zvikSj64K8xlfCSHPOQ//nt2MQ9RpHDhOEKe1AM/c0/cWSxn97lG5oD0YeQ3onmeTzw7Da/8/gPn/MfkMw2bDbcEe16gfDO0aR4bOJ4P8DplywJeD/2pSGt8yjoVLJznKwzeGVaO8lMi/9ZtFdDWPSWUrZo8S1HQHUI2ECqT3QIqCGsT3QIyGegT3QICeuHDW/JgBcATfgQlHgFU7oF2cgU3ShQ7SCMggdZpGQKapC2UEZKF0qU2AKrVu1rh16ZitapZu93tcG1393rd2WwfGPnLWobWPvX1x7KtH1uWVMq//B9LiHnPyt8QBAAAAAElFTkSuQmCC"},"86eb":function(e,t,n){"use strict";n("f0b3")},"9c0c":function(e,t,n){},cb82:function(e,t,n){"use strict";n("e37a")},cf05:function(e,t,n){e.exports=n.p+"img/logo.8f7ac1bb.png"},d7e5:function(e,t,n){},e37a:function(e,t,n){},e885:function(e,t,n){},f0b3:function(e,t,n){}});
//# sourceMappingURL=app.bdd5cbf8.js.map