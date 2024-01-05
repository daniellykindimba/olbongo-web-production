import{r as s,F as j,q as V,j as e,u as l,G as c,I as G,S as _,s as J,C as T,v as S,Z as W,$ as D,ao as b,a1 as Z,an as $,A as Q,x as U,ap as X,aq as Y,H as ee,B as te,J as k,K as d,aV as se,au as ne}from"./index-96b6a8d9.js";import{D as ae}from"./drive_info-6d738c29.js";import{B as p}from"./Breadcrumb-249d9435.js";const re=oe=>{const[u,f]=s.useState([]),[a,h]=s.useState(),[o,v]=s.useState(!0),[F,I]=s.useState(""),[y,w]=s.useState(24),[B,x]=s.useState(0),[P,q]=s.useState(0),[le,z]=s.useState(0),[M,N]=s.useState(!0),[A,H]=s.useState(!1),[L]=j.useForm();V();const[O,m]=s.useState(!1),C=t=>{h(t),m(!0)},E=t=>{m(t),h(null)},K=async t=>{const{data:n}=await k.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(d.error("Drive connection failed"),{data:null})).then(i=>i);n&&(n.success?(m(!1),h(null),d(n.message),f(u.filter(i=>i.id!==t))):d.error(n.message))},g=async(t,n=10,i="")=>{v(!0);const{data:r}=await k.custom({url:"",method:"get",meta:{operation:"drivesToConnect",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},pageSize:{value:n,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:se}]}}).catch(()=>(d.error("Failed to load drives"),{data:null})).then(R=>R);r&&(q(r.total),x(r.page),z(r.pages),N(r.hasNext),H(r.hasPrev),f(r.results)),v(!1)};return s.useEffect(()=>{g(1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsx(j,{layout:"vertical",form:L,onFinish:t=>{I(t.key),x(1),g(1,y,t.key)},children:e.jsx(j.Item,{name:"key",children:e.jsx(G,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(_,{}),autoComplete:"off",allowClear:!0,disabled:o})})})})})}),e.jsx(J,{spinning:o,children:e.jsx(l,{children:u.length>0?e.jsx(c,{container:!0,children:u.map(t=>e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(T,{hoverable:t.isActive,style:{marginRight:10,marginBottom:5},children:[e.jsx(S,{style:{right:0,position:"absolute"},children:e.jsx(W,{trigger:["click"],overlay:e.jsx(D,{children:e.jsx(D.Item,{icon:e.jsx(b,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>C(t),children:"Connect"})})}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:e.jsx(Z,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx($.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{C(t)},children:e.jsxs(S,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(Q,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(b,{}),src:t.icon}),e.jsx("span",{style:{fontSize:20},children:e.jsx(U,{title:t.name,children:t.name.length>20?t.name.substring(0,40)+"...":t.name})})]})})})]})},t.id))}):e.jsx(X,{severity:"info",children:o?e.jsx(e.Fragment,{children:"Loading"}):e.jsx(e.Fragment,{children:"No drives found"})})})}),(M||A)&&!o&&e.jsx(l,{sx:{display:"flex",justifyContent:"center",marginTop:3},children:e.jsx(Y.Pagination,{defaultCurrent:B,total:P,showSizeChanger:!0,onChange:(t,n)=>{x(t),w(n||y),g(t,n,F)}})}),e.jsx(ee,{title:"Connecting "+(a==null?void 0:a.name),open:O,width:"30vw",onClose:t=>E(t),children:e.jsxs(e.Fragment,{children:[e.jsx(ae,{id:a==null?void 0:a.id}),e.jsx(l,{sx:{marginBottom:3},children:e.jsx(te,{onClick:()=>K(a==null?void 0:a.id),style:{position:"absolute",float:"right",right:"10px"},children:"Connect"})})]})})]})},ie=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(p,{children:[e.jsx(p.Item,{children:e.jsx(ne,{to:"/odrive",children:"Home"})}),e.jsx(p.Item,{children:"Drives Connect"})]})}),e.jsx(re,{})]}),he=()=>e.jsx(ie,{});export{he as DrivesConnectPage};
