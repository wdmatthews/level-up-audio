(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{164:function(t,e,n){"use strict";n(56);e.a=function(t){var e=t.store,n=localStorage.getItem("savedAudio");n&&setTimeout((function(){return e.commit("loadSavedAudio",JSON.parse(n))}),100)}},232:function(t,e,n){"use strict";var r=n(51),o=n(72),l=n.n(o),c=n(339),v=n(340),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TheAppBar"),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{TheAppBar:n(325).default,TheFooter:n(326).default}),l()(component,{VApp:c.a,VMain:v.a})},240:function(t,e,n){n(241),t.exports=n(242)},268:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5fff0b28",content,!0,{sourceMap:!1})},269:function(t,e,n){var r=n(25)(!1);r.push([t.i,'.unselectable{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.transparent{background:transparent}.header-font{font-family:"Audiowide",sans-serif}.body-font{font-family:"Montserrat",sans-serif}',""]),t.exports=r},317:function(t,e,n){"use strict";n.r(e);n(204);e.default={saveAudio:function(t,audio){t.savedAudio.push(audio)},unsaveAudio:function(t,audio){t.savedAudio.splice(t.savedAudio.indexOf(audio),1)},loadSavedAudio:function(t,e){t.savedAudio=e}}},318:function(t,e,n){"use strict";n.r(e),e.default=function(){return{savedAudio:[]}}},325:function(t,e,n){"use strict";n.r(e);var r={computed:{isMobile:function(t){return t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm},savedAudioCount:function(t){return t.$store.state.savedAudio.length}}},o=n(51),l=n(72),c=n.n(l),v=n(341),d=n(343),f=n(342),m=n(337),h=n(131),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"unselectable",attrs:{app:""}},[n("nuxt-link",{staticClass:"ml-4",staticStyle:{height:"32px"},attrs:{to:"/"}},[n("img",{attrs:{src:"logo-transparent.png",height:"32"}})]),t._v(" "),n("v-toolbar-title",[n("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}],staticClass:"ml-4 text-decoration-none font-weight-bold header-font",attrs:{to:"/"}},[n("span",{staticClass:"primary--text"},[t._v("Level")]),t._v(" "),n("span",{staticClass:"accent--text"},[t._v("Up")]),t._v(" "),n("span",{staticClass:"primary--text"},[t._v("Audio")])])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{staticClass:"text-button",attrs:{to:"/search"}},[t._v("\n      Search\n    ")]),t._v(" "),n("v-btn",{staticClass:"text-button",attrs:{to:"/saved"}},[n("v-badge",{attrs:{color:"primary",content:t.savedAudioCount,value:t.savedAudioCount,inline:""}},[t._v("\n        Saved\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:v.a,VBadge:d.a,VBtn:f.a,VSpacer:m.a,VToolbarItems:h.a,VToolbarTitle:h.b})},326:function(t,e,n){"use strict";n.r(e);var r={computed:{isMobile:function(t){return t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm}}},o=n(51),l=n(72),c=n.n(l),v=n(338),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"pa-4 unselectable",attrs:{app:""}},[n("p",{staticClass:"text-center mb-0",staticStyle:{width:"100%"}},[t._v("\n    All audio files are made available under\n    "),n("br",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}]}),t._v(" "),n("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank"}},[t._v("CC0 1.0 Universal")])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VFooter:v.a})},70:function(t,e,n){"use strict";var r={props:{error:{type:Object,default:null}},head:function(t){return{title:"Error ".concat(t.error.statusCode)}}},o=n(51),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("Error "+t._s(t.error.statusCode))])}),[],!1,null,null,null);e.a=component.exports}},[[240,14,4,15]]]);