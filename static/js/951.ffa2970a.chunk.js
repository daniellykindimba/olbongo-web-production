"use strict";(self.webpackChunkolbongo=self.webpackChunkolbongo||[]).push([[951],{6951:function(e,n,t){t.r(n),t.d(n,{BannedWordsPage:function(){return S}});var r=t(78164),s=t(43504),a=t(20852),i=t(72791),o=t(59174),d=t(5397),c=t(69239),u=t(74165),l=t(93433),f=t(15861),x=t(29439),p=t(82622),h=t(31752),m=t(11730),v=t(79286),j=t(14057),y=t(840),g=t(87012),w=t(50333),Z=t(80184),C=(y.II.TextArea,function(e){var n=y.l0.useForm(),t=(0,x.Z)(n,1)[0],r=function(){var n=(0,f.Z)((0,u.Z)().mark((function n(r){var s,a;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.E.custom({url:"",method:"post",metaData:{operation:"createBannedWord",variables:{word:{value:r.word,type:"String",required:!0}},fields:["success","message",{bannedWord:["id","word","created","updated","isActive","canDelete","canEdit","canManage"]}]}});case 2:s=n.sent,(a=s.data).success?(y.yw.success(a.message),t.resetFields(),e.onFinish(a.bannedWord)):y.yw.error(a.message);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(y.l0,{layout:"vertical",form:t,onFinish:function(e){r(e)},requiredMark:!1,children:[(0,Z.jsx)(y.l0.Item,{name:"word",label:"Banned Word",rules:[{required:!0,type:"string",message:"Please input Word"}],children:(0,Z.jsx)(y.II,{size:"large",placeholder:"Enter Banned Word ..."})}),(0,Z.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,Z.jsx)(y.zx,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})}),k=(y.II.TextArea,function(e){var n,t=y.l0.useForm(),r=(0,x.Z)(t,1)[0];(0,i.useEffect)((function(){e.word&&r.setFieldsValue({word:e.word.word})}),[e.word]);var s=function(){var n=(0,f.Z)((0,u.Z)().mark((function n(t){var s,a,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.E.custom({url:"",method:"post",metaData:{operation:"updateBannedWord",variables:{id:{value:null===(s=e.word)||void 0===s?void 0:s.id,type:"Int",required:!0},word:{value:t.word,type:"String",required:!0}},fields:["success","message",{bannedWord:["id","word","created","updated","isActive","canDelete","canEdit","canManage"]}]}});case 2:a=n.sent,(i=a.data).success?(y.yw.success(i.message),r.resetFields(),e.onFinish(i.bannedWord)):y.yw.error(i.message);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(y.l0,{layout:"vertical",form:r,onFinish:function(e){s(e)},requiredMark:!0,initialValues:{word:null===(n=e.word)||void 0===n?void 0:n.word},children:[(0,Z.jsx)(y.l0.Item,{name:"word",label:"Banned Word",rules:[{required:!0,type:"string",message:"Please input Word"}],children:(0,Z.jsx)(y.II,{size:"large",placeholder:"Enter Banned Word ..."})}),(0,Z.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,Z.jsx)(y.zx,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})}),b=function(e){var n=(0,i.useState)(),t=(0,x.Z)(n,2),r=t[0],s=t[1],a=(0,i.useState)([]),o=(0,x.Z)(a,2),d=o[0],b=o[1],I=(0,i.useState)(1),S=(0,x.Z)(I,2),F=S[0],W=S[1],z=(0,i.useState)(0),B=(0,x.Z)(z,2),E=B[0],A=B[1],D=(0,i.useState)(20),q=(0,x.Z)(D,2),T=q[0],J=q[1],M=(0,i.useState)(""),X=(0,x.Z)(M,2),N=X[0],O=(X[1],(0,i.useState)(!1)),P=(0,x.Z)(O,2),H=(P[0],P[1]),Q=(0,i.useState)(!0),V=(0,x.Z)(Q,2),Y=V[0],_=V[1],U=((0,c.HJ)().push,y.l0.useForm()),G=(0,x.Z)(U,1)[0],K=y.l0.useForm(),L=((0,x.Z)(K,1)[0],!y.rj.useBreakpoint().lg),R=(0,i.useState)(!1),$=(0,x.Z)(R,2),ee=$[0],ne=$[1],te=(0,i.useState)(!1),re=(0,x.Z)(te,2),se=re[0],ae=re[1],ie=function(){var e=(0,f.Z)((0,u.Z)().mark((function e(n){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b([n].concat((0,l.Z)(d)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),oe=function(){var e=(0,f.Z)((0,u.Z)().mark((function e(n){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(d.map((function(e){return e.id===n.id?n:e}))),ne(!1);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),de=function(){var e=(0,f.Z)((0,u.Z)().mark((function e(n){var t,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.E.custom({url:"",method:"post",metaData:{operation:"deleteBannedWord",variables:{id:{value:n,type:"Int",required:!0}},fields:["success","message"]}});case 2:t=e.sent,(r=t.data).success?(y.yw.success(r.message),b(d.filter((function(e){return e.id!==n})))):y.yw.error(r.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ce=function(){var e=(0,f.Z)((0,u.Z)().mark((function e(){var n,t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.E.custom({url:"",method:"post",metaData:{operation:"syncBannedWords",variables:{},fields:["success","message"]}});case 2:n=e.sent,(t=n.data).success?(y.yw.success(t.message),fe(1)):y.yw.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){y.yw.info("Canceled")},le=[{title:"Word",dataIndex:"word",fixed:!0,render:function(e,n,t){return(0,Z.jsx)("span",{children:(0,Z.jsx)("a",{children:n.word})})}},{title:"Created",dataIndex:"created",render:function(e,n,t){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("span",{children:(0,Z.jsx)(w.Z,{date:new Date(n.created)})})})}},{title:"Status",dataIndex:"isActive",render:function(e,n,t){return(0,Z.jsx)("a",{children:null!==n&&void 0!==n&&n.isActive?(0,Z.jsx)("span",{style:{color:"green"},children:"Active"}):(0,Z.jsx)("span",{style:{color:"red"},children:"Inactive"})})}},{title:"",dataIndex:"action",render:function(e,n,t){return(0,Z.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,Z.jsx)(y.gn,{title:"Are you sure to delete this Curriculum?",onConfirm:function(){return de(null===n||void 0===n?void 0:n.id)},onCancel:function(){return ue},okText:"Yes",cancelText:"No",disabled:!(null!==n&&void 0!==n&&n.canDelete),children:(0,Z.jsx)(y.zx,{icon:(0,Z.jsx)(p.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canDelete)})}),(0,Z.jsx)(y.zx,{disabled:!(null!==n&&void 0!==n&&n.canEdit),icon:(0,Z.jsx)(h.Z,{}),onClick:function(){return function(e){s(e),ne(!0)}(n)}})]})}}],fe=function(){var e=(0,f.Z)((0,u.Z)().mark((function e(n){var t,r,s,a,i=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:20,e.next=4,g.E.custom({url:"",method:"get",metaData:{operation:"bannedWords",variables:{page:{value:n,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","word","isActive","created","updated","canEdit","canDelete","canManage"]}]}});case 4:s=e.sent,a=s.data,W(a.page),A(a.total),H(a.hasNext),b(a.results),_(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),xe=function(){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(y.l0,{layout:"vertical",form:G,onFinish:function(e){W(1),d.length=0,fe(1,e.key)},children:(0,Z.jsx)(y.l0.Item,{name:"key",children:(0,Z.jsx)(y.II,{size:"large",placeholder:"Search ...",prefix:(0,Z.jsx)(m.Z,{}),autoComplete:"off",allowClear:!0})})})})},pe=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y.zx,{icon:(0,Z.jsx)(v.Z,{}),size:"large",onClick:function(){return ae(!0)},children:"Add Word"}),(0,Z.jsx)(y.gn,{title:"Are you sure to sync default Banned Words?",placement:"left",onConfirm:function(){ce()},onCancel:function(){},okText:"Yes",cancelText:"No",children:(0,Z.jsx)(y.zx,{icon:(0,Z.jsx)(j.Z,{}),size:"large",children:"Sync Default Banned Words"})})]})};return(0,i.useEffect)((function(){fe(F)}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(y.X2,{style:{marginTop:10},children:[L&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y.JX,{span:24,style:{display:"flex",justifyContent:"flex-end"},children:pe()}),(0,Z.jsx)(y.JX,{span:24,children:xe()})]}),!L&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y.JX,{span:12,children:xe()}),(0,Z.jsx)(y.JX,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:pe()})]})]}),(0,Z.jsx)("div",{children:(0,Z.jsx)(y.iA,{loading:Y,columns:le,dataSource:d,scroll:{x:!0},pagination:{onChange:function(e,n){J(n),fe(e,N,n)},total:E,pageSize:T,position:["bottomCenter"],showQuickJumper:!1}})}),(0,Z.jsx)(y.u_,{title:"Edit Banned Word",width:L?"100vw":"45vw",visible:ee,destroyOnClose:!0,onOk:function(){ne(!1)},onCancel:function(){ne(!1)},footer:[],children:(0,Z.jsx)(k,{word:r,onFinish:oe})}),(0,Z.jsx)(y.u_,{title:"Create Banned Word",width:L?"100vw":"35vw",visible:se,destroyOnClose:!0,onOk:function(){return ae(!1)},onCancel:function(){return ae(!1)},footer:[],children:(0,Z.jsx)(C,{onFinish:ie})})]})},I=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{style:{marginTop:10,marginBottom:10},children:(0,Z.jsxs)(r.Z,{children:[(0,Z.jsx)(r.Z.Item,{children:(0,Z.jsx)(s.rU,{to:"/control/analytics",children:"Home"})}),(0,Z.jsx)(r.Z.Item,{children:"Curriculums"})]})}),(0,Z.jsx)(b,{height:80})]})},S=function(){var e=(0,c.kS)().data;return(0,i.useEffect)((function(){!1!==(null===e||void 0===e?void 0:e.isStaff)&&!1!==(null===e||void 0===e?void 0:e.isAdmin)||(window.location.pathname="/home"),window.history.pushState({},"",(0,o.Z)())}),[]),(0,Z.jsx)(a.u,{children:(0,Z.jsx)(d.Q,{children:(0,Z.jsx)(I,{})})})}}}]);
//# sourceMappingURL=951.ffa2970a.chunk.js.map