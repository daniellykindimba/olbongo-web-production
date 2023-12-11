import{r as a,F as x,q as L,bd as _,j as e,t as F,s as H,C as R,I as Y,S as G,a3 as m,X as U,Y as i,a7 as V,V as W,az as X,H as n,f8 as Z,Z as $,$ as J,A as K,a9 as Q,a0 as ee,aS as te,ap as d,aq as k,G as p,f9 as re,bt as se}from"./index-afb01353.js";import{I as ae}from"./index.es-d329f25a.js";import{B as f}from"./Breadcrumb-835bbd39.js";const ne=ie=>{const[o,c]=a.useState([]),[b,I]=a.useState(!0),[j,S]=a.useState(1),[w,C]=a.useState(0),[D,P]=a.useState(!0),[oe,N]=a.useState(0),[O]=x.useForm();L();const[A,g]=a.useState(!1),[u,M]=a.useState(),v=!_.useBreakpoint().lg,q=t=>{M(t),g(!0)},E=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"deleteFile",variables:{id:{value:t,type:"Int",required:!0}},fields:["success","message"]}}).catch(s=>(n.error("Error while deleting file"),{data:null})).then(s=>s);r&&(r.success?(n.success(r.message),c(o.filter(s=>s.id!==t))):n.error(r.message)),d.destroyAll()},T=t=>{d.confirm({title:"Confirm",icon:e.jsx(k,{}),content:"Deleting File ....",okText:"Delete",cancelText:"Cancel",onOk:()=>E(t)})},z=async t=>{const{data:r}=await p.custom({url:"",method:"post",meta:{operation:"makeFilePrivatePublic",variables:{id:{value:t,type:"Int",required:!0},private:{value:!1,type:"Boolean",required:!0}},fields:["success","message"]}}).catch(s=>(n.error("Error while changing file privacy"),{data:null})).then(s=>s);r&&(r.success?(n.success(r.message),c(o.filter(s=>s.id!==t))):n.error(r.message)),d.destroyAll()},B=t=>{d.confirm({title:"Confirm",icon:e.jsx(k,{}),content:"Making File Private ....",okText:"Make Private",cancelText:"Cancel",onOk:()=>z(t)})},h=async(t,r="",s=!1)=>{const{data:l}=await p.custom({url:"",method:"get",meta:{operation:"publicFiles",variables:{page:{value:t,type:"Int",required:!0},key:{value:r,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:["id","title","file","icon","size","description","created","updated","isActive","isPublic","canEdit","canDelete","isAuthor",{drive:["id","name","code",{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]},{author:["id","firstName","lastName","middleName","fullName","email","pic"]}]}]}}).catch(y=>(n.error("Error while fetching files"),{data:null})).then(y=>y);l&&(C(l.total),N(l.pages),P(l.hasNext),S(l.page),(r.length>0||r.length===0&&s)&&c(l.results),l.results.length>0&&!s&&c(o.concat(l.results))),I(!1)};return a.useEffect(()=>{h(j)},[]),b?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(F,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(R,{span:v?24:20,children:e.jsx(x,{layout:"vertical",form:O,onFinish:t=>h(0,t.key,!0),children:e.jsx(x.Item,{name:"key",children:e.jsx(Y,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(G,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(ae,{dataLength:w,next:()=>h(j),hasMore:D,loader:e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(F,{})})}),endMessage:e.jsx("p",{style:{textAlign:"center",display:o.length>0?"block":"none"},children:e.jsx("b",{children:"Yay! You have seen it all"})}),children:e.jsx(m,{itemLayout:"horizontal",dataSource:o,renderItem:t=>e.jsx("div",{style:{background:"white",marginBottom:5,paddingTop:10,paddingLeft:10},children:e.jsx(m.Item,{actions:[e.jsx(U,{trigger:["click"],overlay:e.jsxs(i,{children:[t.canDelete?e.jsx(i.Item,{disabled:!t.canDelete,icon:e.jsx(V,{}),onClick:()=>T(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Delete"})}):e.jsx(e.Fragment,{}),e.jsx(i.Item,{icon:e.jsx(W,{}),children:e.jsx("a",{target:"_blank",href:t.file,rel:"noopener noreferrer",download:!0,children:"Download"})}),e.jsx(i.Item,{icon:e.jsx(X,{}),onClick:()=>n("under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Share"})}),t.isPublic&&t.isAuthor?e.jsx(i.Item,{icon:e.jsx(Z,{}),onClick:()=>B(t.id),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Make Private"})}):e.jsx(e.Fragment,{}),e.jsx(i.Item,{icon:e.jsx($,{}),onClick:()=>n("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:r=>r.preventDefault(),children:e.jsx(J,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})],children:e.jsx(m.Item.Meta,{avatar:e.jsx(K,{src:t.icon}),title:e.jsx("a",{onClick:()=>q(t),children:t.title}),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:t.description}),e.jsxs("p",{children:[e.jsx("span",{style:{color:"orange"},children:t.size})," |",e.jsx(Q,{date:new Date(t.created),locale:"en-US"})]})]})})})})})}),e.jsx(ee,{title:"File Informations",anchor:"right",width:v?"100vw":"35vw",onClose:t=>g(t),open:A,children:e.jsx(te,{id:u==null?void 0:u.id})})]})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(f,{children:[e.jsxs(f.Item,{children:[e.jsx(re,{}),e.jsx(se,{to:"/odrive",children:"Home"})]}),e.jsx(f.Item,{children:"Public Files"})]})}),e.jsx(ne,{})]}),xe=()=>e.jsx(le,{});export{xe as DrivesPublicFilesPage};
