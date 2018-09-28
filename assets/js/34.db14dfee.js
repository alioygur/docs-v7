(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{236:function(e,t,s){"use strict";s.r(t);var a=s(0),l=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"soft-delete-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#soft-delete-flow","aria-hidden":"true"}},[e._v("#")]),e._v(" Soft-Delete Flow")]),e._v(" "),s("p",[e._v("To "),s("code",[e._v("soft delete")]),e._v(" an item, the API does the following:")]),e._v(" "),s("ol",[s("li",[e._v("Check if the collection has a status field")]),e._v(" "),s("li",[e._v("Check if the delta data has the status field ("),s("em",[e._v("Meaning the status was changed")]),e._v(")")]),e._v(" "),s("li",[e._v("Look for all status values with "),s("code",[e._v("soft_delete = true")])]),e._v(" "),s("li",[e._v("Checks if the new status value ("),s("em",[e._v("from delta data")]),e._v(") is one of status values from Step 3")]),e._v(" "),s("li",[e._v("Sets "),s("code",[e._v("action")]),e._v(" to "),s("code",[e._v("SOFT_DELETE")])])])])}],!1,null,null,null);l.options.__file="soft-delete.md";t.default=l.exports}}]);