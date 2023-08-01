"use strict";(self.webpackChunkolbongo=self.webpackChunkolbongo||[]).push([[513],{25513:function(e,n,t){t.d(n,{W:function(){return P}});var a=t(93433),r=t(74165),i=t(15861),c=t(29439),s=t(38999),u=t(73956),l=t(82622),o=t(31752),d=t(11730),m=t(79286),p=t(840),g=t(69239),f=t(87012),y=t(72791),h=t(50333),x=t(29864),v=t(80184),k=function(e){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"createPaymentPackage",variables:{name:{value:t.name,type:"String",required:!0},code:{value:t.code,type:"String",required:!0},amount:{value:t.amount,type:"Float",required:!0},description:{value:t.description,type:"String",required:!1},vatIncluded:{value:t.vat_included,type:"Boolean",required:!0}},fields:["success","message",{paymentPackage:["id","name","code","description","amount","isActive","vatIncluded","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return p.yw.error("Error in Creating Payment Package"),{data:null}})).then((function(e){return e}));case 2:a=n.sent,(i=a.data)&&(i.success?(p.yw.success("Payment Package Created Successfully"),e.onFinish(i.paymentPackage)):p.yw.error(i.message));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,y.useEffect)((function(){}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(p.l0,{layout:"vertical",form:e.form,onFinish:function(e){n(e)},requiredMark:!0,children:[(0,v.jsx)(p.l0.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input name"}],children:(0,v.jsx)(p.II,{size:"large",placeholder:"Enter Name ..."})}),(0,v.jsx)(p.l0.Item,{name:"code",label:"Code",rules:[{required:!0,type:"string",message:"Please input Code ..."}],children:(0,v.jsx)(p.II,{size:"large",placeholder:"Enter Code ..."})}),(0,v.jsx)(p.l0.Item,{name:"amount",label:"Amount",initialValue:0,rules:[{required:!0,type:"number",min:0}],children:(0,v.jsx)(p.Rn,{value:0,style:{width:"100%"},size:"large"})}),(0,v.jsx)(p.l0.Item,{name:"vat_included",valuePropName:"checked",initialValue:!0,rules:[{required:!0,type:"boolean",message:"Please Check ..."}],children:(0,v.jsx)(p.XZ,{children:"VAT Included"})}),(0,v.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,v.jsx)(p.zx,{size:"large",htmlType:"submit",icon:(0,v.jsx)(x.Z,{}),danger:!0,children:"Save"})})]})})},j=function(e){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"updatePaymentPackage",variables:{paymentPackageId:{value:t.payment_package_id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},code:{value:t.code,type:"String",required:!0},amount:{value:t.amount,type:"Float",required:!0},description:{value:t.description,type:"String",required:!1},vatIncluded:{value:t.vat_included,type:"Boolean",required:!0}},fields:["success","message",{paymentPackage:["id","name","code","description","vatIncluded","amount","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return p.yw.error("Error in Updating Payment Package"),{data:null}})).then((function(e){return e}));case 2:a=n.sent,(i=a.data)&&(i.success?(p.yw.success("Payment Package Created Successfully"),e.onFinish(i.paymentPackage)):p.yw.error(i.message));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,y.useEffect)((function(){e.paymentPackage&&e.form.setFieldsValue({name:e.paymentPackage.name,code:e.paymentPackage.code,amount:e.paymentPackage.amount,description:e.paymentPackage.description,vat_included:e.paymentPackage.vatIncluded})}),[e.randKey]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(p.l0,{layout:"vertical",form:e.form,onFinish:function(t){t.payment_package_id=e.paymentPackage.id,n(t)},requiredMark:!0,children:[(0,v.jsx)(p.l0.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input name"}],children:(0,v.jsx)(p.II,{size:"large",placeholder:"Enter Name ..."})}),(0,v.jsx)(p.l0.Item,{name:"code",label:"Code",rules:[{required:!0,type:"string",message:"Please input Code ..."}],children:(0,v.jsx)(p.II,{size:"large",placeholder:"Enter Code ..."})}),(0,v.jsx)(p.l0.Item,{name:"amount",label:"Amount",initialValue:0,rules:[{required:!0,type:"number",min:0}],children:(0,v.jsx)(p.Rn,{value:0,style:{width:"100%"},size:"large"})}),(0,v.jsx)(p.l0.Item,{name:"vat_included",valuePropName:"checked",initialValue:!0,rules:[{required:!0,type:"boolean",message:"Please Check ..."}],children:(0,v.jsx)(p.XZ,{children:"VAT Included"})}),(0,v.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,v.jsx)(p.zx,{type:"primary",size:"large",htmlType:"submit",children:"Update"})})]})})},P=function(e){var n=(0,y.useState)(),t=(0,c.Z)(n,2),x=t[0],P=t[1],Z=(0,y.useState)([]),I=(0,c.Z)(Z,2),w=I[0],b=I[1],C=(0,y.useState)(1),q=(0,c.Z)(C,2),S=q[0],E=q[1],A=(0,y.useState)(0),z=(0,c.Z)(A,2),F=z[0],T=z[1],D=(0,y.useState)(20),N=(0,c.Z)(D,2),M=N[0],V=N[1],_=(0,y.useState)(""),B=(0,c.Z)(_,2),R=B[0],U=(B[1],(0,y.useState)(!1)),X=(0,c.Z)(U,2),J=(X[0],X[1]),O=(0,y.useState)(!0),K=(0,c.Z)(O,2),H=K[0],L=K[1],Q=((0,g.HJ)().push,p.l0.useForm()),W=(0,c.Z)(Q,1)[0],Y=p.l0.useForm(),G=(0,c.Z)(Y,1)[0],$=p.l0.useForm(),ee=(0,c.Z)($,1)[0],ne=(p.rj.useBreakpoint().lg,(0,y.useState)(!1)),te=(0,c.Z)(ne,2),ae=te[0],re=te[1],ie=(0,y.useState)(!1),ce=(0,c.Z)(ie,2),se=ce[0],ue=ce[1],le=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(w.map((function(e){return e.id===n.id?n:e}))),G.resetFields(),ue(!1);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),oe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b([n].concat((0,a.Z)(w))),ee.resetFields(),re(!1);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),de=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"deletePaymentPackage",variables:{paymentPackageId:{value:parseInt(n.toString()),type:"Int",required:!0}},fields:["success","message"]}});case 2:t=e.sent,(a=t.data).success?(p.yw.success(a.message),b(w.filter((function(e){return e.id!==n})))):p.yw.error(a.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),me=function(){p.yw.info("Canceled")},pe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"blockUnblockPaymentPackage",variables:{paymentPackageId:{value:parseInt(n.toString()),type:"Int",required:!0},blocked:{value:t,type:"Boolean",required:!0}},fields:["success","message",{paymentPackage:["id","name","code","description","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return t?p.yw.error("Error occured while Unblocking Payment Package"):p.yw.error("Error occured while Blocking Payment Package"),{data:null}})).then((function(e){return e}));case 2:a=e.sent,(i=a.data)&&(i.success?(p.yw.success(i.message),b(w.map((function(e){return e.id===n?i.paymentPackage:e})))):p.yw.error(i.message));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ge=[{title:"Name",dataIndex:"name",fixed:!0,render:function(e,n,t){return(0,v.jsx)("span",{children:(0,v.jsx)("a",{children:n.name})})}},{title:"Code",dataIndex:"code",fixed:!0,render:function(e,n,t){return(0,v.jsx)("span",{children:n.code})}},{title:"Amount",dataIndex:"amount",fixed:!0,render:function(e,n,t){return(0,v.jsxs)("span",{children:[n.amount,(0,v.jsx)("span",{style:{marginLeft:10},children:n.vatIncluded?(0,v.jsx)(p.Vp,{color:"green",children:"+VAT"}):(0,v.jsx)(p.Vp,{color:"red",children:"1VAT"})})]})}},{title:"Created",dataIndex:"created",render:function(e,n,t){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("span",{children:(0,v.jsx)(h.Z,{date:new Date(n.created)})})})}},{title:"Status",dataIndex:"isActive",render:function(e,n,t){return(0,v.jsx)("span",{children:null!==n&&void 0!==n&&n.isActive?(0,v.jsx)("span",{style:{color:"green"},children:"Active"}):(0,v.jsx)("span",{style:{color:"red"},children:"Inactive"})})}},{title:"",dataIndex:"action",render:function(e,n,t){return(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[n.isActive?(0,v.jsx)(p.gn,{title:"Are you sure to Block this Payment Package?",onConfirm:function(){return pe(null===n||void 0===n?void 0:n.id,!1)},onCancel:function(){return me},okText:"Block",cancelText:"No",disabled:!(null!==n&&void 0!==n&&n.canManage),children:(0,v.jsx)(p.zx,{style:{marginRight:3},icon:(0,v.jsx)(s.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canManage),danger:!0})}):(0,v.jsx)(p.gn,{title:"Are you sure to Unblock this Payment Package?",onConfirm:function(){return pe(null===n||void 0===n?void 0:n.id,!0)},onCancel:function(){return me},okText:"Unblock",cancelText:"No",disabled:!(null!==n&&void 0!==n&&n.canManage),children:(0,v.jsx)(p.zx,{style:{marginRight:3},icon:(0,v.jsx)(u.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canManage),danger:!0})}),(0,v.jsx)(p.gn,{title:"Are you sure to delete this Payment Package?",onConfirm:function(){return de(null===n||void 0===n?void 0:n.id)},onCancel:function(){return me},okText:"Yes",cancelText:"No",disabled:!(null!==n&&void 0!==n&&n.canDelete),children:(0,v.jsx)(p.zx,{style:{marginRight:3},icon:(0,v.jsx)(l.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canDelete),danger:!0})}),(0,v.jsx)(p.zx,{style:{marginRight:3},icon:(0,v.jsx)(o.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canEdit),onClick:function(){return function(e){P(e),ue(!0)}(n)},danger:!0})]})}}],fe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,c,s,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:"",i=u.length>2&&void 0!==u[2]?u[2]:20,e.next=4,f.E.custom({url:"",method:"get",metaData:{operation:"paymentPackages",variables:{page:{value:n,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description","code","amount","vatIncluded","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return p.yw.error("Error occured while fetching Payment Packages"),{data:null}})).then((function(e){return e}));case 4:c=e.sent,(s=c.data)&&(E(s.page),T(s.total),J(s.hasNext),b((0,a.Z)(s.results))),L(!1);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,y.useEffect)((function(){fe(S)}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p.X2,{style:{marginTop:10},children:[(0,v.jsx)(p.JX,{span:8,children:(0,v.jsx)(p.l0,{layout:"vertical",form:W,onFinish:function(e){E(1),w.length=0,fe(1,e.key)},children:(0,v.jsx)(p.l0.Item,{name:"key",children:(0,v.jsx)(p.II,{size:"large",placeholder:"Search ...",prefix:(0,v.jsx)(d.Z,{}),autoComplete:"off",allowClear:!0})})})}),(0,v.jsx)(p.JX,{span:16,style:{display:"flex",justifyContent:"flex-end"},children:(0,v.jsx)(p.zx,{size:"large",icon:(0,v.jsx)(m.Z,{}),onClick:function(){return re(!0)},danger:!0,children:"Add Payment Package"})})]}),(0,v.jsx)(p.iA,{loading:H,columns:ge,dataSource:w,pagination:{onChange:function(e,n){V(n),fe(e,R,n)},total:F,pageSize:M,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),(0,v.jsx)(p.u_,{title:"Adding Payment Package",width:"40vw",onCancel:function(){return re(!1)},onOk:function(){return re(!1)},visible:ae,destroyOnClose:!0,footer:[],children:(0,v.jsx)(k,{form:ee,onFinish:oe})}),(0,v.jsx)(p.u_,{title:"Edit Payment Package",width:"40vw",onCancel:function(){return ue(!1)},onOk:function(){return ue(!1)},visible:se,destroyOnClose:!0,footer:[],children:(0,v.jsx)(j,{form:G,onFinish:le,paymentPackage:x,randKey:Math.random()})})]})}}}]);
//# sourceMappingURL=513.f29a884d.chunk.js.map