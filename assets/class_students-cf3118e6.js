import{r,F as j,m as E,j as e,aE as B,R as U,n as F,I as O,aP as z,aC as q,aD as J,a as p,aY as ae,am as R,b3 as K,aV as Q,g as k,bv as re,_ as d,bd as X,ij as ne,b4 as _,k as le,al as H,ax as oe,ay as y,aS as V,f as ie,bt as de,az as ce,S as ue,M as Y,aT as W}from"./index-cdd95245.js";import{k as N}from"./data_objects-49bfabb0.js";import{A as he}from"./Alert-7f4ee931.js";import{M as G}from"./index-d04ae3d3.js";import"./data_objects-b1ad9e08.js";import"./DialogWrap-870f1462.js";import"./index-a087753e.js";const xe=n=>{const[u,h]=r.useState([]),[m,b]=r.useState(!0),[f,S]=r.useState(1),[P,C]=r.useState(0),[I,w]=r.useState(!0),[v]=j.useForm();E();const g=async(s,l="",o=!1)=>{const{data:a}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudentsToAdd",variables:{page:{value:s,type:"Int",required:!0},key:{value:l,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:re}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(T=>T);a&&(C(a.total),S(a.page),w(a.hasNext),h(a.results)),b(!1)},A=async s=>{const{data:l}=await k.custom({url:"",method:"post",meta:{operation:"createDarasaStudent",variables:{darasa:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0},student:{value:parseInt(s===void 0?"0":s.toString()),type:"Int",required:!0}},fields:["success","message",{student:N}]}}).catch(()=>(d.error("Error adding student"),{data:null})).then(o=>o);l&&(l.success?(d.success(l.message),h(u.filter(o=>o.id!==s)),n.handleAddingStudent(l.student)):d.error(l.message))};return r.useEffect(()=>{g(f)},[n.random]),m?e.jsx(e.Fragment,{children:e.jsx(B,{loading:m,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx(F,{span:24,children:e.jsx(j,{layout:"vertical",form:v,onFinish:s=>{S(0),g(0,s.key,!0)},children:e.jsx(j.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search User(s)/Student(s) to Add ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{dataSource:u,renderItem:s=>e.jsxs(q.Item,{actions:[e.jsx(J,{title:"Are you sure to Add  -"+s.fullName+" ?",onConfirm:()=>A(s.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(p,{icon:e.jsx(ae,{}),children:"Add"})})],children:[e.jsx(R,{src:s.pic,style:{marginRight:10}}),s.fullName,e.jsx(K,{}),e.jsx(Q.Text,{mark:!0,children:s.email})]})}),I&&e.jsx(p,{onClick:()=>{g(f+1)},type:"primary",style:{margin:"auto",display:"block"},children:"Load More"})]})]})},me=n=>{const[u,h]=r.useState([]),[m,b]=r.useState(!0),[f,S]=r.useState(1),[P,C]=r.useState(0),[I,w]=r.useState(!0),[v]=j.useForm();E();const g=async(s,l="",o=!1)=>{const{data:a}=await k.custom({url:"",method:"get",meta:{operation:"blockedDarasaStudents",variables:{page:{value:s,type:"Int",required:!0},key:{value:l,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:N}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(T=>T);a&&(C(a.total),S(a.page),w(a.hasNext),h(a.results)),b(!1)},A=async(s,l)=>{const{data:o}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(s.toString()),type:"Int",required:!0},blocked:{value:l,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:N}]}}).catch(()=>(d.error("Error Unblocking student"),{data:null})).then(a=>a);o&&(o.success?(d.success(o.message),h(u.filter(a=>a.id!==s)),n.handleUnblockingStudent(o.darasaStudent)):d.error(o.message))};return r.useEffect(()=>{g(f)},[n.random]),m?e.jsx(e.Fragment,{children:e.jsx(B,{loading:m,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx(F,{span:24,children:e.jsx(j,{layout:"vertical",form:v,onFinish:s=>{S(0),g(0,s.key,!0)},children:e.jsx(j.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search Blocked Students ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{dataSource:u,renderItem:s=>{var l,o,a;return e.jsxs(q.Item,{actions:[e.jsx(J,{title:"Are you sure to Unblock  -"+s.user.fullName+" ?",onConfirm:()=>A(s.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(p,{icon:e.jsx(X,{}),children:"Unblock"})})],children:[e.jsx(R,{src:(l=s==null?void 0:s.user)==null?void 0:l.pic,style:{marginRight:10}}),(o=s==null?void 0:s.user)==null?void 0:o.fullName,e.jsx(K,{}),e.jsx(Q.Text,{mark:!0,children:(a=s==null?void 0:s.user)==null?void 0:a.email})]})}}),I&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(p,{onClick:()=>g(f+1),disabled:!I,children:"Load More"})})]})]})},ye=n=>{const[u,h]=r.useState([]),[m,b]=r.useState(!0),[f,S]=r.useState(1),[P,C]=r.useState(0),[I,w]=r.useState(0),[v,g]=r.useState(!0),[A]=j.useForm();E();const[s,l]=r.useState(!1),[o,a]=r.useState(!1),T=()=>{l(!0)},D=async(t,i="",c=!1)=>{const{data:x}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudents",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:N}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(M=>M);x&&(w(x.total),C(x.pages),S(x.page),g(x.hasNext),h(x.results)),b(!1)},Z=async t=>{h([t,...u])},$=async t=>{const{data:i}=await k.custom({url:"",method:"post",meta:{operation:"deleteDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(d.error("Error removing student"),{data:null})).then(c=>c);i&&(i.success?(d.success(i.message),h(u.filter(c=>c.id!==t))):d.error(i.message))},ee=async(t,i)=>{const{data:c}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0},blocked:{value:i,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:N}]}}).catch(()=>(d.error("Error blocking/unblocking student"),{data:null})).then(x=>x);if(c)if(c.success){d.success(c.message);const x=u.map(M=>M.id===t?c.darasaStudent:M);h(x)}else d.error(c.message)},te=t=>{const i=u.map(c=>c.id===t.id?t:c);h(i)},se=t=>{G.confirm({title:"Removing Student",icon:e.jsx(W,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>$(t)})},L=(t,i)=>{G.confirm({title:i?"Blocking Student":"Unblocking Student",icon:e.jsx(W,{}),content:"Are you sure ...",okText:i?"Block":"Unblock",cancelText:"Cancel",onOk:()=>ee(t,i)})};return r.useEffect(()=>{D(f)},[]),m?e.jsx(e.Fragment,{children:e.jsx(B,{loading:m,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(F,{span:12,children:e.jsx(j,{layout:"vertical",form:A,onFinish:t=>{S(0),D(0,t.key,!0)},children:e.jsx(j.Item,{name:"key",children:e.jsx(O,{size:"large",placeholder:"Search Student(s)...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(F,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(p,{size:"large",icon:e.jsx(ne,{}),onClick:T,disabled:!n.canManage,children:"Add Student"}),e.jsx(p,{size:"large",icon:e.jsx(_,{}),onClick:()=>a(!0),disabled:!n.canManage,children:"Blocked Students"})]})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[u.length>0?e.jsx(U,{align:"top",children:u.map(t=>e.jsx(F,{span:6,children:e.jsxs(le,{hoverable:t.isActive,style:{marginRight:10,borderColor:t.blocked?"red":"#f0f0f0"},children:[e.jsx(H,{style:{right:0,position:"absolute"},children:e.jsx(oe,{trigger:["click"],overlay:e.jsxs(y,{children:[e.jsx(y.Item,{icon:e.jsx(V,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"View"})}),e.jsx(y.Item,{icon:e.jsx(ie,{}),onClick:()=>d("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(y.Item,{icon:e.jsx(_,{}),onClick:()=>se(t.id),disabled:!t.canDelete,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})}),t.blocked?e.jsx(y.Item,{icon:e.jsx(X,{}),onClick:()=>L(t.id,!1),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Unblock"})}):e.jsx(y.Item,{icon:e.jsx(de,{}),onClick:()=>L(t.id,!0),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Block"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:i=>i.preventDefault(),children:e.jsx(ce,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(H,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(R,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(V,{}),src:t.user.pic}),e.jsx("span",{style:{fontSize:20},children:t.user.fullName})]})})]})}))}):e.jsx(he,{severity:"info",children:"No Student found for this class. Please add some students"}),v&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(p,{onClick:()=>{D(f+1)},disabled:!v,children:m?e.jsx(ue,{}):e.jsx(e.Fragment,{children:e.jsx("span",{children:"Load More"})})})})]}),e.jsx(Y,{title:"Adding Students",open:s,onClose:t=>l(t),width:"50vw",children:e.jsx(xe,{id:n.id,random:Math.random(),handleAddingStudent:Z})}),e.jsx(Y,{title:"Blocked Students",open:o,onClose:t=>a(t),width:"50vw",children:e.jsx(me,{id:n.id,random:Math.random(),handleUnblockingStudent:te})})]})};export{ye as ClassStudents};
