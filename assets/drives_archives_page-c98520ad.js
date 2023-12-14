import{r,F as o,q as M,bd as N,j as e,a7 as B,y as v,z as p,I as E,S as T,s as L,C as P,v as g,Z as H,$ as j,am as Y,a1 as _,an as G,bt as A,A as J,ao as K,ap as W,aq as f,ar as Z,J as y,K as l}from"./index-a5fcf18b.js";import{I as $}from"./index.es-e58d0994.js";import{B as c}from"./Breadcrumb-b23f4465.js";const Q=V=>{const[n,d]=r.useState([]),[h,S]=r.useState(!0),[x,u]=r.useState(1),[b,k]=r.useState(0),[X,F]=r.useState(0),[C,I]=r.useState(!0),[D]=o.useForm();M();const R=!N.useBreakpoint().lg,w=()=>R?24:4,z=async s=>{const{data:t}=await y.custom({url:"",method:"post",meta:{operation:"removeDriveArchive",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}});t.success?(l.success(t.message),d(n.filter(m=>m.id!==s))):l.error(t.message),f.destroyAll()},O=s=>{f.confirm({title:"Confirm",icon:e.jsx(Z,{}),content:"Removing Drive From Archive ....",okText:"Add",cancelText:"Cancel",onOk:()=>z(s)})},i=async(s,t="",m=!1)=>{const{data:a}=await y.custom({url:"",method:"get",meta:{operation:"drivesArchives",variables:{page:{value:s,type:"Int",required:!0},key:{value:t,type:"String",required:!1}},fields:["total","page","pages","hasNext",{results:["id",{drive:["id","name","code","created","canEdit","canDelete","updated","isActive","isAuthor"]}]}]}}).catch(()=>(l.error("Failed to load archives"),{data:null})).then(q=>q);a&&(k(a.total),u(a.page+1),F(a.pages),I(a.hasNext),d(a.results)),S(!1)};return r.useEffect(()=>{i(x)},[]),h?e.jsx(e.Fragment,{children:e.jsx(B,{loading:h,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(p,{span:20,children:e.jsx(o,{layout:"vertical",form:D,onFinish:s=>{u(0),i(0,s.key,!0)},children:e.jsx(o.Item,{name:"key",children:e.jsx(E,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(T,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx($,{dataLength:b,next:()=>i(x),hasMore:C,loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(L,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:n.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:n.length>0?e.jsx(v,{align:"top",children:n.map(s=>e.jsx(p,{span:w(),children:e.jsxs(P,{hoverable:s.isActive,style:{marginRight:10},children:[e.jsx(g,{style:{right:0,position:"absolute"},children:e.jsx(H,{trigger:["click"],overlay:e.jsx(j,{children:e.jsx(j.Item,{icon:e.jsx(Y,{}),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>O(s.id),children:"Restore"})})}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:t=>t.preventDefault(),children:e.jsx(_,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(G.Ribbon,{text:s.drive.code,placement:"start",color:"orange",children:e.jsx(A,{to:"/odrive/drive/"+s.drive.id+"/"+s.drive.code+"/files",children:e.jsxs(g,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(J,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(K,{}),src:s.drive.icon}),e.jsx("span",{style:{fontSize:20},children:s.drive.name})]})})})]})}))}):e.jsx(W,{severity:"info",children:e.jsx("b",{children:"No Archives Found"})})})]})},U=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(c,{children:[e.jsx(c.Item,{children:e.jsx(A,{to:"/odrive",children:"Home"})}),e.jsx(c.Item,{children:"Archives"})]})}),e.jsx(Q,{})]}),ae=()=>e.jsx(U,{});export{ae as DrivesArchivesPage};
