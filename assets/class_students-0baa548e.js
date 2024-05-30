import{r as a,aT as g,c as E,j as e,aW as N,aP as T,a1 as B,av as S,g as k,cU as se,_ as d,aX as L,aR as ae,aU as y,a8 as ne,cl as _}from"./index-7ac8fc92.js";import{k as U}from"./data_objects-775efe39.js";import{L as M}from"./index-537ec24f.js";import{P as X}from"./index-c1edda26.js";import{A as O}from"./index-76c73f07.js";import{T as G}from"./index-56844372.js";import{S as R}from"./SearchOutlined-a14f7475.js";import{P as oe}from"./PlusCircleOutlined-28480c73.js";import{A as J}from"./FileImageOutlined-eaff111d.js";import{S as K}from"./Skeleton-a1e70c5e.js";import{U as Q}from"./UnlockFilled-cf757df4.js";import{C as ie}from"./index-0a7ff63a.js";import{A as le}from"./Alert-cd7f3232.js";import{M as H}from"./index-7292089d.js";import{F as de}from"./FolderAddOutlined-540dcb9c.js";import{C as V}from"./CloseOutlined-febe954b.js";import{F as W}from"./FolderOpenOutlined-5648794e.js";import{I as ce}from"./InfoCircleOutlined-4fbda646.js";import{L as ue}from"./LockOutlined-1499935c.js";import{M as me}from"./MoreOutlined-4666e32c.js";import{E as Y}from"./ExclamationCircleOutlined-919e7f99.js";import"./data_objects-63bc483e.js";import"./index-03a70552.js";import"./ActionButton-c3339e52.js";import"./EditOutlined-401a1613.js";import"./transButton-d550e0a4.js";import"./index-608513de.js";import"./DotChartOutlined-f39c986e.js";import"./index-0e10b20d.js";import"./InfoCircleFilled-72907a72.js";import"./InfoCircleFilled-baaa675e.js";import"./DialogWrap-b20e3245.js";import"./index-36dcb6e5.js";import"./fade-4eb0cb8a.js";const he=n=>{const[u,m]=a.useState([]),[f,b]=a.useState(!0),[p,j]=a.useState(1),[z,C]=a.useState(0),[I,A]=a.useState(!0),[v]=g.useForm();E();const x=async(r,o="")=>{const{data:s}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudentsToAdd",variables:{page:{value:r,type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:se}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(i=>i);s&&(C(s.total),j(s.page),A(s.hasNext),m(s.results)),b(!1)},w=async r=>{const{data:o}=await k.custom({url:"",method:"post",meta:{operation:"createDarasaStudent",variables:{darasa:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0},student:{value:parseInt(r===void 0?"0":r.toString()),type:"Int",required:!0}},fields:["success","message",{student:U}]}}).catch(()=>(d.error("Error adding student"),{data:null})).then(s=>s);o&&(o.success?(d.success(o.message),m(u.filter(s=>s.id!==r)),n.handleAddingStudent(o.student)):d.error(o.message))};return a.useEffect(()=>{x(p)},[n.random]),e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(T,{span:24,children:e.jsx(g,{layout:"vertical",form:v,onFinish:r=>{j(0),x(0,r.key)},children:e.jsx(g.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search User(s)/Student(s) to Add ...",prefix:e.jsx(R,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(M,{loading:f,dataSource:u,renderItem:r=>e.jsxs(M.Item,{actions:[e.jsx(X,{title:"Are you sure to Add  -"+r.fullName+" ?",onConfirm:()=>w(r.id),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(S,{icon:e.jsx(oe,{}),children:"Add"})})],children:[e.jsx(O,{src:r.pic,style:{marginRight:10}}),r.fullName,e.jsx(J,{}),e.jsx(G.Text,{mark:!0,children:r.email})]})}),I&&e.jsx(S,{onClick:()=>{x(p+1)},type:"primary",style:{margin:"auto",display:"block"},children:"Load More"})]})]})},xe=n=>{const[u,m]=a.useState([]),[f,b]=a.useState(!0),[p,j]=a.useState(1),[z,C]=a.useState(0),[I,A]=a.useState(!0),[v]=g.useForm();E();const x=async(r,o="",s=!1)=>{const{data:i}=await k.custom({url:"",method:"get",meta:{operation:"blockedDarasaStudents",variables:{page:{value:r,type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:U}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(q=>q);i&&(C(i.total),j(i.page),A(i.hasNext),m(i.results)),b(!1)},w=async(r,o)=>{const{data:s}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(r.toString()),type:"Int",required:!0},blocked:{value:o,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:U}]}}).catch(()=>(d.error("Error Unblocking student"),{data:null})).then(i=>i);s&&(s.success?(d.success(s.message),m(u.filter(i=>i.id!==r)),n.handleUnblockingStudent(s.darasaStudent)):d.error(s.message))};return a.useEffect(()=>{x(p)},[n.random]),f?e.jsx(e.Fragment,{children:e.jsx(K,{loading:f,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(T,{span:24,children:e.jsx(g,{layout:"vertical",form:v,onFinish:r=>{j(0),x(0,r.key,!0)},children:e.jsx(g.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search Blocked Students ...",prefix:e.jsx(R,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(M,{dataSource:u,renderItem:r=>{var o,s,i;return e.jsxs(M.Item,{actions:[e.jsx(X,{title:"Are you sure to Unblock  -"+r.user.fullName+" ?",onConfirm:()=>w(r.id,!1),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(S,{icon:e.jsx(Q,{}),children:"Unblock"})})],children:[e.jsx(O,{src:(o=r==null?void 0:r.user)==null?void 0:o.pic,style:{marginRight:10}}),(s=r==null?void 0:r.user)==null?void 0:s.fullName,e.jsx(J,{}),e.jsx(G.Text,{mark:!0,children:(i=r==null?void 0:r.user)==null?void 0:i.email})]})}}),I&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{onClick:()=>x(p+1),disabled:!I,children:"Load More"})})]})]})},Je=n=>{const[u,m]=a.useState([]),[f,b]=a.useState(!0),[p,j]=a.useState(1),[z,C]=a.useState(0),[I,A]=a.useState(0),[v,x]=a.useState(!0),[w]=g.useForm();E();const[r,o]=a.useState(!1),[s,i]=a.useState(!1),q=()=>{o(!0)},D=async(t,l="",c=!1)=>{const{data:h}=await k.custom({url:"",method:"get",meta:{operation:"darasaStudents",variables:{page:{value:t,type:"Int",required:!0},key:{value:l,type:"String",required:!1},id:{value:parseInt(n.id===void 0?"0":n.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:U}]}}).catch(()=>(d.error("Error fetching students"),{data:null})).then(F=>F);h&&(A(h.total),C(h.pages),j(h.page),x(h.hasNext),m(h.results)),b(!1)},Z=async t=>{m([t,...u])},$=async t=>{const{data:l}=await k.custom({url:"",method:"post",meta:{operation:"deleteDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(d.error("Error removing student"),{data:null})).then(c=>c);l&&(l.success?(d.success(l.message),m(u.filter(c=>c.id!==t))):d.error(l.message))},ee=async(t,l)=>{const{data:c}=await k.custom({url:"",method:"post",meta:{operation:"blockUnblockDarasaStudent",variables:{id:{value:parseInt(t.toString()),type:"Int",required:!0},blocked:{value:l,type:"Boolean",required:!0}},fields:["success","message",{darasaStudent:U}]}}).catch(()=>(d.error("Error blocking/unblocking student"),{data:null})).then(h=>h);if(c)if(c.success){d.success(c.message);const h=u.map(F=>F.id===t?c.darasaStudent:F);m(h)}else d.error(c.message)},te=t=>{const l=u.map(c=>c.id===t.id?t:c);m(l)},re=t=>{H.confirm({title:"Removing Student",icon:e.jsx(Y,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>$(t)})},P=(t,l)=>{H.confirm({title:l?"Blocking Student":"Unblocking Student",icon:e.jsx(Y,{}),content:"Are you sure ...",okText:l?"Block":"Unblock",cancelText:"Cancel",onOk:()=>ee(t,l)})};return a.useEffect(()=>{D(p)},[]),f?e.jsx(e.Fragment,{children:e.jsx(K,{loading:f,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsx(T,{span:12,children:e.jsx(g,{layout:"vertical",form:w,onFinish:t=>{j(0),D(0,t.key,!0)},children:e.jsx(g.Item,{name:"key",children:e.jsx(B,{size:"large",placeholder:"Search Student(s)...",prefix:e.jsx(R,{}),autoComplete:"off",allowClear:!0})})})}),e.jsxs(T,{span:12,style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(S,{size:"large",icon:e.jsx(de,{}),onClick:q,disabled:!n.canManage,children:"Add Student"}),e.jsx(S,{size:"large",icon:e.jsx(V,{}),onClick:()=>i(!0),disabled:!n.canManage,children:"Blocked Students"})]})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[u.length>0?e.jsx(N,{align:"top",children:u.map(t=>e.jsx(T,{span:6,children:e.jsxs(ie,{hoverable:t.isActive,style:{marginRight:10,borderColor:t.blocked?"red":"#f0f0f0"},children:[e.jsx(L,{style:{right:0,position:"absolute"},children:e.jsx(ae,{trigger:["click"],overlay:e.jsxs(y,{children:[e.jsx(y.Item,{icon:e.jsx(W,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"View"})}),e.jsx(y.Item,{icon:e.jsx(ce,{}),onClick:()=>d("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(y.Item,{icon:e.jsx(V,{}),onClick:()=>re(t.id),disabled:!t.canDelete,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})}),t.blocked?e.jsx(y.Item,{icon:e.jsx(Q,{}),onClick:()=>P(t.id,!1),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Unblock"})}):e.jsx(y.Item,{icon:e.jsx(ue,{}),onClick:()=>P(t.id,!0),disabled:!t.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Block"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:l=>l.preventDefault(),children:e.jsx(me,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx("a",{children:e.jsxs(L,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(O,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(W,{}),src:t.user.pic}),e.jsx("span",{style:{fontSize:20},children:t.user.fullName})]})})]})}))}):e.jsx(le,{severity:"info",children:"No Student found for this class. Please add some students"}),v&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{onClick:()=>{D(p+1)},disabled:!v,children:f?e.jsx(ne,{}):e.jsx(e.Fragment,{children:e.jsx("span",{children:"Load More"})})})})]}),e.jsx(_,{title:"Adding Students",open:r,onClose:t=>o(t),width:"50vw",children:e.jsx(he,{id:n.id,random:Math.random(),handleAddingStudent:Z})}),e.jsx(_,{title:"Blocked Students",open:s,onClose:t=>i(t),width:"50vw",children:e.jsx(xe,{id:n.id,random:Math.random(),handleUnblockingStudent:te})})]})};export{Je as ClassStudents};
