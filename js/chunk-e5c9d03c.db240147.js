(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5c9d03c"],{"20d6":function(t,e,r){"use strict";var a=r("5ca1"),i=r("0a49")(6),o="findIndex",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),a(a.P+a.F*n,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"3aa5":function(t,e,r){"use strict";r("9eb6")},5065:function(t,e,r){},"740e":function(t,e,r){},"7fbd":function(t,e,r){"use strict";r("740e")},"9eb6":function(t,e,r){},b7bc:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("el-container",{staticClass:"project-container"},[r("el-aside",{staticClass:"project-aside",attrs:{width:t.isCollapse?"65px":"250px"}},[r("el-menu",{staticClass:"project-menu",attrs:{"default-active":"1-4-1",collapse:t.isCollapse}},t._l(t.chartOptions,(function(e){return r("el-submenu",{key:"charts_"+e.id,attrs:{index:e.id}},[r("template",{slot:"title"},[r("i",{class:e.icon}),r("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.value))])]),t._l(e.categories,(function(e,a){return r("el-menu-item-group",{key:"categroies_"+a},[r("el-menu-item",{attrs:{index:"chart_"+a}},[r("div",{staticClass:"droppable-element",attrs:{draggable:"true",unselectable:"on"},on:{dragstart:function(r){return t.dragstart(e)},drag:t.drag,dragend:t.dragend}},[r("chart-card",{attrs:{name:e.name,imageurl:e.thumburl}})],1)])],1)}))],2)})),1)],1),r("el-main",[r("div",{staticClass:"project__header"},[r("div",{staticClass:"project__name-container"},[r("label",{directives:[{name:"show",rawName:"v-show",value:!t.isProjectNameEditiable,expression:"!isProjectNameEditiable"}]},[t._v(t._s(t.projectName))]),r("el-input",{directives:[{name:"show",rawName:"v-show",value:t.isProjectNameEditiable,expression:"isProjectNameEditiable"}],model:{value:t.editingProjectName,callback:function(e){t.editingProjectName=e},expression:"editingProjectName"}})],1),r("div",{staticClass:"project__icon-container"},[r("i",{directives:[{name:"show",rawName:"v-show",value:!t.isProjectNameEditiable&&!t.loadingProjectName,expression:"!isProjectNameEditiable && !loadingProjectName"}],staticClass:"el-icon-edit-outline",on:{click:t.toggleProjectNameEditiable}}),r("i",{directives:[{name:"show",rawName:"v-show",value:t.loadingProjectName,expression:"loadingProjectName"}],staticClass:"el-icon-loading"}),r("i",{directives:[{name:"show",rawName:"v-show",value:t.isProjectNameEditiable&&!t.loadingProjectName,expression:"isProjectNameEditiable && !loadingProjectName"}],staticClass:"el-icon-folder-checked",on:{click:t.submitNameChange}})])]),r("div",{staticClass:"project__content",attrs:{id:"content"}},[r("grid-layout",{ref:"gridlayout",attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,"use-css-transforms":!0},on:{"update:layout":function(e){t.layout=e}}},t._l(t.layout,(function(e,a){return r("grid-item",{key:e.i+"_"+a,staticClass:"project__content-items",attrs:{minW:4,minH:8,x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[t.isDragging?t._e():r("Chart",{attrs:{name:e.chart.name,type:e.chart.type,url:e.chart.url,fetchBySql:e.chart.fetchBySql},on:{remove:function(r){return t.confirmRemove(e)},edit:function(r){return t.editChart(e)}}})],1)})),1)],1)])],1),r("el-dialog",{attrs:{title:"Warning",visible:t.isConfirmRemoveShow,width:"30%"},on:{"update:visible":function(e){t.isConfirmRemoveShow=e}}},[r("span",[t._v("Are you confirm to remove ")]),r("strong",[r("label",{staticClass:"confirm-modal__warning"},[t._v(t._s(t.removingItemName+" ?"))])]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.cancelRemove.apply(null,arguments)}}},[t._v("Cancel")]),r("el-button",{staticClass:"button-plain--overwrite",nativeOn:{click:function(e){return t.removeChart.apply(null,arguments)}}},[t._v("Confirm")])],1)]),t.isEditShow?r("chart-edit",{attrs:{"chart-data":t.editingChart},on:{submitForm:t.submitChartChanges,toggleEditChartDialog:t.toggleEditChartDialog}}):t._e()],1)},i=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("20d6"),r("7f7f"),r("bd86")),n=r("2f62"),s=r("7be8"),c=r("9923"),l=r("dcbc4"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chart-card"},[r("el-card",{attrs:{shadow:"never","body-style":{padding:"0px"}}},[r("el-skeleton-item",{directives:[{name:"show",rawName:"v-show",value:!t.imageOk,expression:"!imageOk"}],staticClass:"chart-card__image",attrs:{variant:"image"}}),r("img",{directives:[{name:"show",rawName:"v-show",value:t.imageOk,expression:"imageOk"}],staticClass:"chart-card__image",attrs:{src:t.imageurl},on:{load:t.imageLoaded,error:t.imageError}}),r("div",{staticClass:"chart-card__bottom clearfix"},[r("span",[t._v(t._s(t.name))])])],1)],1)},d=[],m={name:"ChartCard",props:{imageurl:{type:String,required:!1,default:""},name:{type:String,required:!0}},data:function(){return{isImageLoaded:!1,isImageError:!1}},computed:{imageOk:function(){return""!==this.imageurl&&this.isImageLoaded&&!this.isImageError}},methods:{imageLoaded:function(){this.isImageLoaded=!0},imageError:function(){this.isImageError=!0}}},h=m,f=(r("f5f5"),r("2877")),p=Object(f["a"])(h,u,d,!1,null,null,null),g=p.exports,v=r("5b7f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",[r("el-col",[r("el-dialog",{attrs:{title:"Edit Chart",visible:t.isEditShow,"before-close":t.toggleDialog,width:"30%","destroy-on-close":!0}},[r("el-form",{attrs:{model:t.form}},[r("el-form-item",{attrs:{label:"Chart Name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"Chart Type"}},[r("el-input",{attrs:{disabled:"",autocomplete:"off"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),r("el-form-item",[r("el-radio",{attrs:{label:1},model:{value:t.dataSource,callback:function(e){t.dataSource=e},expression:"dataSource"}},[t._v("API")]),r("el-radio",{attrs:{label:2},model:{value:t.dataSource,callback:function(e){t.dataSource=e},expression:"dataSource"}},[t._v("SQL")]),r("el-radio",{attrs:{label:3},model:{value:t.dataSource,callback:function(e){t.dataSource=e},expression:"dataSource"}},[t._v("Wbsocket")])],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1===t.dataSource,expression:"dataSource === 1"}],attrs:{label:"URL"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2===t.dataSource,expression:"dataSource === 2"}],attrs:{label:"SQL"}},[r("el-input",{staticClass:"text-input--overwrite",attrs:{type:"textarea",placeholder:"SELECT from",maxlength:"150","show-word-limit":""},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:3===t.dataSource,expression:"dataSource === 3"}]},[r("label",[t._v("Coming soon...")])])],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.toggleDialog.apply(null,arguments)}}},[t._v("Cancel")]),r("el-button",{staticClass:"button-plain--overwrite",nativeOn:{click:function(e){return t.submit.apply(null,arguments)}}},[t._v("Comfirm")])],1)],1)],1)],1)},b=[],j=r("ed08");function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P={name:"ChartEdit",props:{chartData:{type:Object,required:!0}},data:function(){return{form:{},dataSource:1}},created:function(){this.form=Object(j["b"])(this.chartData)},beforeDestroy:function(){this.form={}},computed:C(C({},Object(n["c"])({isEditShow:function(t){return t.currentProject.isEditChartShow}})),{},{byUrl:function(){return 1===this.dataSource}}),methods:{toggleDialog:function(){this.$emit("toggleEditChartDialog")},submit:function(){this.$emit("submitForm",C(C({},this.form),{},{byUrl:this.byUrl}))}}},O=P,E=(r("7fbd"),Object(f["a"])(O,y,b,!1,null,"6fd6536c",null)),N=E.exports;function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={x:null,y:null},I={x:null,y:null,w:5,h:8,i:null},k={name:"Project",components:{GridLayout:s["GridLayout"],GridItem:s["GridItem"],ChartCard:g,Chart:v["a"],ChartEdit:N},data:function(){return{isCollapse:!1,layout:[],chartOptions:[{id:"00000000-0000-0000-0000-000000000000",categories:[{id:"00000001-0000-0000-0000-000000000000",type:"pie-chart",name:"Pie Chart1",thumburl:"https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964"},{id:"00000002-0000-0000-0000-000000000000",type:"rose-pie-chart",name:"Pie Chart2",thumburl:"https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"}],value:"Pie Chart",icon:"el-icon-pie-chart"}],draggingElement:{},draggingChart:{},projectName:"",editingProjectName:"",loadingProjectName:!1,isDragging:!1,isConfirmRemoveShow:!1,removingItem:null,editingChart:{},isProjectNameEditiable:!1}},watch:{$route:"fetchData"},created:function(){this.fetchData()},mounted:function(){document.addEventListener("dragover",(function(t){_.x=t.clientX,_.y=t.clientY}),!1)},computed:S(S(S({},Object(n["c"])({isEditShow:function(t){return t.currentProject.isEditChartShow}})),Object(n["b"])("currentProject",{getCurrentProjectId:"currentProjectId"})),{},{removingItemName:function(){return this.removingItem&&this.removingItem.chart&&""!==this.removingItem.chart.name?this.removingItem.chart.name:"this chart"}}),methods:{fetchData:function(t){var e=this;c["a"].getCurrentProject(this.$route.params.id).then((function(t){t&&t.layout?e.layout=t.layout:e.layout=[],!t||!t.chartOptions||(e.chartOptions=t.chartOptions),t&&t.chartOptions?e.projectName=t.name:e.projectName="Created Project",e.editingProjectName=e.projectName,e.$store.dispatch("currentProject/setCurrentProject",t)}),(function(t){throw console.error(t),t}))},goBack:function(){this.$router.push({path:"/projects"})},toggleSidebar:function(){this.isCollapse=!this.isCollapse},selectChart:function(t){console.log(t)},dragstart:function(t){this.draggingChart={id:t.id,name:t.name,type:t.type,url:""},this.isDragging=!0},drag:function(t){var e=document.getElementById("content").getBoundingClientRect(),r=!1;this.draggingElement={},_.x>e.left&&_.x<e.right&&_.y>e.top&&_.y<e.bottom&&(r=!0),!0===r&&-1===this.layout.findIndex((function(t){return"drop"===t.i}))&&this.layout.push({x:2*this.layout.length%(this.colNum||12),y:this.layout.length+(this.colNum||12),w:1,h:1,i:"drop"});var a=this.layout.findIndex((function(t){return"drop"===t.i}));if(-1!==a){try{this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display="none"}catch(n){}var i=this.$refs.gridlayout.$children[a];i.dragging={top:_.y-e.top,left:_.x-e.left};var o=i.calcXY(_.y-e.top,_.x-e.left);!0===r&&(this.$refs.gridlayout.dragEvent("dragstart","drop",o.x,o.y,1,1),I.i=String(a),I.x=this.layout[a].x,I.y=this.layout[a].y),!1===r&&(this.$refs.gridlayout.dragEvent("dragend","drop",o.x,o.y,1,1),this.layout=this.layout.filter((function(t){return"drop"!==t.i})))}},dragend:function(t){var e=document.getElementById("content").getBoundingClientRect(),r=!1;_.x>e.left&&_.x<e.right&&_.y>e.top&&_.y<e.bottom&&(r=!0),!0===r&&(this.$refs.gridlayout.dragEvent("dragend","drop",I.x,I.y,1,1),this.layout=this.layout.filter((function(t){return"drop"!==t.i})),this.draggingElement={x:I.x,y:I.y,w:I.w,h:I.h,i:I.i,chart:this.draggingChart}),this.isDragging=!1,this.putDownNewElement()},putDownNewElement:function(){this.layout.push({x:I.x,y:I.y,w:I.w,h:I.h,i:I.i,chart:this.draggingChart});try{this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display="block"}catch(t){}this.draggingChart={}},confirmRemove:function(t){this.removingItem=t,this.isConfirmRemoveShow=!0},removeChart:function(){var t=this,e=this.layout.findIndex((function(e){return e===t.removingItem}));this.layout.splice(e,1),this.isConfirmRemoveShow=!1},cancelRemove:function(){this.isConfirmRemoveShow=!1},editChart:function(t){this.editingChart=t.chart,this.toggleEditChartDialog()},toggleEditChartDialog:function(){this.$store.dispatch("currentProject/toggleEditChartShow")},submitChartChanges:function(t){var e=this;this.toggleEditChartDialog(),this.isEditing=!0,c["a"].updateChart({projectId:this.getCurrentProjectId,chartId:t.id,body:t}).then((function(r){204===r.status&&(e.isEditing=!1,e.$notify({title:"Success",message:"".concat(t.name," has been updated"),type:"success",duration:2e3}))})).catch((function(t){console.log(t)}))},toggleProjectNameEditiable:function(){this.isProjectNameEditiable=!this.isProjectNameEditiable},submitNameChange:function(){var t=this;this.toggleProjectNameEditiable(),this.loadingProjectName=!0,l["a"].updateProject({projectId:this.$route.params.id,body:{name:this.editingProjectName}}).then((function(e){204===e.status&&(t.$notify({title:"Success",message:"".concat(t.projectName," has been updated"),type:"success",duration:2e3,offset:50}),t.$store.dispatch("projects/modifyProjectInfo",{projectId:t.$route.params.id,data:{name:t.projectName,timestamp:Date.parse(new Date)}}),t.projectName=t.editingProjectName)})).catch((function(e){throw t.$notify.error({title:"Error",message:"Update ".concat(t.projectName," failed, due to ").concat(e,", please try again."),duration:0,offset:50}),new Error(e)})).finally((function(){return t.loadingProjectName=!1}))}}},D=k,$=(r("3aa5"),Object(f["a"])(D,a,i,!1,null,"fba180ac",null));e["default"]=$.exports},dcbc4:function(t,e,r){"use strict";r("6762"),r("7f7f"),r("7514"),r("6cd2");var a={list:[{id:"00000000-0000-0000-0000-000000000000",name:"Project1",description:"This is project1",timestamp:""},{id:"00000000-0000-0000-0000-000000000001",name:"Jroject2",description:"Created on 12/08/2021",timestamp:""},{id:"00000000-0000-0000-0000-000000000002",name:"Prject3",description:"",timestamp:""}]},i=r("133f");e["a"]={getProjects:function(){return i["a"].requestSend("GET project list"),new Promise((function(t){setTimeout((function(){t(a),i["a"].requestReceive("Receive data:",a)}),1e3)}))},getProjectByName:function(t){var e=a.list.find((function(e){return e.name===t}));return i["a"].requestSend("GET project by name",t),new Promise((function(t,r){setTimeout((function(){e?(t(e),i["a"].requestReceive("Receive data:",e)):r("Incorrect project name")}),2e3)}))},createProject:function(t){var e=t.body,r=t.projectId;i["a"].requestSend("POST ".concat(JSON.stringify(e)," to endpoint: endpoint_address/project"));var o=[];return a.list.filter((function(t){t.id!==r&&o.push(t.name.toLowerCase())})),new Promise((function(t,r){setTimeout((function(){o.includes(e.name.toLowerCase())?(r("project name existed"),i["a"].err("Request for POST got rejected: Project name existed")):(t({status:204}),i["a"].requestReceive("Response for POST: ".concat(JSON.stringify({status:204}))))}),2e3)}))},updateProject:function(t){var e=t.projectId,r=t.body;i["a"].requestSend("PUT ".concat(JSON.stringify(r)," to endpoint: endpoint_address/").concat(e));var o=[];return a.list.filter((function(t){t.id!==e&&o.push(t.name.toLowerCase())})),new Promise((function(t,e){setTimeout((function(){o.includes(r.name.toLowerCase())?(e("project name existed"),i["a"].err("Request for PUT got rejected: Project name existed")):(t({status:204}),i["a"].requestReceive("Response for PUT: ".concat(JSON.stringify({status:204}))))}),2e3)}))},removeProject:function(t){return i["a"].requestSend("DELETE project: ".concat(t," to endpoint: endpoint_address/").concat(t)),new Promise((function(t,e){setTimeout((function(){t({status:204}),i["a"].requestReceive("Project deleted with no content")}),2e3)}))}}},f5f5:function(t,e,r){"use strict";r("5065")}}]);