import{r as s,aU as v,c as R,j as e,aY as E,aQ as w,$ as z,c$ as L,av as S,d6 as G,da as U,g as D,_ as i,k2 as Y,G as F,aZ as N,aS as $,aV as y,d1 as O,cy as Q,db as W,cS as Z,ac as J,ad as K,ar as X,c2 as ee,d2 as re}from"./index-351477c3.js";import{d as te}from"./data_objects-f008dc0a.js";import{i as P}from"./data_objects-84b5f664.js";import{S as se}from"./Skeleton-8f0e80db.js";import{L as q}from"./index-a79ac33a.js";import{P as ae}from"./index-81b1f6d5.js";import{T as ie}from"./index-fe5f5443.js";import{C as ne}from"./index-e245930b.js";import{A as oe}from"./index-6af680ed.js";import{A as le}from"./Alert-a3483804.js";import{M as de}from"./index-8b72edfc.js";import"./index-cbd0288c.js";import"./ActionButton-40b0160f.js";import"./transButton-b6535c48.js";import"./index-f080e680.js";import"./index-d9a31a18.js";import"./InfoCircleFilled-9eecc8d9.js";import"./DialogWrap-e5db41da.js";import"./index-20e3f79b.js";import"./fade-8ee215b5.js";const ce=a=>{const[l,u]=s.useState([]),[f,C]=s.useState(!0),[h,x]=s.useState(1),[T,k]=s.useState(0),[M,b]=s.useState(!0),[I]=v.useForm();R();const g=async(t,n="",d=!1)=>{const{data:c}=await D.custom({url:"",method:"get",meta:{operation:"darasaDrivesToConnect",variables:{page:{value:t,type:"Int",required:!0},key:{value:n,type:"String",required:!1},id:{value:parseInt(a.id===void 0?"0":a.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:te}]}}).catch(()=>(i.error("Error loading drives"),{data:null})).then(p=>p);c&&(k(c.total),x(c.page),b(c.hasNext),u(c.results)),C(!1)},A=async t=>{const{data:n}=await D.custom({url:"",method:"post",meta:{operation:"addDarasaDrive",variables:{drive:{value:t,type:"Int",required:!0},darasa:{value:parseInt(a.id===void 0?"0":a.id.toString()),type:"Int",required:!0}},fields:["success","message",{darasaDrive:P}]}}).catch(()=>(i.error("Error adding drive"),{data:null})).then(d=>d);n&&(n.success?(i.success(n.message),u(l.filter(d=>parseInt(d.id.toString())!==t)),a.handleAddingDrive(n.darasaDrive)):i.error(n.message))};return s.useEffect(()=>{g(h)},[a.random]),f?e.jsx(e.Fragment,{children:e.jsx(se,{loading:f,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(w,{span:24,children:e.jsx(v,{layout:"vertical",form:I,onFinish:t=>{x(0),g(0,t.key,!0)},children:e.jsx(v.Item,{name:"key",children:e.jsx(z,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{bordered:!0,dataSource:l,renderItem:t=>e.jsxs(q.Item,{actions:[e.jsx(ae,{title:"Are you sure to Add this Drive -"+t.name+" ?",onConfirm:()=>A(parseInt(t.id.toString())),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(S,{icon:e.jsx(G,{}),children:"Add"})})],children:[t.name,e.jsx(U,{}),e.jsx(ie.Text,{mark:!0,children:t.code})]})}),M&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{type:"primary",onClick:()=>{g(h+1)},children:"Load More"})})]})]})},Fe=a=>{const[l,u]=s.useState([]),[f,C]=s.useState(!0),[h,x]=s.useState(1),[T,k]=s.useState(0),[M,b]=s.useState(0),[I,g]=s.useState(!0),[A]=v.useForm(),{push:t}=R(),[n,d]=s.useState(!1),c=()=>{d(!0)},p=async(r,o="",j=!1)=>{const{data:m}=await D.custom({url:"",method:"get",meta:{operation:"darasaDrives",variables:{page:{value:r,type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(a.id===void 0?"0":a.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:P}]}}).catch(()=>(i.error("Error fetching drives"),{data:null})).then(V=>V);m&&(b(m.total),k(m.pages),x(m.page),g(m.hasNext),u(m.results)),C(!1)},_=async r=>{u([r,...l])},B=async r=>{const{data:o}=await D.custom({url:"",method:"post",meta:{operation:"deleteDarasaDrive",variables:{id:{value:r,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(i.error("Error removing drive"),{data:null})).then(j=>j);o&&(o.success?(i.success(o.message),u(l.filter(j=>j.id!==r))):i.error(o.message))},H=r=>{de.confirm({title:"Removing Drive",icon:e.jsx(re,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>B(r)})};return s.useEffect(()=>{p(h)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx(w,{span:20,children:e.jsx(v,{layout:"vertical",form:A,onFinish:r=>{x(0),p(0,r.key,!0)},children:e.jsx(v.Item,{name:"key",children:e.jsx(z,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(w,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(S,{icon:e.jsx(Y,{}),onClick:c,disabled:!a.canManage,children:"Add Drive"})})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[l.length>0?e.jsx(F,{container:!0,children:l.map(r=>e.jsx(F,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsxs(ne,{hoverable:r.drive.isActive,style:{marginRight:10},children:[e.jsx(N,{style:{right:0,position:"absolute"},children:e.jsx($,{trigger:["click"],overlay:e.jsxs(y,{children:[e.jsx(y.Item,{icon:e.jsx(O,{}),disabled:!r.drive.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{r.drive.isActive?t("/odrive/drive/"+r.drive.id+"/"+r.drive.code+"/files"):i("Drive is Blocked")},children:"View"})}),e.jsx(y.Item,{icon:e.jsx(Q,{}),onClick:()=>i("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(y.Item,{icon:e.jsx(W,{}),onClick:()=>H(r.id),disabled:!a.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:o=>o.preventDefault(),children:e.jsx(Z,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(J.Ribbon,{text:r.drive.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{r.drive.isActive?t("/odrive/drive/"+r.drive.id+"/"+r.drive.code+"/files"):i("Drive is Blocked")},children:e.jsxs(N,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(oe,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(O,{}),src:r.drive.icon}),e.jsx(K,{title:r.drive.name,children:e.jsx("span",{style:{fontSize:20},children:r.drive.name.length>15?r.drive.name.substring(0,15)+"...":r.drive.name})})]})})})]})},r.id))}):e.jsxs(le,{severity:"info",children:["No drives found. Click on the ",e.jsx("b",{children:"Add Drive"})," button to add a drive"]}),I&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{type:"primary",onClick:()=>{p(h+1)},children:f?e.jsx(X,{}):e.jsxs("span",{children:["Load More",e.jsxs("span",{style:{marginLeft:8},children:[h,"/",T]})]})})})]}),e.jsx(ee,{title:"Adding Drives",open:n,onClose:r=>d(r),width:"50vw",children:e.jsx(ce,{id:a.id,random:Math.random(),handleAddingDrive:_})})]})};export{Fe as ClassDrives};
