"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[559],{4559:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",[t("el-container",{staticStyle:{height:"700px",border:"1px solid #eee"}},[t("el-header",{staticStyle:{"font-size":"40px","background-color":"rgb(238, 241, 246)"}},[e._v("スクール管理システム")]),t("el-container",[t("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)",border:"1px solid #eee"},attrs:{width:"250px"}},[t("el-menu",{attrs:{"default-openeds":["1","3"]}},[t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-message"}),e._v("システムインフォメーション")]),t("el-menu-item",{attrs:{index:"1-1"}},[t("router-link",{attrs:{to:"/dept"}},[e._v("デパートメント")])],1),t("el-menu-item",{attrs:{index:"1-2"}},[t("router-link",{attrs:{to:"/emp"}},[e._v("従業員")])],1)],2)],1)],1),t("el-main",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm}},[t("el-form-item",{attrs:{label:"名前"}},[t("el-input",{attrs:{placeholder:"名前"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("el-form-item",{attrs:{label:"性別"}},[t("el-select",{attrs:{placeholder:"性別"},model:{value:e.searchForm.gender,callback:function(t){e.$set(e.searchForm,"gender",t)},expression:"searchForm.gender"}},[t("el-option",{attrs:{label:"男",value:"1"}}),t("el-option",{attrs:{label:"女",value:"2"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("検索")])],1),t("el-date-picker",{attrs:{type:"daterange","range-separator":"日","start-placeholder":"から","end-placeholder":"まで"},model:{value:e.searchForm.entrydate,callback:function(t){e.$set(e.searchForm,"entrydate",t)},expression:"searchForm.entrydate"}})],1),t("el-table",{attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"name",label:"名前",width:"180"}}),t("el-table-column",{attrs:{prop:"image",label:"プロファイル",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{attrs:{src:e.row.image,width:"100px",height:"70px"}})]}}])}),t("el-table-column",{attrs:{prop:"gender",label:"性别",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s("1"==t.row.gender?"男":"女")+" ")]}}])}),t("el-table-column",{attrs:{prop:"job",label:"職位",width:"140"}}),t("el-table-column",{attrs:{prop:"entrydate",label:"入職日",width:"180"}}),t("el-table-column",{attrs:{prop:"updatetime",label:"アップデート時間",width:"230"}}),t("el-table-column",{attrs:{label:"オペレーション"}},[t("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("編集")]),t("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("削除")])],1)],1),t("br"),t("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper, sizes",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},l=[],n=a(8355),o={data(){return{tableData:[],searchForm:{name:"",gender:"",entrydate:[]}}},methods:{onsubmit(){alert(JSON.stringify(this.searchForm))},handleSizeChange(e){alert(e)},handleCurrentChange(e){alert(e)}},mounted(){n.A.get("https://yapi.pro/mock/366542/users/information/basic_1714275658425").then((e=>{this.tableData=e.data.data}))}},s=o,i=a(1656),c=(0,i.A)(s,r,l,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=559.c74c0d8d.js.map