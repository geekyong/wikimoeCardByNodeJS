webpackJsonp([18],{BPOL:function(e,t,n){var o=n("szyH");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("6157ebec",o,!0,{})},H8H0:function(e,t,n){"use strict";function o(e){n("BPOL")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("r4Fr"),a=(n("oAV5"),{data:function(){return{key:{key:""},token:sessionStorage.getItem("adminToken")?sessionStorage.getItem("adminToken"):localStorage.getItem("adminToken")}},mounted:function(){this.getKey()},methods:{getKey:function(){var e=this,t={type:"get",token:this.token};s.a.adminsecretkey(t).then(function(t){1==t.data.code?e.key.key=t.data.secretkey||"":e.$message.error(t.data.msg)})},onSubmit:function(){var e=this;this.$confirm("此操作将替换现有的key, 是否继续?","提示",{confirmButtonText:"替换",cancelButtonText:"取消",type:"warning"}).then(function(){var t={type:"edit",token:e.token};s.a.adminsecretkey(t).then(function(t){1==t.data.code?(e.$message({message:"生成成功！",type:"success"}),e.key.key=t.data.secretkey):e.$message.error(t.data.msg)})}).catch(function(){})}}}),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wmcard_admincenter_common_right_body"},[n("el-form",{attrs:{model:e.key,"label-width":"140px"}},[n("el-form-item",{attrs:{label:"key："}},[n("p",{staticClass:"wm_admin_sk_copy"},[e._v(e._s(e.key.key||"您还未设置secret key，请重新生成！"))])]),e._v(" "),n("el-form-item",[n("p",[e._v("注：开发者在使用接口时加上{secretkey:上面的key}可以避免验证码和邮箱验证。")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("重新生成")])],1)],1)],1)},i=[],c={render:r,staticRenderFns:i},d=c,m=n("VU/8"),y=o,k=m(a,d,!1,y,null,null);t.default=k.exports},szyH:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n.wm_admin_sk_copy{\n  border-radius: 3px;\n  border:1px solid #bebebe;\n  padding: 5px 10px;\n  height: 24px;\n  line-height: 24px;\n}\n",""])}});