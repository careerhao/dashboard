(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17bd4b8a"],{6300:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"share-root"},[r("div",{staticClass:"share-root share-root__wrapper"},[r("el-card",{staticClass:"share-root__card"},[r("div",{staticClass:"share-root__content"},[r("h1",{staticClass:"share-root__welcome"},[e._v("Welcome to Dash!")]),r("div",{staticClass:"share-root__form"},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules}},[r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{staticClass:"share-root__input",attrs:{placeholder:""+e.currentLang.projectName},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),r("el-button",{staticClass:"button--overwrite button-primary--overwrite share-root__button",attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(t){return e.redirect.apply(null,arguments)}}},[e._v("\n                        "+e._s(e.currentLang.explore)+"\n                    ")])],1)])])],1)])},o=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),a=(r("a481"),r("2f62")),i=r("dcbc4");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"ShareRoot",data:function(){var e=this,t=function(t,r,n){var o=r.replace(/(^\s*)|(\s*$)/g,"");""===o?n(new Error("".concat(e.currentLang.nameIsRequired))):/^[\u4E00-\u9FA5A-Za-z0-9 _.]+$/.test(o)?n():n(new Error("".concat(e.currentLang.invalid)))};return{loading:!1,form:{name:""},rules:{name:[{required:!0,validator:t,trigger:"blur"}]}}},computed:u({},Object(a["b"])("config",{currentLang:"currentLang"})),methods:{redirect:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,i["a"].getProjectByName(e.form.name).then((function(t){e.$router.push({path:"/share/".concat(t.id)})}),(function(t){throw console.error(t),e.$notify.error({title:"".concat(e.currentLang.message.error),message:"".concat(e.currentLang.message.cannotFind),duration:0}),t})).finally((function(){return e.loading=!1}))}))}}},d=f,p=(r("ad61"),r("2877")),l=Object(p["a"])(d,n,o,!1,null,"4788dea5",null);t["default"]=l.exports},"6cd2":function(e,t,r){"use strict";r("8e6e");var n=r("bd86");r("ac6a"),r("456d"),r("a481");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a={mode:"cors"},i=function(e){var t=e.replace(/\/+$/,""),r="".concat("https://www.your-api-url:1234","/").concat(t,"/");if("GET"===method&&Object.keys(data).length>0){var n=Object.keys(data).map((function(e){return"".concat(e,"=").concat(data[e])})).join("&");return"".concat(r,"?").concat(n)}return r},s=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={"Content-Type":"application/json"},o="GET"!==e?{body:JSON.stringify(r.body)}:{};return fetch(i(e,t),c(c({},a()),{},{method:e,headers:n},o)).then((function(e){if(e.status>=200&&e.status<400)return e;throw e})).catch((function(e){throw e}))}};s("GET"),s("POST"),s("PUT"),s("DELETE")},8522:function(e,t,r){},ad61:function(e,t,r){"use strict";r("8522")},dcbc4:function(e,t,r){"use strict";r("6762"),r("7f7f"),r("7514"),r("6cd2");var n={list:[{id:"00000000-0000-0000-0000-000000000000",name:"Charts",description:"Includes full charts layout for testing",timestamp:"1628779061000"},{id:"00000000-0000-0000-0000-000000000001",name:"Dark Charts",description:"Created on 12/08/2021",timestamp:"1628778061000"},{id:"00000000-0000-0000-0000-000000000002",name:"Project3",description:"",timestamp:"1528779241000"}]},o=r("133f");t["a"]={getProjects:function(){return o["a"].requestSend("GET project list"),new Promise((function(e){setTimeout((function(){e(n),o["a"].requestReceive("Receive data:",n)}),1e3)}))},getProjectByName:function(e){var t=n.list.find((function(t){return t.name===e}));return o["a"].requestSend("GET project by name",e),new Promise((function(e,r){setTimeout((function(){t?(e(t),o["a"].requestReceive("Receive data:",t)):r("Incorrect project name")}),2e3)}))},createProject:function(e){var t=e.body,r=e.projectId;o["a"].requestSend("POST ".concat(JSON.stringify(t)," to endpoint: endpoint_address/project"));var c=[];return n.list.filter((function(e){e.id!==r&&c.push(e.name.toLowerCase())})),new Promise((function(e,r){setTimeout((function(){c.includes(t.name.toLowerCase())?(r("project name existed"),o["a"].err("Request for POST got rejected: Project name existed")):(e({status:204}),o["a"].requestReceive("Response for POST: ".concat(JSON.stringify({status:204}))))}),2e3)}))},updateProject:function(e){var t=e.projectId,r=e.body;o["a"].requestSend("PUT ".concat(JSON.stringify(r)," to endpoint: endpoint_address/").concat(t));var c=[];return n.list.filter((function(e){e.id!==t&&c.push(e.name.toLowerCase())})),new Promise((function(e,t){setTimeout((function(){c.includes(r.name.toLowerCase())?(t("project name existed"),o["a"].err("Request for PUT got rejected: Project name existed")):(e({status:204}),o["a"].requestReceive("Response for PUT: ".concat(JSON.stringify({status:204}))))}),2e3)}))},removeProject:function(e){return o["a"].requestSend("DELETE project: ".concat(e," to endpoint: endpoint_address/").concat(e)),new Promise((function(e,t){setTimeout((function(){e({status:204}),o["a"].requestReceive("Project deleted with no content")}),2e3)}))},saveProject:function(e){var t=e.projectId,r=e.body;return o["a"].requestSend("POST ".concat(JSON.stringify(r)," to endpoint: endpoint_address/").concat(t)),new Promise((function(e,t){setTimeout((function(){e({status:204}),o["a"].requestReceive("Response for POST: ".concat(JSON.stringify({status:204})))}),2e3)}))}}}}]);