webpackJsonp([1],{"1IpW":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("img",{attrs:{src:"https://static.andigital.com/wp-content/uploads/2017/05/02163341/AND_LOGO_RGB_ON_WHITE.png",alt:"logo"}}),this._v(" "),e("h3",[e("small",[this._v("shares")])]),this._v(" "),e("nav",[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/hdong92/and-shares"}},[this._v("Github")])])])])])}]},n={name:"app",components:{Header:a("VU/8")(null,r,!1,function(t){a("Qrnd")},"data-v-0a0d96f5",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("Header")],1)]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("router-view")],1)])])},staticRenderFns:[]},o=a("VU/8")(n,i,!1,function(t){a("gDtQ")},"data-v-3c9a9f54",null).exports,l=a("/ocq"),c="and-shares",d=JSON.parse(localStorage.getItem(c)),u=d&&d.data?d.data:[],h={name:"Home",data:function(){return{shareOptions:u}},created:function(){0===this.shareOptions.length&&$.push("new")}},p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-header"},[a("ul",{staticClass:"nav nav-tabs card-header-tabs"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"#"}},[t._v("Share Allocation")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Vest Options")])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("Share Allocation")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("With supporting text below as a natural lead-in to additional content.")]),t._v(" "),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])])}]},v=a("VU/8")(h,p,!1,null,null,null).exports,m={name:"New",data:function(){return{msg:"Looks like it's the first time you are here, let's get you started!"}},methods:{goToSetup:function(){$.push("setup")}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",{staticClass:"col-md-6 offset-md-3"},[this._v(this._s(this.msg))]),this._v(" "),e("div",{staticClass:"col-lg-2 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3"},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:this.goToSetup}},[this._v("Next")])])])},staticRenderFns:[]},_=a("VU/8")(m,f,!1,function(t){a("OO72")},"data-v-6ed3eb5e",null).exports,b=a("mvHQ"),g=a.n(b),C=a("woOf"),w=a.n(C),y={year:"2017",shares:null},O=[{year:"2015",price:.5},{year:"2016",price:1},{year:"2017",price:1.58}],x=JSON.parse(localStorage.getItem(c)),F=x&&x.data?x.data:[],N={name:"Setup",data:function(){return{shareOptions:F,addForm:w()({},y)}},methods:{addNewOptions:function(){this.addForm.shares>0&&(this.shareOptions.push({year:this.addForm.year,shares:this.addForm.shares,price:this.getPrice(this.addForm.year)}),this.shareOptions.sort(function(t,e){return t.year-e.year}),this.updateLocalStorage(),this.addForm=w()({},y))},deleteOption:function(t){this.shareOptions.splice(t,1),this.updateLocalStorage()},updateLocalStorage:function(){localStorage.setItem(c,g()({date:new Date,data:this.shareOptions}))},getPrice:function(t){for(var e=0;e<O.length;e+=1)if(O[e].year===t)return O[e].price;return null},goToVest:function(){$.push("/")}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg"},[a("p",{directives:[{name:"show",rawName:"v-show",value:0===t.shareOptions.length,expression:"shareOptions.length === 0"}],staticClass:"text-muted"},[t._v("Add some share options in order to continue to next step")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.shareOptions.length>0,expression:"shareOptions.length > 0"}]},[a("table",{staticClass:"table table-hover table-bordered"},[t._m(0),t._v(" "),a("tbody",t._l(t.shareOptions,function(e,s){return a("tr",{key:s,attrs:{index:s}},[a("td",[t._v(t._s(e.year))]),t._v(" "),a("td",[t._v(t._s(e.shares))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){t.deleteOption(s)}}},[a("i",{staticClass:"fa fa-trash-o text-danger",attrs:{"aria-hidden":"true"}})])])])}))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 offset-md-4 col-sm-6 offset-sm-3"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:t.goToVest}},[t._v("Next")])])])])]),t._v(" "),a("div",{staticClass:"col-lg"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"financialYearSelect"}},[t._v("Financial Year")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.addForm.year,expression:"addForm.year"}],staticClass:"form-control",attrs:{id:"financialYearSelect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.addForm,"year",e.target.multiple?a:a[0])}}},[a("option",[t._v("2015")]),t._v(" "),a("option",[t._v("2016")]),t._v(" "),a("option",{attrs:{selected:""}},[t._v("2017")])]),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("The financial year which share options are awarded")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"numberOfSharesInput"}},[t._v("Number of share Options")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.addForm.shares,expression:"addForm.shares",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"numberOfSharesInput",placeholder:"Enter shares..."},domProps:{value:t.addForm.shares},on:{input:function(e){e.target.composing||t.$set(t.addForm,"shares",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"text-center col-md-4 offset-md-4 col-sm-6 offset-sm-3"},[a("button",{staticClass:"btn btn-outline-success btn-block",attrs:{type:"button"},on:{click:t.addNewOptions}},[t._v("Add")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Year")]),this._v(" "),e("th",[this._v("Num of shares")]),this._v(" "),e("th")])])}]},k=a("VU/8")(N,S,!1,function(t){a("1IpW")},"data-v-cd98ed5a",null).exports;s.a.use(l.a);var $=new l.a({routes:[{path:"*",name:"Home",component:v},{path:"/new",name:"New",component:_},{path:"/setup",name:"Setup",component:k}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:$,template:"<App/>",components:{App:o}})},OO72:function(t,e){},Qrnd:function(t,e){},gDtQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.81a56860440b68119060.js.map