(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(n,t,o){},159:function(n,t,o){},276:function(n,t,o){"use strict";var e=o(158);o.n(e).a},277:function(n,t,o){"use strict";var e=o(159);o.n(e).a},286:function(n,t,o){"use strict";o.r(t);o(22);var e=o(163),c=o(75);o(0).a.use(e.a);var i={components:{GButton:c.a},data:function(){return{content:"\n        <style>\n          .gulu-toast {\n            z-index: 30;\n          }\n        </style>\n\n        <div>\n          <g-button @click=\"onClickButton\">上方弹出</g-button>\n        </div>\n\n        methods: {\n          onClickButton () {\n            this.$toast('你知道我在等你吗？', {\n              closeButton: {\n                text: '知道了',\n                callback: () => {\n                  console.log('他说知道了')\n                }\n              }\n            })\n          }\n        },\n    ".replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast("你知道我在等你吗？",{closeButton:{text:"知道了",callback:function(){console.log("他说知道了")}}})}}},s=(o(276),o(277),o(10)),u=Object(s.a)(i,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[n._v("设置关闭按钮")]),n._v(" "),n._m(0),n._v(" "),o("div",[o("g-button",{on:{click:n.onClickButton}},[n._v("上方弹出")])],1),n._v(" "),n._m(1),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])])])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("预览")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("代码")])])}],!1,null,"62f05761",null);t.default=u.exports}}]);