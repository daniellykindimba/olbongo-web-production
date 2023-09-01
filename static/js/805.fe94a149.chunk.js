"use strict";(self.webpackChunkolbongo=self.webpackChunkolbongo||[]).push([[805],{5805:function(e,t,n){n.r(t),n.d(t,{PrivateTutorsPage:function(){return N}});var r=n(78164),a=n(43504),i=n(74165),s=n(93433),o=n(15861),l=n(29439),u=n(38999),c=n(73956),d=n(82622),f=n(11730),p=n(79286),h=n(840),x=n(72518),m=n(87012),v=n(72791),g=n(50333),y=n(80184),j=function(e){var t=(0,v.useState)(),n=(0,l.Z)(t,2),r=(n[0],n[1],(0,v.useState)([])),a=(0,l.Z)(r,2),u=a[0],c=a[1],d=(0,v.useState)(1),g=(0,l.Z)(d,2),j=g[0],Z=g[1],w=(0,v.useState)(0),k=(0,l.Z)(w,2),T=k[0],S=k[1],N=(0,v.useState)(20),I=(0,l.Z)(N,2),b=I[0],C=I[1],A=(0,v.useState)(""),D=(0,l.Z)(A,2),E=D[0],P=(D[1],(0,v.useState)(!1)),z=(0,l.Z)(P,2),F=(z[0],z[1]),q=(0,v.useState)(!0),J=(0,l.Z)(q,2),M=J[0],B=J[1],U=((0,x.HJ)().push,h.l0.useForm()),X=(0,l.Z)(U,1)[0],H=h.l0.useForm(),Q=((0,l.Z)(H,1)[0],h.rj.useBreakpoint().lg,[{title:"Full Name",dataIndex:"fullName",fixed:!0,render:function(e,t,n){return(0,y.jsxs)(h.T,{direction:"vertical",children:[(0,y.jsx)("span",{children:t.fullName}),(0,y.jsx)("span",{children:t.email})]})}},{title:"",dataIndex:"action",render:function(e,t,n){return(0,y.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,y.jsx)(h.gn,{title:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{children:"Are you sure to Add"}),(0,y.jsx)("span",{style:{fontWeight:"bolder",marginLeft:5},children:t.fullName}),(0,y.jsx)("span",{style:{marginLeft:5},children:"As Private Tutor?"})]}),onConfirm:function(){return R(t.id)},onCancel:function(){},okText:"Yes",cancelText:"No",disabled:!(null!==t&&void 0!==t&&t.canDelete),children:(0,y.jsx)(h.zx,{icon:(0,y.jsx)(p.Z,{}),disabled:!(null!==t&&void 0!==t&&t.canDelete)})})})}}]),R=function(){var t=(0,o.Z)((0,i.Z)().mark((function t(n){var r,a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.E.custom({url:"",method:"post",metaData:{operation:"addPrivateTutor",variables:{userId:{value:parseInt(n.toString()),type:"Int",required:!0}},fields:["success","message",{privateTutor:["id",{user:["id","firstName","middleName","lastName","fullName","email","isActive","created","updated","canEdit","canDelete","canManage"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return h.yw.error("Error occured while Adding Private Tutor"),{data:null}})).then((function(e){return e}));case 2:r=t.sent,(a=r.data)&&(a.success?(h.yw.success(a.message),e.onAdd(a.privateTutor)):h.yw.error(a.message));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,r,a,o,l=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"",r=l.length>2&&void 0!==l[2]?l[2]:20,B(!0),e.next=5,m.E.custom({url:"",method:"get",metaData:{operation:"notPrivateTutors",variables:{page:{value:t,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","firstName","middleName","lastName","fullName","email","isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return h.yw.error("Error occured while fetching examinations types"),{data:null}})).then((function(e){return e}));case 5:a=e.sent,(o=a.data)&&(Z(o.page),S(o.total),F(o.hasNext),c((0,s.Z)(o.results))),B(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){K(j)}),[e.randKey]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.X2,{style:{marginTop:10},children:(0,y.jsx)(h.JX,{span:24,children:(0,y.jsx)(h.l0,{layout:"vertical",form:X,onFinish:function(e){Z(1),u.length=0,K(1,e.key)},children:(0,y.jsx)(h.l0.Item,{name:"key",children:(0,y.jsx)(h.II,{size:"large",placeholder:"Search ...",prefix:(0,y.jsx)(f.Z,{}),autoComplete:"off",allowClear:!0})})})})}),(0,y.jsx)(h.iA,{loading:M,columns:Q,dataSource:u,pagination:{onChange:function(e,t){C(t),K(e,E,t)},total:T,pageSize:b,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0,y:"68vh"}})]})},Z=function(e){var t=(0,v.useState)(),n=(0,l.Z)(t,2),r=(n[0],n[1],(0,v.useState)([])),a=(0,l.Z)(r,2),Z=a[0],w=a[1],k=(0,v.useState)(1),T=(0,l.Z)(k,2),S=T[0],N=T[1],I=(0,v.useState)(0),b=(0,l.Z)(I,2),C=b[0],A=b[1],D=(0,v.useState)(20),E=(0,l.Z)(D,2),P=E[0],z=E[1],F=(0,v.useState)(""),q=(0,l.Z)(F,2),J=q[0],M=(q[1],(0,v.useState)(!1)),B=(0,l.Z)(M,2),U=(B[0],B[1]),X=(0,v.useState)(!0),H=(0,l.Z)(X,2),Q=H[0],R=H[1],K=((0,x.HJ)().push,h.l0.useForm()),L=(0,l.Z)(K,1)[0],Y=h.l0.useForm(),O=((0,l.Z)(Y,1)[0],h.rj.useBreakpoint().lg,(0,v.useState)(!1)),W=(0,l.Z)(O,2),G=W[0],V=W[1],$=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w([t].concat((0,s.Z)(Z)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.E.custom({url:"",method:"post",metaData:{operation:"deletePrivateTutor",variables:{privateTutorId:{value:parseInt(t.toString()),type:"Int",required:!0}},fields:["success","message"]}});case 2:n=e.sent,(r=n.data).success?(h.yw.success(r.message),w(Z.filter((function(e){return e.id!==t})))):h.yw.error(r.message);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){h.yw.info("Canceled")},te=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.E.custom({url:"",method:"post",metaData:{operation:"blockUnblockPrivateTutor",variables:{privateTutorId:{value:parseInt(t.toString()),type:"Int",required:!0},blocked:{value:n,type:"Boolean",required:!0}},fields:["success","message",{privateTutor:["id",{user:["id","firstName","middleName","lastName","fullName","email","isActive","created","updated","canEdit","canDelete","canManage"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return n?h.yw.error("Error occured while Unblocking Private Tutor"):h.yw.error("Error occured while Blocking Private Tutor"),{data:null}})).then((function(e){return e}));case 2:r=e.sent,(a=r.data)&&(a.success?(h.yw.success(a.message),w(Z.map((function(e){return e.id===t?a.privateTutor:e})))):h.yw.error(a.message));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=[{title:"Full Name",dataIndex:"fullName",fixed:!0,render:function(e,t,n){return(0,y.jsx)("span",{children:(0,y.jsx)("a",{children:t.user.fullName})})}},{title:"Email",dataIndex:"email",fixed:!0,render:function(e,t,n){return(0,y.jsx)("span",{children:t.user.email})}},{title:"Created",dataIndex:"created",render:function(e,t,n){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("span",{children:(0,y.jsx)(g.Z,{date:new Date(t.created)})})})}},{title:"Status",dataIndex:"isActive",render:function(e,t,n){return(0,y.jsx)("span",{children:null!==t&&void 0!==t&&t.isActive?(0,y.jsx)("span",{style:{color:"green"},children:"Active"}):(0,y.jsx)("span",{style:{color:"red"},children:"Inactive"})})}},{title:"",dataIndex:"action",render:function(e,t,n){return(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[t.isActive?(0,y.jsx)(h.gn,{title:"Are you sure to Block this Private Tutor?",onConfirm:function(){return te(null===t||void 0===t?void 0:t.id,!1)},onCancel:function(){return ee},okText:"Block",cancelText:"No",disabled:!(null!==t&&void 0!==t&&t.canDelete),children:(0,y.jsx)(h.zx,{style:{marginRight:3},icon:(0,y.jsx)(u.Z,{}),disabled:!(null!==t&&void 0!==t&&t.canDelete),danger:!0})}):(0,y.jsx)(h.gn,{title:"Are you sure to Unblock this Private Tutor?",onConfirm:function(){return te(null===t||void 0===t?void 0:t.id,!0)},onCancel:function(){return ee},okText:"Unblock",cancelText:"No",disabled:!(null!==t&&void 0!==t&&t.canDelete),children:(0,y.jsx)(h.zx,{style:{marginRight:3},icon:(0,y.jsx)(c.Z,{}),disabled:!(null!==t&&void 0!==t&&t.canDelete),danger:!0})}),(0,y.jsx)(h.gn,{title:"Are you sure to delete this Private Tutor?",onConfirm:function(){return _(null===t||void 0===t?void 0:t.id)},onCancel:function(){return ee},okText:"Yes",cancelText:"No",disabled:!(null!==t&&void 0!==t&&t.canDelete),children:(0,y.jsx)(h.zx,{style:{marginRight:3},icon:(0,y.jsx)(d.Z,{}),disabled:!(null!==t&&void 0!==t&&t.canDelete),danger:!0})})]})}}],re=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,r,a,o,l=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"",r=l.length>2&&void 0!==l[2]?l[2]:20,e.next=4,m.E.custom({url:"",method:"get",metaData:{operation:"privateTutors",variables:{page:{value:t,type:"Int",required:!0},key:{value:n,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{user:["id","firstName","middleName","lastName","fullName","email"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}}).catch((function(e){return h.yw.error("Error occured while fetching examinations types"),{data:null}})).then((function(e){return e}));case 4:a=e.sent,(o=a.data)&&(N(o.page),A(o.total),U(o.hasNext),w((0,s.Z)(o.results))),R(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){re(S)}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h.X2,{style:{marginTop:10},children:[(0,y.jsx)(h.JX,{span:8,children:(0,y.jsx)(h.l0,{layout:"vertical",form:L,onFinish:function(e){N(1),Z.length=0,re(1,e.key)},children:(0,y.jsx)(h.l0.Item,{name:"key",children:(0,y.jsx)(h.II,{size:"large",placeholder:"Search ...",prefix:(0,y.jsx)(f.Z,{}),autoComplete:"off",allowClear:!0})})})}),(0,y.jsx)(h.JX,{span:16,style:{display:"flex",justifyContent:"flex-end"},children:(0,y.jsx)(h.zx,{size:"large",icon:(0,y.jsx)(p.Z,{}),onClick:function(){return V(!0)},danger:!0,children:"Add Tutor"})})]}),(0,y.jsx)(h.iA,{loading:Q,columns:ne,dataSource:Z,pagination:{onChange:function(e,t){z(t),re(e,J,t)},total:C,pageSize:P,position:["bottomCenter"],showQuickJumper:!1},scroll:{x:!0}}),(0,y.jsx)(h.dy,{title:"Adding Private Tutors",placement:"right",width:"40vw",onClose:function(){return V(!1)},visible:G,destroyOnClose:!0,children:(0,y.jsx)(j,{onAdd:$,randKey:Math.random()})})]})},w=n(20852),k=n(59174),T=n(5397),S=function(){return(0,y.jsxs)("div",{style:{marginTop:10},children:[(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(r.Z.Item,{children:(0,y.jsx)(a.rU,{to:"/control/analytics",children:"Home"})}),(0,y.jsx)(r.Z.Item,{children:"Private Tutors"})]}),(0,y.jsx)(Z,{height:80})]})},N=function(){return(0,v.useEffect)((function(){window.history.pushState({},"",(0,k.Z)())}),[]),(0,y.jsx)(w.u,{children:(0,y.jsx)(T.Q,{children:(0,y.jsx)(S,{})})})}}}]);
//# sourceMappingURL=805.fe94a149.chunk.js.map