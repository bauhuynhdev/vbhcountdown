(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1100:function(t,e,n){t.exports=n.p+"img/background.77fd3451.jpg"},"36df":function(t,e,n){"use strict";n("d0da")},"420a":function(t,e,n){"use strict";n("7976")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Logo"),n("Timer")],1)},i=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"logo"}},[r("div",{staticClass:"image"},[r("img",{attrs:{src:n("cf05")}})]),r("div",{staticClass:"title"},[r("h1",[t._v("VIETNAM BACKPACKER HOSTELS"),r("br"),t._v("NEW YEAR COUNT DOWN")])])])}],u={name:"Logo"},s=u,l=(n("420a"),n("2877")),f=Object(l["a"])(s,a,c,!1,null,"7394de26",null),d=f.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"background"}},[r("img",{attrs:{src:n("1100")}})])}],m={name:"Background"},h=m,_=(n("36df"),Object(l["a"])(h,p,v,!1,null,"2dc07805",null)),b=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"timer"}},[n("div",[t._v(t._s(t.d)),n("span",[t._v("Days")])]),n("div",[t._v(t._s(t.h)),n("span",[t._v("Hours")])]),n("div",[t._v(t._s(t.m)),n("span",[t._v("Minutes")])]),n("div",[t._v(t._s(t.s)),n("span",[t._v("Seconds")])])])},y=[],O=(n("0d03"),n("4795"),{name:"Timer",data:function(){return{d:0,h:0,m:0,s:0}},methods:{setTimer:function(){var t=Date.parse("Dec 31, 2021 00:00:00"),e=new Date,n=t-e,r=Math.floor(n/864e5),o=Math.floor(n/36e5),i=Math.floor(n/6e4),a=Math.floor(n/1e3);this.d=r,this.h=o-24*r,this.m=i-60*o,this.s=a-60*i},runTimer:function(){var t=this;this.setTimer(),setInterval((function(){t.setTimer()}),1e3)}},mounted:function(){this.runTimer()}}),j=O,T=(n("aa31"),Object(l["a"])(j,g,y,!1,null,"76e5251c",null)),w=T.exports,x={name:"App",components:{Timer:w,Background:b,Logo:d}},E=x,M=(n("5c0b"),Object(l["a"])(E,o,i,!1,null,null,null)),S=M.exports,P=n("2f62");r["a"].use(P["a"]);var k=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:k,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7976:function(t,e,n){},"80e5":function(t,e,n){},"9c0c":function(t,e,n){},aa31:function(t,e,n){"use strict";n("80e5")},cf05:function(t,e,n){t.exports=n.p+"img/logo.4945348b.png"},d0da:function(t,e,n){}});
//# sourceMappingURL=app.68f4e560.js.map