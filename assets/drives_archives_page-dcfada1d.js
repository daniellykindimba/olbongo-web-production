import{r,c as h,l as B,j as e,G as n,I as E,e as L,a as T,y as g,C as H,S as v,W as M,X as j,ad as _,Z as G,i as W,ai as y,A as X,F as Z,ae as J,z as K,af as p,ag as Q,g as f,dq as U,_ as x}from"./index-0218b022.js";import{B as u}from"./Breadcrumb-8d007733.js";const V=Y=>{const[o,m]=r.useState([]),[i,S]=r.useState(!0),[A,l]=r.useState(1),[C,b]=r.useState(0),[$,F]=r.useState(0),[k,I]=r.useState(24),[D,P]=r.useState(!0),[w,z]=r.useState(!1),[O]=h.useForm();B();const R=async s=>{const{data:t}=await f.custom({url:"",method:"post",meta:{operation:"removeDriveArchive",variables:{id:{value:s,type:"Int",required:!0}},fields:["success","message"]}});t.success?(x.success(t.message),m(o.filter(d=>d.id!==s))):x.error(t.message),p.destroyAll()},q=s=>{p.confirm({title:"Confirm",icon:e.jsx(Q,{}),content:"Removing Drive From Archive ....",okText:"Add",cancelText:"Cancel",onOk:()=>R(s)})},c=async(s,t=24,d="")=>{const{data:a}=await f.custom({url:"",method:"get",meta:{operation:"drivesArchives",variables:{page:{value:s,type:"Int",required:!0},key:{value:d,type:"String",required:!1},pageSize:{value:t,type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:["id",{drive:U}]}]}}).catch(()=>(x.error("Failed to load archives"),{data:null})).then(N=>N);a&&(b(a.total),l(a.page),F(a.pages),P(a.hasNext),z(a.hasPrev),m(a.results)),S(!1)};return r.useEffect(()=>{c(1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(n,{container:!0,children:e.jsx(n,{item:!0,xs:12,sm:6,children:e.jsx(h,{layout:"vertical",form:O,onFinish:s=>{l(1),c(1,k,s.key)},children:e.jsx(h.Item,{name:"key",children:e.jsx(E,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0,disabled:i})})})})}),e.jsx(T,{spinning:i,children:e.jsx(g,{children:o.length>0?e.jsx(n,{container:!0,children:o.map(s=>e.jsx(n,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:e.jsxs(H,{hoverable:s.isActive,style:{marginRight:10},children:[e.jsx(v,{style:{right:0,position:"absolute"},children:e.jsx(M,{trigger:["click"],overlay:e.jsx(j,{children:e.jsx(j.Item,{icon:e.jsx(_,{}),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>q(s.id),children:"Restore"})})}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:t=>t.preventDefault(),children:e.jsx(G,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(W.Ribbon,{text:s.drive.code,placement:"start",color:"orange",children:e.jsx(y,{to:"/odrive/drive/"+s.drive.id+"/"+s.drive.code+"/files",children:e.jsxs(v,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(X,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(Z,{}),src:s.drive.icon}),e.jsx("span",{style:{fontSize:20},children:s.drive.name})]})})})]})}))}):e.jsx(J,{severity:"info",children:i?e.jsx("b",{children:"Loading..."}):e.jsx("b",{children:"No Archives Found"})})})}),(D||w)&&!i&&e.jsx(g,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(K,{showSizeChanger:!0,onShowSizeChange:(s,t)=>{l(s),I(t),c(s,t)},defaultCurrent:A,total:C})})]})},te=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(u,{children:[e.jsx(u.Item,{children:e.jsx(y,{to:"/odrive",children:"Home"})}),e.jsx(u.Item,{children:"Archives"})]})}),e.jsx(V,{})]});export{te as DrivesArchivesPage};
