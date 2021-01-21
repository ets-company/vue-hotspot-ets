(function(t){function e(e){for(var n,c,r=e[0],s=e[1],l=e[2],p=0,f=[];p<r.length;p++)c=r[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("6cc3")},"163f":function(t,e,o){},4040:function(t,e,o){},4065:function(t,e,o){},"55e9":function(t,e,o){},"6cc3":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("img",{staticStyle:{"max-width":"80%"},attrs:{alt:"Vue logo",src:o("c612")}}),t._m(0),n("p",{staticClass:"desc"},[t._v("Hotspot component for Vue.js.")]),t._l(t.hotspots,(function(e,o){return n("section",{key:o},[n("div",{staticClass:"container"},[n("div",{staticClass:"text mb-sm"},[n("span",{staticClass:"bold"},[t._v("Example "+t._s(o+1))])]),n("v-hotspot",{attrs:{"init-options":e},on:{"save-data":t.saveData,"hotspot-click":t.hotspotClick,"after-delete":t.afterDelete}}),n("div",{staticClass:"text"},[t._v(" Editable: "+t._s(e.editable)+" | interactivity: "+t._s(e.interactivity)+" ")]),n("toggle",{attrs:{label:"Change Editable","hotspot-config":e},on:{"change-editable":t.changeEditable}})],1)])})),t._m(1)],2)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("a",{attrs:{href:"https://github.com/cn-wx/vue-hotspot"}},[t._v("Vue-Hotspot")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("a",{attrs:{href:"//github.com/cn-wx"}},[t._v("@James Wang")]),t._v("|"),o("a",{attrs:{href:"//github.com/cn-wx/vue-hotspot/blob/master/LICENSE"}},[t._v("MIT License")]),t._v("|"),o("a",{attrs:{href:"//github.com/cn-wx/vue-hotspot"}},[t._v("View on GitHub")])])}],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.config?o("div",{ref:"vueHotspot",staticClass:"ui__vue_hotspot"},[o("img",{ref:"vueHotspotBackgroundImage",staticClass:"ui__vue_hotspot_background_image",attrs:{src:t.config.image,alt:"Hotspot Image"},on:{load:t.successLoadImg}}),t.config.editable?o("span",{ref:"vueHotspotOverlay",staticClass:"ui__vue_hotspot_overlay",style:"height: "+t.overlayHeight+"; width: "+t.overlayWidth+"; left: "+t.overlayLeft+"; top: "+t.overlayTop+";",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addHotspot(e)}}},[o("p",[t._v(t._s(t.config.overlayText))])]):t._e(),t._l(t.config.data,(function(e,n){return o("DataPoint",{key:n,attrs:{hotspot:e,config:t.config,imageLoaded:t.imageLoaded,vueHotspotBackgroundImage:t.vueHotspotBackgroundImage,vueHotspot:t.vueHotspot},on:{"hotspot-click":function(e){return t.$emit("hotspot-click")}}})})),o("ControlBox",{attrs:{config:t.config},on:{"save-data":t.saveAllHotspots,"after-delete":t.removeAllHotspots}})],2):t._e()},r=[],s=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui__vue_hotspot_hotspot",class:t.isActive||"none"===t.interactivity?"active":"",style:"top: "+t.positionTop+"; left: "+t.positionLeft+"; background-color: "+t.hotspotColor+";",on:{mouseenter:function(e){"hover"===t.interactivity&&(t.isActive=!0)},mouseleave:function(e){"hover"===t.interactivity&&(t.isActive=!1)},click:function(e){"click"===t.interactivity&&t.toggleActive()}}},[o("div",{style:"color:"+t.textColor},[o("div",{staticClass:"ui__vue_hotspot_title",style:"\n        background: "+t.messageBoxColor+";\n        opacity: "+t.opacity},[t._v(" "+t._s(t.hotspot["Title"])+" ")]),o("div",{staticClass:"ui__vue_hotspot_message",style:"\n        background: "+t.messageBoxColor+";\n        opacity: "+t.opacity},[t._v(" "+t._s(t.hotspot["Message"])+" ")])])])},u=[];function p(t,e){var o=null,n=Date.now();return function(){var i=this,a=arguments,c=Date.now(),r=e-(c-n);clearTimeout(o),r<=0?(t.apply(i,a),n=Date.now()):o=setTimeout(t,r)}}var f=o("750b");function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(Object(o),!0).forEach((function(e){Object(s["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var d=Object(f["b"])({props:{hotspot:Object,config:Object,imageLoaded:Boolean,vueHotspotBackgroundImage:HTMLImageElement,vueHotspot:HTMLDivElement},setup:function(t,e){var o=e.emit,n=Object(f["h"])(!1),i=Object(f["g"])({positionTop:0,positionLeft:0,hotspotColor:Object(f["a"])((function(){return t.config&&t.config.hotspotColor})),interactivity:Object(f["a"])((function(){return t.config&&t.config.interactivity})),textColor:Object(f["a"])((function(){return t.config&&t.config.textColor})),messageBoxColor:Object(f["a"])((function(){return t.config&&t.config.messageBoxColor})),opacity:Object(f["a"])((function(){return t.config&&t.config.opacity}))});function a(){i.positionTop="".concat(t.hotspot.y*t.vueHotspotBackgroundImage.clientHeight/100+(t.vueHotspotBackgroundImage.offsetTop-t.vueHotspot.clientTop),"px;"),i.positionLeft="".concat(t.hotspot.x*t.vueHotspotBackgroundImage.clientWidth/100+(t.vueHotspotBackgroundImage.offsetLeft-t.vueHotspot.clientLeft),"px;")}function c(){n.value=!n.value,o("hotspot-click")}return Object(f["j"])((function(){return t.imageLoaded}),(function(t,e){t&&a()})),Object(f["e"])((function(){window.addEventListener("resize",p(a,50))})),Object(f["f"])((function(){window.removeEventListener("resize",p(a,50))})),v({isActive:n},Object(f["i"])(i),{getHotspotStyle:a,toggleActive:c})}}),b=d,h=(o("c9ba"),o("2877")),m=Object(h["a"])(b,l,u,!1,null,"3a790608",null),y=m.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui__vue_hotspot_buttons_box"},[o("div",{staticClass:"ui__vue_hotspot_buttons",class:t.isEditable?"active":""},[o("button",{staticClass:"ui__vue_hotspot_save",on:{click:t.saveAllHotspots}},[t._v("Save")]),o("button",{staticClass:"ui__vue_hotspot_remove",on:{click:t.removeAllHotspots}},[t._v("Remove")])])])},_=[],j=Object(f["b"])({props:{config:Object},setup:function(t,e){var o=e.emit,n=Object(f["a"])((function(){return t.config&&t.config.editable}));function i(){o("save-data",t.config.data)}function a(){t.config.data=[],o("after-delete")}return{isEditable:n,saveAllHotspots:i,removeAllHotspots:a}}}),x=j,w=(o("843c"),Object(h["a"])(x,O,_,!1,null,"5089e8e9",null)),C=w.exports;function H(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function k(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?H(Object(o),!0).forEach((function(e){Object(s["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):H(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}n["a"].use(f["c"]);var T=Object(f["b"])({components:{DataPoint:y,ControlBox:C},props:{initOptions:Object},setup:function(t,e){var o=e.emit,n=Object(f["h"])(null),i=Object(f["h"])(null),a=Object(f["h"])(null),c=Object(f["g"])({data:[],image:"https://via.placeholder.com/600x500?text=Oops!+image+not+found...",editable:!0,interactivity:"hover",hotspotColor:"rgb(66, 184, 131)",messageBoxColor:"rgb(255, 255, 255)",textColor:"rgb(53, 73, 94)",overlayText:"Please Click The Image To Add Hotspots.",opacity:.8,schema:[{property:"Title",default:"Vue Hotspot"},{property:"Message",default:"This is a Vue Hotspot Component which lets you create hotspot. "}]}),r=Object(f["h"])(null),s=Object(f["h"])(!1),l=Object(f["g"])({overlayHeight:0,overlayWidth:0,overlayLeft:0,overlayTop:0});function u(t){for(var e=t.offsetX,o=t.offsetY,n=Object(f["d"])(r)?r.value:r,a=i.value.offsetHeight,c=i.value.offsetWidth,s={x:e/c*100,y:o/a*100},l=n.schema,u=0;u<l.length;u++){var p=l[u],g=prompt("Please enter ".concat(p.property),p.default);if(null===g)return;s[p.property]=g}n.data.push(s)}function g(){var t=Object(f["d"])(a)?a.value:a,e=Object(f["d"])(n)?n.value:n;l.overlayHeight="".concat(t.clientHeight/e.clientHeight*100,"%"),l.overlayWidth="".concat(t.clientWidth/e.clientWidth*100,"%"),l.overlayLeft="".concat(t.offsetLeft-e.clientLeft,"px"),l.overlayTop="".concat(t.offsetTop-e.clientTop,"px")}function v(t){return JSON.parse(JSON.stringify(t))}function d(t){!0===t.target.complete&&(s.value=!0)}function b(){var t=Object(f["d"])(r)?r.value:r;o("save-data",t.data)}function h(){o("after-delete")}return Object(f["j"])(s,(function(t,e){t&&g()})),Object(f["j"])((function(){return t.initOptions}),(function(t,e){r.value=k({},r.value?r.value:v(c),{},t)}),{deep:!0}),Object(f["e"])((function(){window.addEventListener("resize",p(g,50))})),Object(f["f"])((function(){window.removeEventListener("resize",p(g,50))})),k({defaultOptions:c,config:r,imageLoaded:s},Object(f["i"])(l),{vueHotspot:n,vueHotspotOverlay:i,vueHotspotBackgroundImage:a,deepCopy:v,successLoadImg:d,saveAllHotspots:b,removeAllHotspots:h,resizeOverlay:g,addHotspot:u})}}),P=T,F=(o("ab37"),Object(h["a"])(P,c,r,!1,null,null,null)),A=F.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toggle_button"},[o("p",{staticClass:"label"},[t._v(t._s(t.label)+": ")]),o("p",[o("label",{staticClass:"switch"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.hotspotConfig.editable},on:{change:t.handleToggleChange}}),o("span",{staticClass:"slider round"})])])])},L=[],D={props:{label:String,hotspotConfig:Object},methods:{handleToggleChange:function(){this.$emit("change-editable",this.hotspotConfig)}}},B=D,I=(o("761c"),Object(h["a"])(B,E,L,!1,null,null,null)),S=I.exports,M={components:{"v-hotspot":A,toggle:S},data:function(){return{hotspots:[{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601580666603&di=81d64069e781bea52d8595089ed8aea4&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F154%2F775%2F815%2Faea886e20493478a9c2f628d86e34cfc.jpg",editable:!0,interactivity:"hover"},{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601580666609&di=ff8e74e0fb64975b30308f0fc4e6bd4e&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100ghk1433p0arl5c3A3B.jpg",editable:!1,interactivity:"click"},{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601581275906&di=edbf4b366dd0c8c08e2aa203f15cdb51&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171109%2F920c1cdc5d294a0eb2e17f2b9e731542.jpeg",editable:!1,interactivity:"hover",data:[{Message:"A prepopulated hotspot with custom color",Title:"Vue Hotspot 1",x:33.3973,y:58.3333},{Message:"Another prepopulated hotspot with custom color",Title:"Vue Hotspot 2",x:53.3973,y:78.3333},{Message:"Another prepopulated hotspot with custom color",Title:"Vue Hotspot 3",x:73.3973,y:28.3333}],hotspotColor:"#85ce61",messageBoxColor:"#409eff",textColor:"#333"},{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601581275905&di=a277ae5fe6229862e01e0d1af57404f1&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fa2aa78b5e58cefb983dc2b9ea0ff9910.jpeg",editable:!1,interactivity:"none",data:[{Message:"A prepopulated hotspot with interactivity: none",Title:"Vue Hotspot 1",x:33.3973,y:68.3333},{Message:"Another prepopulated hotspot with interactivity: none",Title:"Vue Hotspot 2",x:73.3973,y:38.3333}]},{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601581275905&di=53b03590528680e55996763609c15927&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp46521381.jpg",editable:!0,overlayText:"🚀 Customize your own overlay text! 😄"}]}},methods:{changeEditable:function(t){t&&(t.editable=!t.editable)},saveData:function(t){console.log(t)},afterDelete:function(){console.log("Do something after delete ...")},hotspotClick:function(){console.log("Do something after click ...")}}},z=M,V=(o("f888"),Object(h["a"])(z,i,a,!1,null,null,null)),$=V.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t($)}}).$mount("#app")},"761c":function(t,e,o){"use strict";var n=o("55e9"),i=o.n(n);i.a},"843c":function(t,e,o){"use strict";var n=o("4040"),i=o.n(n);i.a},ab37:function(t,e,o){"use strict";var n=o("4065"),i=o.n(n);i.a},bfba:function(t,e,o){},c612:function(t,e,o){t.exports=o.p+"img/logo.4bd586bc.png"},c9ba:function(t,e,o){"use strict";var n=o("bfba"),i=o.n(n);i.a},f888:function(t,e,o){"use strict";var n=o("163f"),i=o.n(n);i.a}});
//# sourceMappingURL=app.f7301e26.js.map