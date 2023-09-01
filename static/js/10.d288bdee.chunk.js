"use strict";(self.webpackChunkolbongo=self.webpackChunkolbongo||[]).push([[10],{79010:function(e,n,t){t.r(n),t.d(n,{SchoolEducationLevelsPage:function(){return w}});var r=t(78164),i=t(43504),s=t(74165),a=t(15861),o=t(29439),c=t(82622),l=t(31752),d=t(11730),u=t(14057),x=t(840),f=t(72518),h=t(87012),p=t(72791),v=t(50333),m=t(80184),j=function(e){var n=x.l0.useForm(),t=(0,o.Z)(n,1)[0],r=(0,p.useState)(e.level.isActive),i=(0,o.Z)(r,2),c=i[0],l=i[1],d=function(){var n=(0,a.Z)((0,s.Z)().mark((function n(r){var i,a;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.E.custom({url:"",method:"post",metaData:{operation:"updateEducationLevel",variables:{id:{value:r.id,type:"Int",required:!0},name:{value:r.name,type:"String",required:!0},isActive:{value:r.isActive,type:"Boolean",required:!0}},fields:["success","message",{educationLevel:["id","name","code","index",{schoolType:["id","name","code"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}});case 2:i=n.sent,(a=i.data).success?(x.yw.success(a.message),t.resetFields(),e.onFinish(a.educationLevel)):x.yw.error(a.message);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,p.useEffect)((function(){e.form.setFieldsValue({name:e.level.name,isActive:e.level.isActive})}),[e.form,e.level]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(x.l0,{layout:"vertical",form:e.form,onFinish:function(n){n.isActive=c,n.id=parseInt(e.level.id.toString()),d(n)},requiredMark:!1,children:[(0,m.jsx)(x.l0.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:(0,m.jsx)(x.II,{size:"large",placeholder:"Enter Name ..."})}),(0,m.jsx)(x.l0.Item,{name:"isActive",children:(0,m.jsx)(x.XZ,{checked:c,onChange:function(){return l(!c)},children:"Active"})}),(0,m.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,m.jsx)(x.zx,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},g=function(e){var n=(0,p.useState)(),t=(0,o.Z)(n,2),r=t[0],i=t[1],g=(0,p.useState)([]),y=(0,o.Z)(g,2),Z=y[0],S=y[1],I=(0,p.useState)(1),w=(0,o.Z)(I,2),k=w[0],C=w[1],E=(0,p.useState)(0),A=(0,o.Z)(E,2),b=A[0],z=A[1],F=(0,p.useState)(20),T=(0,o.Z)(F,2),L=T[0],q=T[1],D=(0,p.useState)(""),N=(0,o.Z)(D,2),J=N[0],O=N[1],X=(0,p.useState)(!1),M=(0,o.Z)(X,2),P=(M[0],M[1]),B=(0,p.useState)(!0),H=(0,o.Z)(B,2),Q=H[0],Y=H[1],U=((0,f.HJ)().push,x.l0.useForm()),V=(0,o.Z)(U,1)[0],_=x.l0.useForm(),G=(0,o.Z)(_,1)[0],K=(x.rj.useBreakpoint().lg,(0,p.useState)(!1)),R=(0,o.Z)(K,2),W=(R[0],R[1],(0,p.useState)(!1)),$=(0,o.Z)(W,2),ee=$[0],ne=$[1],te=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.E.custom({url:"",method:"post",metaData:{operation:"synchronizeEducationLevelsIndexes",variables:{},fields:["success","message"]}});case 2:n=e.sent,(t=n.data).success?x.yw.success(t.message):x.yw.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(Z.map((function(e){return parseInt(e.id.toString())===parseInt(n.id.toString())?n:e}))),ne(!1);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ie=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.E.custom({url:"",method:"post",metaData:{operation:"deleteEducationLevel",variables:{id:{value:parseInt(n.toString()),type:"Int",required:!0}},fields:["success","message"]}});case 2:t=e.sent,(r=t.data).success?(x.yw.success(r.message),S(Z.filter((function(e){return e.id!==n})))):x.yw.error(r.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),se=function(){x.yw.info("Canceled")},ae=[{title:"Name",dataIndex:"name",fixed:!0,render:function(e,n,t){return(0,m.jsx)("span",{children:(0,m.jsx)("a",{children:n.name})})}},{title:"Code",dataIndex:"code",fixed:!0,render:function(e,n,t){return(0,m.jsx)("span",{children:(0,m.jsx)("a",{children:n.code})})}},{title:"Index",dataIndex:"index",fixed:!0,render:function(e,n,t){return(0,m.jsx)("span",{children:(0,m.jsx)("a",{children:n.index})})}},{title:"School Type",dataIndex:"schoolType",fixed:!0,render:function(e,n,t){var r;return(0,m.jsx)("span",{children:(0,m.jsx)("a",{children:null===(r=n.schoolType)||void 0===r?void 0:r.name})})}},{title:"Created",dataIndex:"created",render:function(e,n,t){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("span",{children:(0,m.jsx)(v.Z,{date:new Date(n.created)})})})}},{title:"Status",dataIndex:"isActive",render:function(e,n,t){return(0,m.jsx)("a",{children:null!==n&&void 0!==n&&n.isActive?(0,m.jsx)("span",{style:{color:"green"},children:"Active"}):(0,m.jsx)("span",{style:{color:"red"},children:"Inactive"})})}},{title:"",dataIndex:"action",render:function(e,n,t){return(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,m.jsx)(x.gn,{title:"Are you sure to delete this School Ownership?",onConfirm:function(){return ie(null===n||void 0===n?void 0:n.id)},onCancel:function(){return se},okText:"Yes",cancelText:"No",disabled:!(null!==n&&void 0!==n&&n.canDelete),children:(0,m.jsx)(x.zx,{icon:(0,m.jsx)(c.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canDelete),danger:!0})}),(0,m.jsx)(x.u,{title:"Edit "+(null===n||void 0===n?void 0:n.name)+" Ownership",color:"green",children:(0,m.jsx)(x.zx,{icon:(0,m.jsx)(l.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canEdit),onClick:function(){return function(e){i(e),ne(!0)}(n)},danger:!0})})]})}}],oe=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t,r,i,a,o=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"",r=o.length>2&&void 0!==o[2]?o[2]:20,e.next=4,h.E.custom({url:"",method:"get",metaData:{operation:"educationLevels",variables:{page:{value:n,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","code","index",{schoolType:["id","name","code"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}});case 4:i=e.sent,a=i.data,C(a.page),z(a.total),P(a.hasNext),S(a.results),Y(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,p.useEffect)((function(){oe(k,"",20)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(x.X2,{style:{marginTop:10},children:[(0,m.jsx)(x.JX,{span:8,children:(0,m.jsx)(x.l0,{layout:"vertical",form:V,onFinish:function(e){C(1),Z.length=0,O(e.key),oe(1,e.key,L)},children:(0,m.jsx)(x.l0.Item,{name:"key",children:(0,m.jsx)(x.II,{size:"large",placeholder:"Search ...",prefix:(0,m.jsx)(d.Z,{}),autoComplete:"off",allowClear:!0})})})}),(0,m.jsx)(x.JX,{span:16,style:{display:"flex",justifyContent:"flex-end"},children:(0,m.jsx)(x.u,{title:"Auto Correct All Education Levels Indexes over all Schools",color:"green",placement:"left",children:(0,m.jsx)(x.gn,{title:"Synchronizing All Indexes of Education Levels over all Schools",placement:"left",onConfirm:te,onCancel:function(){},okText:"Yes",cancelText:"No",children:(0,m.jsx)(x.zx,{icon:(0,m.jsx)(u.Z,{}),size:"large",children:"Sync Indexes"})})})})]}),(0,m.jsx)("div",{children:(0,m.jsx)(x.iA,{loading:Q,columns:ae,dataSource:Z,scroll:{x:!0},pagination:{onChange:function(e,n){q(n),oe(e,J,n)},total:b,pageSize:L,position:["bottomCenter"],showQuickJumper:!0}})}),(0,m.jsx)(x.u_,{title:"Edit "+(null===r||void 0===r?void 0:r.name)+" Information",width:"20%",destroyOnClose:!0,visible:ee,onOk:function(){ne(!1)},onCancel:function(){ne(!1)},footer:[],children:(0,m.jsx)(j,{form:G,level:r,onFinish:re})})]})},y=t(20852),Z=t(59174),S=t(5397),I=function(){return(0,m.jsxs)("div",{style:{marginTop:10},children:[(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(r.Z.Item,{children:(0,m.jsx)(i.rU,{to:"/control/analytics",children:"Home"})}),(0,m.jsx)(r.Z.Item,{children:"School Education Levels"})]}),(0,m.jsx)(g,{height:80})]})},w=function(){var e=(0,f.kS)().data;return(0,p.useEffect)((function(){!1!==(null===e||void 0===e?void 0:e.isStaff)&&!1!==(null===e||void 0===e?void 0:e.isAdmin)||(window.location.pathname="/home"),window.history.pushState({},"",(0,Z.Z)())}),[]),(0,m.jsx)(y.u,{children:(0,m.jsx)(S.Q,{children:(0,m.jsx)(I,{})})})}}}]);
//# sourceMappingURL=10.d288bdee.chunk.js.map