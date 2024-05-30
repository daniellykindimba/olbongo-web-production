import{r as s,aT as j,c as K,j as e,B as l,G as c,a1 as T,a8 as V,aX as S,aR as W,aU as D,ae as U,af as X,cl as J,av as Q,g as b,_ as m,cn as Y,cL as Z,aN as d,cz as k}from"./index-7df9ee76.js";import{D as $}from"./drive_info-965feab2.js";import{l as ee}from"./index-3dc1d22f.js";import{d as te}from"./data_objects-327f1d7c.js";import{C as se}from"./index-746394d2.js";import{A as re}from"./index-efa01bbc.js";import{A as ne}from"./Alert-89af5dce.js";import{S as ae}from"./SearchOutlined-dcd1f7fa.js";import{F}from"./FolderOpenOutlined-76d52b2b.js";import{M as ie}from"./MoreOutlined-8471c15a.js";import"./index-65037bd5.js";import"./EditOutlined-401a1613.js";import"./transButton-6d33c367.js";import"./index-7568aa84.js";import"./defineProperty-026cb175.js";import"./useNotification-ac3df694.js";import"./DialogWrap-f6cebbde.js";import"./index-9a949468.js";import"./localeData-6fc112a3.js";import"./SinglePicker-7cf916b3.js";import"./index-fdfe4d32.js";import"./useMutateObserver-d56e164b.js";import"./index-372d72d8.js";import"./InputNumber-c2ecac9e.js";import"./Image-ea58da09.js";import"./Upload-02bc7b9c.js";import"./Rate-ced15ebb.js";import"./index-46775d14.js";import"./Skeleton-494b0004.js";import"./DotChartOutlined-f39c986e.js";import"./index-d353142b.js";const oe=le=>{const[p,f]=s.useState([]),[n,h]=s.useState(),[o,v]=s.useState(!0),[I,w]=s.useState(""),[y,B]=s.useState(24),[P,u]=s.useState(0),[z,M]=s.useState(0),[ce,N]=s.useState(0),[A,q]=s.useState(!0),[L,O]=s.useState(!1),[E]=j.useForm();K();const[R,x]=s.useState(!1),C=t=>{h(t),x(!0)},_=t=>{x(t),h(null)},H=async t=>{const{data:r}=await b.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(m.error("Drive connection failed"),{data:null})).then(i=>i);r&&(r.success?(x(!1),h(null),m(r.message),f(p.filter(i=>i.id!==t))):m.error(r.message))},g=async(t,r=10,i="")=>{v(!0);const{data:a}=await b.custom({url:"",method:"get",meta:{operation:"drivesToConnect",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},pageSize:{value:r,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:te}]}}).catch(()=>(m.error("Failed to load drives"),{data:null})).then(G=>G);a&&(M(a.total),u(a.page),N(a.pages),q(a.hasNext),O(a.hasPrev),f(a.results)),v(!1)};return s.useEffect(()=>{g(1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsx(j,{layout:"vertical",form:E,onFinish:t=>{w(t.key),u(1),g(1,y,t.key)},children:e.jsx(j.Item,{name:"key",children:e.jsx(T,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(ae,{}),autoComplete:"off",allowClear:!0,disabled:o})})})})})}),e.jsx(V,{spinning:o,children:e.jsx(l,{children:p.length>0?e.jsx(c,{container:!0,children:p.map(t=>e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(se,{hoverable:t.isActive,style:{marginRight:10,marginBottom:5},children:[e.jsx(S,{style:{right:0,position:"absolute"},children:e.jsx(W,{trigger:["click"],overlay:e.jsx(D,{children:e.jsx(D.Item,{icon:e.jsx(F,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>C(t),children:"Connect"})})}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(ie,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(U.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{C(t)},children:e.jsxs(S,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(re,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(F,{}),src:t.icon}),e.jsx("span",{style:{fontSize:20},children:e.jsx(X,{title:t.name,children:t.name.length>20?t.name.substring(0,40)+"...":t.name})})]})})})]})},t.id))}):e.jsx(ne,{severity:"info",children:o?e.jsx(e.Fragment,{children:"Loading"}):e.jsx(e.Fragment,{children:"No drives found"})})})}),(A||L)&&!o&&e.jsx(l,{sx:{display:"flex",justifyContent:"center",marginTop:3},children:e.jsx(ee.Pagination,{defaultCurrent:P,total:z,showSizeChanger:!0,onChange:(t,r)=>{u(t),B(r||y),g(t,r,I)}})}),e.jsx(J,{title:"Connecting "+(n==null?void 0:n.name),open:R,width:"30vw",onClose:t=>_(t),children:e.jsxs(e.Fragment,{children:[e.jsx($,{id:n==null?void 0:n.id}),e.jsx(l,{sx:{marginBottom:3},children:e.jsx(Q,{onClick:()=>H(n==null?void 0:n.id),style:{position:"absolute",float:"right",right:"10px"},children:"Connect"})})]})})]})},He=()=>(s.useEffect(()=>{document.title=Y.system_name+": Drives Connect"},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsx(Z,{children:e.jsxs(d,{children:[e.jsx(d.Item,{children:e.jsx(k,{to:"/",children:"Home"})}),e.jsx(d.Item,{children:e.jsx(k,{to:"/odrive",children:"Odrive"})}),e.jsx(d.Item,{children:"Drives Connect"})]})})}),e.jsx(oe,{})]}));export{He as DrivesConnectPage};
