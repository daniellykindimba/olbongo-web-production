import{r,F as x,q as O,bd as P,j as e,a5 as R,s as C,C as b,I as H,S as L,t as Y,u as G,x as D,X as V,Y as S,an as k,$ as _,am as W,A as X,y as $,ao as J,D as K,ah as Q,B as U,G as I,H as l,bt as Z}from"./index-70789454.js";import{I as T}from"./index.es-5c053647.js";import{D as ee}from"./drive_info-8f144355.js";import{B as u}from"./Breadcrumb-58b3bb92.js";const se=ne=>{const[o,m]=r.useState([]),[t,c]=r.useState(),[p,F]=r.useState(!0),[g,j]=r.useState(0),[w,B]=r.useState(0),[M,A]=r.useState(!0),[N]=x.useForm();O();const[q,d]=r.useState(!1),f=!P.useBreakpoint().lg,v=s=>{c(s),d(!0)},z=s=>{d(s),c(null)},E=async s=>{const{data:n}=await I.custom({url:"",method:"post",meta:{operation:"connectDrive",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}}).catch(a=>(l.error("Drive connection failed"),{data:null})).then(a=>a);n&&(n.success?(d(!1),c(null),l(n.message),m(o.filter(a=>a.id!==s))):l.error(n.message))},h=async(s,n="",a=!1)=>{const{data:i}=await I.custom({url:"",method:"get",meta:{operation:"drivesToConnect",variables:{page:{value:s,type:"Int",required:!0},key:{value:n,type:"String",required:!1}},fields:["page","pages","hasNext","hasPrev",{results:["id","name","code","created","canEdit","canDelete","updated","isActive","isAuthor"]}]}}).catch(y=>(l.error("Failed to load drives"),{data:null})).then(y=>y);i&&(j(i.page+1),B(i.pages),A(i.hasNext),m(i.results)),F(!1)};return r.useEffect(()=>{h(g)},[]),p?e.jsx(e.Fragment,{children:e.jsx(R,{loading:p,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(b,{span:12,children:e.jsx(x,{layout:"vertical",form:N,onFinish:s=>{j(0),h(0,s.key,!0)},children:e.jsx(x.Item,{name:"key",children:e.jsx(H,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(T,{dataLength:w,next:()=>h(g),hasMore:M,loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(Y,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:o.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:o.length>0?e.jsx(C,{align:"top",children:o.map(s=>e.jsx(b,{span:f?24:4,children:e.jsxs(G,{hoverable:s.isActive,style:{marginRight:10},children:[e.jsx(D,{style:{right:0,position:"absolute"},children:e.jsx(V,{trigger:["click"],overlay:e.jsx(S,{children:e.jsx(S.Item,{icon:e.jsx(k,{}),disabled:!s.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>v(s),children:"Connect"})})}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:e.jsx(_,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(W.Ribbon,{text:s.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{v(s)},children:e.jsxs(D,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(X,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(k,{}),src:s.icon}),e.jsx("span",{style:{fontSize:20},children:e.jsx($,{title:s.name,children:s.name.length>20?s.name.substring(0,15)+"...":s.name})})]})})})]})}))}):e.jsx(J,{severity:"info",children:"No drives found"})}),e.jsx(K,{title:"Connecting "+(t==null?void 0:t.name),open:q,width:f?"100vw":"30vw",onClose:s=>z(s),children:e.jsxs(e.Fragment,{children:[e.jsx(ee,{id:t==null?void 0:t.id}),e.jsx(Q,{sx:{marginBottom:3},children:e.jsx(U,{onClick:()=>E(t==null?void 0:t.id),style:{position:"absolute",float:"right",right:"10px"},children:"Connect"})})]})})]})},te=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(u,{children:[e.jsx(u.Item,{children:e.jsx(Z,{to:"/odrive",children:"Home"})}),e.jsx(u.Item,{children:"Drives Connect"})]})}),e.jsx(se,{})]}),ce=()=>e.jsx(te,{});export{ce as DrivesConnectPage};
