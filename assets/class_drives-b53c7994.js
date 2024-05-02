import{r as s,aU as v,c as R,j as e,aY as E,aQ as w,$ as z,cZ as L,av as S,d4 as G,d8 as U,g as D,_ as i,k1 as Y,G as F,aZ as N,aS as Z,aV as y,c$ as O,cy as $,d9 as Q,cS as W,ac as J,ad as K,ar as X,c2 as ee,d0 as re}from"./index-62ca8c71.js";import{d as te}from"./data_objects-db8d9736.js";import{i as P}from"./data_objects-491ec606.js";import{S as se}from"./Skeleton-26b0114a.js";import{L as q}from"./index-a5f62a10.js";import{P as ae}from"./index-7f983f75.js";import{T as ie}from"./index-3f73f4a1.js";import{C as ne}from"./index-2520e10c.js";import{A as oe}from"./index-c9a71fc6.js";import{A as le}from"./Alert-52e20343.js";import{M as de}from"./index-57e02f2b.js";import"./index-30f2475f.js";import"./ActionButton-e3468a72.js";import"./transButton-697c9585.js";import"./index-c11e1580.js";import"./InfoCircleFilled-8c818918.js";import"./DialogWrap-720f6df3.js";import"./index-243c6e9a.js";import"./fade-6a3d81d7.js";const ce=a=>{const[l,u]=s.useState([]),[f,C]=s.useState(!0),[h,x]=s.useState(1),[T,k]=s.useState(0),[M,I]=s.useState(!0),[b]=v.useForm();R();const g=async(t,n="",d=!1)=>{const{data:c}=await D.custom({url:"",method:"get",meta:{operation:"darasaDrivesToConnect",variables:{page:{value:t,type:"Int",required:!0},key:{value:n,type:"String",required:!1},id:{value:parseInt(a.id===void 0?"0":a.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:te}]}}).catch(()=>(i.error("Error loading drives"),{data:null})).then(p=>p);c&&(k(c.total),x(c.page),I(c.hasNext),u(c.results)),C(!1)},A=async t=>{const{data:n}=await D.custom({url:"",method:"post",meta:{operation:"addDarasaDrive",variables:{drive:{value:t,type:"Int",required:!0},darasa:{value:parseInt(a.id===void 0?"0":a.id.toString()),type:"Int",required:!0}},fields:["success","message",{darasaDrive:P}]}}).catch(()=>(i.error("Error adding drive"),{data:null})).then(d=>d);n&&(n.success?(i.success(n.message),u(l.filter(d=>parseInt(d.id.toString())!==t)),a.handleAddingDrive(n.darasaDrive)):i.error(n.message))};return s.useEffect(()=>{g(h)},[a.random]),f?e.jsx(e.Fragment,{children:e.jsx(se,{loading:f,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(w,{span:24,children:e.jsx(v,{layout:"vertical",form:b,onFinish:t=>{x(0),g(0,t.key,!0)},children:e.jsx(v.Item,{name:"key",children:e.jsx(z,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(q,{bordered:!0,dataSource:l,renderItem:t=>e.jsxs(q.Item,{actions:[e.jsx(ae,{title:"Are you sure to Add this Drive -"+t.name+" ?",onConfirm:()=>A(parseInt(t.id.toString())),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(S,{icon:e.jsx(G,{}),children:"Add"})})],children:[t.name,e.jsx(U,{}),e.jsx(ie.Text,{mark:!0,children:t.code})]})}),M&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{type:"primary",onClick:()=>{g(h+1)},children:"Load More"})})]})]})},Me=a=>{const[l,u]=s.useState([]),[f,C]=s.useState(!0),[h,x]=s.useState(1),[T,k]=s.useState(0),[M,I]=s.useState(0),[b,g]=s.useState(!0),[A]=v.useForm(),{push:t}=R(),[n,d]=s.useState(!1),c=()=>{d(!0)},p=async(r,o="",j=!1)=>{const{data:m}=await D.custom({url:"",method:"get",meta:{operation:"darasaDrives",variables:{page:{value:r,type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(a.id===void 0?"0":a.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:P}]}}).catch(()=>(i.error("Error fetching drives"),{data:null})).then(V=>V);m&&(I(m.total),k(m.pages),x(m.page),g(m.hasNext),u(m.results)),C(!1)},_=async r=>{u([r,...l])},B=async r=>{const{data:o}=await D.custom({url:"",method:"post",meta:{operation:"deleteDarasaDrive",variables:{id:{value:r,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(i.error("Error removing drive"),{data:null})).then(j=>j);o&&(o.success?(i.success(o.message),u(l.filter(j=>j.id!==r))):i.error(o.message))},H=r=>{de.confirm({title:"Removing Drive",icon:e.jsx(re,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>B(r)})};return s.useEffect(()=>{p(h)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx(w,{span:20,children:e.jsx(v,{layout:"vertical",form:A,onFinish:r=>{x(0),p(0,r.key,!0)},children:e.jsx(v.Item,{name:"key",children:e.jsx(z,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(w,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(S,{icon:e.jsx(Y,{}),onClick:c,disabled:!a.canManage,children:"Add Drive"})})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[l.length>0?e.jsx(F,{container:!0,children:l.map(r=>e.jsx(F,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsxs(ne,{hoverable:r.drive.isActive,style:{marginRight:10},children:[e.jsx(N,{style:{right:0,position:"absolute"},children:e.jsx(Z,{trigger:["click"],overlay:e.jsxs(y,{children:[e.jsx(y.Item,{icon:e.jsx(O,{}),disabled:!r.drive.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{r.drive.isActive?t("/odrive/drive/"+r.drive.id+"/"+r.drive.code+"/files"):i("Drive is Blocked")},children:"View"})}),e.jsx(y.Item,{icon:e.jsx($,{}),onClick:()=>i("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(y.Item,{icon:e.jsx(Q,{}),onClick:()=>H(r.id),disabled:!a.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:o=>o.preventDefault(),children:e.jsx(W,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(J.Ribbon,{text:r.drive.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{r.drive.isActive?t("/odrive/drive/"+r.drive.id+"/"+r.drive.code+"/files"):i("Drive is Blocked")},children:e.jsxs(N,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(oe,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(O,{}),src:r.drive.icon}),e.jsx(K,{title:r.drive.name,children:e.jsx("span",{style:{fontSize:20},children:r.drive.name.length>15?r.drive.name.substring(0,15)+"...":r.drive.name})})]})})})]})},r.id))}):e.jsxs(le,{severity:"info",children:["No drives found. Click on the ",e.jsx("b",{children:"Add Drive"})," button to add a drive"]}),b&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(S,{type:"primary",onClick:()=>{p(h+1)},children:f?e.jsx(X,{}):e.jsxs("span",{children:["Load More",e.jsxs("span",{style:{marginLeft:8},children:[h,"/",T]})]})})})]}),e.jsx(ee,{title:"Adding Drives",open:n,onClose:r=>d(r),width:"50vw",children:e.jsx(ce,{id:a.id,random:Math.random(),handleAddingDrive:_})})]})};export{Me as ClassDrives};
