"use strict";(self.webpackChunkolbongo=self.webpackChunkolbongo||[]).push([[199],{15199:function(e,n,t){t.r(n),t.d(n,{SmsSentPage:function(){return S}});var r=t(78164),a=t(43504),s=t(74165),i=t(15861),c=t(29439),l=t(11730),o=t(14057),u=t(840),d=t(69239),h=t(87012),x=t(72791),p=t(50333),f=t(80184),m=function(e){var n=(0,x.useState)(),t=(0,c.Z)(n,2),r=(t[0],t[1],(0,x.useState)([])),a=(0,c.Z)(r,2),m=a[0],j=a[1],g=(0,x.useState)(1),v=(0,c.Z)(g,2),Z=v[0],S=v[1],y=(0,x.useState)(0),C=(0,c.Z)(y,2),I=C[0],k=C[1],w=(0,x.useState)(20),b=(0,c.Z)(w,2),A=b[0],N=b[1],D=(0,x.useState)(""),P=(0,c.Z)(D,2),z=P[0],E=(P[1],(0,x.useState)(!1)),F=(0,c.Z)(E,2),J=(F[0],F[1]),q=(0,x.useState)(!0),M=(0,c.Z)(q,2),X=M[0],H=M[1],Q=((0,d.HJ)().push,u.l0.useForm()),R=(0,c.Z)(Q,1)[0],T=(u.rj.useBreakpoint().lg,function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.E.custom({url:"",method:"post",metaData:{operation:"syncCombinations",variables:{},fields:["success","message"]}});case 2:n=e.sent,n.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),V=[{title:"Receipient Phone",dataIndex:"receipientPhone",fixed:!0,render:function(e,n,t){return(0,f.jsxs)("span",{children:[(0,f.jsx)("a",{children:n.receipientPhoneNumber}),(0,f.jsx)(u.Vp,{style:{marginLeft:5},children:n.carrier})]})}},{title:"Channel",dataIndex:"channel",fixed:!0,render:function(e,n,t){var r,a;return(0,f.jsx)("span",{children:null===n||void 0===n||null===(r=n.channelMessage)||void 0===r||null===(a=r.channel)||void 0===a?void 0:a.name})}},{title:"Content",dataIndex:"content",fixed:!0,render:function(e,n,t){return(0,f.jsx)("span",{children:(0,f.jsx)("a",{children:n.messageContent})})}},{title:"Status",dataIndex:"status",fixed:!0,render:function(e,n,t){return(0,f.jsx)("span",{children:(0,f.jsx)(u.Vp,{color:n.statusColor,children:n.status})})}},{title:"Created",dataIndex:"created",render:function(e,n,t){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("span",{children:(0,f.jsx)(p.Z,{date:new Date(n.created)})})})}},{title:"Status",dataIndex:"isActive",render:function(e,n,t){return(0,f.jsx)("a",{children:null!==n&&void 0!==n&&n.isActive?(0,f.jsx)("span",{style:{color:"green"},children:"Active"}):(0,f.jsx)("span",{style:{color:"red"},children:"Inactive"})})}},{title:"",dataIndex:"action",render:function(e,n,t){return(0,f.jsx)("span",{})}}],B=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){var t,r,a,i,c=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"",r=c.length>2&&void 0!==c[2]?c[2]:20,e.next=4,h.E.custom({url:"",method:"get",metaData:{operation:"messagesDispatches",variables:{page:{value:n,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{channelMessage:["id","message","messageCount",{creator:["id","fullName","email","phone","firstName","middleName","lastName"]},{channel:["id","name","code"]}]},"receipientPhoneNumber","carrier","statusColor","sentAt","deliveredAt","failedAt","messageCount","messageContent","status","isActive","created","updated","canEdit","canDelete","canManage"]}]}});case 4:a=e.sent,i=a.data,S(i.page),k(i.total),J(i.hasNext),j(i.results),H(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,x.useEffect)((function(){B(Z,"",50)}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(u.X2,{style:{marginTop:10},children:[(0,f.jsx)(u.JX,{span:12,children:(0,f.jsx)(u.l0,{layout:"vertical",form:R,onFinish:function(e){S(1),m.length=0,B(1,e.key)},children:(0,f.jsx)(u.l0.Item,{name:"key",children:(0,f.jsx)(u.II,{size:"large",placeholder:"Search ...",prefix:(0,f.jsx)(l.Z,{}),autoComplete:"off",allowClear:!0})})})}),(0,f.jsx)(u.JX,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:(0,f.jsx)(u.zx,{size:"large",icon:(0,f.jsx)(o.Z,{}),onClick:function(){return T()},children:"Sync CDR"})})]}),(0,f.jsx)("div",{children:(0,f.jsx)(u.iA,{loading:X,columns:V,dataSource:m,scroll:{x:!0},pagination:{onChange:function(e,n){N(n),B(e,z,n)},total:I,pageSize:A,position:["bottomCenter"],showQuickJumper:!0}})})]})},j=t(20852),g=t(59174),v=t(5397),Z=function(){return(0,f.jsxs)("div",{style:{marginTop:10},children:[(0,f.jsxs)(r.Z,{children:[(0,f.jsx)(r.Z.Item,{children:(0,f.jsx)(a.rU,{to:"/control",children:"Home"})}),(0,f.jsx)(r.Z.Item,{children:"Sms Sent"})]}),(0,f.jsx)(m,{height:80})]})},S=function(){return(0,x.useEffect)((function(){window.history.pushState({},"",(0,g.Z)())}),[]),(0,f.jsx)(j.u,{children:(0,f.jsx)(v.Q,{children:(0,f.jsx)(Z,{})})})}}}]);
//# sourceMappingURL=199.cd7cdbfc.chunk.js.map