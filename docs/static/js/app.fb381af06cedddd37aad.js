webpackJsonp([1],{"3iYb":function(t,e){},"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.ed7e51f.png"},"8rAk":function(t,e){},A0P5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("img",{attrs:{src:a("7Otq"),alt:"logo"}}),this._v(" "),e("h3",[e("small",[this._v("shares")])]),this._v(" "),e("nav",[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/hdong92/and-shares"}},[this._v("Github")])])])])])}]},n={name:"app",components:{Header:a("VU/8")(null,r,!1,function(t){a("3iYb")},"data-v-15b87486",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("Header")],1)]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("router-view")],1)])])},staticRenderFns:[]},o=a("VU/8")(n,i,!1,function(t){a("gDtQ")},"data-v-3c9a9f54",null).exports,c=a("/ocq"),l="and-shares",d={name:"New",props:["shareData"],methods:{isCurrentYear:function(t){return t===(new Date).getFullYear()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.shareData,function(e){return a("div",[a("h5",[t._v("FY "+t._s(e.year))]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v(t._s(e.shares))]),t._v(" options granted in "),a("strong",[t._v(t._s(e.year))]),t._v(" will be available for purchase at "),a("strong",[t._v("£"+t._s(e.price.toFixed(2)))]),t._v(" each.")]),t._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",t._l(5,function(s){return a("th",{class:{"table-primary":t.isCurrentYear(parseInt(e.year)+s)}},[t._v(t._s(parseInt(e.year)+s))])}))]),t._v(" "),a("tbody",[a("tr",t._l(5,function(s){return a("td",{class:{"table-primary":t.isCurrentYear(parseInt(e.year)+s)}},[t._v(t._s(parseInt(e.shares/5)))])}))])])])}))},staticRenderFns:[]},h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Vest Options")])},staticRenderFns:[]},v={name:"Home",components:{ShareAllocation:a("VU/8")(d,u,!1,function(t){a("A0P5")},"data-v-1e5ab861",null).exports,VestOptions:a("VU/8")(null,h,!1,null,null,null).exports},data:function(){return{tab:"SHARE",shareOptions:[]}},mounted:function(){var t=JSON.parse(localStorage.getItem(l)||"{}");t&&t.data?this.shareOptions=t.data:A.push("new")}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-header"},[a("ul",{staticClass:"nav nav-tabs card-header-tabs"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"SHARE"===t.tab},attrs:{href:"#"},on:{click:function(e){t.tab="SHARE"}}},[t._v("Share Allocation")])]),t._v(" "),t._e()])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"SHARE"===t.tab,expression:"tab === 'SHARE'"}],staticClass:"card-body"},[a("ShareAllocation",{attrs:{shareData:t.shareOptions}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"VEST"===t.tab,expression:"tab === 'VEST'"}],staticClass:"card-body"},[a("VestOptions",{attrs:{shareData:t.shareOptions}})],1)])},staticRenderFns:[]},m=a("VU/8")(v,p,!1,null,null,null).exports,f={name:"New",data:function(){return{msg:"Looks like it's the first time you are here, let's get you started!"}},methods:{goToSetup:function(){A.push("setup")}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",{staticClass:"col-md-6 offset-md-3"},[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"col-lg-2 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3"},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:this.goToSetup}},[this._v("Next")])])])},staticRenderFns:[]},b=a("VU/8")(f,_,!1,function(t){a("OO72")},"data-v-6ed3eb5e",null).exports,g=a("mvHQ"),C=a.n(g),y=a("woOf"),w=a.n(y),O={year:"2017",shares:null},S=[{year:"2015",price:.5},{year:"2016",price:1},{year:"2017",price:1.58}],x={name:"Setup",data:function(){return{shareOptions:[],addForm:w()({},O)}},mounted:function(){var t=JSON.parse(localStorage.getItem(l)||"{}");t&&t.data&&(this.shareOptions=t.data)},methods:{addNewOptions:function(){this.addForm.shares>0&&(this.shareOptions.push({year:this.addForm.year,shares:this.addForm.shares,price:this.getPrice(this.addForm.year)}),this.shareOptions.sort(function(t,e){return t.year-e.year}),this.updateLocalStorage(),this.addForm=w()({},O))},deleteOption:function(t){this.shareOptions.splice(t,1),this.updateLocalStorage()},updateLocalStorage:function(){localStorage.setItem(l,C()({date:new Date,data:this.shareOptions}))},getPrice:function(t){for(var e=0;e<S.length;e+=1)if(S[e].year===t)return S[e].price;return null},goToVest:function(){A.push("/")}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Share Options")]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",{directives:[{name:"show",rawName:"v-show",value:0===t.shareOptions.length,expression:"shareOptions.length === 0"}],staticClass:"text-muted"},[t._v("Add some share options in order to continue to next step")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.shareOptions.length>0,expression:"shareOptions.length > 0"}],staticClass:"no-padding"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.shareOptions,function(e,s){return a("tr",{key:s,attrs:{index:s}},[a("td",[t._v(t._s(e.year))]),t._v(" "),a("td",[t._v(t._s(e.shares))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){t.deleteOption(s)}}},[a("i",{staticClass:"fa fa-trash-o text-danger",attrs:{"aria-hidden":"true"}})])])])}))])])])])]),t._v(" "),a("div",{staticClass:"col-lg"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Add new")]),t._v(" "),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"financialYearSelect"}},[t._v("Financial Year")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.addForm.year,expression:"addForm.year"}],staticClass:"form-control",attrs:{id:"financialYearSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.addForm,"year",e.target.multiple?a:a[0])}}},[a("option",[t._v("2015")]),t._v(" "),a("option",[t._v("2016")]),t._v(" "),a("option",{attrs:{selected:""}},[t._v("2017")])]),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("The financial year which share options are awarded")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"numberOfSharesInput"}},[t._v("Number of share Options")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.addForm.shares,expression:"addForm.shares",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"numberOfSharesInput",placeholder:"Enter shares..."},domProps:{value:t.addForm.shares},on:{input:function(e){e.target.composing||t.$set(t.addForm,"shares",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"text-center col-md-4 offset-md-4 col-sm-6 offset-sm-3"},[a("button",{staticClass:"btn btn-outline-success btn-block",attrs:{type:"button"},on:{click:t.addNewOptions}},[t._v("Add")])])])])])])])]),t._v(" "),a("div",{staticClass:"row btn-next"},[a("div",{staticClass:"col-md-2 col-sm-3"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:t.goToVest}},[t._v("Next")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Year")]),this._v(" "),e("th",[this._v("Num of shares")]),this._v(" "),e("th")])])}]},N=a("VU/8")(x,F,!1,function(t){a("8rAk")},"data-v-339cbe92",null).exports;s.a.use(c.a);var A=new c.a({routes:[{path:"/",name:"Home",component:m},{path:"/new",name:"New",component:b},{path:"/setup",name:"Setup",component:N},{path:"*",redirect:"/"}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:A,template:"<App/>",components:{App:o}})},OO72:function(t,e){},gDtQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fb381af06cedddd37aad.js.map