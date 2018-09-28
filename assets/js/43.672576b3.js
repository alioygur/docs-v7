(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{227:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Config File")]),t._v(" "),a("p",[t._v("The application uses a (client side) config file in order to set certain behavioral settings. The config file is a JavaScript file that adds an object into the window's global scope, which the application in turn uses.")]),t._v(" "),a("p",[t._v("The following options are available:")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("api")]),t._v(" key allows you to set the API URL the application tries to connect to. The object follows the format "),a("code",[t._v('"url": "name"')]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  \n  api"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"https://demo-api.directus.app/_/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Directus Demo API"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You can add multiple API urls by adding multiple keys to this object. This will result in the application rendering a dropdown on the login page which the user can use to pick between the different available APIs.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  \n  api"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"https://demo-api.directus.app/_/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Directus Demo API"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/_/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Local Test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"https://api.example.com/prod/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Example Production"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Don't forget to add the "),a("a",{attrs:{href:"#"}},[t._v("API Project")]),t._v(" in the URL!")])]),t._v(" "),a("h2",{attrs:{id:"allow-other-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allow-other-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Allow Other API")]),t._v(" "),a("p",[t._v("By setting the "),a("code",[t._v("allowOtherAPI")]),t._v(' to true, the application will render an additional "Other" option in the API picker dropdown, which allows the user to log into any API by providing it\'s URL manually.')]),t._v(" "),a("h2",{attrs:{id:"router-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Router Mode")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("routerMode")]),t._v(" option controls the way in which the applications creates it's links. By default, this option is set to "),a("code",[t._v("history")]),t._v(". In "),a("code",[t._v("history")]),t._v(' mode, links will be "absolute".')]),t._v(" "),a("p",[t._v('These "absolute" links mean that your server will have to route every request to the '),a("code",[t._v("/index.html")]),t._v(" file. If it doesn't, the user will get a 404 error when refreshing or directly opening a URL.")]),t._v(" "),a("p",[t._v("The alternative value for this option is "),a("code",[t._v("hash")]),t._v(". In "),a("code",[t._v("hash")]),t._v(" mode, every link will be prepended with a "),a("code",[t._v("#")]),t._v(" character, which results in the browser treating every link as the same page. This fixes the routing problem mentioned above, and allows you to use the application on servers where you can't control the routing rules on the server.")]),t._v(" "),a("p",[a("strong",[t._v("History Mode")])]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://directus.app/collections/projects/2\nhttps://directus.app/settings/roles/5\nhttps://directus.app/ext/dashboard\n")])])]),a("p",[a("strong",[t._v("Hash Mode")])]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://directus.app/#/collections/projects/2\nhttps://directus.app/#/settings/roles/5\nhttps://directus.app/#/ext/dashboard\n")])])])])}],!1,null,null,null);n.options.__file="config-file.md";s.default=n.exports}}]);