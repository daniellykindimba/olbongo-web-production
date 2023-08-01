"use strict";(self.webpackChunkolbongo=self.webpackChunkolbongo||[]).push([[426],{52426:function(e,n,t){t.r(n),t.d(n,{CombinationsPage:function(){return M}});var i=t(78164),r=t(43504),a=t(74165),s=t(15861),o=t(29439),c=t(79286),l=t(92827),d=t(82622),u=t(31752),m=t(11730),p=t(14057),h=t(840),x=t(69239),f=t(87012),v=t(72791),j=t(50333),g=t(93433),y=t(98395),b=t(66106),Z=t(30914),S=t(94830),w=t(97587),I=t(96038),C=t(14771),k=t(80184),A=function(e){var n=(0,v.useState)([]),t=(0,o.Z)(n,2),i=t[0],r=t[1],l=(0,v.useState)(!0),d=(0,o.Z)(l,2),u=d[0],p=d[1],j=(0,v.useState)(1),A=(0,o.Z)(j,2),F=A[0],E=A[1],q=(0,v.useState)(25),D=(0,o.Z)(q,2),T=(D[0],D[1],(0,v.useState)("")),z=(0,o.Z)(T,2),N=z[0],M=z[1],L=h.l0.useForm(),Y=(0,o.Z)(L,1)[0],J=(0,v.useState)(0),_=(0,o.Z)(J,2),H=(_[0],_[1],(0,v.useState)(0)),O=(0,o.Z)(H,2),P=O[0],V=(O[1],(0,v.useState)(!0)),X=(0,o.Z)(V,2),B=X[0],K=X[1],Q=((0,x.HJ)().push,function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var s,o,c,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"addCombinationSubject",variables:{combinationId:{value:parseInt(null!==(s=e.combination)&&void 0!==s&&s.id?null===(o=e.combination)||void 0===o?void 0:o.id.toString():"0"),type:"Int",required:!0},subjectId:{value:parseInt(t?t.toString():"0"),type:"Int",required:!0}},fields:["success","message",{combination:["id","name","code","description",{subjects:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}});case 2:c=n.sent,(l=c.data).success?(y.Z.success(l.message),i.length=0,r([]),R(1,N),e.onAdd(l.combination)):y.Z.error(l.message);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),R=function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var s,o,c,l,d,u=arguments;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"",n.next=3,f.E.custom({url:"",method:"get",metaData:{operation:"combinationSubjectsToAdd",variables:{combinationId:{value:parseInt(null!==(s=e.combination)&&void 0!==s&&s.id?null===(o=e.combination)||void 0===o?void 0:o.id.toString():"0"),type:"Int",required:!0},page:{value:t,type:"Int",required:!0},key:{value:c,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","description",{schoolType:["id","name"]},"created","updated","isActive","canEdit","canDelete","canManage"]}]}});case 3:l=n.sent,d=l.data,K(d.hasNext),E(d.page+1),r([].concat((0,g.Z)(i),(0,g.Z)(d.results))),p(!1);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,v.useEffect)((function(){i.length=0,r([]),R(1)}),[e.randKey,e.combination]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b.Z,{children:(0,k.jsx)(Z.Z,{span:24,children:(0,k.jsx)(h.l0,{layout:"vertical",form:Y,onFinish:function(e){M(e.key),i.length=0,r([]),R(1,e.key)},children:(0,k.jsx)(h.l0.Item,{name:"key",children:(0,k.jsx)(S.Z,{size:"large",placeholder:"Search Adminstrator(s)...",prefix:(0,k.jsx)(m.Z,{}),autoComplete:"off",allowClear:!0})})})})}),(0,k.jsx)(h.yC,{spinning:u,children:(0,k.jsx)("div",{id:"scrollableAdminstratorDiv",style:{maxHeight:"60vh",overflowY:"auto"},children:(0,k.jsx)(C.Z,{dataLength:P,next:function(){return R(F,N)},hasMore:B,scrollableTarget:"scrollableAdminstratorDiv",loader:(0,k.jsx)(k.Fragment,{children:i.length>0?(0,k.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:(0,k.jsx)(h.yC,{})}):(0,k.jsx)(k.Fragment,{})}),endMessage:(0,k.jsx)("p",{style:{textAlign:"center",display:i.length>0?"block":"none"},children:(0,k.jsx)("b",{children:"Yay! You have seen it all"})}),children:(0,k.jsx)(w.Z,{itemLayout:"horizontal",dataSource:i,renderItem:function(n){var t;return(0,k.jsx)("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:(0,k.jsx)(w.Z.Item,{style:{margin:0,padding:0},actions:[(0,k.jsx)(I.Z,{placement:"topLeft",title:"Adding "+n.name+" to "+(null===(t=e.combination)||void 0===t?void 0:t.name)+"?",onConfirm:function(){return Q(n.id)},okText:"Yes",cancelText:"No",children:(0,k.jsx)(h.zx,{icon:(0,k.jsx)(c.Z,{})})})],children:(0,k.jsx)(w.Z.Item.Meta,{title:(0,k.jsxs)("a",{children:[n.name,(0,k.jsx)(h.Vp,{color:"green",style:{marginLeft:10},children:n.schoolType.name})]})})},"file-"+n.id)})}})})})})]})},F=function(e){var n=(0,v.useState)([]),t=(0,o.Z)(n,2),i=t[0],r=t[1],c=(0,v.useState)(!0),l=(0,o.Z)(c,2),u=l[0],p=l[1],j=(0,v.useState)(1),A=(0,o.Z)(j,2),F=A[0],E=A[1],q=(0,v.useState)(25),D=(0,o.Z)(q,2),T=(D[0],D[1],(0,v.useState)("")),z=(0,o.Z)(T,2),N=z[0],M=z[1],L=h.l0.useForm(),Y=(0,o.Z)(L,1)[0],J=(0,v.useState)(0),_=(0,o.Z)(J,2),H=(_[0],_[1],(0,v.useState)(0)),O=(0,o.Z)(H,2),P=O[0],V=(O[1],(0,v.useState)(!0)),X=(0,o.Z)(V,2),B=X[0],K=X[1],Q=((0,x.HJ)().push,function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var s,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"removeCombinationSubject",variables:{combinationSubjectId:{value:t,type:"Int",required:!0}},fields:["success","message",{combination:["id","name","code","description",{subjects:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}});case 2:s=n.sent,(o=s.data).success?(y.Z.success(o.message),i.length=0,r([]),R(1,N),e.onAdd(o.combination)):y.Z.error(o.message);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),R=function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var s,o,c,l,d,u=arguments;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"",n.next=3,f.E.custom({url:"",method:"get",metaData:{operation:"combinationSubjects",variables:{combinationId:{value:parseInt(null!==(s=e.combination)&&void 0!==s&&s.id?null===(o=e.combination)||void 0===o?void 0:o.id.toString():"0"),type:"Int",required:!0},page:{value:t,type:"Int",required:!0},key:{value:c,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{combination:["id","name","code"]},{subject:["id","name",{schoolType:["id","name"]}]},"created","updated","isActive","canEdit","canDelete","canManage"]}]}});case 3:l=n.sent,d=l.data,K(d.hasNext),E(d.page+1),r([].concat((0,g.Z)(i),(0,g.Z)(d.results))),p(!1);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,v.useEffect)((function(){i.length=0,r([]),R(1)}),[e.randKey,e.combination]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b.Z,{children:(0,k.jsx)(Z.Z,{span:24,children:(0,k.jsx)(h.l0,{layout:"vertical",form:Y,onFinish:function(e){M(e.key),i.length=0,r([]),R(1,e.key)},children:(0,k.jsx)(h.l0.Item,{name:"key",children:(0,k.jsx)(S.Z,{size:"large",placeholder:"Search Adminstrator(s)...",prefix:(0,k.jsx)(m.Z,{}),autoComplete:"off",allowClear:!0})})})})}),(0,k.jsx)(h.yC,{spinning:u,children:(0,k.jsx)("div",{id:"scrollableAdminstratorDiv",style:{maxHeight:"60vh",overflowY:"auto"},children:(0,k.jsx)(C.Z,{dataLength:P,next:function(){return R(F,N)},hasMore:B,scrollableTarget:"scrollableAdminstratorDiv",loader:(0,k.jsx)(k.Fragment,{children:i.length>0?(0,k.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:10},children:(0,k.jsx)(h.yC,{})}):(0,k.jsx)(k.Fragment,{})}),endMessage:(0,k.jsx)("p",{style:{textAlign:"center",display:i.length>0?"block":"none"},children:(0,k.jsx)("b",{children:"Yay! You have seen it all"})}),children:(0,k.jsx)(w.Z,{itemLayout:"horizontal",dataSource:i,renderItem:function(n){var t;return(0,k.jsx)("div",{style:{background:"white",marginBottom:5,paddingLeft:10,paddingTop:10},children:(0,k.jsx)(w.Z.Item,{style:{margin:0,padding:0},actions:[(0,k.jsx)(I.Z,{placement:"topLeft",title:"Removing "+n.subject.name+" to "+(null===(t=e.combination)||void 0===t?void 0:t.name)+"?",onConfirm:function(){return Q(n.id)},okText:"Yes",cancelText:"No",children:(0,k.jsx)(h.zx,{icon:(0,k.jsx)(d.Z,{})})})],children:(0,k.jsx)(w.Z.Item.Meta,{title:(0,k.jsxs)("a",{children:[n.subject.name,(0,k.jsx)(h.Vp,{color:"green",style:{marginLeft:10},children:n.subject.schoolType.name})]})})},"file-"+n.id)})}})})})})]})},E=function(e){var n=(0,v.useState)(e.combination.isActive),t=(0,o.Z)(n,2),i=t[0],r=t[1],c=h.l0.useForm(),l=(0,o.Z)(c,1)[0],d=function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){var r,s;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"updateCombination",variables:{combinationId:{value:t.combination_id,type:"Int",required:!0},name:{value:t.name,type:"String",required:!0},code:{value:t.code,type:"String",required:!0},description:{value:t.description,type:"String",required:!1},isActive:{value:i,type:"Boolean",required:!1}},fields:["success","message",{combination:["id","name","code","description",{subjects:["id","name"]},"created","updated","isActive","canDelete","canEdit","canManage"]}]}});case 2:r=n.sent,(s=r.data).success?(h.yw.success(s.message),l.resetFields(),e.onFinish(s.combination)):h.yw.error(s.message);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,v.useEffect)((function(){l.setFieldsValue({name:e.combination.name,code:e.combination.code,is_active:e.combination.isActive})}),[e.combination]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(h.l0,{layout:"vertical",form:l,onFinish:function(n){n.is_active=i,n.combination_id=parseInt(e.combination.id.toString()),d(n)},requiredMark:!1,children:[(0,k.jsx)(h.l0.Item,{name:"name",label:"Name",rules:[{required:!0,type:"string",message:"Please input Name"}],children:(0,k.jsx)(h.II,{size:"large",placeholder:"Enter Name ..."})}),(0,k.jsx)(h.l0.Item,{name:"code",label:"Code",rules:[{required:!0,type:"string",message:"Please input Code"}],children:(0,k.jsx)(h.II,{size:"large",placeholder:"Enter Code ..."})}),(0,k.jsx)(h.l0.Item,{name:"is_active",children:(0,k.jsx)(h.XZ,{checked:i,onChange:function(){return r(!i)},children:"Active"})}),(0,k.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,k.jsx)(h.zx,{type:"primary",size:"large",htmlType:"submit",children:"Save"})})]})})},q=function(e){var n=(0,v.useState)(),t=(0,o.Z)(n,2),i=t[0],r=t[1],g=(0,v.useState)([]),y=(0,o.Z)(g,2),b=y[0],Z=y[1],S=(0,v.useState)(1),w=(0,o.Z)(S,2),I=w[0],C=w[1],q=(0,v.useState)(0),D=(0,o.Z)(q,2),T=D[0],z=D[1],N=(0,v.useState)(20),M=(0,o.Z)(N,2),L=M[0],Y=M[1],J=(0,v.useState)(""),_=(0,o.Z)(J,2),H=_[0],O=(_[1],(0,v.useState)(!1)),P=(0,o.Z)(O,2),V=(P[0],P[1]),X=(0,v.useState)(!0),B=(0,o.Z)(X,2),K=B[0],Q=B[1],R=((0,x.HJ)().push,h.l0.useForm()),U=(0,o.Z)(R,1)[0],G=h.l0.useForm(),W=((0,o.Z)(G,1)[0],!h.rj.useBreakpoint().lg),$=(0,v.useState)(!1),ee=(0,o.Z)($,2),ne=ee[0],te=ee[1],ie=(0,v.useState)(!1),re=(0,o.Z)(ie,2),ae=re[0],se=re[1],oe=(0,v.useState)(!1),ce=(0,o.Z)(oe,2),le=ce[0],de=ce[1],ue=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(b.map((function(e){return e.id.toString()===n.id.toString()?n:e}))),te(!1);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),me=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"syncCombinations",variables:{},fields:["success","message"]}});case 2:n=e.sent,(t=n.data).success?(h.yw.success(t.message),fe(I,"",20)):h.yw.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.E.custom({url:"",method:"post",metaData:{operation:"deleteRegion",variables:{id:{value:n,type:"Int",required:!0}},fields:["success","message"]}});case 2:t=e.sent,(i=t.data).success?(h.yw.success(i.message),Z(b.filter((function(e){return e.id!==n})))):h.yw.error(i.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),he=function(){h.yw.info("Canceled")},xe=[{title:"Name",dataIndex:"name",fixed:!0,render:function(e,n,t){return(0,k.jsx)("span",{children:(0,k.jsx)("a",{children:n.name})})}},{title:"Code",dataIndex:"code",fixed:!0,render:function(e,n,t){return(0,k.jsx)("span",{children:(0,k.jsx)("a",{children:n.code})})}},{title:"Subjects",dataIndex:"subjects",fixed:!0,render:function(e,n,t){var i;return(0,k.jsxs)("span",{children:[0===n.subjects.length&&(0,k.jsx)(h.Vp,{color:"red",children:"No Subjects Added"}),n.subjects.length>0&&(null===n||void 0===n||null===(i=n.subjects)||void 0===i?void 0:i.map((function(e){return(0,k.jsx)(h.Vp,{color:"green",children:e.name},e.id)}))),(0,k.jsx)(h.u,{title:"Click to add more subjects",color:"green",children:(0,k.jsx)(h.zx,{icon:(0,k.jsx)(c.Z,{}),onClick:function(){return function(e){r(e),se(!0)}(n)}})}),(0,k.jsx)(h.u,{title:"Click to View Subjects",color:"green",children:(0,k.jsx)(h.zx,{icon:(0,k.jsx)(l.Z,{}),onClick:function(){return function(e){r(e),de(!0)}(n)}})})]})}},{title:"Created",dataIndex:"created",render:function(e,n,t){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("span",{children:(0,k.jsx)(j.Z,{date:new Date(n.created)})})})}},{title:"Status",dataIndex:"isActive",render:function(e,n,t){return(0,k.jsx)("a",{children:null!==n&&void 0!==n&&n.isActive?(0,k.jsx)("span",{style:{color:"green"},children:"Active"}):(0,k.jsx)("span",{style:{color:"red"},children:"Inactive"})})}},{title:"",dataIndex:"action",render:function(e,n,t){return(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,k.jsx)(h.gn,{title:"Are you sure to delete this member?",onConfirm:function(){return pe(null===n||void 0===n?void 0:n.id)},onCancel:function(){return he},okText:"Yes",cancelText:"No",disabled:!(null!==n&&void 0!==n&&n.canDelete),children:(0,k.jsx)(h.zx,{icon:(0,k.jsx)(d.Z,{}),disabled:!(null!==n&&void 0!==n&&n.canDelete),danger:!0})}),(0,k.jsx)(h.zx,{disabled:!(null!==n&&void 0!==n&&n.canEdit),onClick:function(){return function(e){r(e),te(!0)}(n)},icon:(0,k.jsx)(u.Z,{}),danger:!0})]})}}],fe=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var t,i,r,s,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"",i=o.length>2&&void 0!==o[2]?o[2]:20,e.next=4,f.E.custom({url:"",method:"get",metaData:{operation:"combinations",variables:{page:{value:n,type:"Int",required:!0},key:{value:t,type:"String",required:!1},pageSize:{value:i,type:"Int",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","name","code","description",{subjects:["id","name"]},"isActive","created","updated","canEdit","canDelete","canManage"]}]}});case 4:r=e.sent,s=r.data,C(s.page),z(s.total),V(s.hasNext),Z(s.results),Q(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ve=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(b.map((function(e){return parseInt(e.id.toString())===parseInt(n.id.toString())?n:e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),je=function(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(h.l0,{layout:"vertical",form:U,onFinish:function(e){C(1),b.length=0,fe(1,e.key)},children:(0,k.jsx)(h.l0.Item,{name:"key",children:(0,k.jsx)(h.II,{size:"large",placeholder:"Search ...",prefix:(0,k.jsx)(m.Z,{}),autoComplete:"off",allowClear:!0})})})})},ge=function(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(h.zx,{size:"large",icon:(0,k.jsx)(p.Z,{}),onClick:function(){return me()},children:"Sync Combinations"})})};return(0,v.useEffect)((function(){fe(I,"",20)}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(h.X2,{style:{marginTop:10},children:[W&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h.JX,{span:24,style:{display:"flex",justifyContent:"flex-end"},children:ge()}),(0,k.jsx)(h.JX,{span:24,children:je()})]}),!W&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h.JX,{span:12,children:je()}),(0,k.jsx)(h.JX,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:ge()})]})]}),(0,k.jsx)("div",{children:(0,k.jsx)(h.iA,{loading:K,columns:xe,dataSource:b,scroll:{x:!0},pagination:{onChange:function(e,n){Y(n),fe(e,H,n)},total:T,pageSize:L,position:["bottomCenter"],showQuickJumper:!0}})}),(0,k.jsx)(h.u_,{title:"Editting "+(null===i||void 0===i?void 0:i.name)+" Informations",width:W?"100vw":"40vw",destroyOnClose:!0,visible:ne,onOk:function(){te(!1)},onCancel:function(){te(!1)},footer:[],children:(0,k.jsx)(E,{combination:i,onFinish:ue})}),(0,k.jsx)(h.u_,{title:"Adding Subjects to "+(null===i||void 0===i?void 0:i.name),width:W?"100vw":"40vw",destroyOnClose:!0,visible:ae,onOk:function(){r(void 0),se(!1)},onCancel:function(){r(void 0),se(!1)},footer:[],children:(0,k.jsx)(A,{combination:i,onAdd:ve})}),(0,k.jsx)(h.u_,{title:(null===i||void 0===i?void 0:i.name)+" Subjects",width:W?"100vw":"40vw",destroyOnClose:!0,visible:le,onOk:function(){r(void 0),de(!1)},onCancel:function(){r(void 0),de(!1)},footer:[],children:(0,k.jsx)(F,{combination:i,onAdd:ve})})]})},D=t(20852),T=t(59174),z=t(5397),N=function(){return(0,k.jsxs)("div",{style:{marginTop:10},children:[(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(i.Z.Item,{children:(0,k.jsx)(r.rU,{to:"/control/combinations",children:"Home"})}),(0,k.jsx)(i.Z.Item,{children:"Combinations"})]}),(0,k.jsx)(q,{height:80})]})},M=function(){var e=(0,x.kS)().data;return(0,v.useEffect)((function(){!1!==(null===e||void 0===e?void 0:e.isStaff)&&!1!==(null===e||void 0===e?void 0:e.isAdmin)||(window.location.pathname="/home"),window.history.pushState({},"",(0,T.Z)())}),[]),(0,k.jsx)(D.u,{children:(0,k.jsx)(z.Q,{children:(0,k.jsx)(N,{})})})}}}]);
//# sourceMappingURL=426.ba40c451.chunk.js.map