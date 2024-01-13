import{r as s,c as p,l as G,j as e,y as l,G as c,I as K,e as T,a as V,C as W,S as C,W as X,X as D,F as b,Z,i as J,A as Q,T as U,ae as Y,M as $,B as ee,g as k,_ as d,dq as te,ai as se}from"./index-0218b022.js";import{D as ne}from"./drive_info-9382e844.js";import{l as re}from"./index-bc50efac.js";import{B as j}from"./Breadcrumb-8d007733.js";import"./toConsumableArray-d4f18d80.js";import"./addEventListener-a1a8dbaa.js";import"./Tree-c957e1a9.js";import"./index-13ee89b5.js";import"./index-53281e87.js";const ae=ie=>{const[h,f]=s.useState([]),[r,u]=s.useState(),[o,y]=s.useState(!0),[F,I]=s.useState(""),[v,w]=s.useState(24),[B,m]=s.useState(0),[P,M]=s.useState(0),[oe,q]=s.useState(0),[z,N]=s.useState(!0),[A,L]=s.useState(!1),[O]=p.useForm();G();const[E,x]=s.useState(!1),S=t=>{u(t),x(!0)},H=t=>{x(t),u(null)},R=async t=>{const{data:n}=await k.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(d.error("Drive connection failed"),{data:null})).then(i=>i);n&&(n.success?(x(!1),u(null),d(n.message),f(h.filter(i=>i.id!==t))):d.error(n.message))},g=async(t,n=10,i="")=>{y(!0);const{data:a}=await k.custom({url:"",method:"get",meta:{operation:"drivesToConnect",variables:{page:{value:t,type:"Int",required:!0},key:{value:i,type:"String",required:!1},pageSize:{value:n,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:te}]}}).catch(()=>(d.error("Failed to load drives"),{data:null})).then(_=>_);a&&(M(a.total),m(a.page),q(a.pages),N(a.hasNext),L(a.hasPrev),f(a.results)),y(!1)};return s.useEffect(()=>{g(1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(c,{container:!0,children:e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsx(p,{layout:"vertical",form:O,onFinish:t=>{I(t.key),m(1),g(1,v,t.key)},children:e.jsx(p.Item,{name:"key",children:e.jsx(K,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(T,{}),autoComplete:"off",allowClear:!0,disabled:o})})})})})}),e.jsx(V,{spinning:o,children:e.jsx(l,{children:h.length>0?e.jsx(c,{container:!0,children:h.map(t=>e.jsx(c,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(W,{hoverable:t.isActive,style:{marginRight:10,marginBottom:5},children:[e.jsx(C,{style:{right:0,position:"absolute"},children:e.jsx(X,{trigger:["click"],overlay:e.jsx(D,{children:e.jsx(D.Item,{icon:e.jsx(b,{}),disabled:!t.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>S(t),children:"Connect"})})}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:e.jsx(Z,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(J.Ribbon,{text:t.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{S(t)},children:e.jsxs(C,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(Q,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(b,{}),src:t.icon}),e.jsx("span",{style:{fontSize:20},children:e.jsx(U,{title:t.name,children:t.name.length>20?t.name.substring(0,40)+"...":t.name})})]})})})]})},t.id))}):e.jsx(Y,{severity:"info",children:o?e.jsx(e.Fragment,{children:"Loading"}):e.jsx(e.Fragment,{children:"No drives found"})})})}),(z||A)&&!o&&e.jsx(l,{sx:{display:"flex",justifyContent:"center",marginTop:3},children:e.jsx(re.Pagination,{defaultCurrent:B,total:P,showSizeChanger:!0,onChange:(t,n)=>{m(t),w(n||v),g(t,n,F)}})}),e.jsx($,{title:"Connecting "+(r==null?void 0:r.name),open:E,width:"30vw",onClose:t=>H(t),children:e.jsxs(e.Fragment,{children:[e.jsx(ne,{id:r==null?void 0:r.id}),e.jsx(l,{sx:{marginBottom:3},children:e.jsx(ee,{onClick:()=>R(r==null?void 0:r.id),style:{position:"absolute",float:"right",right:"10px"},children:"Connect"})})]})})]})},je=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(j,{children:[e.jsx(j.Item,{children:e.jsx(se,{to:"/odrive",children:"Home"})}),e.jsx(j.Item,{children:"Drives Connect"})]})}),e.jsx(ae,{})]});export{je as DrivesConnectPage};
