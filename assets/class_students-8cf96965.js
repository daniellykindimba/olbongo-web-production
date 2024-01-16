import{r,c as j,l as D,j as e,f as E,R as U,d as N,I as O,e as z,L as q,a3 as Z,B as p,ar as ae,A as R,az as $,am as G,g as k,bc as re,_ as d,gK as T,aW as J,gw as ne,aB as _,C as le,S as H,Y as oe,Z as y,F as V,$ as ie,ba as de,a0 as ce,ah as ue,a as he,M as Y,ai as W,aj as K}from"./index-c92f9f6b.js";const xe=n=>{const[u,h]=r.useState([]),[g,b]=r.useState(!0),[f,S]=r.useState(1),[L,C]=r.useState(0),[I,w]=r.useState(!0),[v]=j.useForm();D();const m=async(s,l="",o=!1)=>{const{data:a}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudentsToAdd",variables:{page:{value:s,type:"Int",required:!0},key:{value:l,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:re}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(F=>F);a&&(C(a.total),S(a.page),w(a.hasNext),h(a.results)),b(!1)},A=async s=>{const{data:l}=await k.custom({url:"",method:"post",meta:{operation:"createDarasaStudent",variables:{darasa:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0},student:{value:parseInt(s===void 0?"0":s.toString()),type:"Int",required:!0}},fields:["success","message",{student:T}]}}).catch(()=>(d.error("Error adding student"),{data:null})).then(o=>o);l&&(l.success?(d.success(l.message),h(u.filter(o=>o.id!==s)),n.handleAddingStudent(l.student)):d.error(l.message))};return r.useEffect(()=>{m(f)},[n.random]),g?e.jsx(e.Fragment,{children:e.jsx(E,{loading:g,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx(N,{span:24,children:e.jsx(j,{layout:"vertical",form:v,onFinish:s=>{S(0),m(0,s.key,!0)},children:e.jsx(j.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search User(s)/Student(s) to Add ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{dataSource:u,renderItem:s=>e.jsxs(q.Item,{actions:[e.jsx(Z,{title:"Are you sure to Add  -"+s.fullName+" ?",onConfirm:()=>A(s.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(p,{icon:e.jsx(ae,{}),children:"Add"})})],children:[e.jsx(R,{src:s.pic,style:{marginRight:10}}),s.fullName,e.jsx($,{}),e.jsx(G.Text,{mark:!0,children:s.email})]})}),I&&e.jsx(p,{onClick:()=>{m(f+1)},type:"primary",style:{margin:"auto",display:"block"},children:"Load More"})]})]})},ge=n=>{const[u,h]=r.useState([]),[g,b]=r.useState(!0),[f,S]=r.useState(1),[L,C]=r.useState(0),[I,w]=r.useState(!0),[v]=j.useForm();D();const m=async(s,l="",o=!1)=>{const{data:a}=await k.custom({url:"",method:"get",meta:{operation:"blockedDarasaStudents",variables:{page:{value:s,type:"Int",required:!0},key:{value:l,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:T}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(F=>F);a&&(C(a.total),S(a.page),w(a.hasNext),h(a.results)),b(!1)},A=async(s,l)=>{const{data:o}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(s.toString()),type:"Int",required:!0},blocked:{value:l,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:T}]}}).catch(()=>(d.error("Error Unblocking student"),{data:null})).then(a=>a);o&&(o.success?(d.success(o.message),h(u.filter(a=>a.id!==s)),n.handleUnblockingStudent(o.darasaStudent)):d.error(o.message))};return r.useEffect(()=>{m(f)},[n.random]),g?e.jsx(e.Fragment,{children:e.jsx(E,{loading:g,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx(N,{span:24,children:e.jsx(j,{layout:"vertical",form:v,onFinish:s=>{S(0),m(0,s.key,!0)},children:e.jsx(j.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search Blocked Students ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{dataSource:u,renderItem:s=>{var l,o,a;return e.jsxs(q.Item,{actions:[e.jsx(Z,{title:"Are you sure to Unblock  -"+s.user.fullName+" ?",onConfirm:()=>A(s.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(p,{icon:e.jsx(J,{}),children:"Unblock"})})],children:[e.jsx(R,{src:(l=s==null?void 0:s.user)==null?void 0:l.pic,style:{marginRight:10}}),(o=s==null?void 0:s.user)==null?void 0:o.fullName,e.jsx($,{}),e.jsx(G.Text,{mark:!0,children:(a=s==null?void 0:s.user)==null?void 0:a.email})]})}}),I&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(p,{onClick:()=>m(f+1),disabled:!I,children:"Load More"})})]})]})},je=n=>{const[u,h]=r.useState([]),[g,b]=r.useState(!0),[f,S]=r.useState(1),[L,C]=r.useState(0),[I,w]=r.useState(0),[v,m]=r.useState(!0),[A]=j.useForm();D();const[s,l]=r.useState(!1),[o,a]=r.useState(!1),F=()=>{l(!0)},B=async(t,i="",c=!1)=>{const{data:x}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudents",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:T}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(M=>M);x&&(w(x.total),C(x.pages),S(x.page),m(x.hasNext),h(x.results)),b(!1)},Q=async t=>{h([t,...u])},X=async t=>{const{data:i}=await k.custom({url:"",method:"post",meta:{operation:"deleteDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(d.error("Error removing student"),{data:null})).then(c=>c);i&&(i.success?(d.success(i.message),h(u.filter(c=>c.id!==t))):d.error(i.message))},ee=async(t,i)=>{const{data:c}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0},blocked:{value:i,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:T}]}}).catch(()=>(d.error("Error blocking/unblocking student"),{data:null})).then(x=>x);if(c)if(c.success){d.success(c.message);const x=u.map(M=>M.id===t?c.darasaStudent:M);h(x)}else d.error(c.message)},te=t=>{const i=u.map(c=>c.id===t.id?t:c);h(i)},se=t=>{W.confirm({title:"Removing Student",icon:e.jsx(K,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>X(t)})},P=(t,i)=>{W.confirm({title:i?"Blocking Student":"Unblocking Student",icon:e.jsx(K,{}),content:"Are you sure ...",okText:i?"Block":"Unblock",cancelText:"Cancel",onOk:()=>ee(t,i)})};return r.useEffect(()=>{B(f)},[]),g?e.jsx(e.Fragment,{children:e.jsx(E,{loading:g,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(N,{span:12,children:e.jsx(j,{layout:"vertical",form:A,onFinish:t=>{S(0),B(0,t.key,!0)},children:e.jsx(j.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search Student(s)...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(N,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(p,{size:"large",icon:e.jsx(ne,{}),onClick:F,disabled:!n.canManage,children:"Add Student"}),e.jsx(p,{size:"large",icon:e.jsx(_,{}),onClick:()=>a(!0),disabled:!n.canManage,children:"Blocked Students"})]})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[u.length>0?e.jsx(U,{align:"top",children:u.map(t=>e.jsx(N,{span:6,children:e.jsxs(le,{hoverable:t.isActive,style:{marginRight:10,borderColor:t.blocked?"red":"#f0f0f0"},children:[e.jsx(H,{style:{right:0,position:"absolute"},children:e.jsx(oe,{trigger:["click"],overlay:e.jsxs(y,{children:[e.jsx(y.Item,{icon:e.jsx(V,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"View"})}),e.jsx(y.Item,{icon:e.jsx(ie,{}),onClick:()=>d("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(y.Item,{icon:e.jsx(_,{}),onClick:()=>se(t.id),disabled:!t.canDelete,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})}),t.blocked?e.jsx(y.Item,{icon:e.jsx(J,{}),onClick:()=>P(t.id,!1),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Unblock"})}):e.jsx(y.Item,{icon:e.jsx(de,{}),onClick:()=>P(t.id,!0),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Block"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:i=>i.preventDefault(),children:e.jsx(ce,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(H,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(R,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(V,{}),src:t.user.pic}),e.jsx("span",{style:{fontSize:20},children:t.user.fullName})]})})]})}))}):e.jsx(ue,{severity:"info",children:"No Student found for this class. Please add some students"}),v&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(p,{onClick:()=>{B(f+1)},disabled:!v,children:g?e.jsx(he,{}):e.jsx(e.Fragment,{children:e.jsx("span",{children:"Load More"})})})})]}),e.jsx(Y,{title:"Adding Students",open:s,onClose:t=>l(t),width:"50vw",children:e.jsx(xe,{id:n.id,random:Math.random(),handleAddingStudent:Q})}),e.jsx(Y,{title:"Blocked Students",open:o,onClose:t=>a(t),width:"50vw",children:e.jsx(ge,{id:n.id,random:Math.random(),handleUnblockingStudent:te})})]})};export{je as ClassStudents};
