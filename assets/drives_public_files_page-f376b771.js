import{r as t,F as o,m as y,Q as I,j as e,S as P,R as C,n as D,I as k,aP as B,B as E,g as N,_ as q,d as H,ao as n,i4 as R,aU as _}from"./index-cdd95245.js";import{F as L}from"./file_item_component-0500fc39.js";import{D as O}from"./index-c62eae5d.js";import{f as T}from"./data_objects-b1ad9e08.js";import{F as z}from"./files_component-466e9168.js";import"./index-98d8c4e0.js";import"./index-6852aa15.js";import"./objectWithoutProperties-9bed54bb.js";import"./DialogWrap-870f1462.js";import"./index.esm-db701306.js";import"./iconBase-6117266a.js";import"./index-d6c3bfd0.js";import"./index-a087753e.js";import"./ReactTimeAgo-d90e120d.js";import"./memoize-one.esm-297ddbcb.js";import"./index-d04ae3d3.js";const G=M=>{const[l,c]=t.useState([]),[m,h]=t.useState(!0),[f,x]=t.useState(1),[Q,g]=t.useState(0),[U,j]=t.useState(!0),[A,F]=t.useState(0),[S]=o.useForm();y();const[v,w]=t.useState(!1),[a,J]=t.useState(),u=!I.useBreakpoint().lg,p=async(r,i="",d=!1)=>{const{data:s}=await N.custom({url:"",method:"get",meta:{operation:"publicFiles",variables:{page:{value:r,type:"Int",required:!0},key:{value:i,type:"String",required:!1}},fields:["total","page","pages","hasNext","hasPrev",{results:T}]}}).catch(()=>(q.error("Error while fetching files"),{data:null})).then(b=>b);s&&(g(s.total),F(s.pages),j(s.hasNext),x(s.page),(i.length>0||i.length===0&&d)&&c(s.results),s.results.length>0&&!d&&c(l.concat(s.results))),h(!1)};return t.useEffect(()=>{p(f)},[]),m?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(P,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(D,{span:u?24:20,children:e.jsx(o,{layout:"vertical",form:S,onFinish:r=>p(0,r.key,!0),children:e.jsx(o.Item,{name:"key",children:e.jsx(k,{size:"large",placeholder:"Search file(s)...",prefix:e.jsx(B,{}),autoComplete:"off",allowClear:!0})})})})}),e.jsx(E,{children:e.jsx(z,{showDrive:!1,loading:m,data:l,min:!1})}),e.jsx(O,{title:"File Informations",anchor:"right",width:u?"100vw":"35vw",onClose:r=>w(r),open:v,children:e.jsx(L,{id:a==null?void 0:a.id})})]})},me=()=>(t.useEffect(()=>{document.title=H.system_name+": Public Files"},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:10,marginBottom:10},children:e.jsxs(n,{children:[e.jsxs(n.Item,{children:[e.jsx(R,{}),e.jsx(_,{to:"/odrive",children:"Home"})]}),e.jsx(n.Item,{children:"Public Files"})]})}),e.jsx(G,{})]}));export{me as DrivesPublicFilesPage};
