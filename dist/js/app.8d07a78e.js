(function(e){function t(t){for(var s,i,a=t[0],o=t[1],u=t[2],f=0,d=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(s=!1)}s&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},c=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3d38":function(e,t,n){"use strict";n("f65e")},"3d50":function(e,t,n){"use strict";n("e885")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0d03");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$isDevelopment?e._e():n("Background"),n("Logo"),n("Timer",{attrs:{country:e.country},on:{endTimeEvent:e.endTimeEvent}}),n("FullScreen"),n("RequireScreen")],1)},c=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"logo"}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:n("cf05")}})]),s("div",{staticClass:"title"},[s("h2",[e._v("VIETNAM BACKPACKER HOSTELS"),s("br"),e._v("NEW YEAR COUNT DOWN")])])])}],o={name:"Logo"},u=o,l=(n("86eb"),n("2877")),f=Object(l["a"])(u,i,a,!1,null,"5966d176",null),d=f.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background"}},[n("iframe",{attrs:{allow:"autoplay",allowfullscreen:"",frameborder:"0",src:"https://dailymotion.com/embed/playlist/x7br8m?autoplay=1&scaleMode=fill&loop=1&ui-start-screen-info=0&ui-logo=0",type:"text/html"}})])}],b={name:"Background"},j=b,h=(n("d952"),Object(l["a"])(j,A,m,!1,null,"693e3e90",null)),p=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"timer"}},[n("div",{staticClass:"countdown"},[n("div",[e._v(e._s(e.d)),n("span",[e._v("Days")])]),n("div",[e._v(e._s(e.h)),n("span",[e._v("Hours")])]),n("div",[e._v(e._s(e.m)),n("span",[e._v("Minutes")])]),n("div",[e._v(e._s(e.s)),n("span",[e._v("Seconds")])]),n("div",{staticClass:"country-name"},[n("h2",[e._v(e._s(e.country.name))])])])])},g=[],y=(n("4795"),n("c1df")),_=n.n(y),k={name:"Timer",props:["country"],data:function(){return{d:0,h:0,m:0,s:0,intervalRunner:void 0}},watch:{s:function(){this.endTime&&(clearInterval(this.intervalRunner),this.$emit("endTimeEvent",!0),this.resetTimer())},country:function(){this.runTimer()}},computed:{endTime:function(){return this.d<0||0===this.d&&0===this.h&&0===this.m&&this.s<1}},methods:{setTimer:function(){var e=_()().format("DD"),t=e+"/12/2021 23:59:59",n=_()(t,"DD/MM/YYYY HH:mm:ss").unix(),s=_()().add(this.country.timeZone,"hour").unix(),r=n-s,c=Math.floor(r/86400),i=Math.floor(r/3600),a=Math.floor(r/60),o=Math.floor(r);this.d=c,this.h=i-24*c,this.m=a-60*i,this.s=o-60*a},runTimer:function(){var e=this;this.setTimer(),this.intervalRunner=setInterval((function(){e.setTimer()}),1e3)},resetTimer:function(){this.d=0,this.h=0,this.m=0,this.s=0}},mounted:function(){this.runTimer()}},w=k,x=(n("3d38"),Object(l["a"])(w,v,g,!1,null,"19da4c2a",null)),T=x.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("span",{on:{click:e.toggle}},[s("img",{attrs:{src:n("854c")}})])])},z=[],O={name:"FullScreen",data:function(){return{is_zoom:!1}},methods:{toggle:function(){try{if(this.is_zoom)document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen();else{var e=document.body;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}}catch(t){}this.is_zoom=!this.is_zoom}}},F=O,S=(n("7e44"),Object(l["a"])(F,E,z,!1,null,"4a2460eb",null)),M=S.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"require-screen"}},[n("p",[e._v("This website only works on screens larger than 1024")])])}],D={name:"RequireScreen"},R=D,$=(n("3d50"),Object(l["a"])(R,Z,C,!1,null,"5348d410",null)),Q=$.exports,q={name:"App",components:{RequireScreen:Q,FullScreen:M,Timer:T,Background:p,Logo:d},data:function(){return{index:0,countries:[{name:"New Zealand",timeZone:13-this.$timeZone},{name:"Sydney",timeZone:11-this.$timeZone},{name:"Brisbane",timeZone:10-this.$timeZone},{name:"Seoul",timeZone:9-this.$timeZone},{name:"Hongkong / Singapore",timeZone:8-this.$timeZone},{name:"Vietnam",timeZone:7-this.$timeZone}]}},methods:{endTimeEvent:function(){this.index++}},computed:{country:function(){return void 0===this.countries[this.index]&&(this.index=this.countries.length-1),this.countries[this.index]}}},H=q,P=(n("5c0b"),Object(l["a"])(H,r,c,!1,null,null,null)),U=P.exports,G=n("2f62");s["a"].use(G["a"]);var W=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,s["a"].prototype.$isDevelopment=!1;var B=new Date;s["a"].prototype.$timeZone=-B.getTimezoneOffset()/60,new s["a"]({store:W,render:function(e){return e(U)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7e44":function(e,t,n){"use strict";n("d7e5")},"854c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAF9AAABfQFg/W6DAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAGZQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATug2UwAAACF0Uk5TAAECBgcNFRcYKy0vSWx9lpiZm6Kyu8HE1Nri7/Dy8/r8AJ1GHAAAAQ1JREFUOMuFk1kSgyAQRMe4Ju4RdwX7/pdMQDEasegPqigesw/RLi8pmp7zvikSj64K8xlfCSHPOQ//nt2MQ9RpHDhOEKe1AM/c0/cWSxn97lG5oD0YeQ3onmeTzw7Da/8/gPn/MfkMw2bDbcEe16gfDO0aR4bOJ4P8DplywJeD/2pSGt8yjoVLJznKwzeGVaO8lMi/9ZtFdDWPSWUrZo8S1HQHUI2ECqT3QIqCGsT3QIyGegT3QICeuHDW/JgBcATfgQlHgFU7oF2cgU3ShQ7SCMggdZpGQKapC2UEZKF0qU2AKrVu1rh16ZitapZu93tcG1393rd2WwfGPnLWobWPvX1x7KtH1uWVMq//B9LiHnPyt8QBAAAAAElFTkSuQmCC"},"86eb":function(e,t,n){"use strict";n("f0b3")},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.8f7ac1bb.png"},d7e5:function(e,t,n){},d952:function(e,t,n){"use strict";n("ee05")},e885:function(e,t,n){},ee05:function(e,t,n){},f0b3:function(e,t,n){},f65e:function(e,t,n){}});
//# sourceMappingURL=app.8d07a78e.js.map