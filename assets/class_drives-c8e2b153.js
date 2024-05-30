import{r as s,aT as v,c as q,j as e,aW as E,aP as w,a1 as P,av as D,g as S,_ as a,G as M,aX as N,aR as G,aU as y,ae as U,af as W,a8 as X,cl as Y}from"./index-47bff2d7.js";import{d as J}from"./data_objects-a10194f0.js";import{i as z}from"./data_objects-f9f5461b.js";import{S as K}from"./Skeleton-4737e88d.js";import{L as O}from"./index-13d37aa3.js";import{P as Q}from"./index-b23d56c7.js";import{T as Z}from"./index-b9010f6f.js";import{S as L}from"./SearchOutlined-5e2c6731.js";import{P as $}from"./PlusCircleOutlined-516316b0.js";import{A as ee}from"./FileImageOutlined-ab4932bb.js";import{F as re}from"./FolderAddOutlined-6a9125f3.js";import{C as te}from"./index-4fe00983.js";import{A as se}from"./index-11d60fb1.js";import{A as ie}from"./Alert-c03e44d7.js";import{M as ae}from"./index-a670d16c.js";import{F as R}from"./FolderOpenOutlined-42a1d0bf.js";import{I as oe}from"./InfoCircleOutlined-31008f86.js";import{C as ne}from"./CloseOutlined-aac1827e.js";import{M as le}from"./MoreOutlined-19ed2f05.js";import{E as de}from"./ExclamationCircleOutlined-8fb39166.js";import"./DotChartOutlined-f39c986e.js";import"./index-d9ca030f.js";import"./ActionButton-b56e5f73.js";import"./EditOutlined-401a1613.js";import"./transButton-58448388.js";import"./index-a0e6d417.js";import"./index-dd0f048b.js";import"./InfoCircleFilled-e4b35101.js";import"./InfoCircleFilled-baaa675e.js";import"./DialogWrap-cf0e43d7.js";import"./index-3ea95516.js";import"./fade-4418cddf.js";const ce=i=>{const[l,m]=s.useState([]),[f,C]=s.useState(!0),[u,x]=s.useState(1),[T,k]=s.useState(0),[F,I]=s.useState(!0),[b]=v.useForm();q();const p=async(t,o="",d=!1)=>{const{data:c}=await S.custom({url:"",method:"get",meta:{operation:"darasaDrivesToConnect",variables:{page:{value:t,type:"Int",required:!0},key:{value:o,type:"String",required:!1},id:{value:parseInt(i.id===void 0?"0":i.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:J}]}}).catch(()=>(a.error("Error loading drives"),{data:null})).then(g=>g);c&&(k(c.total),x(c.page),I(c.hasNext),m(c.results)),C(!1)},A=async t=>{const{data:o}=await S.custom({url:"",method:"post",meta:{operation:"addDarasaDrive",variables:{drive:{value:t,type:"Int",required:!0},darasa:{value:parseInt(i.id===void 0?"0":i.id.toString()),type:"Int",required:!0}},fields:["success","message",{darasaDrive:z}]}}).catch(()=>(a.error("Error adding drive"),{data:null})).then(d=>d);o&&(o.success?(a.success(o.message),m(l.filter(d=>parseInt(d.id.toString())!==t)),i.handleAddingDrive(o.darasaDrive)):a.error(o.message))};return s.useEffect(()=>{p(u)},[i.random]),f?e.jsx(e.Fragment,{children:e.jsx(K,{loading:f,active:!0})}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(w,{span:24,children:e.jsx(v,{layout:"vertical",form:b,onFinish:t=>{x(0),p(0,t.key,!0)},children:e.jsx(v.Item,{name:"key",children:e.jsx(P,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsxs("div",{id:"scrollableDrivesToAdd",style:{height:"65vh",overflow:"auto"},children:[e.jsx(O,{bordered:!0,dataSource:l,renderItem:t=>e.jsxs(O.Item,{actions:[e.jsx(Q,{title:"Are you sure to Add this Drive -"+t.name+" ?",onConfirm:()=>A(parseInt(t.id.toString())),okText:"Yes",cancelText:"No",overlayStyle:{zIndex:9999},children:e.jsx(D,{icon:e.jsx($,{}),children:"Add"})})],children:[t.name,e.jsx(ee,{}),e.jsx(Z.Text,{mark:!0,children:t.code})]})}),F&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(D,{type:"primary",onClick:()=>{p(u+1)},children:"Load More"})})]})]})},Ve=i=>{const[l,m]=s.useState([]),[f,C]=s.useState(!0),[u,x]=s.useState(1),[T,k]=s.useState(0),[F,I]=s.useState(0),[b,p]=s.useState(!0),[A]=v.useForm(),{push:t}=q(),[o,d]=s.useState(!1),c=()=>{d(!0)},g=async(r,n="",j=!1)=>{const{data:h}=await S.custom({url:"",method:"get",meta:{operation:"darasaDrives",variables:{page:{value:r,type:"Int",required:!0},key:{value:n,type:"String",required:!1},id:{value:parseInt(i.id===void 0?"0":i.id.toString()),type:"Int",required:!0}},fields:["total","page","pages","hasNext","hasPrev",{results:z}]}}).catch(()=>(a.error("Error fetching drives"),{data:null})).then(V=>V);h&&(I(h.total),k(h.pages),x(h.page),p(h.hasNext),m(h.results)),C(!1)},_=async r=>{m([r,...l])},B=async r=>{const{data:n}=await S.custom({url:"",method:"post",meta:{operation:"deleteDarasaDrive",variables:{id:{value:r,type:"Int",required:!0}},fields:["success","message"]}}).catch(()=>(a.error("Error removing drive"),{data:null})).then(j=>j);n&&(n.success?(a.success(n.message),m(l.filter(j=>j.id!==r))):a.error(n.message))},H=r=>{ae.confirm({title:"Removing Drive",icon:e.jsx(de,{}),content:"Are you sure ...",okText:"Remove",cancelText:"Cancel",onOk:()=>B(r)})};return s.useEffect(()=>{g(u)},[]),e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx(w,{span:20,children:e.jsx(v,{layout:"vertical",form:A,onFinish:r=>{x(0),g(0,r.key,!0)},children:e.jsx(v.Item,{name:"key",children:e.jsx(P,{size:"large",placeholder:"Search Drive(s)...",prefix:e.jsx(L,{}),autoComplete:"off",allowClear:!0})})})}),e.jsx(w,{span:4,style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(D,{icon:e.jsx(re,{}),onClick:c,disabled:!i.canManage,children:"Add Drive"})})]}),e.jsxs("div",{id:"scrollableDiv",style:{height:"74vh",overflow:"auto"},children:[l.length>0?e.jsx(M,{container:!0,children:l.map(r=>e.jsx(M,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsxs(te,{hoverable:r.drive.isActive,style:{marginRight:10},children:[e.jsx(N,{style:{right:0,position:"absolute"},children:e.jsx(G,{trigger:["click"],overlay:e.jsxs(y,{children:[e.jsx(y.Item,{icon:e.jsx(R,{}),disabled:!r.drive.isActive,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",onClick:()=>{r.drive.isActive?t("/odrive/drive/"+r.drive.id+"/"+r.drive.code+"/files"):a("Drive is Blocked")},children:"View"})}),e.jsx(y.Item,{icon:e.jsx(oe,{}),onClick:()=>a("Under construction"),children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Report"})}),e.jsx(y.Item,{icon:e.jsx(ne,{}),onClick:()=>H(r.id),disabled:!i.canManage,children:e.jsx("a",{target:"_blank",rel:"noopener noreferrer",children:"Remove"})})]}),overlayStyle:{zIndex:9999},children:e.jsx("a",{className:"ant-dropdown-link",onClick:n=>n.preventDefault(),children:e.jsx(le,{style:{color:"orange",fontSize:28,fontWeight:"bold"}})})})}),e.jsx(U.Ribbon,{text:r.drive.code,placement:"start",color:"orange",children:e.jsx("a",{onClick:()=>{r.drive.isActive?t("/odrive/drive/"+r.drive.id+"/"+r.drive.code+"/files"):a("Drive is Blocked")},children:e.jsxs(N,{direction:"vertical",align:"center",style:{width:"100%",justifyContent:"center"},children:[e.jsx(se,{size:{xs:24,sm:32,md:40,lg:40,xl:40,xxl:80},icon:e.jsx(R,{}),src:r.drive.icon}),e.jsx(W,{title:r.drive.name,children:e.jsx("span",{style:{fontSize:20},children:r.drive.name.length>15?r.drive.name.substring(0,15)+"...":r.drive.name})})]})})})]})},r.id))}):e.jsxs(ie,{severity:"info",children:["No drives found. Click on the ",e.jsx("b",{children:"Add Drive"})," button to add a drive"]}),b&&e.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:e.jsx(D,{type:"primary",onClick:()=>{g(u+1)},children:f?e.jsx(X,{}):e.jsxs("span",{children:["Load More",e.jsxs("span",{style:{marginLeft:8},children:[u,"/",T]})]})})})]}),e.jsx(Y,{title:"Adding Drives",open:o,onClose:r=>d(r),width:"50vw",children:e.jsx(ce,{id:i.id,random:Math.random(),handleAddingDrive:_})})]})};export{Ve as ClassDrives};
