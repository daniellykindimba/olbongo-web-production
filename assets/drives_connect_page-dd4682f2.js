import{r as s,aV as g,c as K,j as e,B as l,G as c,a0 as R,cT as T,a7 as G,a_ as S,aT as W,aW as D,cV as b,cK as $,ae as J,af as Q,b$ as U,aw as X,g as k,_ as m,c7 as Y,aP as j,cq as Z}from"./index-ccfcd4da.js";import{D as ee}from"./drive_info-c3ac8f8f.js";import{l as te}from"./index-0a57a0d3.js";import{d as se}from"./data_objects-ce8f5e44.js";import{C as re}from"./index-e733c2fd.js";import{A as ne}from"./index-3bfb9ed3.js";import{A as ae}from"./Alert-a74bd568.js";import"./index-b8a04bf2.js";import"./transButton-719ccb9d.js";import"./index-a75cd6c4.js";import"./defineProperty-396cb65c.js";import"./useNotification-bc6f4548.js";import"./DialogWrap-1d0538d4.js";import"./index-98406364.js";import"./localeData-8c06fba4.js";import"./SinglePicker-5ae69ed8.js";import"./index-5c2e1e93.js";import"./useMutateObserver-ca2a7753.js";import"./index-477d9320.js";import"./InputNumber-df6a3867.js";import"./Image-eeb38737.js";import"./Upload-a74f9032.js";import"./Rate-1c034551.js";import"./index-ba1d69b2.js";import"./Skeleton-a2d4f426.js";import"./index-afc6ce50.js";const ie=oe=>{const[d,f]=s.useState([]),[n,u]=s.useState(),[o,y]=s.useState(!0),[w,F]=s.useState(""),[v,I]=s.useState(24),[P,h]=s.useState(0),[B,q]=s.useState(0),[le,z]=s.useState(0),[A,M]=s.useState(!0),[N,_]=s.useState(!1),[E]=g.useForm();K();const[L,p]=s.useState(!1),C=t=>{u(t),p(!0)},O=t=>{p(t),u(null)},V=async t=>{const{data:r}=await k.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Drive connection failed"),{data:null})).then(i=>i);r&&(r.success?(p(!1),u(null),m(r.message),f(d.filter(i=>i.id!==t))):m.error(r.message))},x=async(t,r=10,i="")=>{y(!0);const{data:a}=await k.custom({url:"",method:"get",meta:{operation:"drivesToConnect",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:se}]}}).catch(()=>(m.error("Failed to load drives"),{data:null})).then(H=>H);a&&(q(a.total),h(a.page),z(a.pages),M(a.hasNext),_(a.hasPrev),f(a.results)),y(!1)};return s.useEffect(()=>{x(1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsx(g,{layout:"vertical",form:E,onFinish:t=>{F(t.key),h(1),x(1,v,t.key)},children:e.jsx(g.Item,{name:"key",children:e.jsx(R,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(T,{}),autoComplete:"off",allowClear:!0,disabled:o})})})})})}),e.jsx(G,{spinning:o,children:e.jsx(l,{children:d.length>0?e.jsx(c,{container:!0,children:d.map(t=>e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(re,{hoverable:t.isActive,style:{marginRight:10,marginBottom:5},children:[e.jsx(S,{style:{right:0,position:"absolute"},children:e.jsx(W,{trigger:["click"],overlay:e.jsx(D,{children:e.jsx(D.Item,{icon:e.jsx(b,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>C(t),children:"Connect"})})}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx($,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(J.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{C(t)},children:e.jsxs(S,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(ne,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(b,{}),src:t.icon}),e.jsx("span",{style:{fontSize:20},children:e.jsx(Q,{title:t.name,children:t.name.length>20?t.name.substring(0,40)+"...":t.name})})]})})})]})},t.id))}):e.jsx(ae,{severity:"info",children:o?e.jsx(e.Fragment,{children:"Loading"}):e.jsx(e.Fragment,{children:"No drives found"})})})}),(A||N)&&!o&&e.jsx(l,{sx:{display:"flex",justifyContent:"center",marginTop:3},children:e.jsx(te.Pagination,{defaultCurrent:P,total:B,showSizeChanger:!0,onChange:(t,r)=>{h(t),I(r||v),x(t,r,w)}})}),e.jsx(U,{title:"Connecting "+(n==null?void 0:n.name),open:L,width:"30vw",onClose:t=>O(t),children:e.jsxs(e.Fragment,{children:[e.jsx(ee,{id:n==null?void 0:n.id}),e.jsx(l,{sx:{marginBottom:3},children:e.jsx(X,{onClick:()=>V(n==null?void 0:n.id),style:{position:"absolute",float:"right",right:"10px"},children:"Connect"})})]})})]})},Ne=()=>(s.useEffect(()=>{document.title=Y.system_name+": Drives Connect"},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(j,{children:[e.jsx(j.Item,{children:e.jsx(Z,{to:"/odrive",children:"Home"})}),e.jsx(j.Item,{children:"Drives Connect"})]})}),e.jsx(ie,{})]}));export{Ne as DrivesConnectPage};
