import{r as a,aT as f,c as E,j as e,aW as M,aP as F,a1 as B,av as S,g as k,cV as se,_ as d,aX as _,aR as ae,aU as y,a8 as ne,cm as H}from"./index-e44e1a6d.js";import{k as N}from"./data_objects-7c205354.js";import{S as O}from"./Skeleton-4fee345f.js";import{L as q}from"./index-ed0e0783.js";import{P as G}from"./index-244ce893.js";import{A as R}from"./index-85059cf6.js";import{T as J}from"./index-8d8b3e76.js";import{S as z}from"./SearchOutlined-b1a83866.js";import{P as oe}from"./PlusCircleOutlined-d385c736.js";import{A as K}from"./FileImageOutlined-4a6fc7f0.js";import{U as Q}from"./UnlockFilled-0978a600.js";import{C as ie}from"./index-2a6e4015.js";import{A as le}from"./Alert-9c453017.js";import{M as V}from"./index-dc3323d2.js";import{F as de}from"./FolderAddOutlined-ea0e9e06.js";import{C as W}from"./CloseOutlined-d2cf6ed5.js";import{F as Y}from"./FolderOpenOutlined-99f3eeb9.js";import{I as ce}from"./InfoCircleOutlined-5b4cb0ab.js";import{L as ue}from"./LockOutlined-c928bab6.js";import{M as me}from"./MoreOutlined-f640145b.js";import{E as X}from"./ExclamationCircleOutlined-503ce594.js";import"./data_objects-d2efaecb.js";import"./DotChartOutlined-f39c986e.js";import"./index-7a457e26.js";import"./ActionButton-330c6123.js";import"./EditOutlined-401a1613.js";import"./transButton-0d90a1f1.js";import"./index-e71ec7da.js";import"./index-24834ec9.js";import"./InfoCircleFilled-6c32ebc6.js";import"./InfoCircleFilled-baaa675e.js";import"./DialogWrap-f973f288.js";import"./index-406e87b5.js";import"./fade-c9034687.js";const he=n=>{const[u,m]=a.useState([]),[x,b]=a.useState(!0),[p,j]=a.useState(1),[P,C]=a.useState(0),[I,A]=a.useState(!0),[v]=f.useForm();E();const g=async(r,o="",i=!1)=>{const{data:s}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudentsToAdd",variables:{page:{value:r,type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:se}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(T=>T);s&&(C(s.total),j(s.page),A(s.hasNext),m(s.results)),b(!1)},w=async r=>{const{data:o}=await k.custom({url:"",method:"post",meta:{operation:"createDarasaStudent",variables:{darasa:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0},student:{value:parseInt(r===void 0?"0":r.toString()),type:"Int",required:!0}},fields:["success","message",{student:N}]}}).catch(()=>(d.error("Error adding student"),{data:null})).then(i=>i);o&&(o.success?(d.success(o.message),m(u.filter(i=>i.id!==r)),n.handleAddingStudent(o.student)):d.error(o.message))};return a.useEffect(()=>{g(p)},[n.random]),x?e.jsx(e.Fragment,{children:e.jsx(O,{loading:x,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsx(F,{span:24,children:e.jsx(f,{layout:"vertical",form:v,onFinish:r=>{j(0),g(0,r.key,!0)},children:e.jsx(f.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search User(s)/Student(s) to Add ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{dataSource:u,renderItem:r=>e.jsxs(q.Item,{actions:[e.jsx(G,{title:"Are you sure to Add  -"+r.fullName+" ?",onConfirm:()=>w(r.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(S,{icon:e.jsx(oe,{}),children:"Add"})})],children:[e.jsx(R,{src:r.pic,style:{marginRight:10}}),r.fullName,e.jsx(K,{}),e.jsx(J.Text,{mark:!0,children:r.email})]})}),I&&e.jsx(S,{onClick:()=>{g(p+1)},type:"primary",style:{margin:"auto",display:"block"},children:"Load More"})]})]})},xe=n=>{const[u,m]=a.useState([]),[x,b]=a.useState(!0),[p,j]=a.useState(1),[P,C]=a.useState(0),[I,A]=a.useState(!0),[v]=f.useForm();E();const g=async(r,o="",i=!1)=>{const{data:s}=await k.custom({url:"",method:"get",meta:{operation:"blockedDarasaStudents",variables:{page:{value:r,type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:N}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(T=>T);s&&(C(s.total),j(s.page),A(s.hasNext),m(s.results)),b(!1)},w=async(r,o)=>{const{data:i}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(r.toString()),type:"Int",required:!0},blocked:{value:o,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:N}]}}).catch(()=>(d.error("Error Unblocking student"),{data:null})).then(s=>s);i&&(i.success?(d.success(i.message),m(u.filter(s=>s.id!==r)),n.handleUnblockingStudent(i.darasaStudent)):d.error(i.message))};return a.useEffect(()=>{g(p)},[n.random]),x?e.jsx(e.Fragment,{children:e.jsx(O,{loading:x,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsx(F,{span:24,children:e.jsx(f,{layout:"vertical",form:v,onFinish:r=>{j(0),g(0,r.key,!0)},children:e.jsx(f.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search Blocked Students ...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{dataSource:u,renderItem:r=>{var o,i,s;return e.jsxs(q.Item,{actions:[e.jsx(G,{title:"Are you sure to Unblock  -"+r.user.fullName+" ?",onConfirm:()=>w(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(S,{icon:e.jsx(Q,{}),children:"Unblock"})})],children:[e.jsx(R,{src:(o=r==null?void 0:r.user)==null?void 0:o.pic,style:{marginRight:10}}),(i=r==null?void 0:r.user)==null?void 0:i.fullName,e.jsx(K,{}),e.jsx(J.Text,{mark:!0,children:(s=r==null?void 0:r.user)==null?void 0:s.email})]})}}),I&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{onClick:()=>g(p+1),disabled:!I,children:"Load More"})})]})]})},Je=n=>{const[u,m]=a.useState([]),[x,b]=a.useState(!0),[p,j]=a.useState(1),[P,C]=a.useState(0),[I,A]=a.useState(0),[v,g]=a.useState(!0),[w]=f.useForm();E();const[r,o]=a.useState(!1),[i,s]=a.useState(!1),T=()=>{o(!0)},D=async(t,l="",c=!1)=>{const{data:h}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudents",variables:{page:{value:t,type:"Int",required:!0},key:{value:l,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:N}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(U=>U);h&&(A(h.total),C(h.pages),j(h.page),g(h.hasNext),m(h.results)),b(!1)},Z=async t=>{m([t,...u])},$=async t=>{const{data:l}=await k.custom({url:"",method:"post",meta:{operation:"deleteDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(d.error("Error removing student"),{data:null})).then(c=>c);l&&(l.success?(d.success(l.message),m(u.filter(c=>c.id!==t))):d.error(l.message))},ee=async(t,l)=>{const{data:c}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0},blocked:{value:l,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:N}]}}).catch(()=>(d.error("Error blocking/unblocking student"),{data:null})).then(h=>h);if(c)if(c.success){d.success(c.message);const h=u.map(U=>U.id===t?c.darasaStudent:U);m(h)}else d.error(c.message)},te=t=>{const l=u.map(c=>c.id===t.id?t:c);m(l)},re=t=>{V.confirm({title:"Removing Student",icon:e.jsx(X,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>$(t)})},L=(t,l)=>{V.confirm({title:l?"Blocking Student":"Unblocking Student",icon:e.jsx(X,{}),content:"Are you sure ...",okText:l?"Block":"Unblock",cancelText:"Cancel",onOk:()=>ee(t,l)})};return a.useEffect(()=>{D(p)},[]),x?e.jsx(e.Fragment,{children:e.jsx(O,{loading:x,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx(F,{span:12,children:e.jsx(f,{layout:"vertical",form:w,onFinish:t=>{j(0),D(0,t.key,!0)},children:e.jsx(f.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search Student(s)...",prefix:e.jsx(z,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(F,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(S,{size:"large",icon:e.jsx(de,{}),onClick:T,disabled:!n.canManage,children:"Add Student"}),e.jsx(S,{size:"large",icon:e.jsx(W,{}),onClick:()=>s(!0),disabled:!n.canManage,children:"Blocked Students"})]})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[u.length>0?e.jsx(M,{align:"top",children:u.map(t=>e.jsx(F,{span:6,children:e.jsxs(ie,{hoverable:t.isActive,style:{marginRight:10,borderColor:t.blocked?"red":"#f0f0f0"},children:[e.jsx(_,{style:{right:0,position:"absolute"},children:e.jsx(ae,{trigger:["click"],overlay:e.jsxs(y,{children:[e.jsx(y.Item,{icon:e.jsx(Y,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"View"})}),e.jsx(y.Item,{icon:e.jsx(ce,{}),onClick:()=>d("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(y.Item,{icon:e.jsx(W,{}),onClick:()=>re(t.id),disabled:!t.canDelete,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})}),t.blocked?e.jsx(y.Item,{icon:e.jsx(Q,{}),onClick:()=>L(t.id,!1),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Unblock"})}):e.jsx(y.Item,{icon:e.jsx(ue,{}),onClick:()=>L(t.id,!0),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Block"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:l=>l.preventDefault(),children:e.jsx(me,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(_,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(R,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(Y,{}),src:t.user.pic}),e.jsx("span",{style:{fontSize:20},children:t.user.fullName})]})})]})}))}):e.jsx(le,{severity:"info",children:"No Student found for this class. Please add some students"}),v&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{onClick:()=>{D(p+1)},disabled:!v,children:x?e.jsx(ne,{}):e.jsx(e.Fragment,{children:e.jsx("span",{children:"Load More"})})})})]}),e.jsx(H,{title:"Adding Students",open:r,onClose:t=>o(t),width:"50vw",children:e.jsx(he,{id:n.id,random:Math.random(),handleAddingStudent:Z})}),e.jsx(H,{title:"Blocked Students",open:i,onClose:t=>s(t),width:"50vw",children:e.jsx(xe,{id:n.id,random:Math.random(),handleUnblockingStudent:te})})]})};export{Je as ClassStudents};
